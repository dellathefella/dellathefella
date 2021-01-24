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
        <hr class = "greenbar"></hr>
        <h1>{this.getQuotes()}</h1>
        <hr class = "greenbar"></hr>
        <p>My name is Jacob, welcome to my site! I graduated from Towson University with a bachelors of Computer Science and a Mathematics minor.
          I have numerous years of IT and Software experience doing projects at home and work. I generally tend to focus my efforts on more open technology stacks such as; Python, JavaScript, C++, and Java. If you were 
          around for the original version of this website it used Django, it has now been rewritten to utilize React. This new version of the website dumped the use of an external database system since it was pretty overkill.
          All the important stuff is under links.</p>
          <hr class = "greenbar"></hr>
          <h1>Tweets by yours truly.</h1>
          <a>
          <TwitterTimelineEmbed
          id = "twitter-widget"
          sourceType="profile"
          screenName="JDella1996"
          options={{height: 800, width:700}}
          />
          </a>
        <p>By JDella1996</p>
        </section>
       </div>
        );
    }

}
 
export default Home;
