import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

class App extends React.Component
{

  constructor(props)
  {
      document.title = "JDella1996";
      super(props);
      this.state = {
          TodoList : ["test","foof"],
          TodoBuffer : ""
        };
  }
AddItem = (event) => {
  if(this.state.TodoBuffer == ""){
  alert("Please enter something to do :(");
  } else {
  let newarray = this.state.TodoList;
  newarray.push(this.state.TodoBuffer);
  this.setState({TodoList : newarray});
  }
};

RemoveItem = (event, index) => {
  let newarray = this.state.TodoList;
  delete newarray[index];
  this.setState({TodoList : newarray});
};



 handleBufferUpdate = (event) => {
  this.setState({TodoBuffer: event.target.value});
}




render(){
  return (
    <div>

<body>
<h1>To-do List</h1>
      <form>
      <input type='text' value = {this.state.TodoBuffer} onChange={this.handleBufferUpdate} />
      <Button color = "danger" onClick={(event) => {this.AddItem(event)}}>+</Button>
      </form>
    <ol>
      {this.state.TodoList.map((data) => {
        let index = this.state.TodoList.indexOf(data);
      return <div>
              <li> 
              <form>
              {data} <button type = "button" onClick={(event) => {this.RemoveItem(event,index)}}> X </button>
              </form> 
              </li>
            </div>
          
          
      
      })}
      </ol>
 </body>



      
    </div>
  );
  }

}





export default App;


