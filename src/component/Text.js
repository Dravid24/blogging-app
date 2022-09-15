import React, {useEffect} from 'react'
import {connect } from 'react-redux'
import {fetchUsers} from '../Redux/Index'

function Text({userData, fetchUsers}){
    useEffect(() => {
        fetchUsers()
    }, [])
    return userData.loading ? (
       <h2>loading</h2>
    ) : userData.error ? (
    <h2>{userData.error}</h2>
    ): (
        <div>
        <h2>Blogs List</h2>
    
        <div>
            {
                userData && userData.blogs && userData.blog.map(blog => <p> {blog.title}</p>)
            }
        </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        userData : state.user
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        fetchUsers : () => dispatch (fetchUsers())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Text)
