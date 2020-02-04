import React from 'react';

const Contact = () => {
    return (
        <div className="page"><section>
       <div id = "heading">
        <h1>Contact</h1><h1 class = "blinking">_</h1>   
        </div>            
        <hr class = "greenbar"></hr>
           <p></p>
           </section>
           <form>
            <label>
                Name:
                <input type="text" name="name" required/>
                <br></br>
                Email:
                <input type="email" name="email" required/>
                <br></br>
            </label>
            </form>  
            Message:          
            <textarea name="comment" form="message"></textarea>
            
            <input type="submit" value="Submit"/>

           <hr class = "greenbar"></hr>
       </div>
    );
}
 
export default Contact;