export const CLIENT_LOGOS_MAP = {
    '39543172': '/logos/cliente-a.png',
    '901431063': '/logos/cliente-b.png',
    // Los demás comercios...
};

const DEFAULT_LOGO = '/logos/default-afood.svg'; // Logo de afood por defecto

export function getClientLogo(clientNit) {
    return CLIENT_LOGOS_MAP[clientNit] || DEFAULT_LOGO;
}