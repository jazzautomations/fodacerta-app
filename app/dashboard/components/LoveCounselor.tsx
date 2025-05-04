'use client';
import { useState } from 'react';
export default function LoveCounselor() {
  const [question, setQuestion] = useState('');
  const [advice, setAdvice] = useState('');
  const consult = async () => {
    const res = await fetch('/api/love-counselor', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ question }) });
    const json = await res.json();
    setAdvice(json.advice);
  };
  return (
    <div>
      <h3 className="text-xl font-semibold">Love Counselor</h3>
      <textarea className="textarea w-full" value={question} onChange={e => setQuestion(e.target.value)} />
      <button className="btn mt-2" onClick={consult}>Consultar</button>
      <pre className="mt-2 whitespace-pre-wrap">{advice}</pre>
    </div>
}
