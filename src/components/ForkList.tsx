'use client';
import Select from 'react-select';
import ForkListItem from './ForkListItem';
import Flex from './generic/Flex';
import { Filter, FilterList, Star } from 'iconoir-react';
// import s from './ForkCard.module.css';

const ForkList = ({ style, forks, children, ...props }) => {
  return (
    <div style={style}>
      <Flex
        style={{
          // color: 'white',
          justifyContent: 'space-between',
          alignItems: 'center',
          textAlign: 'center',
          fontSize: '16px',
          marginBottom: '48px',
        }}
      >
        <div
          style={{
            flexGrow: 1,
            textAlign: 'left',
            fontSize: '28px',
          }}
        >
          All chapter forks
        </div>

        <Flex style={{ marginRight: '24px' }}>
          <input
            type="text"
            placeholder="Search"
            style={{
              borderRadius: '24px',
              padding: '8px 16px',
            }}
          />
        </Flex>
        <Flex style={{}}>
          {/* <Suggestion style={{ marginRight: '8px' }} /> */}
          <FilterList style={{ marginRight: '8px' }} />
          Filters
        </Flex>

        <div style={{ display: 'none' }}>
          <div
            style={{
              minWidth: '200px',
              // background: 'green',
            }}
          >
            Label
          </div>
          {/* <Select
            defaultValue="New"
            onChange={() => {}}
            options={[
              {
                label: 'New',
                value: 'new',
              },
              {
                label: 'Recommended',
                value: 'recommended',
              },
              {
                label: 'Long',
                value: 'long',
              },
            ]}
          /> */}

          <div
            style={{
              minWidth: '120px',
              // background: 'red',
            }}
          >
            Author
          </div>
          <input type="text" />
        </div>
      </Flex>
      <Flex
        style={{
          // backgroundColor: 'white',
          // color: 'white',
          // marginBottom: '96px',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '8px 16px',
          // marginBottom: '8px',
          // border: '1px solid black',
          borderBottomStyle: 'none',
          textAlign: 'center',
          fontSize: '16px',
        }}
      >
        <div
          style={{
            flexGrow: 1,
            // maxWidth: '40%',
            textAlign: 'left',
          }}
        >
          Title
        </div>
        <div
          style={{
            minWidth: '200px',
            // background: 'green',
          }}
        >
          Author
        </div>
        <div
          style={{
            minWidth: '120px',
            // background: 'red',
          }}
        >
          Chapter
        </div>
        <div
          style={{
            minWidth: '150px',
            // background: 'yellow',
          }}
        >
          Label
        </div>
      </Flex>
      {forks.map((fork, index) => (
        <ForkListItem
          key={index}
          title={fork.title}
          chapter={fork.chapter}
          author={fork.author}
          label={fork.label}
        />
      ))}
    </div>
  );
};

export default ForkList;
