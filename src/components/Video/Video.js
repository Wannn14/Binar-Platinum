import React from 'react'
import ReactPlayer from 'react-player'
import './Video.css'

const Video = () => {
    return (
        <div className='container'>
            <div className='row row-video'>
                <h2 className='text-center mb-4'>Video Mobil</h2>
                <div className='player-wrapper'>
                    <ReactPlayer
                        url='https://youtu.be/-LiPJ-paiZA'
                        className='react-player'
                        autoPlay={false}
                        controls={true}
                        width='100%'
                        height='100%'/>
                </div>
            </div>
        </div>

    )
}

export default Video