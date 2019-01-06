import React,{Component} from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../../index.css'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as authAction from '../../action/auth.js';

class Login extends Component{
    state={
        email:"",
        pass:""
    };
    btnlogin_click(e)
    {
        e.preventDefault();
        this.props.action.auth.loginuser(this.state);
    }
    handleChange(e)
    {
        this.setState({[e.target.name]:e.target.value})
    }
    render()
    {
        const style={
            textAlign:'center',
            margin:'20px'
        }
        return(
            <div>
                <h1 style={style}>Login Form</h1>
                <Form className="form1">
                    <FormGroup row>
                    <Label for="name" sm={2}>Email</Label>
                    <Col sm={6}>
                        <Input type="email" name="email" id="email" placeholder="Enter EMail" onChange={this.handleChange.bind(this)} value={this.state.email} />
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="pass" sm={2}>Password</Label>
                    <Col sm={6}>
                        <Input type="password" name="pass" id="pass" placeholder="password placeholder" onChange={this.handleChange.bind(this)} value={this.state.password} />
                    </Col>
                    </FormGroup>
                    <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button>Login</Button>
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
export default connect(mapStateToProps,mapDispatchToProps)(Login); 