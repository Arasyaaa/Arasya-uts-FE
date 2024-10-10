import React, { useEffect, useState } from 'react'
import Navbar from '../layout/Navbar'
import './home.css'
import { getPembayaran } from '../services/pembayaranApi'

const PembayaranDasb  = () => {
const [data, setData] = useState([])
    useEffect(() => {
        fetchPembayaran()
    },[])

    const fetchPembayaran = async () => {
        try{
            const pembayaran = await getPembayaran()
            setData(pembayaran)
            console.log(pembayaran)
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
                    {data.map(pembayaran => (
                        <tr key={pembayaran.id}>
                            <td>{pembayaran.id}</td>
                            <td>{pembayaran.name}</td>
                            <td>{pembayaran.type}</td>
                            <td>{pembayaran.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default PembayaranDasb 

