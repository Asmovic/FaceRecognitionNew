import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onButtonSubmit})=>{
    return(
        <div>
            <p className='f4'>
            {'This magic brain will detect faces in your pictures, you should give it a try.'}
            </p>
            <div className='center'>
                <div className='center form br3 pa4 shadow-5'>
                <input placeholder='Paste Image link here' className='f3 w-70 center pa2' type='text' onChange={onInputChange}></input>
                <button onClick ={onButtonSubmit} className='f4 w-30 grow ph3 pv2 white link dib bg-hot-pink'>Detect</button>   
            </div>
            </div>
            
        </div>
    );
}

export default ImageLinkForm;