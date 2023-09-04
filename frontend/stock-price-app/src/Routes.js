// src/Routes.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import StockDataForm from './components/StockDataForm';
import StockDataDisplay from './components/StockDataDisplay';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={StockDataForm} />
      <Route path="/stock/:symbol" component={StockDataDisplay} />
    </Switch>
  );
}

export default Routes;

