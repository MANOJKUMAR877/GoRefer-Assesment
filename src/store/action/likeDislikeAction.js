export const likeDislikeAsync = id => {
  return { type: "LIKE", value: id };
};

export const likeDislike = (id) => {
    console.log("id",id)
  return dispatch => {

   
      dispatch(likeDislikeAsync(id));
    
  };
};
