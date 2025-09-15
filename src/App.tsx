import React from "react";
import "./App.css";
import natureImage from "./natureImgur.jpg";
import { Button, Container, Col, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <h1>This is a heading</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Sam Van Lonkhuyzen. Hello World.
            </p>
            <img
                src={natureImage}
                alt="A scenic nature background with blue sky and green grassy fields"
            />
            List:
            <ul>
                <li>
                    So much depends
                    <br />
                    upon
                </li>
                <li>
                    a red wheel
                    <br />
                    barrow
                </li>
                <li>
                    glazed with rain
                    <br />
                    water
                </li>
                <li>
                    beside the white
                    <br />
                    chickens
                </li>
            </ul>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "100%",
                                height: "100px",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "100%",
                                height: "100px",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
