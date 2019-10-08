import React,{Component} from 'react';

class ErrorBoundary extends Component  {

	constructor(props){
		super(props)
this.state={
HasError: false
	    }
   }

componentDidCatch(error,info){
	this.setState({HasError:true});
}

render(){
if(this.state.HasError)
{
return	<h1>Oops Error Occured!</h1>
}
return this.props.children
}



}

export default ErrorBoundary