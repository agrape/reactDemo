import React, { Component } from 'react'
import Item from './component/Item'
import Child from './component/Ref'

// App 组件名
class App extends Component{
  //js的构造函数，优于其他任何函数执行
  // constructor()用来做一些组件的初始化工作，如定义this.state的初始内容
  constructor (props) {
    //  super(props) 用来调用基类的构造方法( constructor() ), 也将父组件的props注入给子组件，供子组件读取(组件中props只读不可变，state可变)
    super (props)  //调用父类的构造函数，固定写法
    this.state = {
      name: 'xiaoming',
      btnStatus: false,
      inputValue: 'this is react',
      list: ['美食','旅游','时尚','<h1>健身</h1>']
    }

    this.childRef = React.createRef()

    this.handleBtn = this.handleBtn.bind(this)
  }
  render () {
    console.log('render=========')
    return (
      <div>
        {/* 注释 */}
        <div className="text">hello {this.state.name}</div>
        <div><input value={this.state.inputValue} onChange={this.inputChange.bind(this)}/></div>
        <div>{true ? 'react' : 'word'}</div>
        <button onClick={this.add.bind(this)}>增加</button>
        <button onClick={this.del.bind(this)}>删除</button>
        <div>
          <ul>
            {
              this.state.list.map((item, index) => {
                return <Item key={index} content={item} index={index} delCurrent={this.delCurrent.bind(this)}/>
                // return <li key={index}>{item}</li>
                // return <li key={index} dangerouslySetInnerHTML={{__html:item}}></li>
              })
            }
          </ul>
        </div>
        <div>
          <div>为DOM元素添加ref</div>
          <Child btn={!this.state.btnStatus}/>
          <br />
          <div>为class组件添加ref</div>
          <button onClick={this.handleBtn}>点击聚焦</button>
          <Child ref={this.childRef} btn={this.state.btnStatus}/>
          
        </div>
      </div>
      
    )
  }
  UNSAFE_componentWillMount () {
    console.log('componentWillMount======')
  }
  // render () {
  //   console.log('render======')
  // }
  componentDidMount () {
    console.log('componentDidMount=======')
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
  delCurrent (index) {
    let list = this.state.list
    list.splice(index,1)
    this.setState({
      list: list
    })
  }
  handleBtn () {
    console.log(this.childRef.current)
    this.childRef.current.handleClick()
  }
}


export default App




