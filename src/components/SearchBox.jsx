import { Button, Col, Input, Row } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";

const SearchBox = ({ onSearch, onAdd }) => {
  return (
    <Row
      gutter={15}
      style={{
        marginLeft: "20px",
        width: "450px",
        alignItems: "center",
        justifyContent: "space-evenly",
        border: "solid grey 2px",
        borderRadius: "63px",
        boxShadow: "13px 13px 26px #b5b5b5,  -13px -13px 26px #ffffff",
      }}
    >
      <Col>
        <Title style={{ marginBottom: "22px" }} level={3}>
          Search:
        </Title>
      </Col>
      <Col>
        <Input allowClear onChange={(e) => onSearch(e.target.value)} />
      </Col>
      <Button type="primary" onClick={() => onAdd()}>
        Add
      </Button>
    </Row>
  );
};

export default SearchBox;
