import React, { useState } from 'react';
import './Photos.css'

const Photos = () => {
    const [photosArray] = useState ([
        { src: '', likes: 47 },
        { src: '', likes: 27 },
        { src: '', likes: 151 },
        { src: '', likes: 85 },
        { src: '', likes: 13 }
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