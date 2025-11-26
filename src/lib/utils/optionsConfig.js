export const fetchOptions = {
    get: (headers = {}) => ({
        method: "GET",
        headers: { ...headers }
    }),

    post: (body, headers = {}) => ({
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...headers
        },
        body: JSON.stringify(body)
    }),

    put: (body, headers = {}) => ({
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            ...headers
        },
        body: JSON.stringify(body)
    }),

    patch: (body, headers = {}) => ({
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            ...headers
        },
        body: JSON.stringify(body)
    }),

    delete: (headers = {}) => ({
        method: "DELETE",
        headers: { ...headers }
    })
};