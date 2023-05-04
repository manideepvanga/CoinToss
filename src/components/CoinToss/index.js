// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    head: 0,
    tail: 0,
    imgurl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  getresult = event => {
    const result = Math.floor(Math.random() * 2)
    if (result === 0) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        head: prevState.head + 1,
        imgurl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total + 1,
        tail: prevState.tail + 1,
        imgurl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {imgurl, total, head, tail} = this.state
    return (
      <div className="container">
        <div className="content">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={imgurl} />
          <button onClick={this.getresult}>Toss Coin</button>
          <div className="totalcontainer">
            <p>Total:{total}</p>
            <p>Heads:{head}</p>
            <p>Tails:{tail}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
