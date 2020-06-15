import React from 'react'
import { Link } from "react-router-dom";

import './navbar.css';

const Navbar = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            navBarActiveClass: '',
         }
        }
        render() {
            return(
                <nav className="single-nav">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/whites">Team Whites</Link>
                        </li>
                        <li>
                            <Link to="/yolks">Team Yolks</Link>
                        </li>
                        <li>
                            <Link to="/recipes">Recipes</Link>
                        </li>
                        <li>
                            <Link to="/submit">Submit Recipe</Link>
                        </li>
                    </ul>

                </nav>
            )
        }
    }
export default Navbar;