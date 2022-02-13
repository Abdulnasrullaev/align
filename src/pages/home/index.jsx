import React from 'react';
import {Homes, Navbar} from "./style";
import logo from '../../assest/logo.png'

function Home (){
    return(
        <>
        <Navbar>
            <img className='logo' src={logo}/>
            <nav>
                <li><a href='#'>overview</a></li>
                <li><a href='#'>pages</a></li>
                <li><a href='#'>template</a></li>
            </nav>
            <button>buy align</button>
        </Navbar>
        <Homes>
            <div className='align-text'>
                ALIGN UI KIT FOR WEBFLOW
            </div>
            <p className='logotip'>
                Teams build better <br/>
                product with <br/>
                Align UI
            </p>
        </Homes>

        </>
    )
}

export default Home