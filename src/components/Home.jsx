import React, { useEffect, useState } from 'react'
import Navbar from '../layout/Navbar'
import './home.css'
import { getUser } from '../services/kamarApi'

const Home = () => {
const [data, setData] = useState([])
    useEffect(() => {
        fetchKamar()
    },[])

    const fetchKamar = async () => {
        try{
            const kamar = await getUser()
            setData(kamar)
            console.log(kamar)
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
                    {data.map(kamar => (
                        <tr key={kamar.id}>
                            <td>{kamar.id}</td>
                            <td>{kamar.name}</td>
                            <td>{kamar.type}</td>
                            <td>{kamar.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home

