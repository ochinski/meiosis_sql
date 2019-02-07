import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Character from './components/CharacterUI/Character';
import flyd from 'flyd';
import {P, S, PS, D} from 'patchinko/explicit';

import * as serviceWorker from './serviceWorker';


var character = {
  initialState: function(name) {
    return {
      name,
      race: "Orc",
      class: "Barbarian",
      age: 29,
      weight: 245,
      level: 12,
      sex: "M",
      harcoreMode : false,
    }
  },
  actions: function(update) {
    return {
      changeName: function(value) {
        update({ character: PS({ name: value }) });
      },
      changeRace: function(value) {
        update({ character: PS({ race: value }) });
      },
      changeClass: function(value) {
        update({ character: PS({ class: value }) });
      },
      changeAge: function(value) {
        update({ character: PS({ age: value }) });
      },
      changeWeight: function(value) {
        update({ character: PS({ weight: value }) });
      },
      changeLevel: function(value) {
        update({ character: PS({ level: value }) });
      },
      changeSex: function(value) {
        update({ character: PS({ sex: value }) });
      },
      toggleHardcoreMode: function(value) {
        update({ character: PS({ harcoreMode: value }) });
      },
      incrementAge: function(id, amount) {
        update({ [id]: PS({ age: S(x => x + amount) }) });
      },
      incrementWeight: function(id, amount) {
        update({ [id]: PS({ weight: S(x => x + amount) }) });
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
            // var newValue = convert(value, newUnits);
            // state.value = newValue;
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
    { Fletch : character.initialState("Fletch")},
    { Moornwin : character.initialState("Moornwin")},
    { air: enviornment.initialState("Air") },
    { water: enviornment.initialState("Water") }
  ),
  actions: function(update) {
    return Object.assign({},
      // conditions.actions(update),
      // temperature.actions(update)
    );
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.states();
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
    return (<div>
      <h1>hi</h1>
      {/* <Character state={state} actions={actions} /> */}
      {/* <Conditions state={state} actions={actions} />
      <Temperature state={state} id="air" actions={actions} />
      <Temperature state={state} id="water" actions={actions} /> */}
      <pre>{JSON.stringify(state, null, 4)}</pre>
    </div>);
  }
}



var update = flyd.stream();
var states = flyd.scan(P, app.initialState, update);

var actions = app.actions(update);

ReactDOM.render(<App states = {states} actions = {actions}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

