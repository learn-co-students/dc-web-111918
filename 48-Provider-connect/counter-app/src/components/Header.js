import React from 'react'
import {connect} from 'react-redux'
import logo from '../logo.svg';

const Header = (props) => {
  return (
    <header className="App-header" style={{color: props.color}}>
      <img src={logo} className="App-logo" alt="logo" />
      <h3>{`The current count is less than ${props.countValue + (5 - (props.countValue % 5))}`}</h3>
    </header>
  )
}
const mapStateToProps = (state) => {
  return {
    countValue: state.count
  }
}
// const EnhancedHeader = connect(mapStateToProps)(Header)
// const withCounter = connect(mapStateToProps)
// const EnhancedHeader = withCounter(Header)
// export default EnhancedHeader
export default connect(mapStateToProps)(Header)
