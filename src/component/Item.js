import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = { 

     }
    this.handleClick = this.handleClick.bind(this)
  }

  // 将props转换成自己的state
  // 父组件重传props时就会调用这个方法
  componentWillReceiveProps (nextProps) {
    // console.log('componentWillReceiveProps~~~~~~')
    this.setState({
    })
  }
  
  // getDerivedStateFromProps

  // 应该使用这个方法，否则当父组件重新render时，无论props是否有变化都将会导致组件跟着重新渲染
  shouldComponentUpdate (nextProps, nextState) {
    // console.log('shouldComponentUpdate~~~~~~')
  
    if (nextProps.content === this.props.content) {
      return false
    } else {
      return true
    }
  }

  componentWillUpdate () {
    // console.log('componentWillUpdate~~~~~~~')
  }
  render() { 
    // console.log('child-render')
    return ( 
      <li onClick={this.handleClick}>{this.props.name}{this.props.content}</li>
    )
  }
  handleClick () {
    this.props.delCurrent(this.props.index)
  }
}

Item.propTypes = {
  content: PropTypes.string,
  index: PropTypes.number.isRequired,
  delCurrent: PropTypes.func
}

Item.defaultProps = {
  name: 'tom'
}
 
export default Item;