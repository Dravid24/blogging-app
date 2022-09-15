import React, { Component } from 'react'
import 'antd/dist/antd.css';
import './Home.css';
import {  Button, Card, Input, Layout, Menu, notification} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { Content, Header } from 'antd/lib/layout/layout';
import axios from 'axios';
import ListofBlog from './ListofBlog';
import {FacebookFilled, InstagramFilled, LinkedinFilled, GithubFilled, TwitterSquareFilled} from '@ant-design/icons'
import { Link } from 'react-router-dom';
import Meta from 'antd/lib/card/Meta';


class Home extends Component {
   
    constructor(props) {
        super(props)  
        this.state = {
             title : (''),
             description : (''),
             name : (''),
             url : (''),
             blog : ([]),
             publish : false
        }
       
        axios.get('https://5fb910462f145f0016c3ca6b.mockapi.io/signup?id='+this.props.match.params.id)
        .then(res =>{
            
            this.setState({
                name : res.data[0].name
            })
             /* =============Blogs============ */
                axios.get('https://5fb910462f145f0016c3ca6b.mockapi.io/blogs?name='+this.state.name)
                .then(response => {
                   //console.log(response)
                   this.setState({
                       blog : response.data
                   })
                console.log(this.state.blog)
                
            })
            .catch(err =>{
                console.log(err)
                
            })
            /* ========================================= */
        })
        
        .catch(err =>{
            console.log(err)
        })

        
    }
    
    openNotification = () => {
        notification.open({
          message: 'Publish Blog Successfully',
        });
      };

    changeHandler = e => {
        this.setState({ [e.target.name] : e.target.value })
    }

    submit = e =>{
        e.preventDefault()
        //console.log(this.state)
        axios.post('https://5fb910462f145f0016c3ca6b.mockapi.io/blogs',this.state)
        .then(response =>{
            console.log(response)
            this.setState({
                publish : true
            })
        })
        .catch(error =>{
            console.log(error)
        })
    }

    Submit = (blogid) =>{
        console.log(blogid)
             const res = axios.delete('https://5fb910462f145f0016c3ca6b.mockapi.io/blogs/'+blogid)
             .then(res => {
                notification.open({
                    message: 'Blog was Deleted Successfuly',
                  });
             })
    }

    Edit = (id) => {
        const edit = axios.put('https://5fb910462f145f0016c3ca6b.mockapi.io/blogs/'+id,this.state)
        .then(edit => {
            console.log(edit)
        })
    }


    render() {
        const {title, description,url} = this.setState;
        if(this.state.publish){
           {this.openNotification()}
        }
        return (
           
            <div >
                <Layout>
                    <Header style={{ position: 'fixed', zIndex: 1, width: '110%',backgroundColor : 'dark'}} breakpoint='lg' >
                    <div className="logo" ><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Blogger.svg/1030px-Blogger.svg.png' alt='logo' width='25%' height='55'/></div>
                    
                    <Menu className="menu" theme="dark"  mode="horizontal" defaultSelectedKeys={['1']}  >
            
                        <Menu.Item key="1" className='list'>Home</Menu.Item>
                        <Menu.Item key="2" href='/blogs' className='list' ><Link to='/blogs'>All Blogs</Link></Menu.Item>
                        <Menu.Item key='3'className='list'>Signed in as : <strong>{this.state.name}</strong></Menu.Item>
                    </Menu>
                    
                    </Header>
                    <Content className="site-layout" style={{ marginTop: 64 }}>
                            <h1>Welcome {this.state.name} </h1>
                        <div className="newblog">
                            <h3>Create a new Blog</h3>
                            <form onSubmit={this.submit}>
                                <div>
                                <Input type='text' name='title' placeholder='Enter Title Here' value={title} onChange={this.changeHandler} required/>
                                </div>
                                 <br /> 
                                 <div>
                                <Input type='text' name='url' placeholder='Image Url' value={url} onChange={this.changeHandler} required/>
                                </div>
                                 <br /> 
                                 <div>
                                 <TextArea showCount  placeholder='Description' name='description' value={description} onChange={this.changeHandler} required/>
                                 </div>
                                <div>
                                    <button type='Submit' name='publish' >Publish</button>
                                </div> 
                            </form>
                            
                        </div>
                        <h1>List of blogs</h1>
                        
                        {/* ================Blogs========== */} 
                        <div className="card">
                            { this.state.blog.map (blogs => (
                                <div>
                                        <Card
                                            key = {blogs.id}
                                            hoverable
                                            style={{ width: 400  } }
                                            cover={<img alt="example" src={blogs.url} />}
                                        >
                                            <Meta title={blogs.title} />
                                            <div className='button'>
                                                <Button onClick={() => this.Edit(blogs.id)}>Edit</Button>
                                                <Button onClick={() => this.Submit(blogs.id)} >Delete</Button>
                                            </div>
                                        </Card>
                                </div>
                            ))}
                        </div>
                       
                    </Content>
                    
                    <div className='footer'>
                            <p>Blog Design &copy;2020 Created by Dravid</p>
                            <div className="icon">
                                    <a href='#'><FacebookFilled /></a> 
                                    <a href='#'><InstagramFilled /></a> 
                                    <a href='#'><LinkedinFilled /></a> 
                                    <a href='#'><GithubFilled /></a>
                                    <a href='#'><TwitterSquareFilled /></a> 
                            </div>
                        </div>
                </Layout>
            </div>
        )
    }
}

export default Home
