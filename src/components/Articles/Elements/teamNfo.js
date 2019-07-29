import React from 'react';



const TeamNfo = (props) =>{
return(
    <div style={{
        border:'1px solid #c5c5c5',
        borderBottom:'0px',
        background:'#fff',
        margin:'5px 5px 0 5px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }}>
        <div style={{
            background:`url('/images/teams/${props.team.logo}')`,
            width:'57px',
            height:'50px',
            backgroundSize:'65% !important',
            backgroundRepeat:'no-repeat !important',
            backgroundPosition:'center center !important'

        }}>

        </div>
        <div style={{
            flexGrow:'1',
            paddingLeft:'10px',
            fontSize:'10px',
            fontWeight:'300'
        

        }}>
            <div>
                <span>{props.team.city} {props.team.name}</span>
            </div>
            <div>
                <strong>W{props.team.stats[0].wins}-L{props.team.stats[0].defeats}</strong>
            </div>

        </div>
    </div>
)
}

export default TeamNfo;