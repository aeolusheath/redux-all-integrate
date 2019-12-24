/** @format */
import React, { useState } from 'react';



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

let fieldIndex = 1;

function Test(props) {
  

  let [stateObj, setStateObj] = useState(Object.assign( {}, defaultObj));
  const { 
    form: { getFieldDecorator, getFieldsValue, getFieldValue, setFieldsValue },
  } = props
  

  console.log(getFieldsValue())

  const formItemBasicLayout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 12 }
  };




  const getFormItems = () => {

    const formItems = stateObj.list.map((item) =>(
      <div key={item.key}>
        <Form.Item {...formItemBasicLayout} label="名称" style={{width: '50%', display: 'inline-block'}}>
					{getFieldDecorator(item.key, {
						initialValue: item.name,
					})(<Input placeholder="请输入名称" />)}

        </Form.Item>
               
        <Tooltip title="删除">
            <Icon onClick = { ()=>{deleteObj(item.key)}} style={{fontSize: 25, marginBottom: 24, cursor: 'pointer'}} type="minus-circle" />
          </Tooltip>
      </div>
    ))

    formItems.push(
        <Button key="a" type="primary" onClick={addObj} style={{marginTop: 10}}> 
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
    list.push({ name: `name${fieldIndex}`, key: `field${fieldIndex}` });
    fieldIndex += 1;
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

export default Form.create()(Test);
