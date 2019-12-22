import React from 'react';
import {
  Input,
  Button,
  List
} from 'antd'
const TodoListUI = (props) => {

  return (
    <div style={{margin: 20}}>
      <div> 
        <Input 
          placeholder={props.inputValue}
          style= {{width: 250, marginRight: 20}}  
          onChange = { props.changeInputValue }
          value = { props.inputValue }
        />
        <Button type="primary" onClick={props.addItem}>
          添加
        </Button>
      </div>
      <div style={{margin: 10, marginLeft: 0,  width: 330}}>
        <List 
          bordered
          dataSource = {props.list}
          renderItem = {
            (item, index) => (<List.Item onClick={()=>props.deleteItem(index)}>{item}</List.Item>)
          }
        />
      </div>
    </div>
  )
}

export default TodoListUI


// import React, { PureComponent } from 'react';
// import 'antd/dist/antd.css'
// import { Input , Button , List } from 'antd'
// class TodoListUi extends PureComponent {

//     render() { 
//         return ( 
//             <div style={{margin:'10px'}}>
//                 <div>
//                     <Input  
//                         style={{ width:'250px', marginRight:'10px'}}
//                         onChange={this.props.changeInputValue}
//                         value={this.props.inputValue}
//                     />
//                     <Button 
//                         type="primary"
//                         onClick={this.props.addItem}
//                     >增加</Button>
//                 </div>
//                 <div style={{margin:'10px',width:'300px'}}>
//                     <List
//                         bordered
//                         dataSource={this.props.list}
//                         renderItem={(item,index)=>(<List.Item onClick={()=>{this.props.deleteItem(index)}}>{item}</List.Item>)}
//                     />    
//                 </div>
//             </div>
//          );
//     }
// }

// export default TodoListUi;