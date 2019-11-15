import React, { Component } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios'

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.refInput = React.createRef()
    this.handleClick = this.handleClick.bind(this)
  }
  render() { 
    return ( 
      <div>
        <input ref={this.refInput}/>
        {this.props.btn}
        {
          !this.props.btn ? '' : <button onClick={this.handleClick}>点击child聚焦</button>
        }
      </div>
    );
  }

  componentDidMount () {
    // axios.post('./ssss').then((res)=> {
    //   console.log(res)
    // }).catch((err) => {
    //   console.log(err)
    // })
  }

  handleClick () {
    console.log(this.refInput)
    this.refInput.current.focus()
  }
}

Child.propTypes = {
  btn: PropTypes.bool
}
 
export default Child;