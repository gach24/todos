'use client';

import { useRouter } from 'next/navigation';
import { TodoItem } from './todo-item';
import { TodosGridProps } from './TodosGrid.type';

import { Todo } from '@/generated/prisma';
import * as api from '@/todos/helpers';

export const TodosGrid = ({ todos = [] }: TodosGridProps) => {
  const router = useRouter();

  const update = async (id: string, completed: boolean): Promise<Todo> => {
    const todo = await api.update(id, completed);
    router.refresh();
    return todo;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {todos.map(t => (
        <TodoItem key={t.id} todo={t} toggle={update} />
      ))}
    </div>
  );
};
