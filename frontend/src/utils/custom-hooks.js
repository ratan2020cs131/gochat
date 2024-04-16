import { useEffect, useState } from "react"
import axios from "@/utils/axios-interceptor";

export const useFetch = ({ url }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const handleFetch = async () => {
        try {
            const result = await axios.get(url)
            setData(result.data)
            setLoading(false);
        } catch (error) {
            setError(true)
            setLoading(false);
        }
    }

    useEffect(() => {
        handleFetch();
    }, [url])

    return {
        data,
        loading,
        error
    }

}
