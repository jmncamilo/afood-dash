export function setSession(nit, clientNameQuery) {
    localStorage.setItem('authSession', JSON.stringify({ nit, clientNameQuery }));
}

export function getSession() {
    const session = localStorage.getItem('authSession');
    return session ? JSON.parse(session) : null;
}

export function clearSession() {
    localStorage.removeItem('authSession');
}