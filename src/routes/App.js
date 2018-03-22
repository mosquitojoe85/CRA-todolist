/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';
import './App.scss';
import { saveRegList } from '../models/actions/register';
import TodoItem from '../components/TodoItem';


const App = ({ dispatch }) => (
  <div>
    <Header />
    <div className="body_block">
      <div className="todo_block">
        <div className="input_block">
          <div>
            <input />
          </div>
          <button onClick={() => dispatch(saveRegList([]))} >Add</button>
        </div>
        <div className="list_block">
          <TodoItem done={false} desc={"00000000001000"} />
          <TodoItem done={true} desc={"從前有一個倉庫你知道，有一天你知道，放了一隻貓，老鼠都不敢動。到年底的時候喔，倉庫就多了很多糧食。"} />
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default connect()(App);
