'use client';
import Navigation from '@/components/Navigation';
import PageBody from '@/components/PageBody';
import { addChapter, getChapter } from '@/lib/firebase/api';
import { useEffect, useState } from 'react';

const Post = ({ params }) => {
  const [title, setTitle] = useState('');
  const [document, setDocument] = useState('');
  const [queueSave, setQueueSave] = useState(false);
  const [chapter, setChapter] = useState();

  useEffect(() => {
    const run = async () => {
      const result = await getChapter(params.slug);

      setChapter({ ...result, contentParsed: result.content.split('\n') });
    };
    run();
  }, [params]);

  const handleSubmit = () => {
    console.log(document);
    // addChapter({
    //   title: title,
    //   content: document,
    //   root: null,
    //   parent: null,
    //   ancestors: [],
    //   numChildren: 0,
    //   numDecendants: 0,
    //   timeCreated: new Date(),
    // });
    // send to database
    // Reroute
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
