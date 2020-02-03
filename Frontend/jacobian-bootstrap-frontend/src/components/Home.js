import React,{Component} from 'react';
 
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
        </section>
       </div>
        );
    }

}
 
export default Home;