import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
//field is a class while redux form is a function that does the connect portion
class StreamCreate extends React.Component{

  renderError=({error,touched})=>{
    if(touched && error){
      return(
        <div className="ui error message">
          <div className="header">
            {error}
          </div>
        </div>
      )
    }
  }
  renderInput=({input,label, meta})=>{
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off"/>
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = (formValues)=> {
    this.props.createStream(formValues);
  }

  render(){
  
    return(
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} action="" className="ui form error">
          <Field component={this.renderInput} name="title" label="Enter title " />
          <Field component={this.renderInput} name="description" label="Enter Description " />
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}

//this will validate the form everytime the form is rendered
const validate = (formValues)=>{
  const errors = {};
    if(!formValues.title){
      //will only run if user did not hit title
      errors.title = "you must enter a title!"
    } 

    if(!formValues.description){
      errors.description = "you must enter a description!"
    }

    return errors;
}

const formWrapped =  reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate); 

export default connect(null, {
  createStream
})(formWrapped);