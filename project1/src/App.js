import './App.css';
import CustomList from './components/CustomList';
import MainHeader from './components/MainHeader';
import {useState} from "react";

//state, props 
// props -> 부모 요소에서 관리 -> 수동적 : 부모에서 적어준 데이터에 의존 
// state -> 컴포넌트 그 자체에서 관리
function App() {
  const array1 = ["apple", "banana", "orange"];
  // return (
  //   <div className="App">
  //     <ul>
  //       {array1.map((value, index) => {
  //         return (
  //           <CustomList text={`${value} ${index}`}></CustomList>
  //         );
  //       })}
  //     </ul>
  //   </div>
  // );


  const [text, setText] = useState("hide");
  const buttonClick = () => {
    text === "hide" ? setText("see") : setText("hide");
  }

  const conditionRendering = text === "see" 
  ? <MainHeader text="see"></MainHeader>
  : <MainHeader text="hi"></MainHeader>;
  return (
    <div className="App">
      <h1>rkwmdi</h1>
      { conditionRendering }
      <button onClick={buttonClick}>{text}</button>
    </div>
  );
}

// && -> if(text==='aa') return (<div> fds </div>)
export default App;
