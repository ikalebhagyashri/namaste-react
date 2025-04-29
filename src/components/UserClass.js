import React from "react";
class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state={
          userInfo:{
            name:"dummy name",
            location:"Default",
            avatar_url:""
          }
        }
    }

    async componentDidMount()
    {
        const data=await fetch("https://api.github.com/users/ikalebhagyashri")
        const json=await data.json();

        console.log("data here----",json)
        this.setState({userInfo:json})
    }
    
    render(){
        const {name,location,avatar_url}=this.state.userInfo;
       
        return( <div className="user-card">
           <img src={avatar_url}/>
            <h2>{name}</h2>
            <h3>{location}</h3>
            <h4>Contact : bhagyashriikale</h4>
        </div>
        )
    }
}

export default UserClass;