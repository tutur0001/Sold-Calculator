import React, { Component } from 'react'
import CalcbyP from './components/Type'
import './App.css'



class App extends Component {

state = {
  price: '',
  pourcent: ''
}

getInitialState = () => ({
  price: '',
  pourcent: ''
})

handleClick = () => {

  
  const data = { ...this.state }
  const pourcent = 100 - data.pourcent
  const result = Math.round((data.price * pourcent / 100) * 100 ) / 100
  alert("Le prix final est : " + result + "€")
  this.setState(this.getInitialState());
}



onHandleEvent = (event) => {

  var ex = /^[0-9]+\.?[0-9]*$/;
  if (ex.test(event.target.value) === false) {
      event.target.value = event.target.value.substring(0, event.target.value.length - 1);
      alert('Nombre et point seulement');
  }


    this.setState({ [event.target.name]: event.target.value })

}
  render() {
    const { title } = this.props

    return (
      <div className="App">
        <h1 class='h1Title'>{ title }</h1>
        <CalcbyP price={ this.state.price } pourcent={ this.state.pourcent } calc={ this.handleClick } changing={this.onHandleEvent}/>
      </div>
    ) 
  } 
}

export default App;