'use client';

import Image from 'next/image';
import styles from './page.module.css';

import Link from 'next/link';
import PageBody from '@/components/PageBody';
import Navigation from '@/components/Navigation';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { getDocRef, getRootChapters } from '@/lib/firebase/api';
import ChapterTile from '@/components/ChapterTile';

const Home: NextPage = () => {
  const [startChapters, setStartChapters] = useState([]);

  useEffect(() => {
    const run = async () => {
      const result = await getRootChapters();
      console.log('RESULT', result);
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
        <ChapterTile
          title={chapter.title}
          author={chapter.author}
          id={chapter.id}
          href={`/chapter/${chapter.id}`}
          key={chapter.id}
          numChildren={chapter.numChildren}
          numChapter={chapter.ancestors.length + 1}
        />
      ))}
      <ul>
        <li>Give users the option to hide chapter title in the UI</li>
      </ul>
    </PageBody>
  );
};

export default Home;
