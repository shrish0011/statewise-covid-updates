import React, { useEffect } from 'react'

import './statewise.css';
const Statewise=()=>{
    const getcoviddata= async()=>{
        const res=await fetch('https://api.covid19india.org/data.json');
        const actualdata= await res.json();
        console.log(actualdata.statewise);

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
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                            <th>Active</th>
                            <th>Updated</th>
                        </tr>

                    </thead>

                </table>

            </div>
        </div>
        </>
    )
}
export default Statewise