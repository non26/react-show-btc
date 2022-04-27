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

function createOption() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  }

  return options
}

const initState = {
  // upperBound: calculatedDate(-5).toISOString().split('T')[0],
  // lowerBound: calculatedDate(0).toISOString().split('T')[0]
  upperBound: '2021-01-15',
  lowerBound: '2021-01-01'
}

function App() {

  const [dateState, dispatch] = useReducer(reducer, initState)
  const [data, setData] = useState([])
  const [label, setLabel] = useState([])

  function _fetchBtc() {
    fetchBtc()
      .then(data => {
        const btcResult = filterBtc(data, dateState.lowerBound, dateState.upperBound)
        let highPrice = []
        let label = []
        btcResult.forEach(item=>{
          label.push(item.Date.split(' ')[0])
          highPrice.push(item.High)
        })
        setData(highPrice)
        setLabel(label)
      })
  }

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
        {/* <div className="show-date">
          <p>{dateState.upperBound}</p>
          <p>{dateState.lowerBound}</p>
        </div> */}
        <div className="show-graph">
          {/* 2013-06-18 */}
          {/* 2013-07-18 */}
          <LineChart option={createOption()} data={data} label={label}></LineChart>
        </div>
      </div>
    </div>
  );
}

export default App;