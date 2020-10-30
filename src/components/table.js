import React from 'react'
import {
    editAction,
    deleteAction,
    checkboxChangeAction,
    selectAllAction,
    deleteSelectedAction
} from '../store/actionCreate'
import {connect} from 'react-redux'
let $ = React.Component

class Table extends ${
    render(){
        let itemlist = this.props.books.map((item,index)=>{
            return  <tr key={index}>
                        <td><input type="checkbox" checked={item.checked} value={item.id} onChange={this.props.checkboxChange.bind(this,item.id)}/></td>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>
                            <a href="javascript;" onClick={this.props.edit.bind(this,index)}>编辑</a>
                            <span> | </span>
                            <a href="javascript;" onClick={this.props.delete.bind(this,index)}>删除</a>
                        </td>
                    </tr>
        })
        return  <table>
                    <tbody>
                        <tr> 
                            <th><input type="checkbox" value="all" checked={this.props.checkedAll} onChange={this.props.selectAll.bind(this)}/>全部</th>
                            <th>编号</th>
                            <th>名称</th>
                            <th>操作</th>
                        </tr>
                        {itemlist.length===0 ? <tr><td colSpan='4'>请求数据中。。。</td></tr> : itemlist}
                    </tbody>
                </table>
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
export default connect(mapStateToProps,mapDispatchToProps)(Table);