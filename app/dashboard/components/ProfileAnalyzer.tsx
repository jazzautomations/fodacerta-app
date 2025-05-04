'use client';
import { useState } from 'react';

export default function ProfileAnalyzer() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const analyze = async () => {
    const res = await fetch('/api/profile-analyze', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ text }) });
    const json = await res.json();
    setResult(json.result);
  };
  return (
    <div>
      <h3 className="text-xl font-semibold">Profile Analyzer</h3>
      <textarea className="textarea w-full" value={text} onChange={e => setText(e.target.value)} />
      <button className="btn mt-2" onClick={analyze}>Analisar</button>
      <pre className="mt-2 whitespace-pre-wrap">{result}</pre>
    </div>
  );
}
