
import React from 'react';
const Links = () => {
    return (
        <div className="page">
        <section>
        <div id = "heading">
        <h1>Links</h1><h1 class = "blinking">_</h1>   
        </div> 
        <hr class = "greenbar"></hr>
        <ul>
            <li>
                 <a href="https://github.com/jdella1996" target="_blank" >GitHub<span class="sr-only">(current)</span></a>
                 <br></br>
            </li>

            <li>
                <a href="https://gitlab.com/jdella1996" target="_blank" >GitLab<span class="sr-only">(current)</span></a>
                <br></br>
            </li>

            <li>
                <a  href="https://twitter.com/JDella1996" target="_blank" >Twitter<span class="sr-only">(current)</span></a>
                <br></br>
            </li>
    

        </ul>
            <br></br>
            <br></br>
        <hr class = "greenbar"></hr>
       </section>
       </div>
    );
}
 
export default Links;