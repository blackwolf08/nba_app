import React ,{ Component } from 'react';
import { firebaseDB , firebaseLooper, firebaseTeams, firebaseVideos} from '../../../../firebase';

import Header from './header';
import VideosRelated from '../../../widgets/VideosList/VideosRelated/videosRelated';

class VideoArticle extends Component{
    state= {
        article:[],
        team:[],
        teams:[],
        related:[]
    }
    
    componentWillMount(){

        firebaseDB.ref(`videos/${this.props.match.params.id}`).once('value')
        .then((snapshot)=>{
            let article = snapshot.val();

            firebaseTeams.orderByChild("teamiId").equalTo(article.team).once('value')
            .then((snapshot)=>{
                const team= firebaseLooper(snapshot);
                this.setState({
                    article,
                    team
                });
                this.getRelated();
            })
        })
        

  
     
    }


    getRelated = () => {

        firebaseTeams.once('value')
        .then((snapshot)=>{
            const teams = firebaseLooper(snapshot);

            firebaseVideos.orderByChild("team").equalTo(this.state.article.team).limitToFirst(3).once('value')
            .then((snapshot)=>{
                const related= firebaseLooper(snapshot);
                this.setState({
                    teams,
                    related
                })
            })
        })
   
    }


    render(){
        const article=this.state.article;
        const team = this.state.team;


        return(
            <div>
                <Header teamData={team[0]}/>
                 <div style={{
                     background:'#fff',
                     margin:'0 5px',
                     border:'1px solid #c5c5c5',

                 }}>
                     <h1 style={{
                         fontSize:'25px',
                         fontWeight:'400',
                         color:'#4d4d4d',
                         margin:'15px 0',
                         padding:'0 10px'

                     }}>{article.title}</h1>
                     <iframe style={{
                         border:'0'
                     }}
                        title="videoplayer"
                        width="100%"
                        height="300px"
                        src={`https://www.youtube.com/embed/${article.url}`}
                     >

                     </iframe>
                 </div>
                 <VideosRelated
                    data={this.state.related}
                    teams={this.state.teams}
                 />
            </div>
        )
    }
}

export default VideoArticle;