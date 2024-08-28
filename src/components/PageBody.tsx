import s from './PageBody.module.css';

const PageBody = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default PageBody;
