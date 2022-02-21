import React from 'react';
import {
    Additional,
    EndTitle,
    Homes,
    Landing,
    Navbar
} from "./style";
import logo from '../../assest/logo.png'
import backgroundImage
    from '../../assest/background-image.png'
import image1 from '../../assest/IMAGE.png'
import image2 from '../../assest/IMAGE (1).png'
import image3 from '../../assest/IMAGE (2).png'
import images1 from '../../assest/Image1.png'
import images2 from '../../assest/Image2.png'
import images3 from '../../assest/Image3.png'
import images4 from '../../assest/Image4.png'
import images5 from '../../assest/Image5.png'
import images6 from '../../assest/Image6.png'
import blog1 from '../../assest/blog1.png'
import blog2 from '../../assest/blog3.png'
import blog3 from '../../assest/blog3.png'
import blog4 from '../../assest/blog4.png'
import blog5 from '../../assest/blog5.png'
import blog6 from '../../assest/blog6.png'
import pricing1 from '../../assest/pricing1.png'
import pricing2 from '../../assest/pricing2.png'

function Home() {
    return (
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
                <img src={backgroundImage}
                     alt='common show the image'/>
            </Homes>
            <Landing>
                <div className='landing'>
                    landing pages
                </div>
                <p className='discover'>
                    Discover all the pages <br/> that you
                    can use over <br/> and over again.
                </p>
                <div className='card-wrapper'>
                    <div className='cards'>
                        <p>landing one</p>
                        <img src={image1}/>
                    </div>
                    <div className='cards'>
                        <p>landing two</p>
                        <img src={image2}/>
                    </div>
                    <div className='cards'>
                        <p>landing three</p>
                        <img src={image3}/>
                    </div>
                </div>
            </Landing>
            <Landing>
                <div className='landing'>
                    company
                </div>
                <p className='discover'>
                    Company Pages
                </p>
                <div className='card-wrapper'>
                    <div className='cards'>
                        <p>about one</p>
                        <img src={images1}/>
                    </div>
                    <div className='cards'>
                        <p>about two</p>
                        <img src={images2}/>
                    </div>
                    <div className='cards'>
                        <p>about three</p>
                        <img src={images3}/>
                    </div>
                    <div className='cards'>
                        <p>contact one</p>
                        <img src={images4}/>
                    </div>
                    <div className='cards'>
                        <p>contact two</p>
                        <img src={images5}/>
                    </div>
                    <div className='cards'>
                        <p>contact three</p>
                        <img src={images6}/>
                    </div>
                </div>
            </Landing>
            <Landing>
                <div className='landing'>
                    blog
                </div>
                <p className='discover'>
                    CMS Pages
                </p>
                <div className='card-wrapper'>
                    <div className='cards'>
                        <p>blog one</p>
                        <img src={blog1}/>
                    </div>
                    <div className='cards'>
                        <p>blog two</p>
                        <img src={blog2}/>
                    </div>
                    <div className='cards'>
                        <p>blog article (CMS)</p>
                        <img src={blog3}/>
                    </div>
                    <div className='cards'>
                        <p>customer stories</p>
                        <img src={blog4}/>
                    </div>
                    <div className='cards'>
                        <p>customer stories (CMS)</p>
                        <img src={blog5}/>
                    </div>
                    <div className='cards'>
                        <p>team member (CMS)</p>
                        <img src={blog6}/>
                    </div>
                </div>
            </Landing>
            <Landing>
                <div className='landing'>
                    Pricing
                </div>
                <p className='discover'>
                    Pricing Pages
                </p>
                <div className='card-wrapper'>
                    <div className='cards'>
                        <p>pricing one</p>
                        <img src={pricing1}/>
                    </div>
                    <div className='cards'>
                        <p>pricing two</p>
                        <img src={pricing2}/>
                    </div>
                </div>
            </Landing>
            <Additional>
                <div className='landing'>
                    other
                </div>
                <p className='add'>
                    additional pages
                </p>
                <div className='card-wraper'>
                    <div className='card'>
                        UI card
                    </div>
                    <div className='card'>
                        login
                    </div>
                    <div className='card'>
                        register
                    </div>
                    <div className='card'>
                        forgot password
                    </div>
                    <div className='card'>
                        404 error
                    </div>
                    <div className='card'>
                        style guide
                    </div>
                    <div className='card'>
                        changelog
                    </div>
                    <div className='card'>
                        license
                    </div>
                </div>
            </Additional>
            <EndTitle>
                <p className='align-title'>
                    Align is the stress-free <br/> way to
                    build
                    your website.
                </p>
                <div className='sample-text'>
                    <p className='number-text'>
                        <span>$79 </span>Build a better
                        website faster today.</p>
                    <button>
                        Purchase
                    </button>
                </div>
            </EndTitle>
        </>
    )
}

export default Home