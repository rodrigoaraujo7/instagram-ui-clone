import React from 'react';
import './Photos.css'

const Photos = () => {
    const photo = [
        { src: '', likes: 47 },
        { src: '', likes: 27 },
        { src: '', likes: 151 },
        { src: '', likes: 85 },
        { src: '', likes: 13 }
    ]

    return (
        <center>
            <div className="container">
                <div className="grid-wrapper">
                    {photo.map(photo => (
                        <div className="grid-item">
                            <img src={photo.src} />
                        </div>
                    ))
                    }
                </div>
            </div>
        </center>
    )
}

export default Photos