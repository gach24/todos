import { NextResponse } from 'next/server';

import prisma from '@/libs/prisma';

export async function GET() {
  await prisma.todo.deleteMany();

  await prisma.todo.createMany({
    data: [
      { description: 'Piedra del alma', completed: true },
      { description: 'Piedra del tiempo' },
      { description: 'Piedra de la realidad' },
      { description: 'Piedra del poder' },
      { description: 'Piedra del espacio' },
    ],
  });

  return NextResponse.json({ message: 'Seed executed' }, { status: 200 });
}
