import React, { useEffect, useState } from 'react'
import Navbar from '../layout/Navbar'
import './home.css'
import { getReservasi, getTamu } from '../services/reservasiApi'

const ReservasiDasb  = () => {
const [data, setData] = useState([])
    useEffect(() => {
        fetchTamu()
    },[])

    const fetchTamu = async () => {
        try{
            const reservasi = await getReservasi()
            setData(reservasi)
            console.log(reservasi)
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
                    {data.map(reservasi => (
                        <tr key={reservasi.id}>
                            <td>{reservasi.id}</td>
                            <td>{reservasi.name}</td>
                            <td>{reservasi.type}</td>
                            <td>{reservasi.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ReservasiDasb 

