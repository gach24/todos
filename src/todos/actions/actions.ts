'use server';

import prisma from '@/libs/prisma';
import { Todo } from '@/generated/prisma';
import { revalidatePath } from 'next/cache';

export const toggle = async (id: string, completed: boolean): Promise<Todo> => {
  const todo = await prisma.todo.update({
    where: { id: id },
    data: { completed: completed },
  });

  revalidatePath('/dashboard/server-todos');

  return todo;
};

export const addTodo = async (description: string): Promise<Todo> => {
  const todo = await prisma.todo.create({
    data: { description: description },
  });

  revalidatePath('/dashboard/server-todos');

  return todo;
};

export const deleteCompleted = async (): Promise<number> => {
  const { count } = await prisma.todo.deleteMany({
    where: { completed: true },
  });

  revalidatePath('/dashboard/server-todos');

  return count;
};
