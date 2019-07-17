import React, {Component} from 'react';
import './signin.css';

import FormFields from '../widgets/FormFields/formFields';
 



class SignIn extends Component{
    state={
        registerError:'',
        loading:false,
        formdata:{
            email:{
                element:'input',
                value:'',
                config:{
                    name:'email_input',
                    type:'email',
                    placeholder:'Enter your Email'
                },
                validation:{
                    required:true,
                    email:true,
                },
                valid:false,
                touched:false,
                validationMessage:''

            },
            password:{
                element:'input',
                value:'',
                config:{
                    name:'password_input',
                    type:'password',
                    placeholder:'Enter your Password'
                },
                validation:{
                    required:true,
                    password:true,
                },
                valid:false,
                touched:false,
                validationMessage:''
            }
        }

    }


        updateForm = (element) =>{
            const newFormdata={
                ...this.state.formdata
            }
            const newElement ={
                ...newFormdata[element.id]
            }
            newElement.value = element.event.target.value;
            if(element.blur){
                let validData=this.validate(newElement);
            }


            newFormdata[element.id]=newElement; 

            this.setState({
                formdata:newFormdata
            })
            
        }

        validate = (element) =>{
            let error=[true,''];

            if(element.validation.required){
                const valid = element.value.trim()!=='';
                const message = `${!valid?'This field is required':''}`;
            }

        }


    render(){
        return(
            <div className="logContainer">
                <form>
                    <h2>Register/login</h2>
                    <FormFields
                        id={'email'}
                        formdata={this.state.formdata.email}
                        change={(element)=>this.updateForm(element)}
                    />

                    <FormFields
                        id={'password'}
                        formdata={this.state.formdata.password}
                        change={(element)=>this.updateForm(element)}
                    />

                </form>

            </div>
        )
    }
} 



export default SignIn;