import {input_change,submitActions,editActions,deleteActions,
        checkboxChangeActions,deleteSelectedActions,selectAllActions} from './actionType'
export const inputChangeAction=(inputname,e)=>{
    return {
        type: input_change,
        inputname: inputname,
        value:e
    }
}
export const submitAction=()=>{
    return {
        type: submitActions,
    }
}
export const editAction=(index)=>{
    return {
        type: editActions,
        index
    }
}
export const deleteAction=(index)=>{
    return {
        type: deleteActions,
        index
    }
}
export const checkboxChangeAction=(id)=>{
    return {
        type: checkboxChangeActions,
        id
    }
}
export const selectAllAction=()=>{
    return {
        type: selectAllActions
    }
}
export const deleteSelectedAction=()=>{
    return {
        type: deleteSelectedActions
    }
}