import React,{Component} from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import quotes from './staticfiles/json/quotes.json';
class Home extends Component{
    
    constructor(props)
    {
        super(props);
    }

      getQuotes() {
        let RandomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        let triggered = false
        return quotes.map((quote) => {
        if (!triggered){
            triggered = true
            return (
                <div>
                <h4 className='frontpage'>
                    <h3>Random quote of the day</h3>
                  {RandomQuote.quote_author} - "{RandomQuote.quote_contents}" 
                
                        
                 </h4>
                  </div>
              ); 
        }

        });
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
	<div id = "heading">
        <h1>Home</h1><h1 class = "blinking">_</h1>   
        </div> 
        <hr class = "colorbar"></hr>
        <h1>{this.getQuotes()}</h1>
        <hr class = "colorbar"></hr>
        <p>Welcome to my website, my name is Jacob Della. I have a bachelor's of computer science and a Mathematics minor from Towson University. 
          I have experience working in IT and developing software.
          I have included my resume and additional documents which can be found under links. Thank you for your time and consideration. 
        </p>
          <hr class = "colorbar"></hr>
          <h1>Tweets</h1>
          <a>
          <TwitterTimelineEmbed
          id = "twitter-widget"
          sourceType="profile"
          screenName="dellathefella_"
          options={{height: 800, width:700}}
          />
          </a>
          <p>By dellathefella</p>
        </section>
       </div>
        );
    }
}
 
export default Home;
