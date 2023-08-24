// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    image: 0,
    heads: 0,
    tails: 0,
    img: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  update = () => {
    const {image, heads, tails} = this.state
    this.setState({image: Math.floor(Math.random() * 2)})
    if (image === 0) {
      this.setState({
        img: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })

      this.setState(prev => ({heads: prev.heads + 1}))
    } else {
      this.setState({
        img: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })

      this.setState(prev => ({tails: prev.tails + 1}))
    }
  }

  render() {
    const {heads, tails, img} = this.state

    return (
      <div className="card">
        <div className="cad">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={img} alt="toss result" />
          <button type="button" onClick={this.update}>
            Toss Coin
          </button>
          <div className="bt">
            <p className="p">Total: {heads + tails}</p>
            <p className="p">Heads: {heads}</p>
            <p className="p">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
