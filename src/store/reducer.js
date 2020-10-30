import {input_change,submitActions,editActions,deleteActions,
    checkboxChangeActions,deleteSelectedActions,selectAllActions} from './actionType'
const defaultState = {
        booksname:'',
        booksid:'',
        editFlag:false,
        checkedAll:false,
        books:[
            {id:1, name: '三国演义', checked: false},
            {id:2, name: '水浒传', checked: false},
            {id:3, name: '西游记', checked: false},
            {id:4, name: '红楼梦', checked: false},
            {id:5, name: '浪潮之巅', checked: false}
        ]
    }
const validate=(books,newState)=>{
        let duplicateId = books.some(item=>{
            return parseInt(item.id) === parseInt(newState.booksid)
        })
        let duplicateName = books.some(item=>{
            return item.name === newState.booksname
        })
        if(newState.booksid==='' || newState.booksname===''){
            alert('图书编号 或 图书名称 不能为空')
            return false
        }
        else if(duplicateId){
            alert('ID 重复')
            return false
        }
        else if(duplicateName){
            alert('书名 重复')
            return false
        }
        else{
            return true
        }
}
export default (state = defaultState,action)=>{
    if(action.type===input_change){
        let newState = JSON.parse(JSON.stringify(state))
        let inputname = action.inputname
        newState[inputname] = action.value;
        return newState;
    }
    else if(action.type===submitActions){
        let newState = JSON.parse(JSON.stringify(state))
      
        if(newState.editFlag){
            newState.books.some(item=>{
                if(parseInt(item.id) === parseInt(newState.booksid)){
                    item.name = newState.booksname
                    newState.booksname=''
                    newState.booksid=''
                    newState.editFlag=false

                    return true
                }
                return false
            })
           
        }
        else if(validate(newState.books,newState)){
                newState.books.push({id:newState.booksid, name:newState.booksname})
                newState.booksname=''
                newState.booksid=''
                newState.editFlag=false
        }
        return newState;   
    }
    else if(action.type===editActions){
        let newState = JSON.parse(JSON.stringify(state))
        newState.editFlag=true
        newState.booksid=newState.books[action.index].id
        newState.booksname=newState.books[action.index].name
    
        return newState;
    }
    else if(action.type===deleteActions){
        let newState = JSON.parse(JSON.stringify(state))
        newState.books.splice(action.index,1)
        return newState;
    }
    else if(action.type===checkboxChangeActions){
        let newState = JSON.parse(JSON.stringify(state))
        newState.books.some(item=>{
            if(parseInt(item.id)===parseInt(action.id)){
                item.checked=!item.checked 
                return true
            }
            return false
        })
        return newState;
    }
    else if(action.type===selectAllActions){
        let newState = JSON.parse(JSON.stringify(state))
        newState.checkedAll = !newState.checkedAll
        newState.books.forEach(item=>{
            item.checked = newState.checkedAll
        })
        return newState;
    }
    else if(action.type===deleteSelectedActions){
        let newState = JSON.parse(JSON.stringify(state))
        let selectedList = []
        newState.books.forEach((item)=>{
            if(item.checked){
                selectedList.push(item.id)
            }
        })
        selectedList.forEach(id=>{
            let index = newState.books.findIndex((item)=>{
               return item.id===id
            })
            newState.books.splice(index,1)
        })
    
        return newState;
    }
    return state;
}