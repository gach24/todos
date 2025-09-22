'use client';

import { TodoItemProps } from './TodoItem.type';

import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5';

import styles from './TodoItem.module.css';

export const TodoItem = ({ todo, toggle }: TodoItemProps) => {
  return (
    <div className={todo.completed ? styles.done : styles.pending}>
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <div
          className={`flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 ${todo.completed ? 'bg-blue-100' : 'bg-red-200'}`}
          onClick={() => {
            toggle(todo.id, !todo.completed);
          }}
        >
          {todo.completed ? (
            <IoCheckboxOutline size={30} />
          ) : (
            <IoSquareOutline size={30} />
          )}
        </div>
        <div className="text-center sm:text-left">{todo.description}</div>
      </div>
    </div>
  );
};
