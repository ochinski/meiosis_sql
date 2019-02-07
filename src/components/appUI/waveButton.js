import React from "react";
import { Button, Card, Row, Col } from 'react-materialize';

export default props => (
    <Button 
        className="cyan lighten-2 waves-effect waves-light btn"
        onClick={props.handleClick}>
        {props.buttonText}
    </Button>
)