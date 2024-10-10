import axios from "axios"

export const getStaffHotel = async () => {
    try{
        const response = await axios.get("http://localhost:3002/staffhotel");
        return response.data;
    }catch (error) {
        console.error("Terjadi Kesalahan", error);
        return [];
    }
}