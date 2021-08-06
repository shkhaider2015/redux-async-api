import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreator from "./State/actions";
import { IItem, IState, StateType } from './State/types';

function App() {

  const dispatch = useDispatch();
  const { error, items, loading }:IState = useSelector((state:StateType) => state.post)
  const { FetchPost } = bindActionCreators(actionCreator, dispatch)

  React.useEffect(
    () => {
      FetchPost()
    }, []
  )
    {console.log(`Loading : ${loading} and \nerror : ${error}`)}
  if(loading)
  {
    return <div style={{ height : '100vh', display : 'grid', placeItems : 'center'}} >
      <h1>... Loading</h1>
    </div>
  }
  if(error)
  {
    return <div style={{ display : 'grid', placeItems : 'center'}} >
        Error Message <br />
    </div>
  }
  return (<div>
    {
      items.map((item:IItem, index:number) => <div key={index} > 
            <h5>{item.title} </h5> <br />
            <span> {item.body} </span>
         </div> )
    }
    </div>
  );
}

export default App;
