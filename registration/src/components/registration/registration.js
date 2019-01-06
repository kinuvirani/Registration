import React,{Component} from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../../index.css'
import axios from 'axios';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as authAction from '../../action/auth.js';
class Registration extends Component{
    state={
        name:"",
        email:"",
        pass:"",
        tech:"",
        add:""
    };
    insertData(e)
    {
        e.preventDefault();
        this.props.action.auth.loginuser(this.state);
        // const {name,email,pass,tech,add}=this.state;
        // axios.post('http://localhost:3000/insert',{name,email,pass,tech,add}).then((Response)=>{
        //     if(Response.status==200)
        //     {
        //         //alert("Success");
        //         this.props.history.push('/login');
        //     }
        // });
    }
    handleChange(e)
    {
        this.setState({[e.target.name]:e.target.value});
    }
    render()
    {
        const style={
            textAlign:'center',
            margin:'20px'
        }
        return(
            <div>
                <h1 style={style}>Reistration Form</h1>
                <Form  className="form">
                    <FormGroup row>
                    <Label for="name" sm={2}>Name</Label>
                    <Col sm={6}>
                        <Input type="text" name="name" value={this.state.name} id="name" onChange={this.handleChange.bind(this)} placeholder="Enter Name" />
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="name" sm={2}>Email</Label>
                    <Col sm={6}>
                        <Input type="email" name="email" value={this.state.email} id="email" onChange={this.handleChange.bind(this)} placeholder="Enter EMail" />
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="pass" sm={2}>Password</Label>
                    <Col sm={6}>
                        <Input type="password" name="pass" value={this.state.pass} id="pass" onChange={this.handleChange.bind(this)} placeholder="password placeholder" />
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="tech" sm={2}>Select</Label>
                    <Col sm={6}>
                        <Input type="select" name="select" onChange={this.handleChange.bind(this)} value={this.state.tech} id="tech">
                            <option>PHP</option>
                            <option>.Net</option>
                            <option>ReactJs</option>
                            <option>NodeJs</option>
                        </Input>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="add" sm={2}>Address</Label>
                    <Col sm={6}>
                        <Input type="textarea" name="add" onChange={this.handleChange.bind(this)} value={this.state.add} id="add" />
                    </Col>
                    </FormGroup>
                    <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button onClick={this.insertData.bind(this)}>Registration</Button>
                    </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}
const mapStateToProps=(state) =>{
    const {auth}=state;
    return{
        auth:auth
    }
}
const mapDispatchToProps=dispatch=>({
    action:{
        auth:bindActionCreators(authAction,dispatch)
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Registration); 