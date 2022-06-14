import cache from "memory-cache";
import axios from "axios";

export const getData = async (url) => {
    const cachedResponse = cache.get(url);
    if (cachedResponse) {
        return cachedResponse;
    } else {
        const hours = 24;
        const response = await axios.get(url);
        const data = response.data;
        cache.put(url, data, hours * 1000 * 60 * 60);
        return data;
    }
};

export const getLiveData = async (url) => {
    const response = await axios.get(url);
    const data = response.data;
    return data;
};