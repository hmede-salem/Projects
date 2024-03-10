import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com";

export const getUsers = async() => {
    try {
        const { data: users } = await axios.get(`${URL}/users`);
        return users;
    } catch (err) {
        alert("Error occurred!");
    }
};

export const addUser = async(user) => {
    try {
        const newUser = await axios.post(`${URL}/users`, user);
        return newUser;
    } catch (err) {
        alert("Error occurred!");
    }
};

export const getTodos = async() => {
    try {
        const { data: todos } = await axios.get(`${URL}/todos`);
        return todos;
    } catch (err) {
        alert("Error occurred!");
    }
};

export const addTodo = async(task) => {
    try {
        const newTask = await axios.post(`${URL}/todos`, task);
        return newTask;
    } catch (err) {
        alert("Error occurred!");
    }
};

export const getPosts = async() => {
    try {
        const { data: posts } = await axios.get(`${URL}/posts`);
        return posts;
    } catch (err) {
        alert("Error occurred!");
    }
};

export const addPost = async(post) => {
    try {
        const newPost = await axios.post(`${URL}/posts`, post);
    } catch (err) {
        alert("Error occurred!");
    }
};

export const deleteUserFromSerever = async(userId) => {
    try {
        const result = await axios.delete(`${URL}/users/${userId}`);
        return result;
        // The result should be empty object {},
        // and the server will not really update the changes on the data base.
    } catch (err) {
        alert("Error Occurred!");
    }
};

export const updateUserInServer = async(newInfo) => {
    try {
        const updated = await axios.put(`${URL}/users/${newInfo.id}`, newInfo);
        return updated;
    } catch (err) {
        alert("Error Occurred!");
    }
};