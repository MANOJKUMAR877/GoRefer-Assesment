import initialState from "./initialState";

const sample=(data,id)=>{
    console.log("data",data,id)
    let check=true;
    let countvalue=data.count
      console.log(data.count)
    // if(countvalue.length!==0)
    // {
    //   countvalue.forEach(element => {
    //       if(element.id === id)
    //       {
    //          check=false
    //       }
    //   });
    //   if(check){
    //       let value={id:id,like:1,dislike:0}
    //       countvalue.push(value);
    //   }
    // }
    // else{
        let value={id:id,like:1,dislike:0}
        countvalue.push(value);
    
    // console.log("state",state,countvalue)
    return countvalue

}
const likeDislikeReducer = (state = initialState, action) => {
  if (action.type === "LIKE") {
      console.log(action.value); 
     
    return {
        ...state,
        count:sample(state,action.value)
    }
  }
  return state;
};
export default likeDislikeReducer;
