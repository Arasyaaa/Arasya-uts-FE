import axios from "axios"

export const getTamu = async () => {
    try{
        const response = await axios.get("http://localhost:3002/tamu");
        return response.data;
    }catch (error) {
        console.error("Terjadi Kesalahan", error);
        return [];
    }
}