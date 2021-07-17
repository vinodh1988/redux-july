// Reducer a javascript function usually runs at the beginning of your application rendering
// or runs after every action
//Reducer usually return an object with which store will be created
export const firstReducer=(state={message:"World is so big!!!!"},action)=>{
    switch(action.type){
        case "MESSAGE_ACTION":
                         return {message: action.data}
        default:
                         return state

    }
}

export const secondReducer=(state={items:[]},action)=>{
    switch(action.type)
     {    
          case "ITEM_ACTION":
                      return {item: action.data} 
          default:
                      return state
     }
}