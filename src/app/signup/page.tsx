'use client';
import Navigation from '@/components/Navigation';
import PageBody from '@/components/PageBody';
import { createUser } from '@/lib/firebase/api';
import { createUserWithEmailAndPassword } from '@/lib/firebase/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [penName, setPenName] = useState('');

  const handleSignUp = () => {
    const run = async () => {
      const userCredential = await createUserWithEmailAndPassword(
        email,
        password
      );
      // Signed up
      const user = userCredential.user;

      await createUser(user.uid, { displayName: penName });

      if (userCredential) {
        router.push('/');
      }
    };

    run();
  };

  return (
    <PageBody>
      <Navigation />
      <h1>Sign up</h1>
      <label>
        Email
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label>
        Pen name
        <input
          type="text"
          value={penName}
          onChange={(e) => setPenName(e.target.value)}
        />
      </label>
      <button onClick={handleSignUp}>Sign up</button>
    </PageBody>
  );
};
export default SignUp;
