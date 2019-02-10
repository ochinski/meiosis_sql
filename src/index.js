import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Character from './components/CharacterUI/Character';
import flyd from 'flyd';
import {P, S, PS, D} from 'patchinko/explicit';
import * as serviceWorker from './serviceWorker';
import { Button, Card, Row, Col } from 'react-materialize';

var character = {
	initialState: function(name) {
		return {
			name,
			race: "Orc",
			class: "Barbarian",
			age: 29,
			weight: 245,
			level: 12,
			gender: "M",
			harcoreMode : false,
		}
	},
	actions: function(update) {
		return {
				changeName: function(value) {
					update({ 
						character: PS({ name: value }) 
					});
				},
				changeRace: function(value) {
					update({
						 character: PS({ race: value })
					});
				},
				changeClass: function(value) {
					update({ 
						character: PS({ class: value }) 
					});
				},
				changeAge: function(value) {
					update({ 
						character: PS({ age: value }) 
					});
				},
				changeWeight: function(value) {
					update({ 
						character: PS({ weight: value }) 
					});
				},
				changeLevel: function(value) {
					update({ 
						character: PS({ level: value }) 
					});
				},
				toggleGender: function(id) {
					update({
						[id]: S(state => {
							var value = state.value;
							var newGender = state.gender === "M" ? "F" : "M";
							state.gender = newGender;
							return state;
						})
					});
				},
				toggleHardcoreMode: function(id) {
					update({
						[id]: S(state => {
							var value = state.value;
							var newMode = state.harcoreMode === true ? false : true;
							state.harcoreMode = newMode;
							return state;
						})
					});
				},
				incrementAge: function(id, amount) {
					update({ 
						[id]: PS({ age: S(x => x + amount) }) 
					});
				},
				incrementWeight: function(id, amount) {
					update({ 
						[id]: PS({ weight: S(x => x + amount) }) 
					});
				},
				incrementLevel: function(id, amount) {
					update({ [id]: PS({ level: S(x => x + amount) }) });
				}
			};
		}
	};

var enviornment = {
	initialState: function(label) {
		return {
			label,
			value: 22,
			units: "C"
		};
	},
	actions: function(update) {
		return {
			increment: function(id, amount) {
				update({ [id]: PS({ value: S(x => x + amount) }) });
		},
			changeUnits: function(id) {
				update({
					[id]: S(state => {
						var value = state.value;
						var newUnits = state.units === "C" ? "F" : "C";
						state.units = newUnits;
						return state;
					})
				});
			}
		};
	}
};

var app = {
	initialState: Object.assign({},
	{ Borg : character.initialState("Borg")},
	{ Ross : character.initialState("Ross")},
	// { Fletch : character.initialState("Fletch")},
	// { Moornwin : character.initialState("Moornwin")},
	// { air: enviornment.initialState("Air") },
	// { water: enviornment.initialState("Water") }
	),
	actions: function(update) {
		return Object.assign({},
			character.actions(update)
		);
	}
};

	class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = props.states();
		this.skippedFirst = false;
	}
	componentDidMount() {
		var setState = this.setState.bind(this);
		this.props.states.map(function(state) {
			setState(state);
		});
	}
	render() {
		var state = this.state;
		var { actions } = this.props;
		var Characters = [];

		return (<div className="customContainer">
			<div className="wrapper">
				
				<div className="character_container">
				<h1 className="orange-text">hi, i am here for you.</h1>
					<Character state={state} actions={actions}/>
				</div>
				<div className="json_container">
				<h1 className="blue-text">to send</h1>
					<pre>{JSON.stringify(state, null, 4)}</pre>
				</div>
				<div className="sqlSidebar">
				<h1>to sql</h1>
				sql stuff
				</div>
			</div>
			
		</div>);
		}
}



var update = flyd.stream();
var states = flyd.scan(P, app.initialState, update);

var actions = app.actions(update);

ReactDOM.render(<App states = {states} actions = {actions}/>, document.getElementById('root'));
serviceWorker.unregister();




/* <Character state={state} id="Ross" actions={actions} /> */
/* <Character state={state} id="Borg" actions={actions} /> */
/* <Conditions state={state} actions={actions} />
<Temperature state={state} id="air" actions={actions} />
<Temperature state={state} id="water" actions={actions} /> */

// componentDidMount() {
//   var setState = this.setState.bind(this);
//   this.props.states.map(function(state) {
//     if (skippedFirst) {
//       setState(state);
//     }
//     else {
//       this.skippedFirst = true;
//     }
//   });
// }

//"materialize-css": "^1.0.0-rc.2",