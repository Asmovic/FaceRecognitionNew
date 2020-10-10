import React from 'react'
import './FaceRecognition2.css'

const FaceRecognition2 = ({imageUrl, box})=>{
    return(
        <div className='ma4'>
        <div className='mt2 absolute'>
        <img className='br3' style={{display:'flex', float:'right'}} id='inputImage2'  alt='imageUrl' width='300px' height='auto' src={imageUrl}/>
        <div className='bounding-bx' 
        style={{top:box.topRow, bottom :box.bottomRow, right:box.rightCol, left:box.leftCol }}>
        </div>
        
        </div>

        </div>
    );
}
export default FaceRecognition2;