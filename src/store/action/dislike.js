export const dislikeAsync = (count) => {
    let payload = {
        count_list: count
    }
    return { type: "DISLIKE", value: payload };
};

export const dislike = (id, count) => {
    // console.log("id", id, count)
    let countvalue = count
    let check = true;
    if (countvalue !== undefined) {
        if (countvalue.length !== 0) {
            countvalue.forEach(element => {
                if (element.id === id) {
                    check = false;
                    element.dislike += 1
                }
            });
            if (check) {
                let value = { id: id, like: 0, dislike: 1 }
                countvalue.push(value);
            }
        }
        else {
            let value = { id: id, like: 0, dislike: 1 }
            countvalue.push(value);
        }
    }
    else {
        countvalue = []
        let value = { id: id, like: 0, dislike: 1 }
        countvalue.push(value);
    }

    return dispatch => {
        dispatch(dislikeAsync(countvalue));
    };
};
