import React, { Component } from 'react';
import { CSSTransition , TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { firebaseTeams, firebaseArticles, firebaseLooper} from '../../../firebase';

import Button from '../Buttons/button';
import CardInfo from '../../widgets/CardInfo/cardinfo';
import { thisExpression } from '@babel/types';



class NewsList extends Component {

    state={
        teams:[],
        items:[],
        start:this.props.start,
        end:this.props.start+this.props.amount,
        amount:this.props.amount

    }
    componentWillMount(){
        this.request(this.state.start,this.state.end)
      
    }

    request = (start,end) => {
        if(this.state.teams.length < 1){
            firebaseTeams.once('value')
            .then((snapshot)=>{
                const teams = firebaseLooper(snapshot);
                this.setState({
                    teams
                })
            })

      //      axios.get(`${URL}/teams`)
        //    .then( response =>{
      //          this.setState({
               //     teams:response.data
             //   })
           // })

        }

        firebaseArticles.orderByChild('id').startAt(start).endAt(end).once('value')
        .then((snapshot)=>{
            const articles=firebaseLooper(snapshot);
            this.setState({
                items:[...this.state.items,...articles],
                start,
                end
            })
        })
        
        



     //   axios.get(`${URL}/articles?_start=${this.state.start}&_end=${this.state.end}`)
    //    .then( response=>{
     //       this.setState({
        //        items:[...this.state.items,...response.data],
      //          start,
    //            end
  //          })
//
    //    })

    }

    loadMore = () =>{
        let end=this.state.end+this.state.amount
        this.request(this.state.end+1,end)
    }



    renderNews = (type) => {
        let template = null;

     


        switch(type){
            case('card'):
                template = this.state.items.map( (item,i) => (
          
                        <div>
                        <div style={{
                            border:'1px solid #f2f2f2',
                            background:'#fff',
                            marginTop:'0px',
                            padding:'8px 5px 0 5px'


                        }}>
                            <Link 
                            style={{
                                textDecoration:'none',
                            }}
                            to={`/articles/${item.id}`}>
                                <CardInfo teams={this.state.teams} team={item.team} date={item.date}/>
                                <h2 style={{
                                    fontSize:'13px',
                                    lineHeight:'21px',
                                    margin:'5px 0',
                                    color:'#525252'

                                }}>{item.title}</h2>
                            </Link>
                        </div>
                    </div>
                    
    
                ))
                break;
            default:
                template = null;
        }

        return template;
    }

    render() {
        
        
        return (
            <div>
                <TransitionGroup
                component="div"
                className="list"
                
                >
                    {this.renderNews( this.props.type )}
                </TransitionGroup>
                <Button
                    type="loadmore"
                    loadMore={()=>this.loadMore()}
                    cta="Load More News"
                />

            </div>
        )
    }
}


export default NewsList;
