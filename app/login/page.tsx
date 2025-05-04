'use client';
import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function Login() {
  const [email, setEmail] = useState('');
  const loginEmail = async () => { await supabase.auth.signInWithOtp({ email }); };
  const loginGoogle = async () => { await supabase.auth.signInWithOAuth({ provider: 'google' }); };
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4 px-4">
      <input className="input" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <button className="btn" onClick={loginEmail}>Entrar com Email</button>
      <button className="btn btn-secondary" onClick={loginGoogle}>Entrar com Google</button>
    </div>
  );
}
