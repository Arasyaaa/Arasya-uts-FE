import axios from "axios"

export const getUser = async () => {
    try{
        const response = await axios.get("http://localhost:3002/kamar");
        return response.data;
    }catch (error) {
        console.error("Terjadi Kesalahan", error);
        return [];
    }
}