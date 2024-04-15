import React from "react";
import { BiWorld } from "react-icons/bi";

export default function Header(){
    return(
        <header>
            <BiWorld className="world-logo"/>
            <h1 className="header-title">My travel journal</h1>
        </header>
    )
}
