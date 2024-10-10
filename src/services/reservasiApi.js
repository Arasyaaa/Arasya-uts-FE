import axios from "axios"

export const getReservasi = async () => {
    try{
        const response = await axios.get("http://localhost:3002/reservasi");
        return response.data;
    }catch (error) {
        console.error("Terjadi Kesalahan", error);
        return [];
    }
}