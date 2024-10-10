import React, { useEffect, useState } from 'react'
import Navbar from '../layout/Navbar'
import './home.css'
import { getStaffHotel } from '../services/staffhotelApi'

const StaffHotelDasb  = () => {
const [data, setData] = useState([])
    useEffect(() => {
        fetchStaffHotel()
    },[])

    const fetchStaffHotel = async () => {
        try{
            const staffhotel = await getStaffHotel()
            setData(staffhotel)
            console.log(staffhotel)
        }catch(error){
            console.error("eror");
            
        }
    }
  return (
    <div className='ikuy'>
        <Navbar/>
        <div className="data-table">
            <div>
                <h2>User Data</h2>
                <div className="form-container">
                    <input type="text" placeholder='Name...'/>
                    <input type="text" placeholder='Email...'/>
                    <input type="text" placeholder='Phone...'/>
                    <input type="text" placeholder='Address...'/>
                    <button>Submit</button>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Kamar</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(staffhotel => (
                        <tr key={staffhotel.id}>
                            <td>{staffhotel.id}</td>
                            <td>{staffhotel.name}</td>
                            <td>{staffhotel.type}</td>
                            <td>{staffhotel.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default StaffHotelDasb 

