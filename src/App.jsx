import { useEffect, useState } from "react";
import UserTemplate from "./components/UserTemplate";
import {
  addTodo,
  addUser,
  deleteUserFromSerever,
  getPosts,
  getTodos,
  getUsers,
  updateUserInServer,
} from "./Api/FetchData";
import SearchBox from "./components/SearchBox";
import { Col, Row } from "antd";
import UserTodos from "./components/UserTodos";
import UserPosts from "./components/UserPosts";
import AddUser from "./components/AddUser";

function App() {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [posts, setPosts] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(0);

  useEffect(() => {
    const getData = async () => {
      let allUsers = await getUsers();
      setUsers(allUsers);
      let allTodos = await getTodos();
      setTodos(allTodos);
      let allPosts = await getPosts();
      setPosts(allPosts);
    };
    getData();
  }, []);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const searchUser = (string) => {
    const regex = new RegExp(`${string}`, `i`);
    const filtered = users.filter((user) =>
      regex.test(user.name) || regex.test(user.email) ? user : null
    );
    setFilteredUsers(filtered);
  };

  const deleteUser = async (userId) => {
    // Case 1:
    // Updating the array that we have and delete from him the given user,
    // after that the component will rerender because the state was changed.

    const filtered = users.filter((user) => user.id !== userId);
    setUsers(filtered);

    // Case 2:
    // Sending a delete request to the server for deleting the user.

    const deleteResult = await deleteUserFromSerever(userId);
    console.log(deleteResult.data);
  };

  const updateUser = async (update) => {
    // Case 1:
    // Updating the user information in our users array,
    // after that the component will rerender because the state was changed.

    const updated = users.map((user) =>
      user.id === update.id ? update : user
    );
    setUsers(updated);

    // Case 2:
    // Sending a put request to the server for updating the user information.

    if (update.id <= 10) {
      const updateResult = await updateUserInServer(update);
      console.log(update);
    }
  };

  const updateTodo = async (todoId) => {
    const updated = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: true } : { ...todo }
    );
    setTodos(updated);
  };

  const addNewUser = async (newUser) => {
    // Case 1:
    // Add the new user to our users array for presenting it in the list (also cause new render)

    setUsers([...users, { ...newUser, id: users[users.length - 1].id + 1 }]);

    // Case 2:
    // Sending a post request to the server for add new user

    const newUserInServerr = await addUser(newUser);
    console.log(newUserInServerr);
  };

  const addTask = async (task) => {
    // Case 1:
    // Add the new task to our todos array for presenting it in the list (also cause new render)

    setTodos([...todos, { ...task, id: todos.length + 1 }]);

    // Case 2:
    // Sending a post request to the server for add new task

    const newTask = await addTodo(task);
    console.log(newTask);
  };

  const addPost = async (post) => {
    // Case 1:
    // Add the new post to our post array for presenting it in the list (also cause new render)

    setPosts([...posts, { ...post, id: posts.length + 1 }]);

    // Case 2:
    // Sending a post request to the server for add new post

    const newPost = await addTodo(post);
    console.log(newPost);
  };

  return (
    <>
      <SearchBox
        onSearch={(string) => searchUser(string)}
        onAdd={() => setSelectedUser(-1)}
      />
      <Row>
        <Col
          style={{
            height: "80vh",
            overflow: "auto",
          }}
          span={12}
        >
          {filteredUsers &&
            filteredUsers.map((user, index) => (
              <UserTemplate
                key={index}
                info={user}
                todos={todos.filter((todo) => todo.userId == user.id)}
                onDelete={(userId) => deleteUser(userId)}
                onUpdate={(update) => updateUser(update)}
                onSelectUser={(user) => setSelectedUser(user)}
              />
            ))}
        </Col>
        <Col span={12}>
          {selectedUser.id > 0 ? (
            <>
              <UserTodos
                todos={todos.filter((todo) => todo.userId === selectedUser.id)}
                onComplete={(todoId) => updateTodo(todoId)}
                onAdd={(task) => addTask(task)}
              />
              <br />
              <br />
              <UserPosts
                posts={posts.filter((post) => post.userId === selectedUser.id)}
                onAdd={(post) => addPost(post)}
              />
            </>
          ) : selectedUser < 0 ? (
            <AddUser
              onCancel={() => setSelectedUser(0)}
              onAdd={(newUser) => addNewUser(newUser)}
            />
          ) : null}
        </Col>
      </Row>
    </>
  );
}

export default App;
