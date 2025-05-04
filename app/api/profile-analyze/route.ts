import { NextResponse } from 'next/server';
import { openai } from '../../../lib/openai';

export async function POST(req: Request) {
  const { text } = await req.json();
  const resp = await openai.chat.completions.create({ model: 'gpt-4o-mini', messages: [{ role: 'user', content: `Analise meu perfil: ${text}` }] });
  return NextResponse.json({ result: resp.choices[0].message.content });
}
