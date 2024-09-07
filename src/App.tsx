import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1> Colin Barry </h1>
            <p> Hello World </p>
            <img src="https://cdn.discordapp.com/attachments/1209224202289418311/1281686188641615902/IMG_3498.jpg?ex=66dc9ec7&is=66db4d47&hm=b4bae232843118e00effbbf8be284468cac9df829e6bbf03ced2cdf096d877fb&" height="500px" width="500px" alt="My hedgehog Iggy" />
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <ol>
            <li>First thing</li>
            <li>Another thing</li>
            <li>A third item</li>
        </ol>
        
        <Button onClick={ () => { console.log("Hello World!") } }>Log Hello World</Button>
        <Container>
            <Row>
                <Col id = "Col1"><div style={ {backgroundColor: "red", width: '500px', height:'100px'} }> </div></Col>
                <Col id = "Col2">
                <div style={ {backgroundColor: "red", width: '500px', height:'100px'} }> </div>
                </Col>
            </Row>
        </Container>

        </div>


        
    );
}

export default App;
