import React from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "./inputApi.css"

const inputSearch = () => {
    return (
        <div className="container">
        <Form>
            <Form.Row>
                <Col xs={7}>
                    <Form.Control placeholder="shorten a link here..." />
                </Col>
                <Button>Shorten It</Button>
            </Form.Row>
        </Form>

        </div>
    )
}

export default inputSearch;