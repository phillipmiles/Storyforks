'use client';
import Navigation from '@/components/Navigation';
import PageBody from '@/components/PageBody';
import { signInWithEmailAndPassword } from '@/lib/firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {
    console.log('WHERE');
    signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        if (userCredential) {
          router.push('/');
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <PageBody>
      <Navigation />
      <PageBody>
        <h1>Login</h1>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </PageBody>
    </PageBody>
  );
};
export default Login;
