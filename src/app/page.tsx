'use client';

import Image from 'next/image';
import styles from './page.module.css';

import Link from 'next/link';
import PageBody from '@/components/PageBody';
import Navigation from '@/components/Navigation';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { getRootChapters } from '@/lib/firebase/api';

const Home: NextPage = () => {
  const [startChapters, setStartChapters] = useState([]);

  useEffect(() => {
    const run = async () => {
      const result = await getRootChapters();

      setStartChapters(result);
    };
    run();
  }, []);

  return (
    <PageBody>
      <Navigation />
      <h1>Home</h1>
      {startChapters.map((chapter) => (
        <div>
          <Link href={`/chapter/${chapter.id}`} key={chapter.id}>
            {chapter.title}
          </Link>
        </div>
      ))}
    </PageBody>
  );
};

export default Home;
