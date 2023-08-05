import React from "react";

const FaceRecognition = ({imageUrl, boxes}) => {

    return (
        <div className="center ma">
            <div className="relative mt2">
                <img id="inputImage" src={imageUrl} alt="" width='500px' height='auto'/>
                {boxes.map((box, i) => {
                    return (
                        <div key={i} 
                        className="absolute ba bw1 b--blue" 
                        style={{top: box.topRow,
                            bottom: box.bottomRow,
                            left: box.leftCol,
                            right: box.rightCol}}></div>
                    );
                })}
                
            </div>
        </div>
    );
}

export default FaceRecognition;