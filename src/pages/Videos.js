import React from "react";
import './Videos.css';
import ReactPlayer from "react-player";

export const Videos = () => (
    <div class="benefits-component">
            <h1>Guided Meditation</h1>  

            <div class="main-container">
                <p class="paragraph">
                    Here are a few videos that you can try for meditating. Please enjoy them!
                    <br></br>
                    <br></br>

                    <ReactPlayer controls={true} url="https://www.youtube.com/watch?v=6YRhe-hW_H0" />
                    <br></br>
                    <ReactPlayer controls={true} url="https://www.youtube.com/watch?v=inpok4MKVLM" />
                </p>
            </div> 
    </div>
);

export default Videos;
