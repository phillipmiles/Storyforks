import Link from 'next/link';

const ChapterTile = ({ id, title, author, href, numChapter, numChildren }) => {
  return (
    <div style={{ border: '1px solid black' }}>
      <Link href={href} key={id}>
        <p>Chapter {numChapter}</p>
        <h3>{title}</h3>
        <p>By {author}</p>
        <p>{numChildren} forks</p>
      </Link>
    </div>
  );
};

export default ChapterTile;
