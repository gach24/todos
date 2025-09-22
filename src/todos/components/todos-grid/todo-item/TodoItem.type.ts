import { Todo } from '@/generated/prisma';

export type TodoItemProps = {
  todo: Todo;
  toggle: (id: string, completed: boolean) => Promise<Todo>;
  // TODO: Actions (delete, toggle, edit)
};
