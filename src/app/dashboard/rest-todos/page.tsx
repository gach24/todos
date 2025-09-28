export const dynamic = 'force-dynamic';
export const revalidate = 0;

import prisma from '@/libs/prisma';
import { NewTodo, TodosGrid } from '@/todos';

export const metadata = {
  title: 'Rest Todos',
  description: 'Listado de todos los Rest Todos',
};

/*
'use client';
const fetchTodos = async () =>
  await (await fetch('/api/todos', { cache: 'no-store' })).json();

import { useEffect, useState } from 'react';
...
*/

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({
    orderBy: { description: 'asc' },
  });

  return (
    <div>
      <div className="w-full mb-5 mx-5">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </div>
  );
}
