import React from 'react';
import './character.css';
import { Button, Card, Row, Col } from 'react-materialize';
import WaveButton from '../appUI/waveButton';

class Character extends React.Component {
    render() {
        var { state, id, actions } = this.props;
        return (<div className="character">
            Character : {state[id].name}
            <div>
                <WaveButton 
                     handleClick={() => actions.incrementAge(id,-1)}
                    buttonText = {"Increment Age"}>
                 
                </WaveButton>
                    <WaveButton
                     handleClick={() => actions.incrementAge(id,-1)}
                    buttonText={"Decrement Age"}>
                </WaveButton>
            </div>
            <div>
                <WaveButton
                    waves='light'
                    handleClick={() => actions.incrementWeight(id, 5)}
                    buttonText={"Increment Weight"}>
                </WaveButton>
                    <WaveButton
                     handleClick={() => actions.incrementWeight(id,-5)}
                    buttonText={"Decrement Weight"}>
                </WaveButton>
            </div>
            <div>
                <WaveButton
                     handleClick={() => actions.incrementLevel(id, 1)}
                    buttonText={"Increment Level"}>
                </WaveButton>
                    <WaveButton
                     handleClick={() => actions.incrementLevel(id,-1)}
                    buttonText={"Decrement Level"}>
                </WaveButton>
            </div>
            <div>
                <WaveButton
                    handleClick={() => actions.toggleGender(id)}
                    buttonText={"Toggle Gender"}>
                </WaveButton>
            </div>
            <div>
                <WaveButton
                     handleClick={() => actions.toggleHardcoreMode(id)}
                    buttonText={"Toggle Mode"}>
                </WaveButton>
            </div>

            
      </div>);
    }
}

export default Character;
