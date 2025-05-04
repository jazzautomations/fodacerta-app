import { NextResponse } from 'next/server';
import { openai } from '../../../lib/openai';

export async function POST(req: Request) {
  const { question } = await req.json();
  const resp = await openai.chat.completions.create({ model: 'gpt-4o-mini', messages: [{ role: 'user', content: `Aconselhe amorosamente: ${question}` }] });
  return NextResponse.json({ advice: resp.choices[0].message.content });
}
