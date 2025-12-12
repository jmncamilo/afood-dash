export const CLIENT_NIT_MAP = {
    '39543172': 'sandwich-inc-grill',
    '901431063': 'amarradero-del-mico',
    '999888777': 'lalala-cocktails',
    '999999999': 'la-bendita-parrilla',
    '888888888': 'peru-sazon-gourmet',
    '40332783': 'love-restaurante',
    '01': 'love-restaurante',
    // TODO: agregar los clientes restantes de afood...
};

export function validateNit(nit) {
    return CLIENT_NIT_MAP[nit] || null;
}