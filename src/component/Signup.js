import React, { Component } from 'react'
import './Login.css';
import axios from 'axios';
import {Link, Redirect } from 'react-router-dom';
import {FacebookFilled, InstagramFilled, LinkedinFilled, GithubFilled, TwitterSquareFilled} from '@ant-design/icons'

class Signup extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name :(''),
            email : (''),
            number :(''),
            password :(''),
            confirmpassword :(''),
            signup : false
        }
    }
    changeHandler = e => {
        this.setState({ [e.target.name] : e.target.value })
    }

    submit = e =>{
        e.preventDefault()
        //console.log(this.state)
        axios.post('https://5fb910462f145f0016c3ca6b.mockapi.io/signup',this.state)
        .then(response =>{
            console.log(response)
            this.setState({
                signup : true
            })  
        })
        .catch(error =>{
            console.log(error)
        })
    }
    
    render() {
        const {name,email,number,password,confirmpassword } = this.state
        if(this.state.signup){
            return <Redirect to="/check" />
        }
        return (
            <div>
                <>
                    <div className="body">
                        <div className="login">
                    
                        <h1>Create new account</h1>
                            <form onSubmit={this.submit}>
                                <div className="box">
                                    <input type="text" name="name" placeholder="Name*" value={name}  onChange={this.changeHandler} required/><br/>
                                </div>
                                    <div className="box">
                                    
                                    <input type="email" name="email" placeholder="Email*" value={email} onChange={this.changeHandler} required/><br/>
                                </div>
                                    <div className="box">
                                
                                    <input type="text" name="number" placeholder="Phone Number*" value={number} onChange={this.changeHandler} required/><br/>
                                </div>
                                <div className="box">
                                    
                                    <input type="password" name="password" placeholder="Password*" value={password} onChange={this.changeHandler} required/><br/>
                                </div>
                                    <div className="box">
                                    
                                    <input type="password" name="confirmpassword"placeholder="Confirm Password*" value={confirmpassword} onChange={this.changeHandler} required/><br/>
                                </div>
                                <div className="btn-submit">
                                    <input type="submit" name="submit" />
                                </div>
                            </form>
                            <div>
                                <ul>
                                    <li>Already have an account? <Link to="/login"> Login</Link></li>
                                </ul>
                            </div>  
                        </div>
                    </div>
                    <div className='footer'>
                            <p>Blog Design &copy; 2020 Created by Dravid</p>
                            <div className="icon">
                                    <a href='#'><FacebookFilled /></a> 
                                    <a href='#'><InstagramFilled /></a> 
                                    <a href='#'><LinkedinFilled /></a> 
                                    <a href='#'><GithubFilled /></a>
                                    <a href='#'><TwitterSquareFilled /></a> 
                            </div>
                        </div>
                    </>
            </div>
        )
    }
}

export default Signup

