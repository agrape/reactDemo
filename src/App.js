import React, { Component } from 'react'

class App extends Component{
  //js的构造函数，优于其他任何函数执行
  constructor (props) {
    super (props)  //调用父类的构造函数，固定写法
    this.state = {
      name: 'xiaoming',
      inputValue: 'this is react',
      list: ['美食','旅游','时尚','健身']
    }
  }
  render () {
    return (
      <div>
        <div>hello {this.state.name}</div>
        <div><input value={this.state.inputValue} onChange={this.inputChange.bind(this)}/></div>
        <div>{true ? 'react' : 'word'}</div>
        <button onClick={this.add.bind(this)}>增加</button>
        <button onClick={this.del.bind(this)}>删除</button>
        <div>
          <ul>
            {
              this.state.list.map((item, index) => {
                return <li key={index}>{item}</li>
              })
            }
          </ul>
        </div>
      </div>
      
    )
  }
  inputChange (e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  add () {
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    })
  }
  del () {
    let list = this.state.list
    list.splice(this.state.list.length - 1,1)
    this.setState({
      list: list
    })
   
  }
}


export default App

