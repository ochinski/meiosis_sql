import React from 'react';
import './character.css';
import { Button, Card, Row, Col } from 'react-materialize';
import WaveButton from '../appUI/WaveButton.js';
import GetText from '../appUI/GetText.js';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'

// onTextBoxChangeName = (event) => {
//     this.setState({
//         createName: event.target.value,
//     }); 
//     this.props.getName(event.target.value);
// }
class SearchCharacter extends React.Component {
    onTextBoxChange = (event) => {
        this.props.getText(event.target.value);
    }
    render() {
        return (
            <div className="characterSearch  input-field">
                <input 
                    id="icon_prefix" 
                    type="text" 
                    className="validate"
                    value={this.props.characterName}    
                    onChange={this.onTextBoxChange}
                >
                </input>
                <label htmlFor="icon_prefix">Seach Character</label>
                
            </div>   
        )
    }
}
class DisplayCharacterList extends React.Component {
    render(){
        var { state, id, actions,name } = this.props;
        var displayCharacterList = [];
        Object.keys(state).forEach(function(key) {
            var character = state[key];
            if (character.name.includes(name) && name !== '') {
                displayCharacterList.push( 
                    <li className="collection-item content-between full-width"><span>{character.name}</span><WaveButton buttonText={"Select"}></WaveButton></li>
                ); 
            } else {
                // displayCharacterList.push( 
                //     // <li></li>
                // ); 
            }
        });
        if (displayCharacterList.length >= 1) {
            return (
                <ul className="collection wrapper-even">
                    {displayCharacterList}
                </ul>
            )
        } else {
            return (
                <div>
                    Search up a character or create a new one!
                </div>
            )
        }
    }
}
class DisplayCharacter extends React.Component {
    render() {
        var actions = this.props.actions;
        var id = this. props.id;
        return (
            <div className="characterUI">
                <div className="row">
                    <GetText 
                        buttonText ={"Change Age"}>
                        </GetText>
                </div>
                <div class="row">
                    <div className="col s6">
                        <WaveButton 
                            handleClick={() => actions.incrementAge(id,1)}
                            buttonText = {"Increment Age"}>
                            </WaveButton>
                    </div>
                    <div className="col s6">
                        <WaveButton
                            handleClick={() => actions.incrementAge(id,-1)}
                            buttonText={"Decrement Age"}>
                            </WaveButton>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                        <WaveButton
                            waves='light'
                            handleClick={() => actions.incrementWeight(id, 5)}
                            buttonText={"Increment Weight"}>
                            </WaveButton>
                    </div>
                    <div className="col s6">
                        <WaveButton
                            handleClick={() => actions.incrementWeight(id,-5)}
                            buttonText={"Decrement Weight"}>
                            </WaveButton>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                        <WaveButton
                            handleClick={() => actions.incrementLevel(id, 1)}
                            buttonText={"Increment Level"}>
                            </WaveButton>
                    </div>
                    <div className="col s6">
                        <WaveButton
                        handleClick={() => actions.incrementLevel(id,-1)}
                        buttonText={"Decrement Level"}>
                        </WaveButton>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                        <WaveButton
                            handleClick={() => actions.toggleGender(id)}
                            buttonText={"Toggle Gender"}>
                        </WaveButton>
                    </div>
                    <div className="col s6">
                        <WaveButton
                            handleClick={() => actions.toggleHardcoreMode(id)}
                            buttonText={"Toggle Mode"}>
                        </WaveButton>
                    </div>
                </div>
            </div>
        );
    }
}

class Character extends React.Component {
    constructor() {
        super();
        this.state = {
            characterName : '',
            characterSelected : false
        }
    }
   
    getText = (newText) => {
        var text = newText;
        this.setState({
            characterName : text
        })
    }
    render() {
        var { state, id, actions } = this.props;
        const options = [];
        var displayArea = [];
        Object.keys(state).forEach(function(key) {
			var value = state[key];
			options.push( <DisplayCharacter state={state} id={value.name} actions={actions}/> ); 
		});
        const defaultOption = options[0];
        if (this.characterSelected) {
            displayArea = [];
            displayArea.push(<DisplayCharacter />);
        } else {
            // displayArea = [];
            displayArea.push(<DisplayCharacterList name = {this.state.characterName} state={state}/>);
        }
        return (
            <div id="character">
                <SearchCharacter characterName = {this.state.characterName} getText = {this.getText}/>
                {displayArea}
                {/* </SearchCharacter> */}
                {/* <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" /> */}
                {/* <h6 className="">Object : {state[id].name}</h6> */}
                {/* <DisplayCharacter/> */}
            </div>
        );
    }
}

export default Character;
