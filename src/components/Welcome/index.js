// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isClicked: false}

  isSubscribe = () => {
    this.setState(prevValue => ({isClicked: !prevValue.isClicked}))
  }

  getButtonText = () => {
    const {isClicked} = this.state
    return isClicked ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonTxt = this.getButtonText()

    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you Happy Learning</p>
        <div>
          <button className="button" type="button" onClick={this.isSubscribe}>
            {buttonTxt}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
