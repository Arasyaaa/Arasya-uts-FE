import axios from "axios"

export const getPembayaran = async () => {
    try{
        const response = await axios.get("http://localhost:3002/pembayaran");
        return response.data;
    }catch (error) {
        console.error("Terjadi Kesalahan", error);
        return [];
    }
}