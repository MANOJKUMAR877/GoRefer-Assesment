import axios from "axios";
const fetchApi = async () => {

    try {
        let apiValue = await axios.get("https://jsonplaceholder.typicode.com/posts")
        apiValue.data.forEach(element => {
            element.like=0;
            element.dislike=0;
        });
        return apiValue.data;


    }
    catch (error) {
        return (error)
    }
}


export default fetchApi