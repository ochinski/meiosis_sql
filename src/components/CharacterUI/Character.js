import React from 'react';
import './character.css';
import { Button, Card, Row, Col } from 'react-materialize';
import WaveButton from '../appUI/WaveButton.js';
import GetText from '../appUI/GetText.js';

class DisplayCharacter extends React.Component {
    render() {
        return (
            <div className="character">
            <h6 className="">Object : {state[id].name}</h6>
            <div class="row">
                <GetText buttonText ={"Change Age"}>

                </GetText>
            </div>
            <div class="row">
                <div className="col s6">
                    <WaveButton 
                        handleClick={() => actions.incrementAge(id,1)}
                        buttonText = {"Increment Age"}
                        
                        >
                    </WaveButton>
                </div>
                <div className="col s6">
                    <WaveButton
                    handleClick={() => actions.incrementAge(id,-1)}
                    buttonText={"Decrement Age"}
                    >
                    </WaveButton>
                </div>
            </div>
            <div class="row">
            <div className="col s6">
                <WaveButton
                    waves='light'
                    handleClick={() => actions.incrementWeight(id, 5)}
                    buttonText={"Increment Weight"}
                    >
                </WaveButton>
                </div>
                <div className="col s6">
                    <WaveButton
                     handleClick={() => actions.incrementWeight(id,-5)}
                    buttonText={"Decrement Weight"}
                    >
                </WaveButton>
                </div>
            </div>
            <div class="row">
            <div className="col s6">
                <WaveButton
                     handleClick={() => actions.incrementLevel(id, 1)}
                    buttonText={"Increment Level"}
                    >
                </WaveButton>
                </div>
                <div className="col s6">
                    <WaveButton
                     handleClick={() => actions.incrementLevel(id,-1)}
                    buttonText={"Decrement Level"}
                    >
                </WaveButton>
                </div>
            </div>
            <div class="row">
            <div className="col s6">
                <WaveButton
                    handleClick={() => actions.toggleGender(id)}
                    buttonText={"Toggle Gender"}
                    >
                </WaveButton>
                </div>
                <div className="col s6">
                <WaveButton
                     handleClick={() => actions.toggleHardcoreMode(id)}
                    buttonText={"Toggle Mode"}
                    >
                </WaveButton>
                </div>
            </div>
      </div>);
    }
}

class Character extends React.Component {
    render() {
        var { state, id, actions } = this.props;
        
        return (<div className="character">
            <h6 className="">Object : {state[id].name}</h6>
            <div class="row">
                <GetText buttonText ={"Change Age"}>

                </GetText>
            </div>
            <div class="row">
                <div className="col s6">
                    <WaveButton 
                        handleClick={() => actions.incrementAge(id,1)}
                        buttonText = {"Increment Age"}
                        
                        >
                    </WaveButton>
                </div>
                <div className="col s6">
                    <WaveButton
                    handleClick={() => actions.incrementAge(id,-1)}
                    buttonText={"Decrement Age"}
                    >
                    </WaveButton>
                </div>
            </div>
            <div class="row">
            <div className="col s6">
                <WaveButton
                    waves='light'
                    handleClick={() => actions.incrementWeight(id, 5)}
                    buttonText={"Increment Weight"}
                    >
                </WaveButton>
                </div>
                <div className="col s6">
                    <WaveButton
                     handleClick={() => actions.incrementWeight(id,-5)}
                    buttonText={"Decrement Weight"}
                    >
                </WaveButton>
                </div>
            </div>
            <div class="row">
            <div className="col s6">
                <WaveButton
                     handleClick={() => actions.incrementLevel(id, 1)}
                    buttonText={"Increment Level"}
                    >
                </WaveButton>
                </div>
                <div className="col s6">
                    <WaveButton
                     handleClick={() => actions.incrementLevel(id,-1)}
                    buttonText={"Decrement Level"}
                    >
                </WaveButton>
                </div>
            </div>
            <div class="row">
            <div className="col s6">
                <WaveButton
                    handleClick={() => actions.toggleGender(id)}
                    buttonText={"Toggle Gender"}
                    >
                </WaveButton>
                </div>
                <div className="col s6">
                <WaveButton
                     handleClick={() => actions.toggleHardcoreMode(id)}
                    buttonText={"Toggle Mode"}
                    >
                </WaveButton>
                </div>
            </div>
      </div>);
    }
}

export default Character;
