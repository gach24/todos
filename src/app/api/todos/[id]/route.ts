import { NextResponse, NextRequest } from 'next/server';

import { boolean, object, string } from 'yup';

import prisma from '@/libs/prisma';

//#region GET

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const todo = await prisma.todo.findUnique({
    where: { id: id },
  });

  return todo
    ? NextResponse.json(todo, { status: 200 })
    : NextResponse.json({ message: 'Not found' }, { status: 404 });
}

//#endregion

//#region PUT
const updateSchema = object({
  description: string().optional().min(3).max(255),
  completed: boolean().optional(),
});

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const todo = await prisma.todo.findUnique({
    where: { id: id },
  });

  if (!todo) {
    return NextResponse.json({ message: 'Not found' }, { status: 404 });
  }

  try {
    const { description, completed } = await updateSchema.validate(
      await request.json()
    );
    const todo = await prisma.todo.update({
      where: { id: id },
      data: {
        description: description,
        completed: completed,
      },
    });
    return NextResponse.json(todo, { status: 200 });
  } catch {
    return NextResponse.json({ message: 'Bad request' }, { status: 400 });
  }
}

//#endregion
