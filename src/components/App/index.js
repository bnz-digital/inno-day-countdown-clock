import React, { Component, Fragment } from 'react'

import Breakdown from '../Breakdown'
import Message from '../Message'
import { getData } from '../../utils'

export default class App extends Component {
  constructor (props) {
    super(props)

    const t = props.t || Date.now()

    this.state = { t }
  }

  componentDidMount () {
    this.interval = setInterval(() => this.setState({ t: Date.now() }), 100)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    const { days, hrs, mins, secs, message } = getData(this.state.t)

    return (
      <Fragment>
        <Message message={message} />
        <Breakdown days={days} hrs={hrs} mins={mins} secs={secs} />
      </Fragment>
    )
  }
}
