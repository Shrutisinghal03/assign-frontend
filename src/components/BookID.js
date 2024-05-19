import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import { useParams } from 'react-router-dom';
import '../css/BookID.css'; 
  
function BookID() { 
    const [data, setData] = useState(null); // Initialize with null to handle initial state
    const { id } = useParams(); 
  
    useEffect(() => { 
        axios.get(`https://softwium.com/api/books/${id}`).then( 
            response => { 
                console.log('Response:', response.data); 
                setData(response.data);
            } 
        ).catch(error => { 
            console.error('Error fetching data:', error); 
        }); 
    }, [id]); // Include id in dependency array
  
    return ( 
        <div className="BooksID"> 
            <div className='products'>
                {
                    data ? (
                        <div key={data.id}> 
                            <h1>{data.title}</h1>
                            <p>{data.pageCount} pages</p> 
                            <h4>{data.authors}</h4> 
                        </div> 
                    ) : (
                        <p>Loading...</p>
                    )
                }
            </div> 
        </div> 
    ); 
} 

export default BookID;
