import React from 'react';
import ReactDOM from 'react-dom';
import PeopleList from './components/PeopleList';
import AddPersonForm from './components/AddPersonForm';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './style.css';

const initialState = {
  contacts: [["James Smith", 20], ["Thomas Anderson", 12], ["Bruce Wayne",25]] 
  };

// Reducer function
function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_PERSON':
      const newPerson = [action.data, action.age];
      return {...state,
        contacts: [...state.contacts, newPerson]}
    default:
      return state;
  }
}

const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <AddPersonForm />
    <PeopleList />
  </Provider>,
  document.getElementById('root')
);