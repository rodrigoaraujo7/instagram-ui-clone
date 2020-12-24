import React, { useState } from 'react';
import './Photos.css'

import Photo1 from '../public/photo1.jpg';
import Photo2 from '../public/photo2.jpg';
import Photo3 from '../public/photo3.jpg';
import Photo4 from '../public/photo4.jpg';
import Photo5 from '../public/photo5.jpg';

const Photos = () => {
    const [photosArray] = useState([
        { src: Photo1, likes: 47 },
        { src: Photo2, likes: 27 },
        { src: Photo3, likes: 151 },
        { src: Photo4, likes: 85 },
        { src: Photo5, likes: 13 }
    ])

    return (
        <center>
            <div className="container">
                <div className="grid-wrapper">
                    {photosArray.map(photosArray => (
                        <div className="grid-item">
                            <img src={photosArray.src} />
                        </div>
                    ))}
                </div>
            </div>
        </center>
    )
}

export default Photos