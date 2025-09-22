import { Todo } from '@/generated/prisma';

export const update = async (id: string, completed: boolean): Promise<Todo> => {
  const body = { completed };

  const todo = await fetch(`/api/todos/${id}`, {
    cache: 'no-store',
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  return todo.json();
};

export const create = async (description: string): Promise<Todo> => {
  const body = { description };

  const todo = await fetch(`/api/todos`, {
    cache: 'no-store',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  return await todo.json();
};

export const del = async (): Promise<number> => {
  const { count } = await (
    await fetch(`/api/todos`, {
      cache: 'no-store',
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
  ).json();
  return count;
};
