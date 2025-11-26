import { useState } from "react";

export function useFetch(url, defaultOptions = {}) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const execute = async (overrideOptions = {}, overrideUrl = null) => {
        setLoading(true);
        setError(null);

        const finalUrl = overrideUrl || url;
        const finalOptions = {
            method: "GET",
            ...defaultOptions,
            ...overrideOptions,
        };

        try {
            const res = await fetch(finalUrl, finalOptions);
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