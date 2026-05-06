// app/api/regenerate/route.ts

import { NextResponse } from "next/server";
import { regeneratePreAuthCode } from "@/lib/store";
import { createCredentialOffer } from "@/lib/qr";

export async function POST(req: Request) {
    const body = await req.json();
    const { oldCode } = body;

    const newEntry = regeneratePreAuthCode(oldCode);
    const credentialOffer = createCredentialOffer(newEntry.code);

    return NextResponse.json({
        preAuthCode: newEntry.code,
        credentialOffer,
        expiresAt: newEntry.expiresAt,
    });
}