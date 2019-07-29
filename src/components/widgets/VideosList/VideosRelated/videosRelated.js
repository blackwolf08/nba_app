import React from 'react';
import VideoListTemplate from '../videosListTemplate';




const VideosRelated = (props) =>{
    return(
    <div style={{
        margin:'0 5px',


    }} >
        <h3 style={{
            textAlign:'center',
            color:'#4d4d4d',
            background:'#fff',
            paddingTop:'10px',
            paddingBottom:'10px',
            marginLeft:'1px',
            marginRight:'1px'

        }}>Related Videos</h3>
        <VideoListTemplate
        data={props.data}
        teams={props.teams}
        />
    </div>
    )

}
   


export default VideosRelated;