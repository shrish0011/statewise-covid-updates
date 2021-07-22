import React, { useEffect, useState } from 'react'

import './statewise.css';
const Statewise=()=>{

    const [data, setData] = useState([])    
    const getcoviddata= async()=>{
        const res=await fetch('https://api.covid19india.org/data.json');
        const actualdata= await res.json();
        console.log(actualdata.statewise);
        setData(actualdata.statewise); 

    }
    useEffect(()=>{
         getcoviddata();
        
    },[])
    return (
        <>
       
        <div className="container-fluid mt-5">
            <div className="main-heading">
                <h1 className="mb-5 text-center">INDIA COVID 19 DETAILS</h1>

            </div>
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <td>State</td>
                            <td>Confirmed</td>
                            <td>Recovered</td>
                            <td>Deaths</td>
                            <td>Active</td>
                            <td>Updated</td>
                        </tr>
                        

                    </thead>
                    <tbody>
                        {
                        data.map((curElem, ind )=> {
                            return(
                                <tr key={ind}>
                            <td>{curElem.state}</td>
                            <td>{curElem.confirmed}</td>
                            <td>{curElem.recovered}</td> 
                            <td>{curElem.deaths}</td> 
                            <td>{curElem.active}</td> 
                            <td>{curElem.lastupdatedtime}</td>
                        </tr>

                            )
                        })
                    }
                        
                    </tbody>
                    

                </table>

            </div>
        </div>
        </>
    )
}
export default Statewise