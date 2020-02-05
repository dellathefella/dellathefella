import React,{Component} from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

class Home extends Component{
    
    constructor(props)
    {
        super(props);
        this.state = {
            quotes : []
        };
    }

    
    async componentDidMount() {
        // Call our fetch function below once the component mounts
      await this.callBackendAPI()
        .then(res => this.setState({ quotes: res }))
        .catch(err => console.log(err));
      }

      callBackendAPI = async () => {
        const response = await fetch('/api/displayquotes' , {
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

      getQuotes() {
        let RandomQuote = this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)];
        let Triggered = false;
        return this.state.quotes.map((quote) => {
        if (quote  == RandomQuote & Triggered == false){
            Triggered = true;
            return (

                <div>
                <h4 className='frontpage'>
                    <h3>Random quote of the day</h3>
                  {quote.quote_author} - "{quote.quote_contents}" 
                
                        
                 </h4>
                  </div>
              ); 
        }

        });
      }


    render(){
    return (
 
        <div className="page"><section>
        <div id = "heading">
        <h1>Home</h1><h1 class = "blinking">_</h1>   
        </div> 
        <hr class = "greenbar"></hr>
        <h1>{this.getQuotes()}</h1>
        <hr class = "greenbar"></hr>
        <p>My name is Jacob Della, welcome to my site! I am currently a student enrolled at Towson University, enrolled in their Computer Science program. and minoring in Math. My graduation date should be by sometime in 2021. 
          I have numerous years of IT and Software experience doing projects at home and work. I generally tend to focus my efforts on more open technology stacks such as; Python, JavaScript, C++, and Java.If you were 
          around for the original version of this website it used Django, it has now been rewritten to utilize React, Express API and a MySQL docker image. This website is hosted at my house in a Ubuntu VM using Docker images.
          All the important stuff is under links.</p>
          <hr class = "greenbar"></hr>
          <h1>Tweets by yours truly.</h1>
          <a>
          <TwitterTimelineEmbed
          id = "twitter-widget"
          sourceType="profile"
          screenName="JDella1996"
          options={{height: 1200, width:1050}}
          />
          </a>
        <p>By JDella1996</p>
        <p>Hosted on GRAVEYARD going 2 years strong.</p>
        <p>Last Updated 02/2020</p>
        </section>
       </div>
        );
    }

}
 
export default Home;