'use client';

import ChapterTile from '@/components/ChapterTile';
import Navigation from '@/components/Navigation';
import PageBody from '@/components/PageBody';
import {
  getAncestors,
  getChapter,
  getChildrenChapters,
  getDocRef,
} from '@/lib/firebase/api';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Chapter = () => {
  const { slug } = useParams<{ slug: string }>();
  const [chapter, setChapter] = useState();
  const [ancestors, setAncestors] = useState([]);

  const [nextChapters, setNextChapters] = useState([]);

  useEffect(() => {
    const run = async () => {
      const result = await getChapter(slug);
      setChapter({ ...result, contentParsed: result.content.split('\n') });
    };
    run();
  }, [slug]);

  // Get next chapters
  useEffect(() => {
    // TODO - CAN LOAD THIS AS WE SCROLL CLOSER TO THE BOTTOM OF THE PAGE!!!
    const run = async () => {
      //
      const children = await getChildrenChapters(slug);
      setNextChapters(children);
    };
    run();
  }, [slug]);

  const handleShowPrevious = () => {
    const run = async () => {
      if (chapter.ancestors.length === 0) return;
      const ancestors = await getAncestors(chapter.ancestors);

      setAncestors(ancestors);
    };
    run();
  };

  return (
    <PageBody>
      <Navigation />

      {chapter && chapter.ancestors.length > 0 && (
        <div>
          Previous Chapters
          <button onClick={handleShowPrevious}>Show previous chapters</button>
          {ancestors.toReversed().map((ancestor) => (
            <ChapterTile
              title={ancestor.title}
              author={ancestor.author}
              id={ancestor.id}
              href={`/chapter/${ancestor.id}`}
              key={ancestor.id}
              numChildren={ancestor.numChildren}
              numChapter={ancestor.ancestors.length + 1}
            />
          ))}
        </div>
      )}
      <hr />
      {chapter && (
        <div>
          <h5>Chapter {chapter.ancestors.length + 1}</h5>
          <h1>{chapter.title}</h1>
          <p>By {chapter.author}</p>
          {chapter.contentParsed.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      )}
      <Link href={`/chapter/${slug}/fork`}>Fork story</Link>
      <div>
        <h3>Continue reading</h3>
        {nextChapters.map((nextChapter) => (
          <ChapterTile
            title={nextChapter.title}
            author={nextChapter.author}
            id={nextChapter.id}
            href={`/chapter/${nextChapter.id}`}
            key={nextChapter.id}
            numChildren={nextChapter.numChildren}
            numChapter={nextChapter.ancestors.length + 1}
          />
        ))}
      </div>
    </PageBody>
  );
};

// TODO!!!!!!!!!!!
// TODO!!!!!!!!!!!
// TODO!!!!!!!!!!!
// TODO!!!!!!!!!!!
// TODO!!!!!!!!!!!

// Save penanmes to all chapters and then do batch writes to update them. We can further limit
// updating a pename to once a week or something. Can probably do the same to comments
// if I'm limiting updates to once a week. It should be cheaper and faster then
// doing multiple get requests EVERY TIME a page is loading with both chapters and
// comments having to fetch penames!!!!

export default Chapter;
