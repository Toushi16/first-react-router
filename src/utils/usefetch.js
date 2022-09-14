import { useState, useEffect } from 'react';

export const useFetch = (url, formatFn=null) => {
    const [ loading, setLoading ] = useState(false);
    const [ data, setData ] = useState(null);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        setLoading(true);

        fetch(url)
        .then((res) => res.json())
        .then((json) => {
            typeof formatFn === 'function' ? setData(formatFn(json)) : 
            setData(json);
            setError(false);
        })
        .catch((err) => {
            setError(err.message);
        })
        .finally(() => {
            setLoading(false);
        });
    },[url]);
    
    return { loading, data, error };
};