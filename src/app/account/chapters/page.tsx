'use client';
import ChapterTile from '@/components/ChapterTile';
import Navigation from '@/components/Navigation';
import PageBody from '@/components/PageBody';
import { AuthContext } from '@/components/Providers';
import { getMyChapters } from '@/lib/firebase/api';
import { getAuthUser, signInWithEmailAndPassword } from '@/lib/firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';

const MyChapters = () => {
  const { authUser } = useContext(AuthContext);
  const [myChapters, setMyChapters] = useState([]);

  useEffect(() => {
    if (!authUser) return;
    const run = async () => {
      const chapters = await getMyChapters();
      if (!chapters) return;
      setMyChapters(chapters);
    };

    run();
  }, [authUser]);

  const handleUpdate = () => {
    //
  };

  return (
    <PageBody>
      <Navigation />
      <PageBody>
        <h1>Account / My Chapters</h1>

        {myChapters.map((chapter) => (
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
      </PageBody>
    </PageBody>
  );
};
export default MyChapters;
