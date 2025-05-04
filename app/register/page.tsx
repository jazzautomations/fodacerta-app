'use client';
import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function Register() {
  const [email, setEmail] = useState('');
  const register = async () => { await supabase.auth.signUp({ email }); };
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4 px-4">
      <input className="input" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <button className="btn btn-primary" onClick={register}>Cadastrar</button>
    </div>
  );
}
