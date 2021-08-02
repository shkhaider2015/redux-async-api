import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreator from "./State/actions";
import { IState, StateType } from './State/types';

function App() {

  const dispatch = useDispatch();
  const state = useSelector((state:StateType) => state.post)
  const { FetchPost } = bindActionCreators(actionCreator, dispatch)

  React.useEffect(
    () => {
      FetchPost()
    }, []
  )
  return (<div>
    {console.log("state : ", state)}
    {
      state.map((item:IState, index:number) => <div key={index} > 
            <h5>{item.title} </h5> <br />
            <span> {item.body} </span>
         </div> )
    }
    </div>
  );
}

export default App;
