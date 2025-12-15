export const CLIENT_NIT_MAP = {
    '39543172': 'sandwich-inc-grill',
    '901431063': 'amarradero-del-mico',
    '888888888': 'lalala-cocktails',
    '1006798649': 'la-bendita-parrilla',
    '901028991': 'peru-sazon-gourmet',
    '40332783': 'love-restaurante',
    '901372443': 'avemaria',
    '901369088': 'barbacoa-latina',
    '1022957861': 'el-barril-llanero',
    '901071823': 'clan-44',
    '901268008': 'del-huerto-pizzeria-campestre',
    '901346601': 'despertamos-el-mundo',
    '901471937': 'erase-una-res',
    '1032460851': 'el-mitico-bar',
    '901933238': 'limoncello-bistro-viva',
    '900761263': 'limoncello-buque',
    '901736769': 'nanchos-24-horas',
    '1121886123': 'nanchos-la-cabaña',
    '900359867': 'oliva-mediterranea',
    '1029983823': 'restaurante-panka-gourmet',
    '700133934': 'la-posada-del-arriero',
    '1019138168': 'saint-louis',
    '40391643': 'la-topochera',
    '901698572': 'tpk-cocina-callejera',
    '86059504': 'mateo-pub',
    '40369773': 'central-sir-burger',
    '901590074': 'rodizio-brazon-brazileiro',
    '5696124': 'asadero-rincon-santandereano',
    '1122650349': 'jende-coffee-roasters',
    '777777777': 'sunroof-coffee',
    '999999999': 'homero-mexican-food',
    '1059707869': 'ruta-65-cafe',
    // TODO: agregar los clientes restantes de afood...
};

export function validateNit(nit) {
    return CLIENT_NIT_MAP[nit] || null;
}