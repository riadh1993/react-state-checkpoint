/*import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Button} from "react-bootstrap"





 class App extends Component {
   constructor (props) {
     super(props)
     this.state = { show : true };
     this.toggleProfile = this.toggleProfile.bind(this)
     
   }
   toggleProfile = () => {
     const { show } = this.state;
     this.setState( {show : !show} )
   }
  render() {
    return (
      <div>       
        
       <Button onClick = {this.toggleProfile} variant="danger m-2">Toggle profile</Button>
       

        {this.state.show && <Profile />}
      </div>
       
      
    );
  }
}

class Profile extends Component {
  constructor(props) {
    
    super (props)
    this.state = {
      FullName: "John Wick",
      Biography: "born in 1970 and died in 2020 by corona virus.",
      Profession: "Ex assasin",
      ImgSrc: "./profilePhoto.PNG"
      
    }
  }
  render() {
    return (

        <div style={{textAlign: "center",color: "purple", margin:"30px"}}>
       <h1>the full name is {this.state.FullName} </h1>
       <h1>and he is an {this.state.Profession} </h1>
       <h1>his biography {this.state.Biography} </h1>
       <h1>profile photo {this.state.ImgSrc} </h1>         
      </div>
    )
  }
}
export default App;*/

import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Button} from 'react-bootstrap'





 class App extends Component {
   constructor(props){
     super (props)
     this.state = {show : true}
     this.toggleProfile = this.toggleProfile.bind(this)
   }
   toggleProfile = () => {
     const { show } = this.state;
     this.setState({ show : !show })
     
   }
  render() {
    return (
      <div>
        <Button onClick = {this.toggleProfile} variant="success m-2">Toggle Show</Button>
        {this.state.show && <Profile />}
      </div>
    )
  }
}
setInterval( () => {
  console.log("the component has been mounting since")
}

,1000)

class Profile extends Component {
  constructor(props){
    super (props)
    this.state = {
      FullName: "John Wick",
      Biography: "Born in 1970 and died in 2020 by corona",
      Profession: "an assasin",
      imgSrc: "./profile.JPG",

    }
  }
  render() {
    return (
      <div style = {{textAlign: "center",color: "purple", fontSize: "25px",fontFamily: "arial"}}>
        <h1>fullname: {this.state.FullName} </h1>
        <h1>profession: {this.state.Biography} </h1>
        <h1>fullname: {this.state.Profession} </h1>
        <h1>fullname: {this.state.imgSrc} </h1>
      </div>
    )
  }
}

export default App;


