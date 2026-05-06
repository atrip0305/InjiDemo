// lib/store.ts

type PreAuthStatus = "ACTIVE" | "EXPIRED" | "USED";

export type PreAuthCode = {
    code: string;
    studentId: string;
    expiresAt: number;
    status: PreAuthStatus;
    createdAt: number;
};

const store = new Map<string, PreAuthCode>();

const TTL = 5 * 60 * 1000; // 5 minutes

// Generate a new pre-auth code
export function generatePreAuthCode(studentId: string) {
    const code = crypto.randomUUID();
    const now = Date.now();

    const entry: PreAuthCode = {
        code,
        studentId,
        createdAt: now,
        expiresAt: now + TTL,
        status: "ACTIVE",
    };

    store.set(code, entry);

    return entry;
}

// Validate code (simulate issuer check)
export function validatePreAuthCode(code: string) {
    const entry = store.get(code);

    if (!entry) return { valid: false, reason: "NOT_FOUND" };

    if (entry.status === "USED") {
        return { valid: false, reason: "ALREADY_USED" };
    }

    if (Date.now() > entry.expiresAt) {
        entry.status = "EXPIRED";
        return { valid: false, reason: "EXPIRED" };
    }

    return { valid: true, entry };
}

// Mark code as used
export function markCodeAsUsed(code: string) {
    const entry = store.get(code);
    if (!entry) return;

    entry.status = "USED";
}

// Regenerate code (invalidate old)
export function regeneratePreAuthCode(oldCode: string) {
    const oldEntry = store.get(oldCode);

    if (oldEntry) {
        oldEntry.status = "EXPIRED";
    }

    return generatePreAuthCode(oldEntry?.studentId || "unknown");
}