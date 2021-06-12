import React from 'react';
import './Projects.css';



function ProjectItem({ title, image, description }) {

    return (


        <div className="project">

            <div className="image__container">
                <img className='img_mac' src={require("../Shared/images/Mac.png").default} alt="" >

                </img>
                <img className='img' src={image} alt="" />
            </div>
            <div className="project__description">
                <h1>
                    {title}
                </h1>
                <p>{description}</p>
            </div>

        </div>


    )
}

export default ProjectItem
