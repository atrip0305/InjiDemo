// app/api/request/route.ts

import { NextResponse } from "next/server";
import { generatePreAuthCode } from "@/lib/store";
import { createCredentialOffer } from "@/lib/qr";

export async function POST() {
    const studentId = "STU123"; // mocked for now

    const entry = generatePreAuthCode(studentId);
    const credentialOffer = createCredentialOffer(entry.code);

    return NextResponse.json({
        preAuthCode: entry.code,
        credentialOffer,
        expiresAt: entry.expiresAt,
    });
}