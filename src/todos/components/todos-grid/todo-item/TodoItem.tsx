'use client';
import { startTransition, useOptimistic } from 'react';
import { TodoItemProps } from './TodoItem.type';

import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5';

import styles from './TodoItem.module.css';

export const TodoItem = ({ todo, toggle }: TodoItemProps) => {
  const [optimisticTodo, toogleOptimisticTodo] = useOptimistic(
    todo,
    (state, newCompletedValue: boolean) => ({
      ...state,
      completed: newCompletedValue,
    })
  );

  const onToggleTodo = async () => {
    try {
      startTransition(async () => {
        toogleOptimisticTodo(!optimisticTodo.completed);
        await toggle(optimisticTodo.id, !optimisticTodo.completed);
      });
    } catch {
      startTransition(() => {
        toogleOptimisticTodo(!optimisticTodo.completed);
      });
    }
  };

  return (
    <div className={optimisticTodo.completed ? styles.done : styles.pending}>
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <div
          className={`flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 ${todo.completed ? 'bg-blue-100' : 'bg-red-200'}`}
          onClick={() => {
            onToggleTodo();
          }}
        >
          {optimisticTodo.completed ? (
            <IoCheckboxOutline size={30} />
          ) : (
            <IoSquareOutline size={30} />
          )}
        </div>
        <div className="text-center sm:text-left">
          {optimisticTodo.description}
        </div>
      </div>
    </div>
  );
};
