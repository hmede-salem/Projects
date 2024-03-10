import React, { useEffect, useState } from "react";
import { Card, Input, Row, Col, Button, Divider, Typography } from "antd";
// import UserTodos from "./UserTodos";

const { Text, Title } = Typography;

const UserTemplate = ({ info, todos, onDelete, onUpdate, onSelectUser }) => {
  const [allCompleted, setAllCompleted] = useState(true);
  const [moreData, setMoreData] = useState(false);
  const [update, setUpdate] = useState(info);

  useEffect(() => {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].completed === false) {
        setAllCompleted(false);
        break;
      } else {
        setAllCompleted(true);
      }
    }
  }, [todos]);

  return (
    <>
      <Card
        style={{
          width: 450,
          backgroundColor: "#bababa",
          border: `${
            allCompleted === true ? "solid green 5px" : "solid red 3px"
          }`,
          boxShadow: "7px 7px 20px",
          margin: "20px",
        }}
        key={info.id}
      >
        <h2
          onClick={() => onSelectUser(info)}
          // onMouseEnter={() => console.log(info.id)}
          // onMouseLeave={() => console.log(info.id)}
          style={{
            textAlign: "center",
            borderRadius: "10px",
            border: "solid black 1.5px",
            boxShadow: "4px 4px 7px #474747",
            backgroundColor: "#ededed",
          }}
        >{`User's ID: ${info.id}`}</h2>
        <Row gutter={[0, 10]}>
          <Col span={6}>
            <Text strong>Name :</Text>
          </Col>
          <Col span={18}>
            <Input
              variant="filled"
              defaultValue={info.name}
              onChange={(e) => setUpdate({ ...update, name: e.target.value })}
            />
          </Col>
          <Col span={6}>
            <Text strong>Email :</Text>
          </Col>
          <Col span={18}>
            <Input
              variant="filled"
              defaultValue={info.email}
              onChange={(e) => setUpdate({ ...update, email: e.target.value })}
            />
          </Col>
        </Row>
        <Divider style={{ backgroundColor: "white" }} />
        <Row justify={"space-around"}>
          <Col span={moreData ? 24 : 12}>
            <Button
              onMouseEnter={() => setMoreData(true)}
              onClick={() => setMoreData(false)}
              type="primary"
            >
              {moreData ? "Less Data" : "More Data"}
            </Button>
          </Col>
          {moreData && (
            <Row
              gutter={[3, 5]}
              style={{
                margin: "10px",
                width: "90%",
                height: "auto",
                border: "solid grey 2px",
                borderRadius: "5px",
                padding: "5px",
                boxShadow: "2px 2px 8px",
                backgroundColor: "#e8e8e8",
              }}
            >
              <Col span={5}>
                <Text strong> Street :</Text>
              </Col>
              <Col span={19}>
                <Input
                  defaultValue={info.address.street}
                  onChange={(e) =>
                    setUpdate({
                      ...update,
                      address: { ...update.address, street: e.target.value },
                    })
                  }
                />
              </Col>
              <Col span={5}>
                <Text strong>City :</Text>
              </Col>
              <Col span={19}>
                <Input
                  defaultValue={info.address.city}
                  onChange={(e) =>
                    setUpdate({
                      ...update,
                      address: { ...update.address, city: e.target.value },
                    })
                  }
                />
              </Col>
              <Col span={5}>
                <Text strong>Zip Code :</Text>
              </Col>
              <Col span={19}>
                <Input
                  defaultValue={info.address.zipcode}
                  onChange={(e) =>
                    setUpdate({
                      ...update,
                      address: { ...update.address, zipcode: e.target.value },
                    })
                  }
                />
              </Col>
            </Row>
          )}
          <Col
            span={12}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <Button
              disabled={
                JSON.stringify(update) === JSON.stringify(info) ? true : false
              }
              onClick={() => onUpdate(update)}
            >
              Update
            </Button>
            <Button onClick={() => onDelete(info.id)} danger>
              Delete
            </Button>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default UserTemplate;
