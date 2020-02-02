import React from 'react';
import { Button } from 'reactstrap';
 
function PrintData() {
  return (
    <div>
      <Button color="danger">Danger!</Button>
      {data.map((data) => {
          return <div>

            <h1>{data.name}</h1>
            <br></br>
            <img src={data.imgurl} className="App-logo" alt="logo" />
            </div>
          
          
      
      })}
    </div>
  );
}

export default PrintData;
