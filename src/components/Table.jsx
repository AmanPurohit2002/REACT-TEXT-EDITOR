import React, { Component } from 'react'
import "./Table.css";

export default class table extends Component {
    constructor(props){
        super(props);
        this.state={name:"Enter the text here",backgroundColor:"white",color:"black",find1:"",replace1:"",toggleText:"Dark Mode"};
    }
    changeAgain=(e)=>{
      this.setState({name:e.target.value})
    }
    changeAgain1=(e)=>{
      this.setState({find1:e.target.value})
    }
    changeAgain2=(e)=>{
      this.setState({replace1:e.target.value})
    }
    upper=()=>{
        this.setState({name:this.state.name.toUpperCase()})
    }
    lower=()=>{
      this.setState({name:this.state.name.toLowerCase()})
    }
    firstCapital=()=>{
      let newWord="";
      let res=this.state.name.split(" ").map((word)=>{
        newWord+=word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        return newWord;
      })
      res.join(" ");
      this.setState({name: newWord})
    }
    removeSpaces=()=>{
      let ans=this.state.name.replace(/\s{2,}/g," ");
      this.setState({name:ans})
    }
    empty=()=>{
      this.setState({name:""})
    }
    toggleMode=()=>{
      this.state.backgroundColor==="white" && this.state.color==="black" && this.state.toggleText==="Dark Mode" ? this.setState({backgroundColor:"black",color:"white",toggleText:"White Mode"}) :
      this.setState({backgroundColor:"white",color:"black",toggleText:"Dark Mode"})
      
    }
    findAndReplace=()=>{
      let ans1=this.state.name.replaceAll(this.state.find1,this.state.replace1);
      this.setState({name:ans1});
    }
   
  render() {
    return (
      <>
      <h1 style={{backgroundColor:this.state.backgroundColor,color:this.state.color}}>Aman's Text Editor</h1>
      <div style={{textAlign:"center",backgroundColor:this.state.backgroundColor}}>
      <textarea style={{width:"50rem",height:"30rem",backgroundColor:this.state.backgroundColor,color:this.state.color,fontSize:"35px"}} onChange={this.changeAgain}  value={this.state.name}></textarea><br/>
      <div className='btn' style={{margin: "auto",width:"750px"}}>
        <button style={{backgroundColor:"orange",marginRight:"15px"}} onClick={this.upper}>Upper case</button>
        <button style={{backgroundColor:"white",marginRight:"15px"}} onClick={this.lower}>Lower case</button>
        <button style={{backgroundColor:"lightGreen",marginRight:"15px"}} onClick={this.firstCapital}>Capitalize</button>
        <button style={{backgroundColor:"yellow",marginRight:"15px"}} onClick={this.removeSpaces}>Delete Extra Spaces</button>
        <button style={{backgroundColor:"lightBlue",marginRight:"15px"}} onClick={this.empty}>Delete</button>
        <button style={{backgroundColor:"pink",marginRight:"15px"}} onClick={this.toggleMode}>{this.state.toggleText}</button>
        <button style={{backgroundColor:"lightPurple"}} onClick={this.findAndReplace}>Find and Replace</button>
      </div>
      <div id="input">
        <input onChange={this.changeAgain1} value={this.state.find1}/>
        <input onChange={this.changeAgain2} value={this.state.replace1}/>
      </div>
        <p style={{fontSize:"35px",color:"Green"}}>{this.state.name === "" ? 0 : this.state.name.split(" ").length} words</p>
        <p style={{fontSize:"35px",color:"red"}}>{this.state.name === "" ? 0 : this.state.name.length} characters</p>
        <p style={{fontSize:"35px",color:"grey"}}>Time required to read this article is {0.008*(this.state.name.split(" ").length)} seconds</p>
      </div>
      </>
      
    )
  }
}


