import React, { useState, useEffect } from 'react'; 
import axios from "axios"; 
import '../App.css'; 
  
function Books() { 
    const [data, setData] = useState(); 
  
    useEffect(() => { 
        axios.get('https://softwium.com/api/books').then( 
            response => { 
                setData(response.data); 
            } 
        ).catch(error => { 
            console.error(error); 
        }) 
    }, []) 
  
    return ( 
        <div className="Books"> 
            {         
                <div className='products'> 
                 <h2 class="designer-heading">Books Collection</h2>
<div className="grid-container">
   
                    {data?.map((data) => { 
                        return ( 
                            <div className='Book'>
                                 <div key={data.id}> 
                           <a  href={data.id}><h3>{data.title}</h3> </a> 
                            </div>
                                </div>
                           
                        ); 
                    }) 
                    } 
                      </div>
                </div> 
            } 
        </div> 
    ); 
} 
export default Books; 