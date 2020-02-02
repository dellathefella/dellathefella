
import React from 'react';
import './Links.css';
const Links = () => {
    return (
       <div >
        <h1>Links</h1>
        <hr class = "bluebar"></hr>
        <a href="https://github.com/jdella1996" target="_blank" >GitHub<span class="sr-only">(current)</span></a>
            <br></br>
        <a href="https://gitlab.com/jdella1996" target="_blank" >GitLab<span class="sr-only">(current)</span></a>
            <br></br>

        <a  href="https://twitter.com/JDella1996" target="_blank" >Twitter<span class="sr-only">(current)</span></a>
       </div>
    );
}
 
export default Links;