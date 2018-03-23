import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { say } from 'cowsay';

import Header from '../components/Header';
import Footer from '../components/Footer';
import './App.scss';
import { addTodo, changeStatus } from '../models/actions/todo';
import TodoItem from '../components/TodoItem';

// eslint-disable-next-line
console.log(say({ text: 'It\'s a new round' }));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo() {
    this.props.dispatch(addTodo(this.state.value));
    this.setState({ value: '' });
  }

  render() {
    const { dispatch, todoList } = this.props;
    const { value } = this.state;
    return (
      <div>
        <Header />
        <div className="body_block">
          <div className="todo_block">
            <div className="input_block">
              <div>
                <input value={value} onChange={e => this.setState({ value: e.target.value })} />
              </div>
              <button className={classNames({ disabledBtn: !value })} disabled={!value} onClick={this.handleAddTodo}>
                Add
              </button>
            </div>
            <div className="list_block">
              {todoList.map(item => (
                <TodoItem
                  done={item.done}
                  desc={item.desc}
                  key={item.id}
                  id={item.id}
                  handleStatus={id => dispatch(changeStatus(id))}
                />))
              }
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(({ todoList }) => ({ todoList }))(App);
