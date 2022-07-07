import { useContext, useEffect, useState } from "react";
import UidContext from "../Context";

export function useFetch(url) {
    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if(!url) return;
        setLoading(true);
        async function fetchData () {
            try{
                const reponse = await fetch(url);
                const data = await reponse.json();
                setData(data);
            } catch (err) {
                console.log(err);
                setError(true);
            } finally {
            setLoading(false);
        }
    }
    fetchData();
    }, [url]);
    return { isLoading, data, error }
}

export function useTheme() {
    const {theme, toggleTheme } = useContext(UidContext);
    return { theme, toggleTheme};
}