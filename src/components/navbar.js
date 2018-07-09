import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    constructor() {
        super();
    }

    render() {
        return (

            <div >
                <NavLink to="/" activeClassName="active" exact>Home</NavLink>
                <NavLink to="/postquestion" activeClassName="active"  >PostQuestion</NavLink>
                <NavLink to="/postanswer" activeClassName="active"  >Exam</NavLink>
            </div>
        )
    }
}
export default Navbar;