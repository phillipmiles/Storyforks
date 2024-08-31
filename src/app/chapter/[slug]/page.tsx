'use client';

import Navigation from '@/components/Navigation';
import PageBody from '@/components/PageBody';
import {
  getAncestors,
  getChapter,
  getChildrenChapters,
  getDocRef,
} from '@/lib/firebase/api';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Chapter = ({ params }) => {
  const [chapter, setChapter] = useState();
  const [ancestors, setAncestors] = useState([]);

  const [nextChapters, setNextChapters] = useState([]);

  useEffect(() => {
    const run = async () => {
      const result = await getChapter(params.slug);
      setChapter({ ...result, contentParsed: result.content.split('\n') });
    };
    run();
  }, [params]);

  // Get next chapters
  useEffect(() => {
    // TODO - CAN LOAD THIS AS WE SCROLL CLOSER TO THE BOTTOM OF THE PAGE!!!
    const run = async () => {
      //
      const children = await getChildrenChapters(params.slug);
      setNextChapters(children);
    };
    run();
  }, [params]);

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
          {ancestors.toReversed().map((ancestor, index) => (
            <div>
              <Link href={`/chapter/${ancestor.id}`}>
                <div>
                  <h5>Chapter {index + 1}</h5>
                  <h4>{ancestor.title}</h4>
                  <p>{ancestor.numChildren} Forks</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
      {chapter && (
        <div>
          <h1>{chapter.title}</h1>
          <p>By {chapter.author}</p>
          {chapter.contentParsed.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      )}
      <Link href={`/chapter/${params.slug}/fork`}>Fork story</Link>
      <div>
        <h3>Continue reading</h3>
        {nextChapters.map((nextChapter) => (
          <div>
            <Link href={`/chapter/${nextChapter.id}`}>
              <h4>{nextChapter.title}</h4>
            </Link>
          </div>
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
