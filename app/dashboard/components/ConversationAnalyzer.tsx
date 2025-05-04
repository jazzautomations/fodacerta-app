'use client';
import { useState } from 'react';

export default function ConversationAnalyzer() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState('');
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => setFile(e.target.files?.[0]||null);
  const analyze = async () => {
    if (!file) return;
    const form = new FormData(); form.append('file', file);
    const res = await fetch('/api/analyze-conversation', { method:'POST', body: form });
    const json = await res.json();
    setResult(json.analysis);
  };
  return (
    <div>
      <h3 className="text-xl font-semibold">Conversation Analyzer</h3>
      <input type="file" accept="image/*" onChange={handleFile} className="mt-2" />
      <button className="btn mt-2" onClick={analyze}>Analisar</button>
      <pre className="mt-2 whitespace-pre-wrap">{result}</pre>
    </div>
  );
}
