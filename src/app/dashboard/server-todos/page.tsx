import { NewTodo, TodosGrid } from '@/todos';

export const metadata = {
  title: 'Server Todos',
  description: 'Listado de todos los Rest Todos',
};

export default async function RestTodosPage() {
  return (
    <div>
      <div className="w-full mb-5 mx-5">
        <NewTodo />
      </div>
      <TodosGrid />
    </div>
  );
}
