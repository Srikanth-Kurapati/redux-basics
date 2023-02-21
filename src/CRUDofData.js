import { addtask } from "./Action";
import { removeTask } from "./Action";
import Store from "./Store";


function CRUDofData() {

    Store.dispatch(addtask("task 1 completed"))
   
    console.log(Store.getState())

    Store.dispatch(removeTask(1))
    console.log(Store.getState())

    Store.subscribe(()=>{
       console.log("Updated", Store.getState())
    })
  return (
    null
  )
}

export default CRUDofData
