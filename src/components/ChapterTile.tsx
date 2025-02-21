import { getDeepestDescendant } from '@/lib/firebase/api';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const ChapterTile = ({ id, title, author, href, numChapter, numChildren }) => {
  const [depth, setDepth] = useState();

  useEffect(() => {
    const run = async () => {
      const deepestChild = await getDeepestDescendant(id);
      console.log('test', deepestChild);
      if (deepestChild) {
        setDepth(deepestChild.numAncestors + 1);
      } else {
        setDepth(numChapter);
      }
    };
    run();
  }, [id, numChapter]);

  return (
    <div style={{ border: '1px solid black' }}>
      <Link href={href} key={id}>
        <p>Chapter {numChapter}</p>
        <h3>{title}</h3>
        <p>By {author}</p>
        <p>{numChildren} forks</p>
        <p>Read to chapter {depth ? depth : 'loading'}</p>
        {/* <p>{depth ? depth - numChapter : 'loading'} more chapters</p> */}
      </Link>
    </div>
  );
};

export default ChapterTile;
