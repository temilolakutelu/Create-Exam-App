import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    constructor() {
        super();
}

render(){
    return(
       
        <div >
        <NavLink to="/" activeClassName="active" exact>Home</NavLink>
        <NavLink to="/postquestion" activeClassName="active" exact  >PostQuestion</NavLink>
        <NavLink to="/questions" activeClassName="active" exact >Exam</NavLink>
        </div>
        
           
   
    )
}
}
export default Navbar;