import React, { Component } from "react";
import {Link} from "react-router";

export const Header = (props) => {
    return (
        <nav>
        <ul>
            <li><Link to={"/About"}>About</Link></li>
        </ul>
        </nav>
    );
};