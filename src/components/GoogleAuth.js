import React from 'react';

class GoogleAuth extends React.Component{
  state = { isSignedIn:null}

  componentDidMount(){
    //this will initilize the library for the oAuth process 
    window.gapi.load('client:auth2',()=>{
      window.gapi.client.init({
        clientId: '424890932795-e2hut8fqpudruenp9642a7f9rvfk07mk.apps.googleusercontent.com',
        scope:'email'
      }).then(()=>{
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({isSignedIn:this.auth.isSignedIn.get()});
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    });
  }

onAuthChange = ()=>{
  this.setState({isSignedIn:this.auth.isSignedIn.get()})
}

signOut =()=>{
  this.auth.signOut()
}

signIn=()=>{
  this.auth.signIn()
}

renderAuthButton=()=>{
  if(this.state.isSignedIn === null){
    return null
  } else if (this.state.isSignedIn){
    return (
      <button onClick={this.signOut} className="ui red google button">
        <i className="google icon" />
        Sign Out
      </button>
    )
  } else {
    return (
      <button onClick ={this.signIn} className="ui red google button">
        <i className="google icon" />
        Sign In with Google
      </button>
    )
  }
}


  render(){
    return(
      <div>
        {this.renderAuthButton()}
      </div>
    )
  }
};

export default GoogleAuth