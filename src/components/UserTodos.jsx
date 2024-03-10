import { Button, Card, Col, Input, Row, Typography } from "antd";
import React, { useState } from "react";
import AddTodo from "./AddTodo";

const { Text, Title } = Typography;

const UserTodos = ({ todos, onComplete, onAdd }) => {
  const [addTemp, setAddTemp] = useState(false);

  return (
    <div key={todos[0].userId}>
      <Row style={{ alignItems: "center" }}>
        <Col span={12}>
          <h2>Todos - User {todos[0].userId}</h2>
        </Col>
        <Col span={12}>
          <Button onClick={() => setAddTemp(true)} type="primary">
            Add Todo
          </Button>
        </Col>
      </Row>
      <Card
        style={{
          height: "430px",
          backgroundColor: "#bababa",
          overflow: "auto",
          border: "solid black 4px",
          borderRadius: "15px",
        }}
      >
        {addTemp ? (
          <AddTodo
            onCancel={(boolean) => setAddTemp(boolean)}
            userId={todos[0].userId}
            handleAdd={(task) => onAdd(task)}
          />
        ) : (
          todos.map((todo, index) => (
            <Row
              key={index}
              style={{
                border: "solid black 2px",
                borderRadius: "20px",
                backgroundColor: "#dedcdc",
                padding: "8px",
                margin: "10px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Col span={18}>
                <Row>
                  <Col span={6}>
                    <Text strong>Title:</Text>
                  </Col>
                  <Col span={18}>
                    <Text>{todo.title}</Text>
                  </Col>
                  <Col span={6}>
                    <Text strong>Completed:</Text>
                  </Col>
                  <Col span={18}>
                    <Text>{todo.completed ? "True" : "False"}</Text>
                  </Col>
                </Row>
              </Col>
              <Col span={6}>
                {todo.completed ? null : (
                  <Button
                    style={{ backgroundColor: "#28a745", color: "white" }}
                    onClick={() => onComplete(todo.id)}
                  >
                    Mark Completed
                  </Button>
                )}
              </Col>
            </Row>
          ))
        )}
      </Card>
    </div>
  );
};

export default UserTodos;
