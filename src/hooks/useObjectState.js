import { useState } from "react";

export function useObjectState(initialValues = {}) {
    const [objectData, setObjectData] = useState(initialValues);

    const updateStateByKey = (key, value) => {
        setObjectData(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const resetData = () => setObjectData(initialValues);

    const cleanData = () => setObjectData({});

    return {
        objectData,
        setObjectData,
        updateStateByKey,
        resetData,
        cleanData
    }
}