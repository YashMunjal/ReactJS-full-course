import React from 'react';
import logo from './logo.svg';
import dice1 from './dice images/dice1.jpeg';
import dice2 from './dice images/dice2.jpeg';
import dice3 from './dice images/dice3.jpeg';
import dice4 from './dice images/dice4.jpeg';
import dice5 from './dice images/dice5.jpeg';
import dice6 from './dice images/dice6.jpeg';
import './App.css';
const dices=[dice1,dice2,dice3,dice4,dice5,dice6];
class App extends React.Component{
	constructor(){
		super();
		this.state={
			face:5
		}
		this.handleclick=this.handleclick.bind(this);
	}
	handleclick(){
		let num=Math.floor(Math.random()*6);
		this.setState({
			face:num
		})
	}
	render(){
		return(
		<div className='main__app'>
		<h1>Dice Roller</h1>
		<img className="diceImg" src={dices[this.state.face]} alt='dice'/>
		<br/>
		<button onClick={this.handleclick}className="dice-roller">Roll Dice</button>
		</div>
		)
	}
}

export default App;
