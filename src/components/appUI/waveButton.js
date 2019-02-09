import React from "react";
import { Button, Card, Row, Col } from 'react-materialize';

export default props => (
    <Button 
        className={props.changeColor ? props.color :  "cyan lighten-2 waves-effect waves-light button is-primary"}
        onClick={props.handleClick}
        type={props.newType}
        >
        {props.buttonText}
    </Button>
)

