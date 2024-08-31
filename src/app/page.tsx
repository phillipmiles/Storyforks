'use client';

import Image from 'next/image';
import styles from './page.module.css';

import Link from 'next/link';
import PageBody from '@/components/PageBody';
import Navigation from '@/components/Navigation';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { getDocRef, getRootChapters } from '@/lib/firebase/api';

const Home: NextPage = () => {
  const [startChapters, setStartChapters] = useState([]);

  useEffect(() => {
    const run = async () => {
      const result = await getRootChapters();

      // Display chapters without the userData
      setStartChapters(result);
    };
    run();
  }, []);

  return (
    <PageBody>
      <Navigation />
      <h1>Home</h1>
      {startChapters.map((chapter) => (
        <div style={{ border: '1px solid black' }}>
          <Link href={`/chapter/${chapter.id}`} key={chapter.id}>
            <p>Chapter {chapter.ancestors.length + 1}</p>
            <h4>{chapter.title}</h4>
            <p>By {chapter.author}</p>
          </Link>
        </div>
      ))}
      <ul>
        <li>Give users the option to hide chapter title in the UI</li>
      </ul>
    </PageBody>
  );
};

export default Home;
