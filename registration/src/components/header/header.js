import React,{Component} from 'react';
import {Navbar,Nav,NavItem,NavLink } from 'reactstrap';
import {Link} from 'react-router-dom'; 
class Header extends Component
{
    render()
    {
        return(
            <div>
                <Navbar color="light" light expand="md">
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink tag={Link} to="/registration">SignUp</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/login">Sign In</NavLink>
                  </NavItem>
                </Nav>
            </Navbar>
          </div>
        );
    }
}
export default Header;