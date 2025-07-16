import { NextRequest, NextResponse } from 'next/server';
import { validateGuess } from './validate';

export async function POST(req: NextRequest) {
  try {
    const { word, definitions, guess } = await req.json();
    const key = process.env.OPENAI_API_KEY;
    if (!key) {
      return NextResponse.json({ error: 'Missing API key' }, { status: 500 });
    }
    const result = await validateGuess(key, word, definitions, guess);
    return NextResponse.json({ result });
  } catch (err) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
