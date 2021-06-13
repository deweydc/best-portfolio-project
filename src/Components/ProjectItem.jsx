import React, { useState, useEffect } from 'react';
import './Projects.css';



function ProjectItem({ title, image, description }) {

    // const [width, setWidth] = useState('')
    const size = useWindowSize();

    // Hook
    function useWindowSize() {
        // Initialize state with undefined width/height so server and client renders match
        // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
        });
        useEffect(() => {
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }
            // Add event listener
            window.addEventListener("resize", handleResize);
            // Call handler right away so state gets updated with initial window size
            handleResize();
            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }, []); // Empty array ensures that effect is only run on mount
        return windowSize;
    }





    return (



        <div className="project">

            <div className="image__container">

                <img className='img_mac' src={require("../Shared/images/Mac.png").default} alt="" />
                <img className='img' src={image} alt="" />

            </div>

            <div className="project__description">
                <div className="bg-container">
                    {
                        (size.width <= 1000) ?
                            <img src={image} alt="" /> : <></>

                    }
                </div>
                <div className="project-content">

                    <h1>
                        {title}
                    </h1>
                    <p>{description}</p>

                </div>
            </div>

        </div >


    )
}

export default ProjectItem;