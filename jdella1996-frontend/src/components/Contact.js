import React, { Component } from 'react';

class Contact extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
            triggered: false
        };
    }

    handleNameChange = (event) => {
        this.setState({name: event.target.value});
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    handleMessageChange = (event) => {
        this.setState({message: event.target.value});
    }


    uploadMessageToDatabase()
    {
    if(this.state.triggered == false){
        fetch('/api/sendmessage' , {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
            })
            .then((result) => result.json())
            .then((info) => { console.log(info); });
            alert("Thank you for contacting me!");
            this.state.triggered = true;
    } else {
            alert("You have already submitted a message");
    }   

            
    }

    validate (){
    if(this.state.message == "" && this.state.name == "" && this.state.email == "")
        {
        return true; 
        }
        else
        {
        return false;
        }
    }



    render(){
        return (          
        <div className="page"><section>
        <br></br>
        <br></br>
        <br></br>   
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div id = "heading">
        <h1>Contact</h1><h1 class = "blinking">_</h1>   
        </div>            
        <hr class = "greenbar"></hr>
           <p></p>
           </section>
           <form>
            <label>
                Name:
                <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange} required />
                <br></br>
                Email:
                <input type="text" name="name" value={this.state.email} onChange={this.handleEmailChange} required/>
                <br></br>
            </label>
            </form>  
            Message:          
            <textarea name="comment" form="message" value ={this.state.message} onChange={this.handleMessageChange} required></textarea>
            
            <button value="Submit" disabled={this.validate()}  onClick={() => {this.uploadMessageToDatabase()}}> Submit </button>

           <hr class = "greenbar"></hr>
           <p>By JDella1996</p>
           <p>Hosted on GRAVEYARD going 2 years strong.</p>
            <p>Last Updated 02/2020</p>
       </div>
    );
    }
}
 
export default Contact;
