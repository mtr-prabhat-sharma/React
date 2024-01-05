import React from "react";
import { StateCounter } from "./Counter";

export class Login extends React.Component{
    constructor(){
        super();
        this.state = {username:'admin', pwd:'nimda'};
    }

    handleClick() {
        this.setState({username:'normalUser', pwd:'normal@123'});
        alert(`username: ${this.state.username} | password: ${this.state.pwd}`);
    }
    render() {
        return (
            <main>
                <input type="text" placeholder="Enter Username" value={this.state.username} />
                <br />
                <input type="password" placeholder="Enter Password" value={this.state.pwd} />
                <br />
                <button onClick={() => this.handleClick()}>Login</button>
            </main>
        );
    }
}

export class LoginEvents extends React.Component {
    constructor() {
        super();
        this.state = {username:'', pwd:''};
    }

    handleClick(e) {
        if(this.state.username == 'admin' && this.state.pwd == 'nimda') {
            this.setState({status:true});
        }
        else  {
            this.setState({status:false});
        }
    }

    changeUser(e) {
        this.setState({username:e.target.value});
    }

    changePwd(e) {
        this.setState({pwd:e.target.value});
    }

    showStatus() {
      if(this.state.status == true) {
        return(<span className="alert-success">Login Successful</span>)
      } else {
        return(<span className="alert-danger">Login Failed</span>)
      }
    }

    render() {
        return (
            <main>
                <input type="text" placeholder="Enter Username" onChange={(e) => this.changeUser(e)} />
                <br />
                <input type="password" placeholder="Enter Password" onChange={(e) => this.changePwd(e)} />
                <br />
                <button onClick={() => this.handleClick()}>Login</button>
                <StateCounter />
                <hr />
                {this.showStatus()};
            </main>
        );
    }
}