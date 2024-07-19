// app/api/saveInput/route.js
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  const { input } = await request.json();

  try {

const filePath = path.join(__dirname, 'output.txt');

    // Write the input to the file
    fs.appendFileSync("./output.txt","---"+ input, 'utf8');
    return NextResponse.json({ message: 'Input saved successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to save input' }, { status: 500 });
  }
}
