import React , { Component } from 'react';
import { firebaseDB , firebaseLooper, firebaseTeams} from '../../../../firebase';
import Header from './header';


class NewsArticles extends Component {

    state={
        article:[],
        team:[]
    }

    componentWillMount(){
        firebaseDB.ref(`articles/${this.props.match.params.id}`).once('value')
        .then((snapshot)=>{
            let article = snapshot.val();

            firebaseTeams.orderByChild("teamiId").equalTo(article.team).once('value')
            .then((snapshot)=>{
                const team= firebaseLooper(snapshot);
                this.setState({
                    article,
                    team
                })
            })
        })






//        console.log(this.props.match.params.id);
//
//        axios.get(`${URL}/articles?id=${this.props.match.params.id}`)
//        .then(
//            response => {
//            
//            let article = response.data[0];
//            console.log(response);
//            if(article){
//                axios.get(`${URL}/teams?id=${article.team}`)
//                .then( response => {
//                    this.setState({
//                        article,
//                        team:response.data
//                    })
//                })
//            }

         

//        })
     
    }

    
    render(){
        
        const article= this.state.article;
        const team= this.state.team;



        return(
            <div >
               
               <Header
                    teamData={team[0]}
                    date={article.date}
                    author={article.author}
               />
               <div style={{
                   background:'#fff',
                   margin:'0 5px',
                   border:'1px solid #c5c5c5'
               }}>
                   <h1 style={{
                       fontSize:'25px',
                       fontWeight:'400',
                       color:'#4d4d4d',
                       margin:'15px 0'

                   }}>{article.title}</h1>
                   <div style={{
                       background:`url('/images/articles/${article.image}')`,
                       backgroundSize:'cover !important',
                       width:'100%',
                       height:'200px',
                       backgroundPosition:'center center',
                       backgroundRepeat:'no-repeat !important'

                   }}></div>
                   <div style={{
                       fontWeight:'300',
                       color:'#666666',
                       lineHeight:'23px',
                       margin:'15px 0'
                   }}>
                       {article.body}
                   </div>
               </div>
               
                
                
            </div>
        )

    }
}

export default NewsArticles;
