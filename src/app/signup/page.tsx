'use client';
import Navigation from '@/components/Navigation';
import PageBody from '@/components/PageBody';
import { createUserWithEmailAndPassword } from '@/lib/firebase/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSignUp = () => {
    createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
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
      <h1>Sign up</h1>
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
      <button onClick={handleSignUp}>Sign up</button>
    </PageBody>
  );
};
export default SignUp;
