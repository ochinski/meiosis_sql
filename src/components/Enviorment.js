var temperature = {
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
              var newValue = convert(value, newUnits);
              state.value = newValue;
              state.units = newUnits;
              return state;
            })
          });
        }
      };
    }
  };
  
  class Temperature extends React.Component {
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