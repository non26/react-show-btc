import './App.css';
import React, {
  useReducer,
  useEffect,
  useState
} from 'react';
import DateInputsForm from './component/formComponent/formDate';
import { calculatedDate } from './component/helper/calculatedDate';
import { fetchBtc, filterBtc } from './component/helper/fetchBtch'
import LineChart from './component/chart/line/line';

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

function createOption(option) {

}

const initState = {
  upperBound: calculatedDate(-5).toISOString().split('T')[0],
  lowerBound: calculatedDate(0).toISOString().split('T')[0]
  // upperBound: '2021-01-15',
  // lowerBound: '2021-01-01'
}

function App() {

  const [dateState, dispatch] = useReducer(reducer, initState)
  const [data, setData] = useState([])
  let label = []

  function _fetchBtc() {
    fetchBtc()
      .then(data => {
        const btcResult = filterBtc(data, dateState.lowerBound, dateState.upperBound)
        console.log(btcResult)
        setData(btcResult)
      })
  }

  useEffect(()=>{
    label = []
    data.forEach(item=>{
      label.push(item.Date)
    })
  }, [data])

  useEffect(() => {
    _fetchBtc()
  }, [])

  function handlerSubmit() {
    _fetchBtc()
  }

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
          <DateInputsForm handlerSubmit={handlerSubmit} handlerLowerBound={handlerLowerBound} handlerUpperBound={handlerUpperBound}></DateInputsForm>
        </div>
        <div className="show-date">
          <p>{dateState.upperBound}</p>
          <p>{dateState.lowerBound}</p>
        </div>
        <div className="show-graph">
          {/* 2013-06-18 */}
          {/* 2013-07-18 */}
          {/* <LineChart></LineChart> */}
        </div>
      </div>
    </div>
  );
}

export default App;