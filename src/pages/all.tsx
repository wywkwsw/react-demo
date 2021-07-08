import React from 'react'
// import {Link} from 'react-router-dom'
import { BrowserRouter, Route, Link } from "react-router-dom";
import { A_page } from "./a";
import { B_page } from "./b";
import { C_page } from "./c";
import { D_page } from "./d";
export const All_page = () =>{
    return <div>
        {/* <div style={{margin:'10px'}}>
        <Link to={'/all/a'}>a</Link>
        </div>
        <div style={{margin:'10px'}}>
        <Link to={'/all/b'}>b</Link>
        </div>
        <div style={{margin:'10px'}}>
        <Link to={'/all/c'}>c</Link>
        </div>
        <div style={{margin:'10px'}}>
        <Link to={'/all/d'}>d</Link>
        </div>
        <Route path="/all/a" component={A_page}></Route>
        <Route path="/all/b" component={B_page}></Route>
        <Route path="/all/c" component={C_page}></Route>
        <Route path="/all/d" component={D_page}></Route> */}
    </div>
}