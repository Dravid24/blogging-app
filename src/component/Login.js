import React, { Component } from 'react'
import './Login.css';
import axios from 'axios';
import {FacebookFilled, InstagramFilled, LinkedinFilled, GithubFilled, TwitterSquareFilled} from '@ant-design/icons'
import { Link, Redirect } from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: '',
             password: '',
             id:'',
             logIn : false
        }
    }
    changeHandler = e => {
        this.setState({ [e.target.name] : e.target.value })
    }

    submit = e =>{
        e.preventDefault()
        console.log(this.state)
        axios.get('https://5fb910462f145f0016c3ca6b.mockapi.io/signup?email='+this.state.email)
        .then(response =>{
            console.log(response)
            this.state.id= response.data[0].id;
            console.log(this.state.id)
            if(this.state.email===response.data[0].email && this.state.password === response.data[0].password){
                this.setState({
                    logIn: true
                })
            }
            else{
                alert('Please enter valid email or password')
            }
        })
        .catch(error =>{
            console.log(error)
        })
    }
    render() {
        const {email,password} = this.setState
        if(this.state.logIn){
            return <Redirect to={'user/'+this.state.id} />
        }
        return (
                 <>
                    <div className="body">
                        <div className='title'>
                            <h1>Welcome to Blog</h1>
                            <p>Please Login to continue...</p>
                        </div>
                        <div className="login">
                            <span>
                            <h1>Login</h1>
                            <form onSubmit={this.submit}> 
                                <div className="box">
                                    <input type="email" name='email' placeholder="Email" id="email" value={email} onChange={this.changeHandler} required />
                                </div>
                                <div className="box">
                                    <input type="password" name='password' placeholder="Password" id="password" value={password} onChange={this.changeHandler} required/>
                                </div>
                                <div className="btn-submit">
                                    <input type="submit" value="Login"  />
                                </div>
                            </form>
                            <div>
                                <ul >
                                    <li>Forget<Link href="#"> Email/Password?</Link></li>
                                    <li>Don't have an account?<Link to='/signup'> Signup</Link></li>
                                </ul>
                            </div>  
                            </span>
                        </div> 
                        </div>
                        
                        <div className='footer'>
                            <p>Blog Design &copy;2020 Created by Dravid</p>
                            <div className="icon">
                                    <a href='facebook.com'><FacebookFilled /></a> 
                                    <a href='instagram.com'><InstagramFilled /></a> 
                                    <a href='linkedin.com'><LinkedinFilled /></a> 
                                    <a href='github.con'><GithubFilled /></a>
                                    <a href='twitter.com'><TwitterSquareFilled /></a> 
                                </div>
                        </div>
                        </>
        )
    }
}

export default Login
