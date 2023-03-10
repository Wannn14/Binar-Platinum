import React from 'react'
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import "./Gallery.css";
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import jeep from "../../assets/image/jeep.jpg";
import tesla from "../../assets/image/tesla.jpg";
import pickup from "../../assets/image/pickup.jpg";
import audi from "../../assets/image/audi.jpg";
import bmw from "../../assets/image/bmw.jpg";
import mini from "../../assets/image/mini.jpg";

const Gallery = () => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="container">
                <div className='row row-gallery'>
                <h2 className='text-center mb-4'>Gallery Mobil</h2>
                    <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
                        <a href={jeep}>
                            <img className='gallery-image' alt="Jeep" src={jeep}/>
                        </a>
                        <a href={tesla}>
                            <img className='gallery-image' alt="Tesla" src={tesla}/>
                        </a>
                        <a href={pickup}>
                            <img className='gallery-image' alt="Jeep" src={pickup}/>
                        </a>
                        <a href={audi}>
                            <img className='gallery-image' alt="Jeep" src={audi}/>
                        </a>
                        <a href={bmw}>
                            <img className='gallery-image' alt="Jeep" src={bmw}/>
                        </a>
                        <a href={mini}>
                            <img className='gallery-image' alt="Jeep" src={mini}/>
                        </a>

                    </LightGallery>
                </div>
        </div>
    )
}

export default Gallery