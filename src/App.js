import Input1 from "./Input1"
import Input2 from "./Input2"
import React from "react"
import "./App.css"
class App extends React.Component {
 state={
  currInput1:"",
  currInput2:"",
  number: "Sum"
 }

 setValue1=(e)=>{
  this.setState({currInput1:e.currentTarget.value})
 }
 
 setValue2=(e)=>{
  this.setState({currInput2:e.currentTarget.value})
 }

 handleTasks1=()=>{
   console.log(this.state.currInput1);
  this.setState({
       currInput1:""
  });
}
handleTasks2=()=>{
  console.log(this.state.currInput2);
  this.setState({
       currInput2:""
  });
}

  render = () => {

    return (
      <div className="main">
       
      <div className="number">{this.state.number}</div>
     <div className="buttons">
      <span> <button  onClick={()=>{


  let val=parseInt(this.currInput1)+parseInt(this.currInput2)
  console.log(typeof(val))
  console.log(val);
  console.log(typeof(parseInt(this.currInput2)))
        this.setState({number:val.toString(8)})
      }} className="add">+</button></span>
      <span> <button  onClick={()=>{
       let val=parseInt(this.currInput1)-parseInt(this.currInput2)
       console.log(val)
             this.setState({number:val.toString(8)})
      }} className="sub">-</button></span>
      <span> <button onClick={()=>{
     let val=parseInt(this.currInput1)*parseInt(this.currInput2)
     console.log(val)
           this.setState({number:val.toString(8)})
      }} className="mul">*</button></span>
      <span> <button  onClick={()=>{
     let val=parseInt(this.currInput1)/parseInt(this.currInput2)
     console.log(val)
           this.setState({number:val.toString(8)})
      }}className="div">/</button></span> 
     </div>
      <div className="inputs1">
        <Input1 currInput1={this.state.currInput1}  handleTasks1={this.handleTasks1} setValue1={this. setValue1}/> 
       
      </div>
      <div className="inputs2">
       
        <Input2 currInput2={this.state.currInput2}  handleTasks2={this.handleTasks2} setValue2={this. setValue2}/> 
      </div>

    
   </div>    
    )   
  };
    

}
export default App;





