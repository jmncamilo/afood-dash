export const CLIENT_NIT_MAP = {
    '39543172': 'sandwich-inc-grill',
    '901431063': 'amarradero-del-mico',
    '999888777': 'lalala-cocktails',
    '999999999': 'la-bendita-parrilla',
    '888888888': 'peru-sazon-gourmet',
    '777777777': 'love-restaurant',
    // TODO: agregar los clientes restantes de afood...
};

export function validateNit(nit) {
    return CLIENT_NIT_MAP[nit] || null;
}