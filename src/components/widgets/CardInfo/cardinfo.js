import React from 'react';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';


const CardInfo = (props) =>{

    const teamName =(teams,team) =>{
        let data = teams.find((item)=>{
            return item.teamId === team

        });
        if(data){
            return data.name
        }
    }
    const formatDate=(date)=>{
        return moment(date).format('MM-DD-YYYY')
    }



    return(
        <div style={{
            fontSize:'11px',

        }}>
            <span style={{
                marginRight:'7px',
                background:"#d1d1d1",
                color:'#fff',
                padding:'2px 5px'

            }}>
                {teamName(props.teams,props.team)}

            </span>
            <span style={{
                color:'#2196f3'

            }}>
                <FontAwesome name="clock-o"/>
                {formatDate(props.date)}

            </span>
        </div>
    )
}

export default CardInfo;


