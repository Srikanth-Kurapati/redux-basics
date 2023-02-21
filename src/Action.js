export const addtask = (task) => {
    return{
        type: "ADD_TASK",
        payload:{
            task: task,
            completed:true
        }
    }
}

export const removeTask = (id) =>{
    return {
        type: "REMOVE_TASK",
        payload:{
            id: id
        }
    }
}