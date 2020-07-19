import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';
import './App.sass';

export default () => {
  const [appState, SetAppState] = useState({ isLoading: true, joke: '' });

  const GetJoke = () => {
    fetch('https://icanhazdadjoke.com/', { headers: { 'Accept': 'application/json' } })
      .then(res => res.json())
      // .then(json => console.log(json))
      .then(json => SetAppState({ isLoading: false, joke: json.joke }))
      .catch(err => console.error(err))
  }

  useEffect(() => GetJoke(), [])

  const { isLoading, joke } = appState;

  if(isLoading) return (<h2>Loading...</h2>)

  return (
    <div>
      <h2>DAD JOKE APP</h2>
      <h1>{joke}</h1>
      <button onClick={GetJoke}>Try Next</button>
    </div>
  )
};
