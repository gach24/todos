import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    {
      message: 'Hello World',
    },
    { status: 200 }
  );
}

export async function POST() {
  // const body = await request.json();
  return NextResponse.json(
    {
      message: 'Data received',
      // data: body,
    },
    { status: 200 }
  );
}
