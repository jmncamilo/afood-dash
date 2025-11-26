import { useState } from "react";

export function useFetch(url, defaultOptions = {}) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const execute = async (overrideOptions = {}) => {
        setLoading(true);
        setError(null);

        const finalOptions = {
            method: "GET",
            ...defaultOptions,
            ...overrideOptions,
        };

        try {
            const res = await fetch(url, finalOptions);
            const json = await res.json();
            setData(json);
            return json;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { data, error, loading, execute };
}