/* eslint-disable */
import React from 'react';

import './todoItem.scss';

function TodoItem({ done, desc }) {
  return (
    <div className="todoItem" >
      <p>{desc}</p>
      <button className="doneBtn">{done ? "Undo" : "Done"}</button>
    </div>
  );
}

export default TodoItem;
