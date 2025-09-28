export const dynamic = 'force-dynamic';
export const revalidate = 0;

import prisma from '@/libs/prisma';
import { NewTodo, TodosGrid } from '@/todos';

export const metadata = {
  title: 'Server Todos',
  description: 'Listado de todos los Rest Todos',
};

export default async function ServerTodosPage() {
  const todos = await prisma.todo.findMany({
    orderBy: { description: 'asc' },
  });

  return (
    <>
      <span className="text-3xl mb-10">Server Actions</span>
      <div className="w-full mb-5 mx-5">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </>
  );
}
