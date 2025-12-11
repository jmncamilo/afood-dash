export function setMetrics(carbon, nitrogen, water) {
    localStorage.setItem('metricsSession', JSON.stringify({ carbon, nitrogen, water }));
}

export function getMetrics() {
    const metrics = localStorage.getItem('metricsSession');
    return metrics ? JSON.parse(metrics) : null;
}