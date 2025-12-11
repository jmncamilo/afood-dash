export function setMetrics(carbon, nitrogen, water) {
    localStorage.setItem('metricsSession', JSON.stringify({ carbon, nitrogen, water }));
}