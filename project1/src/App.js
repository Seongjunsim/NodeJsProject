import './App.css';
import CustomList from './components/CustomList';
import MainHeader from './components/MainHeader';


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

  return (
    <div className="App">
      <h1>rkwmdi</h1>
      <MainHeader text="hi"></MainHeader>
    </div>
  );
}

export default App;
