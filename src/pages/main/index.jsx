import React from 'react';
import Home from "../home";
import {Footer} from "../home/style";
import logo from '../../assest/logo.png'

const Main = () => {
    return (<>
        <Home/>
        <Footer>
            <p className='build'>
                Build a beautiful <br/>
                product with Align
            </p>
            <p className='contain'>
                Align contains all the pages and
                sections needed <br/> to create
                beautiful
                digital products with ease.
            </p>
            <div className='nav-link'>
                <nav>
                    <p className='overview'>
                        overview
                    </p>
                    <li>overview</li>
                    <li>home 1</li>
                    <li>home 2</li>
                    <li>pricing 1</li>
                    <li>pricing 2</li>
                </nav>
                <nav>
                    <p className='overview'>
                        pages
                    </p>
                    <li>about 1</li>
                    <li>about 2</li>
                    <li>about 3</li>
                    <li>blog 1</li>
                    <li>blog 2</li>
                    <li>blog post</li>
                    <li>team member</li>
                    <li>404</li>
                    <li>password</li>
                </nav>
                <nav>
                    <p className='overview'>
                        pages
                    </p>
                    <li>contact 1</li>
                    <li>contact 2</li>
                    <li>contact 3</li>
                    <li>customer stories</li>
                    <li>customer story</li>
                    <li>login</li>
                    <li>register</li>
                    <li>style guide</li>
                    <li>changelog</li>
                    <li>license</li>
                </nav>

            </div>
            <div className='logos'>
                <img src={logo}/>
                <p className='template'>template created by
                    <span>Abdullo Nasrullaev </span></p>

            </div>
        </Footer>
    </>);
};

export default Main;