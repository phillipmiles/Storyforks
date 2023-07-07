'use client';
import Select from 'react-select';
import s from './ForkListTable.module.css';

import {
  BookmarkEmpty,
  EyeEmpty,
  Heart,
  Star,
  Trash,
  WarningTriangle,
} from 'iconoir-react';

const ForkListTable = ({ style, forks, children, ...props }) => {
  return (
    <div style={style}>
      <table className={s.table} style={{ width: '100%', textAlign: 'left' }}>
        <thead style={{ padding: '16px 16px' }}>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Chapter</th>
            <th>Label</th>
            <th>Actions</th>
            <th>Flags</th>
          </tr>
        </thead>
        <tbody>
          {forks.map((fork, index) => (
            <tr key={index} onClick={() => console.log(`Hello from ${index}`)}>
              <td>{fork.title}</td>
              <td>{fork.author}</td>
              <td>Chapter 3</td>
              <td>{fork.label}</td>
              <td>
                <EyeEmpty />
                <BookmarkEmpty />
                <Star />
              </td>
              <td>
                <Heart />
                <Trash />
                <WarningTriangle />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ForkListTable;
