'use client';
import Navigation from '@/components/Navigation';
import PageBody from '@/components/PageBody';
import { AuthContext } from '@/components/Providers';
import { addChapter, forkChapter, getChapter } from '@/lib/firebase/api';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

const Post = () => {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [document, setDocument] = useState('');
  const [queueSave, setQueueSave] = useState(false);
  const [chapter, setChapter] = useState();
  const { authUser } = useContext(AuthContext);

  useEffect(() => {
    const run = async () => {
      const result = await getChapter(slug);

      setChapter({ ...result, contentParsed: result.content.split('\n') });
    };
    run();
  }, [slug]);

  const handleSubmit = async () => {
    if (!chapter) return;
    const newChapter = await forkChapter(slug, {
      title: title,
      content: document,
      author: authUser.public.displayName,
      root: chapter.root ? chapter.root : chapter.id,
      parent: chapter.id,
      ancestors: [...chapter.ancestors, chapter.id],
      numAncestors: chapter.ancestors.length + 1,
      numChildren: 0,
      numDecendants: 0,
      timeCreated: new Date(),
    });

    router.push(`/chapter/${newChapter.id}`);
  };

  const handleChange = (e) => {
    setDocument(e.target.value);
  };
  // Todo Drafting

  return (
    <PageBody>
      <Navigation />
      <PageBody>
        <h1>Write chapter {chapter && chapter.ancestors.length + 2}</h1>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea value={document} onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
      </PageBody>
    </PageBody>
  );
};
export default Post;
