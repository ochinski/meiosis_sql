import React from 'react';
// import './index.css';

class Character extends React.Component {
    render() {
      var { state, id, actions } = this.props;
      return (<div>
        {state[id].label} Temperature:
        {state[id].value} &deg; {state[id].units}
        <div>
          <button
            onClick={() => actions.increment(id, 1)}>
            Increment
          </button>
          <button
            onClick={() => actions.increment(id,-1)}>
            Decrement
          </button>
        </div>
        <div>
          <button
            onClick={() => actions.changeUnits(id)}>
            Change Units
          </button>
        </div>
      </div>);
    }
  }