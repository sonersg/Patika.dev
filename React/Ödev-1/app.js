

import axios from "axios"



const getUser = async (id) => {
    const {data : user} = await axios("https://jsonplaceholder.typicode.com/users/" + id);
    console.log(user);
};

const getPost = async (id) => {
    const {data : post} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    console.log(post); 
};


function getData(id) {

    try {
        const user = getUser(id);
        const post = getPost(id);
    }

    catch (e) {
        return e;
    }

}
export default getData;
