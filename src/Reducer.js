export default function ReducerStore(state = [], action){
    let id = 0;
    switch (action.type){
        case "ADD_TASK":
            return [
                ...state,
                {
                    task: action.payload.task,
                    id : ++id, 
                    completed: action.payload.completed,
                }
            ]

        case "REMOVE_TASK":
            return state.filter((task) => 
                task.id !== action.payload.id)

        default :
            return state
    }
}

