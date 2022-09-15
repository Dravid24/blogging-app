import React, { useState,useEffect } from 'react'
import axios from 'axios';
import {  Card} from 'antd';
import './ListofBlog.css';
import Meta from 'antd/lib/card/Meta';
import { Link } from 'react-router-dom';

const ListofBlog = (props) => {
    const [blog, setBlog] = useState([])
    useEffect(()=>{
        axios.get('https://5fb910462f145f0016c3ca6b.mockapi.io/blogs')
          .then(res => {
            
            setBlog(res.data);
            
        })
        .catch(err =>{
            console.log(err)
            
        })
}, [])



    return (
        <>
         <h1>List of All Blogs</h1>
            <div className="card">
               
                { blog.map (blogs => (
                    <div>
                            <Card
                                key = {blogs.id}
                                hoverable
                                style={{ width: 400  } }
                                cover={<img alt="example" src={blogs.url} />}
                            >
                                <Meta title={blogs.title} /> 
                                <Link style={{textAlign:'right'}} to={'blogs/'+blogs.id} className='link'>Read More</Link>  
                            </Card>
                            <p style={{textAlign:'right'}}>Published by: {blogs.name}</p>
                    </div>
                    ))}
            </div>
        </>
        
    )
}

export default ListofBlog
