export const likeDislikeAsync = (count) => {
    let payload = {
        count_list: count
    }
    return { type: "LIKE", value: payload };
};

export const likeDislike = (id, count) => {
    // console.log("id", id, count)
    let countvalue = count
    let check = true;
    if (countvalue !== undefined) {
        if (countvalue.length !== 0) {
            countvalue.forEach(element => {
                if (element.id === id) {
                    check = false;
                    element.like += 1
                }
            });
            if (check) {
                let value = { id: id, like: 1, dislike: 0 }
                countvalue.push(value);
            }
        }
        else {
            let value = { id: id, like: 1, dislike: 0 }
            countvalue.push(value);
        }
    }
    else {
        countvalue = []
        let value = { id: id, like: 1, dislike: 0 }
        countvalue.push(value);
    }

    return dispatch => {
        dispatch(likeDislikeAsync(countvalue));
    };
};
