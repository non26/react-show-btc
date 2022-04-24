import './App.css';
import React, {
  useReducer
} from 'react';
import DateInput from './component/inputs/dateInput';
import { Line } from 'react-chartjs-2';
import {calculatedDate} from './component/helper/calculatedDate';

function reducer(state, action) {
  switch (action.type) {
    case 'upperBound':
      return {
        ...state,
        upperBound: action.payload
      }
    case 'lowerBound':
      return {
        ...state,
        lowerBound: action.payload
      }
    default:
      throw new Error()
  }
}

const initState = {
  upperBound: calculatedDate(-5).toISOString().split('T')[0],
  lowerBound: calculatedDate(0).toISOString().split('T')[0]
}

function App() {

  const [dateState, dispatch] = useReducer(reducer, initState)

  function handlerUpperBound(e) {
    let newBound = e.target.value
    return dispatch({ type: 'upperBound', payload: newBound })
  }

  function handlerLowerBound(e) {
    let newBound = e.target.value
    return dispatch({ type: 'lowerBound', payload: newBound })
  }

  return (
    <div className="App" >
      <div className="container" >
        <div className="date-input-container" >
          <DateInput onChangeHandler={handlerUpperBound}></DateInput>
          <span> To </span>
          <DateInput onChangeHandler={handlerLowerBound}></DateInput>
        </div>
        <div className="show-date">
          <p>{dateState.upperBound}</p>
          <p>{dateState.lowerBound}</p>
        </div>
        <div className="show-graph">
          {/* 2013-06-18 */}
          {/* 2013-07-18 */}
          {/* graph for btc will placed here */}
        </div>
      </div>
    </div>
  );
}

export default App;