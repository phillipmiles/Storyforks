import Image from 'next/image';
import styles from './page.module.css';

import Link from 'next/link';
import PageBody from '@/components/PageBody';
import Navigation from '@/components/Navigation';

const Home = () => {
  return (
    <PageBody>
      <Navigation />
      <h1>Home</h1>
    </PageBody>
  );
};

export default Home;
