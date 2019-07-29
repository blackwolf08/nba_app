import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { firebase } from './firebase';

import Routes from './routes';


const App = (props) =>{
    return(
        <BrowserRouter>
            <Routes{...props}/>
        </BrowserRouter>
    )

} 

serviceWorker.register();


firebase.auth().onAuthStateChanged((user)=>{
    ReactDOM.render(<App />, document.getElementById('root'));

})



