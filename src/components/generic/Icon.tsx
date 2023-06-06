import Image from 'next/image';

const Icon = ({ style }) => (
  <span style={style}>
    <Image
      // priority
      src="/icons/pencil.svg"
      height={32}
      width={32}
      alt="Follow us on Twitter"
    />
  </span>
);

export default Icon;
