import { NextResponse } from 'next/server';
import formidable from 'formidable';
import fs from 'fs';
import { openai } from '../../../lib/openai';

export const config = { api: { bodyParser: false } };

export async function POST(req: Request) {
  const form = new formidable.IncomingForm();
  const data: any = await new Promise((res, rej) => form.parse(req as any, (err, fields, files) => err ? rej(err) : res({ fields, files })));
  const filePath = (data.files.file as any).filepath;
  const image = fs.readFileSync(filePath);
  const resp = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: 'Analise esta conversa:' }],
    attachments: [{ data: image, mime: 'image/png' }]
  });
  return NextResponse.json({ analysis: resp.choices[0].message.content });
}
