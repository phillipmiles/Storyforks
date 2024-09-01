'use client';

import { onAuthStateChanged, signOut } from '@/lib/firebase/auth';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import s from './Navigation.module.css';

const Navigation = ({ children }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged((userState) => {
      console.log(userState);
      if (userState) {
        console.log('WE ARE LOGGED IN');
      }
      setUser(userState);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className={s.container}>
      <div>
        <Link href="/" className={s.navItem}>
          Home
        </Link>
        <Link href="/write" className={s.navItem}>
          Write
        </Link>
      </div>
      <div>
        <Link href="/account" className={s.navItem}>
          Account
        </Link>
        <Link href="/account/chapters" className={s.navItem}>
          My chapters
        </Link>
        <Link href="/login" className={s.navItem}>
          Login
        </Link>
        <Link href="/signup" className={s.navItem}>
          Sign up
        </Link>

        {user && (
          <button onClick={signOut} className={s.navItem}>
            {user.uid} Sign out
          </button>
        )}
      </div>
    </div>
  );
};
export default Navigation;
