import React from 'react';
import { Field, reduxForm } from 'redux-form';
//field is a class while redux form is a function that does the connect portion
class StreamCreate extends React.Component{
  renderInput(formProps){
    return <input/>
  }
  render(){
    return(
      <div>
        <form action="">
          <Field component={this.renderInput} name="title"/>
          <Field component={this.renderInput} name="description" />
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate); 