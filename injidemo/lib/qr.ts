export function createCredentialOffer(code: string) {
    return `openid-credential-offer://?pre-authorized_code=${code}`;
}