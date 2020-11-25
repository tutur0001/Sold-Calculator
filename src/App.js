import React, { Component } from 'react'
import CalcbyP from './components/Type'
import './App.css'



class App extends Component {

state = {
  price: '',
  pourcent: ''
}

handleClick = () => {
  const data = { ...this.state }
  const pourcent = 100 - data.pourcent
  const result = data.price * pourcent / 100
  alert("Le prix final est : " + result + "€")
}

onHandleEvent = (event) => {
  console.log(this.state)
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