'use client';
import Select from 'react-select';
import ForkListItem from './ForkListItem';
import Flex from './generic/Flex';
import { Filter, FilterList, Star } from 'iconoir-react';
import CustomCheckbox from './generic/CustomCheckbox';
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
        <input type="checkbox" />
        <p>Show mature content</p> You must be 18 years or older to view mature
        content - please enter yourr year of birth to verify your age. If birth
        year is 18 years ago, ask for full birthdate
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
    </div>
  );
};

export default ForkList;
