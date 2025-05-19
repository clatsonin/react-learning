import { useState } from 'react';
import data from './components/data';
import './App.css';

function App() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentId) {
    
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  return (
    <>
      <div className="wrapper">
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map(dataItem => (
              <div className="item" key={dataItem.id}>
                <div onClick={() => handleSingleSelection(dataItem.id)} className="title">
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {
                  selected === dataItem.id ?
                    <div className="content">{dataItem.answer}</div>
                    : null
                }
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
