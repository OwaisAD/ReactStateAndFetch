import React from 'react';
import CountryTable from "./CountryTable";
import './App.css';
import countryFacade from './countryFacade';

const App = (props) => {
    return (
      <div>
        <div className="App-header">
          <h2>React, State, Fetch</h2>
        </div>
        <div className="App-intro">
          <p>Your initial task is to fetch data from the server (see exercise for how to start it),
           and create a table below, with these data</p>          
          <CountryTable getLabels={countryFacade.getLabels} getCountries={countryFacade.getCountries} />
        </div>
      </div>
    );
};


export default App;
