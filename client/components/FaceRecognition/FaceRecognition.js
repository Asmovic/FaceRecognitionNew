import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, bounds }) => {
    const boxes = bounds.map((bound, index) => {
        const { bounding_box } = bound.region_info;

        var image = document.getElementById('inputImage'),
            width = Number(image.width),
            height = Number(image.height);

        return (
            <div
                className="bounding-bx"
                style={{
                    top: bounding_box.top_row * height,
                    left: bounding_box.left_col * width,
                    bottom: height - bounding_box.bottom_row * height,
                    right: width - bounding_box.right_col * width,
                }}
                key={index}
            />
        );
    });

    // console.log(boxes);

    return (
        <div className="center ma">
            <div className="mt2 absolute">
                <img
                    className="br3"
                    id="inputImage"
                    alt="imageUrl"
                    width="500px"
                    height="auto"
                    src={imageUrl}
                />
                {boxes}
                {/* <div className='bounding-bx' 
        style={{top:box.topRow, bottom :box.bottomRow, right:box.rightCol, left:box.leftCol }}>
        </div> */}
            </div>
        </div>
    );
};
export default FaceRecognition;
