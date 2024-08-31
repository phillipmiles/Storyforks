'use client';
import Navigation from '@/components/Navigation';
import PageBody from '@/components/PageBody';
import { AuthContext } from '@/components/Providers';
import { signInWithEmailAndPassword } from '@/lib/firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';

const Account = () => {
  const { authUser } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState('');

  useEffect(() => {
    if (!authUser) return;
    setDisplayName(authUser.public.displayName);
  }, [authUser]);

  const handleUpdate = () => {
    //
  };

  return (
    <PageBody>
      <Navigation />
      <PageBody>
        <h1>Account</h1>
        <p>
          ENABLE THIS FEATURE LATER - Use cloud function to trigger when a user
          display name is changed to then make bulk updates on all isntances of
          its usage. Limit name changes by once a month or something.
        </p>
        {authUser && (
          <div>
            <label>
              Display name
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </label>

            <button onClick={handleUpdate}>Update</button>
          </div>
        )}
      </PageBody>
    </PageBody>
  );
};
export default Account;
