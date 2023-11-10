import { useState } from 'react';
import buildingsImage from '../../../../assets/buildings.png';
import { tabsContent } from '../../constants';

export const Tabs = () => {
  const [tabIndex, setTabIndex] = useState<number>(1);

  return (
    <div className='tabs-wrapper'>
      <div className='inner'>
        <div className='btn-group'>
          <button
            className={`btn ${tabIndex === 1 && 'btn-active'}`}
            onClick={() => setTabIndex(1)}
          >
            TAB 1
          </button>
          <button
            className={`btn ${tabIndex === 2 && 'btn-active'}`}
            onClick={() => setTabIndex(2)}
          >
            TAB 2
          </button>
          <button
            className={`btn ${tabIndex === 3 && 'btn-active'}`}
            onClick={() => setTabIndex(3)}
          >
            TAB 3
          </button>
        </div>
        <div className='tab-content'>
          {tabsContent.map((item) => {
            if (tabIndex === item.index) {
              return item.content;
            }
          })}

          <button className='download-btn'>Download</button>
        </div>
        <div>
          <img className='building-image' src={buildingsImage} />
        </div>
      </div>
    </div>
  );
};
