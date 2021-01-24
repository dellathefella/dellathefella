import React,{Component} from 'react';
import Moment from 'moment';
import blog from './staticfiles/json/blog.json';
class Blog extends Component{
    
    constructor(props)
    {
        super(props);
    }

    getPosts() {
        return blog.map((post) => {
            return (
                <li>               
                <h2>{post.post_title}</h2>         
                <hr class = "blackbar"></hr>
                <h3>{Moment(post.post_date).format('h:mma ddd MM/DD/YYYY')}</h3>
                <p>{post.post_body}</p>
                <img src={post.post_picture}></img>
               <hr class = "blackbar"></hr>
               <br></br>
               <br></br>
               <br></br>
                </li>
              ); 
        });
        }


 
render() {
  Moment.locale('en');


    return (
        <div className="page">
        <section>
	<br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div id = "heading">
        <h1>Blog</h1><h1 class = "blinking">_</h1>   
        </div>
        <hr class = "greenbar"></hr>
        <br></br>
        <br></br>
           <ul>

            {this.getPosts()}

           </ul>
           <hr class = "greenbar"></hr>
           <p>By JDella1996</p>
       </section>
       </div>
    );
}

}
 
export default Blog;