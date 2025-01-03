import React, { useState } from 'react';
import './App.css';
import MultiLevelCheckbox from './multidropdown/multilevelCheckbox';

import DummyData1 from "./dummyData1.json";
import DummyData2 from "./dummyData2.json";

function App() {
  const [checkList, setCheckList] = useState<boolean>(true);
  const [output, setOutput] = useState<any>([]);
  return (
    <div className="App">
      <MultiLevelCheckbox checkList={checkList ? DummyData1 : DummyData2} onChange={v => setOutput((_: any) => v)} />
      <button onClick={_ => setCheckList(!checkList)}>Toggle check list data to mimic dynamic render</button>
      <div className='output'>
        {
          output.map((item:any) => 
            <span>
              {JSON.stringify(item)}
            </span>
          )
        }
      </div>
    </div>
  );
}

export default App;
