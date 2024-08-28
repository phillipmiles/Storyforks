'use client';
import { useEffect, useRef } from 'react';
import Select from 'react-select';
import ForkListItem from './ForkListItem';
import Flex from './generic/Flex';
import { Filter, FilterList, Star } from 'iconoir-react';
import CustomCheckbox from './generic/CustomCheckbox';
import CheckboxIcon from './CheckboxIcon';
import DropDownMenu from './DropDownMenu';
import { createPortal } from 'react-dom';
import Tether from './generic/Tether';
import TetherExpander from './generic/TetherExpander';
import { useState } from 'react';
import ButtonText from './ButtonText';
import DropDownMenuItem from './DropDownMenuItem';
// import s from './ForkCard.module.css';

const FiltersMenu = () => (
  <DropDownMenu style={{}}>
    <DropDownMenuItem>
      <label
        style={{
          padding: '8px',
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* <input type="checkbox" /> */}
        <CustomCheckbox checked CheckboxComponent={CheckboxIcon} />
        <span style={{ marginLeft: '16px' }}>Show mature content</span>
      </label>
    </DropDownMenuItem>
    <DropDownMenuItem>
      <label
        style={{
          padding: '8px',
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* <input type="checkbox" /> */}
        <CustomCheckbox CheckboxComponent={CheckboxIcon} />
        <span style={{ marginLeft: '16px' }}>Show mature content</span>
      </label>
    </DropDownMenuItem>
    {/* <input type="checkbox" />
    <p>Show mature content</p> You must be 18 years or older to view mature
    content - please enter yourr year of birth to verify your age. If birth year
    is 18 years ago, ask for full birthdate */}
  </DropDownMenu>
);

const ForkList = ({ style, forks, children, ...props }) => {
  const [showFilters, setShowFilters] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const ifClick = (event) => {
      if (showFilters && !menuRef.current.contains(event.target)) {
        setShowFilters(false);
      }
    };

    document.addEventListener('click', ifClick);

    return () => {
      document.removeEventListener('click', ifClick);
    };
  }, [showFilters]);

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
        <TetherExpander
          tetherComponent={
            <div ref={menuRef}>
              <FiltersMenu />
            </div>
          }
          visible={showFilters}
          sourceAnchorCoord={{ x: '100%', y: '100%' }}
          menuOriginX="right"
          menuOriginY="top"
          transitionDuration={250}
          fitInViewport={false}
          shouldUpdatePosition
        >
          <ButtonText onClick={() => setShowFilters((state) => !state)}>
            <FilterList style={{ marginRight: '8px' }} />
            Filters
          </ButtonText>
        </TetherExpander>

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
