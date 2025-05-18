import { useState } from 'react';
import data from './components/data';
import './App.css';

function App() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="wrapper">
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map(dataItem => (
              <div className="item" key={dataItem.id}>
                <div className="title">
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
              </div>
            ))
          ) : (
            <div>Data not found</div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
