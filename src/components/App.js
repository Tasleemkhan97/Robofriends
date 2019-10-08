import React,{Component} from 'react';
import './App.css';
import 'tachyons';
import CardList from '../containers/CardList';
import SearchBox from '../containers/SearchBox';
import Scroll from '../containers/Scroll';
import ErrorBoundary from './ErrorBoundary';

class App  extends Component   {

constructor()
{
	super()
	this.state = {
		robots:[],
		searchfield :''
	}
}

onSearchChange =(event) => {
	this.setState({searchfield:event.target.value})
	
}

componentDidMount(){
fetch('https://jsonplaceholder.typicode.com/users')
.then(response =>  response.json())
.then(users => this.setState({robots:users}))
}

render()
 {
		const filteredrobots = this.state.robots.filter(robots => {
			return(robots.name.toLowerCase().includes(this.state.searchfield));
		})


   if(this.state.robots.length === 0)
  {
	return( <div className='tc'><h1>Loading</h1></div>);
  }
  else
  {
    return(
	<div className='tc ' background='https://www.gstatic.com/webp/gallery/1.jpgs'>
	<h1 className='f1'>Robofriends</h1>
	<SearchBox searchchange={this.onSearchChange}/>
	<Scroll>
		 <ErrorBoundary>
		   <CardList robots ={filteredrobots}/>
		 </ErrorBoundary>
	</Scroll>
	</div>
	);
   }
  
 }
}

export default App;
