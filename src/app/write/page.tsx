'use client';
import Navigation from '@/components/Navigation';
import PageBody from '@/components/PageBody';
import { addChapter } from '@/lib/firebase/api';
import { useState } from 'react';

const Post = () => {
  const [title, setTitle] = useState('');
  const [document, setDocument] = useState('');
  const [queueSave, setQueueSave] = useState(false);

  const handleSubmit = () => {
    console.log(document);
    addChapter({
      title: title,
      content: document,
      root: null,
      parent: null,
      ancestors: [],
      numChildren: 0,
      numDecendants: 0,
      timeCreated: new Date(),
    });
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
        <h1>Post</h1>
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
