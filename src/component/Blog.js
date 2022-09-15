import React, {useState, useEffect} from 'react'
import axios from 'axios' 
import { Card } from 'antd'

const Blog = (props) => {
    const [blog, setBlog] = useState([])
    useEffect(()=>{
        axios.get('https://5fb910462f145f0016c3ca6b.mockapi.io/blogs?id='+props.match.params.id)
          .then(res => {
            console.log(res);
            setBlog(res.data);
            
        })
        .catch(err =>{
            console.log(err)
            
        })
}, [])
    return (
        <>
        
           <div className="card">
              
               { blog.map (blogs => (
                   <div>
                       <h1>{blogs.title}</h1>
                           <Card
                               key = {blogs.id}
                               hoverable
                               cover={<img alt="example" src={blogs.url} style={{height : 400}} />}
                           >
                               <h3>Description:-</h3>
                               <p>{blogs.description}</p> 
                               
                           </Card>
                           <p style={{textAlign:'right'}}>Published by: {blogs.name}</p>
                   </div>
                   ))}
           </div>
       </>
    )
}

export default Blog
