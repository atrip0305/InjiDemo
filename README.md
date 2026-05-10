# InjiDemo – QR-Based Certificate Issuance (Pre-Authorized Code Flow)

## Overview

InjiDemo is a prototype implementation of a QR-based certificate issuance flow using a pre-authorized code model inspired by OpenID4VCI. The system enables a student to request a certificate, receive a time-bound QR code, and handle expiry with regeneration, simulating a secure credential retrieval process.

This project focuses on modeling the lifecycle of short-lived access tokens and building a clean interaction flow between frontend and backend.

---

## Problem

Traditional certificate issuance relies on static downloads or manual processes, which lack security, traceability, and user control. 

A modern system should:
- Provide secure, time-bound access to credentials
- Prevent reuse or unauthorized access
- Support seamless retrieval via wallet-based systems
- Handle expiration and regeneration without disrupting user experience

---

## Solution

This prototype implements a QR-based access mechanism using pre-authorized codes as short-lived, single-use tokens.

Key aspects:
- Each request generates a unique pre-authorized code
- The code is embedded into a credential offer URI
- The URI is rendered as a QR code
- The QR remains valid for a limited duration
- Expired codes trigger a regeneration flow
- Old codes are invalidated to prevent reuse

---

## System Architecture

The system is structured into the following components:

- **Frontend (Next.js + Tailwind CSS)**
  - Handles user interaction, navigation, and UI state
  - Displays QR code and countdown timer

- **API Layer (Next.js API Routes)**
  - Handles certificate request and regeneration endpoints
  - Acts as the interface between UI and business logic

- **Pre-Authorized Code Engine**
  - Generates unique codes using UUID
  - Manages lifecycle and state transitions

- **In-Memory Store**
  - Stores code, associated student, expiry timestamp, and status
  - Simulates a cache layer such as Redis

- **QR Generation Module**
  - Converts credential offer URI into QR code
  - Enables wallet-based scanning flow

---

## Pre-Authorized Code Lifecycle

Each code transitions through defined states:

- **ACTIVE** – Valid and usable
- **EXPIRED** – TTL exceeded
- **USED** – Successfully consumed

Transitions:
- ACTIVE → EXPIRED (on timeout)
- ACTIVE → USED (on successful use)
- EXPIRED → new ACTIVE (on regeneration)

This lifecycle ensures strict control over token usage.

---

## Core Features

- Certificate request and QR generation
- Time-bound pre-authorized codes
- Real-time countdown timer on frontend
- Expiry detection and handling
- Regeneration flow with invalidation of previous codes
- Clean and minimal UI aligned with product mockups

---

## API Endpoints

### Generate Certificate Request

POST /api/request


Response:

{
"preAuthCode": "...",
"credentialOffer": "...",
"expiresIn": 300
}


---

### Regenerate QR Code

POST /api/regenerate


Behavior:
- Invalidates existing code
- Generates new pre-authorized code
- Returns updated credential offer

---

## Tech Stack

- Frontend: Next.js, React, Tailwind CSS
- Backend: Next.js API Routes
- QR Generation: qrcode (npm)
- State Management: React Hooks
- Identifier Generation: crypto.randomUUID

---

## Design Decisions

- **Stateless API design** for simplicity and extensibility
- **In-memory store** used to simulate a caching layer (replaceable with Redis)
- **Frontend timer for UX**, backend as source of truth for expiry
- **Lifecycle-driven model** for clarity and correctness

---

## Limitations

This is a prototype and does not include:

- Real OpenID4VCI issuer integration
- Wallet-based credential retrieval
- Persistent database storage
- Authentication and authorization layers

---

## Future Improvements

- Integrate with OpenID4VCI-compliant issuer
- Replace in-memory store with Redis for TTL management
- Add wallet interaction layer
- Introduce authentication and access control
- Improve observability and logging

---

## Getting Started

### Installation
1)npm install

2)cd injidemo

3)npm run dev

4)Open: http://localhost:3000


### Repository Structure
/app
  /dashboard
  /qr
/components
  QRDisplay.tsx
  Timer.tsx
  ExpiryModal.tsx
/pages/api
  request.ts
  regenerate.ts

###Summary

This project demonstrates a complete, working flow for QR-based certificate issuance using pre-authorized codes, with a strong focus on lifecycle management, expiry handling, and system design aligned with modern credential standards.
