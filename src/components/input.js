import React from 'react'
import {connect} from 'react-redux'
import {inputChangeAction,submitAction} from '../store/actionCreate'

let $ = React.Component
class Input extends ${
    render(){
        return   <div className = "input-form">
                    <label htmlFor="booksid">图书编号 ：</label>
                    <input type="text" 
                            id="booksid" 
                            value={this.props.booksid}
                            onChange={this.props.inputChange.bind(this,'booksid')} 
                            readOnly = {this.props.editFlag}
                        /> &nbsp;&nbsp;    
                    <label htmlFor="booksname"> 图书名称 ：</label>
                    <input type="text" 
                            id="booksname"  
                            value={this.props.booksname}
                            onChange={this.props.inputChange.bind(this,'booksname')} 
                        />    
                    &nbsp;&nbsp;&nbsp;<button onClick={this.props.submit}>提交</button>
                </div>
    }
}
 // 把store里的数据映射到props属性上;
 const mapStateToProps = (state)=>{
    return {
        booksname:state.booksname,
        booksid:state.booksid,
        editFlag:state.editFlag,
        checkedAll:state.checkedAll,
        books:state.books
    }
}

// 把dispatch 方法映射到props属性上
const mapDispatchToProps = (dispatch)=>{
    return {
        inputChange(inputname,e){
            let action = inputChangeAction(inputname,e.target.value)
            dispatch(action)
        },
        submit(){
            let action = submitAction()
            dispatch(action) 
         }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Input);
