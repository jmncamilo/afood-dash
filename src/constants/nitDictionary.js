export const CLIENT_NIT_MAP = {
    '39543172': 'sandwich-inc-grill',
    '901431063': 'amarradero-del-mico',
    '999888777': 'lalala-cocktails',
    '999999999': 'la-bendita-parrilla',
    // Los demás comercios...
};

export function validateNit(nit) {
    return CLIENT_NIT_MAP[nit] || null;
}