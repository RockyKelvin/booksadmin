import React from 'react';
import './booksadmin.css'
import {
    editAction,
    deleteAction,
    checkboxChangeAction,
    selectAllAction,
    deleteSelectedAction
} from '../../store/actionCreate'
import Input from '../../components/input'
import Table from '../../components/table'
import {connect} from 'react-redux'
let $ = React.Component
class Boox extends ${
    render(){
        return (
        <div>
            <div className="wrap">
                <Input />
                <Table />
                <hr />
                <button onClick={this.props.deleteSelected.bind(this)}>删除</button>
            </div>

        </div>)
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
        edit(index,e){
            e.preventDefault()
            let action = editAction(index)
            dispatch(action) 
        },
        delete(index,e){
            e.preventDefault()
            let action = deleteAction(index)
            dispatch(action) 
        },
        checkboxChange(id){
            let action = checkboxChangeAction(id)
            dispatch(action) 
        },
        selectAll(){
            let action = selectAllAction()
            dispatch(action) 
        },
        deleteSelected(){
            let action = deleteSelectedAction()
            dispatch(action) 
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Boox);