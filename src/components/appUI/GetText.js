import React from "react";
import { Button, Card, Row, Col } from 'react-materialize';
import WaveButton from './WaveButton.js';
import './getText.css';

export default props => (
    <div className="getText row">
        <div class="input-field col s6">
            <input id="icon_prefix" type="text" class="validate ">
            </input>
            <label for="icon_prefix">Character Name</label>
        </div>
        <div class="input-field col s6 padding-left-small">
            <WaveButton
                buttonText={"Change Name"}
                newType={"submit"}
            >
            lol
            </WaveButton>   
        </div>
    </div>
)
