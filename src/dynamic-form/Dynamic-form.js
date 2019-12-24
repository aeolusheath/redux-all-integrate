
import * as React from "react";
import { useState, useEffect } from "react";


import {
  Form,
  Input,
  Select,
  Divider,
  Button,
  Icon,
  Tooltip
} from 'antd';


// todo 定义typescript 数据格式
const defaultObj = {
    list:[]
  }

function Test(props) {
  

  let [stateObj, setStateObj] = useState(Object.assign( {}, defaultObj));
  const { 
    form: { getFieldDecorator, setFieldValue ,getFieldsValue, getFieldValue, setFieldsValue },
  } = props
  



  const formItemBasicLayout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 12 }
  };



  


  const getFormItems = () => {

    const formItems = stateObj.list.map((item, index) =>(
      <div key={item.key}>
        <Form.Item key={item.key} {...formItemBasicLayout} label="名称" style={{width: '50%', display: 'inline-block'}}>
          {/** 这里不能用index作为key */}
          {/* {getFieldDecorator(`params.list[${index}].name`, { */}
					{getFieldDecorator(`params.list[${item.key}].name`, {          
						initialValue: item.name,
					})(<Input placeholder="请输入名称"></Input>)}

        </Form.Item>
               
        <Tooltip title="删除">
            <Icon onClick = { ()=>{deleteObj(item.key)}} style={{fontSize: 25, marginBottom: 24, cursor: 'pointer'}} type="minus-circle" />
          </Tooltip>
      </div>
    ))

    formItems.push(
        <Button key={'button_'} type="primary" onClick={addObj} style={{marginTop: 10}}> 
         添加 
         <Icon type="plus-circle" /> 
        </Button>
    )
    return formItems;

  }
  const deleteObj= (key)=> {
    let list = JSON.parse(JSON.stringify(stateObj.list));
    console.log('当前删除的是', key)
    list = list.filter(item => item.key !== key)
    console.log('删了之后的list,', list);
    setStateObj(
      Object.assign(
        {},
        stateObj,
        {
          list: list
        }
      )
    )
  }
  const addObj = ()=>{
    let list = JSON.parse(JSON.stringify(stateObj.list));
    list.push({ name: 'k1', key: Date.now() })
    setStateObj(
      Object.assign(
        {},
        stateObj,
        {
          list: list
        }
      )
    )
  }

  const okEvent = ()=>{
    const { form: { getFieldsValue, validateFields } } = props;
    console.log(getFieldsValue())
  }

  return(
    <>
      <Form>
 
        <Divider> Test </Divider>

        {
          getFormItems()

        }

      </Form>

  <Button onClick={okEvent}>ok</Button>
  </>
  )

}

export default (Form.create({})(Test))