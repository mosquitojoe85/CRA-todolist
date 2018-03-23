import React from 'react';
import classNames from 'classnames';


import './todoItem.scss';

function TodoItem({
  done, desc, id, handleStatus
}) {
  return (
    <div className="todoItem" >
      <p className={classNames({ doneDesc: done })}>{desc}</p>
      <button
        className={classNames({ doneBtn: !done, undoBtn: done })}
        onClick={() => handleStatus(id)}
      >
        {done ? 'Undo' : 'Done'}
      </button>
    </div>
  );
}

export default TodoItem;
