/*
Estos métodos están diseñados para gestionar las métricas de impacto ambiental por cliente en el localstorage.

Se incluyen estas funciones por si en el futuro se requiere mostrar las métricas por usuario.

Actualmente, las métricas se presentan de forma global por todos los pedidos entregados por afood a sus clientes.
*/

export function setMetrics(carbon, nitrogen, water) {
    localStorage.setItem('metricsSession', JSON.stringify({ carbon, nitrogen, water }));
}

export function getMetrics() {
    const metrics = localStorage.getItem('metricsSession');
    return metrics ? JSON.parse(metrics) : null;
}

export function clearMetrics() {
    localStorage.removeItem('metricsSession');
}