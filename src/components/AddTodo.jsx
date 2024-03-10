import { Button, Card, Col, Input, Row, Typography } from "antd";
import React, { useState } from "react";
import { addTodo } from "../Api/FetchData";

const { Text, Title } = Typography;

const AddTodo = ({ onCancel, userId, handleAdd }) => {
  const [task, setTask] = useState({
    completed: false,
    userId: userId,
    title: "",
  });

  //   const addTask = async () => {
  //     const newTask = await addTodo(task);
  //     console.log(newTask);
  //   };

  return (
    <Card
      style={{
        border: "solid black 1.5px",
        borderRadius: "10px",
        boxShadow: "3px 3px 5px",
        height: "200px",
        padding: "20px",
      }}
    >
      <Row
        style={{
          justifyContent: "space-evenly",
          textAlign: "center",
        }}
      >
        <Col
          style={{
            display: "flex",
            alignItems: "center",
          }}
          span={18}
        >
          <h2 style={{ marginRight: "10px" }}>Title:</h2>
          <Input
            placeholder="Enter a todo task.."
            onChange={(e) => setTask({ ...task, title: e.target.value })}
          />
        </Col>
      </Row>
      <Row
        style={{
          justifyContent: "flex-end",
          height: "70px",
        }}
      >
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            justifyItems: "flex-end",
          }}
          span={24}
        >
          <Button danger onClick={() => onCancel(false)}>
            Cancel
          </Button>
          <Button
            type="primary"
            style={{ marginLeft: "10px" }}
            onClick={() => {
              handleAdd(task);
              onCancel(false);
            }}
          >
            Add
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default AddTodo;
