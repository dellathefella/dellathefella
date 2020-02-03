import React,{Component} from 'react';
import data from './data.json';





function RandomQuote() {



  



  return (
    <div>
     {data.map((data) => {
      return <div>
          <h1>My hobbies include:</h1>
              <ul>
            {data.hobbylist.map((hobby) =><li>{hobby}</li>)}
            </ul>
          </div>
      })
  
          
          
          
      
      }   </div>
  );
}

export default RandomQuote;
