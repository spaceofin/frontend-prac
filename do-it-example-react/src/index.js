
// 필수 리액트 구동 모듈들입니다.
import React from 'react';
import ReactDOM from 'react-dom';
// 초기 화면을 구성하는 사용자 코드입니다.
import './index.css';
import App from './App';
//import SampleApp from './03/JSXSample.jsx';
//import * as serviceWorkder from './serviceWorker';

// 리액트 엔진이 화면을 출력하는 코드입니다.
// id가 root인 엘리먼트에 컴포넌트를 출력합니다.

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<SampleApp />, document.getElementById('root'));

//ServiceWorker.unregister();

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// //import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
