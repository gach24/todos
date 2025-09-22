import { NextResponse, NextRequest } from 'next/server';

import { boolean, object, string } from 'yup';

import prisma from '@/libs/prisma';
import { getIntParam } from '@/libs/utils';

//#region GET
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const take = getIntParam(searchParams, 'take') ?? 10;
  const skip = getIntParam(searchParams, 'skip') ?? 0;
  return NextResponse.json(
    await prisma.todo.findMany({
      take: take,
      skip: skip,
    }),
    { status: 200 }
  );
}
//#endregion GET

//#region POST
const createSchema = object({
  description: string().required().min(3).max(255),
  completed: boolean().optional().default(false),
});

export async function POST(request: NextRequest) {
  try {
    const { description, completed } = await createSchema.validate(
      await request.json()
    );
    const todo = await prisma.todo.create({
      data: {
        description: description,
        completed: completed,
      },
    });
    return NextResponse.json(todo, { status: 201 });
  } catch {
    return NextResponse.json({ message: 'Bad request' }, { status: 400 });
  }
}

//#endregion POST

//#region DELETE
export async function DELETE() {
  const { count } = await prisma.todo.deleteMany({
    where: { completed: true },
  });
  return NextResponse.json({ count: count }, { status: 200 });
}
