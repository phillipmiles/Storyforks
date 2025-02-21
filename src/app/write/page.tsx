'use client';
import Navigation from '@/components/Navigation';
import PageBody from '@/components/PageBody';
import { AuthContext } from '@/components/Providers';
import { addChapter } from '@/lib/firebase/api';
import { useContext, useEffect, useState } from 'react';

const Post = () => {
  const [title, setTitle] = useState('');
  const [document, setDocument] = useState('');
  const [queueSave, setQueueSave] = useState(false);
  const { authUser } = useContext(AuthContext);

  const handleSubmit = () => {
    addChapter({
      title: title,
      content: document,
      author: authUser.public.displayName,
      root: null,
      parent: null,
      ancestors: [],
      numAncestors: 0,
      numChildren: 0,
      numDecendants: 0,
      timeCreated: new Date(),
    });
    // send to database
    // Reroute
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
    setQueueSave(true);
  };

  const handleChange = (e) => {
    setDocument(e.target.value);
    setQueueSave(true);
  };

  // useEffect(() => {
  //   if (!queueSave) return;

  //   const timeout = setTimeout(() => {
  //     console.log('SAVE');
  //     // Save
  //     setQueueSave(false);
  //   }, 30000);
  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [queueSave]);

  return (
    <PageBody>
      <Navigation />
      <PageBody>
        <h1>Post</h1>
        <input type="text" value={title} onChange={handleChangeTitle} />
        <textarea value={document} onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
      </PageBody>
    </PageBody>
  );
};
export default Post;
