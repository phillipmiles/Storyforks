'use client';

import Navigation from '@/components/Navigation';
import PageBody from '@/components/PageBody';
import { getChapter } from '@/lib/firebase/api';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Chapter = ({ params }) => {
  const [chapter, setChapter] = useState();

  useEffect(() => {
    const run = async () => {
      const result = await getChapter(params.slug);
      // console.log(result.content.split('\n'));
      setChapter({ ...result, contentParsed: result.content.split('\n') });
    };
    run();
  }, [params]);

  return (
    <PageBody>
      <Navigation />
      {chapter && (
        <div>
          <h1>{chapter.title}</h1>
          {chapter.contentParsed.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      )}
      <Link href={`/write/${params.slug}`}>Fork story</Link>
    </PageBody>
  );
};

export default Chapter;
