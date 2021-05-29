import React from 'react'
import Nav from './Nav';
import './Hero.css'
import { IconButton } from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const Hero = () => {
    return (
        <>

            <div className='hero__container container'>

                {/* <video autoplay muted loop id="myVideo">
                    <source src={URL("https://youtu.be/lun_lTE30E8").defualt} type="video/mp4">
                </video> */}
                <div className="video__container">

                    {/* <iframe
                        // width="100%"
                        // height="100%"
                        className='video'
                        src="https://www.youtube.com/embed/lun_lTE30E8?autoplay=1&mute=1"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe> */}

                </div>
                <div className="hero__content">
                    <div className="hero__img-container">
                        <img src={require("../Shared/images/IMG_1740.jpeg").default} alt="" />
                    </div>
                    <h1 className="hero__title">
                        👋🏼 Hello, I'm Dewey
                    </h1>
                    <p>Web Developer</p>
                </div>


                <div className="icon-container">

                    <IconButton>
                        <KeyboardArrowDownIcon
                            className='arrow-icon'
                            fontSize='large'
                        />
                    </IconButton>
                </div>



            </div>
        </>
    )
}

export default Hero
