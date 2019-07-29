import React from 'react';
import moment from 'moment';






const PostData = (props) =>{


    const formatDate=(date)=>{
        return moment(date).format('MM-DD-YY')
    }


    return(
        <div style={{
            border:'1px solid #c5c5c5',
            borderBottom:'0px',
            background:'#fff',
            margin:'5px 5px 0 5px',
            padding:'10px',
            fontSize:'13px',
            fontWeight:'300'

        }}>
            <div>
                Date:
                <span style={{
                    fontWeight:'500'
                }}>{formatDate(props.data.date)}</span>
            </div>
            <div>
                Author:
                <span style={{
                    fontWeight:'500'
                }}>{props.data.author}</span>
            </div>
        </div>
    )
}


export default PostData;