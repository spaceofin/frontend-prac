import React from 'react';
import PropComponent from './03/PropsComponent';
import TodaysPlan from './03/TodaysPlan';
import ChildComponent from './03/ChildComponent';

class App extends React.Component {
  render() {
    return(
      <div className="body">
        <PropComponent name="제임스" />
        <TodaysPlan />
        <ChildComponent 
          boolValue={true}
          numValue={1}
          arrayValue={[1,2,3]}
          objValue={{ name: '제목', age: 30}}
          nodeValue = {<h4>노드</h4>}
          funcValue={() => { console.log('메시지'); }}
          />
      </div>
    );
    // return <PropComponent name="두잇 리액트" />;
  }
}

export default App