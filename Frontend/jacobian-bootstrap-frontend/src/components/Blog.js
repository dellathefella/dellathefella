import React,{Component} from 'react';
 
class Blog extends Component{
    
    constructor(props)
    {
        super(props);
        this.state = {
            posts : []
        };
    }

    
    async componentDidMount() {
        // Call our fetch function below once the component mounts
      await this.callBackendAPI()
        .then(res => this.setState({ posts: res }))
        .catch(err => console.log(err));
      }

      callBackendAPI = async () => {
        const response = await fetch('/api/displayposts' , {
          method: "POST",
          headers: {
              'Content-type': 'application/json'
          },
          body: JSON.stringify(this.state)
          });
        const body = await response.json();
        if (response.status !== 200) {
          throw Error(body.message) 
        }
        return body;
      };

      getPosts() {
        this.state.posts = this.state.posts.reverse();
        return this.state.posts.map((post) => {
            return (
                <li>               
                <h2>{post.post_title}</h2>         
                <hr class = "blackbar"></hr>
                <h3>{post.post_date}</h3>
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
    return (
        <div className="page">
        <section>
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
       </section>
       </div>
    );
}

}
 
export default Blog;