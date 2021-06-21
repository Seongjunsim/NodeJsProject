import './App.css';
import CustomList from './components/CustomList';
import MainHeader from './components/MainHeader';
import {useState, useRef, useEffect} from "react";

//state, props 
// props -> 부모 요소에서 관리 -> 수동적 : 부모에서 적어준 데이터에 의존 
// state -> 컴포넌트 그 자체에서 관리
function App() {
//   const array1 = ["apple", "banana", "orange"];
//   // return (
//   //   <div className="App">
//   //     <ul>
//   //       {array1.map((value, index) => {
//   //         return (
//   //           <CustomList text={`${value} ${index}`}></CustomList>
//   //         );
//   //       })}
//   //     </ul>
//   //   </div>
//   // );

//   const [task, setTask] = useState([{
//     id: 0,
//     text : "강의 듣기"
//   }]);
//   const inputRef = useRef();
// //객체로 만들 수 있다
//   // const [name, setName] = useState({
//   //   first : "성준",
//   //   last : "심"
//   // });
//   // const {first, last} = name;

//   const firstNameRef = useRef();
//   const lastNameRef = useRef();
//   // const buttonClick = () => {
//   //   name === "hide" ? setText("see") : setText("hide");
//   // }

//   // const conditionRendering = text === "see" 
//   // ? <MainHeader text="see"></MainHeader>
//   // : <MainHeader text="hi"></MainHeader>;

//   // const addItem = (e)=>{
//   //   const inputText = e;
//   //   setText(inputText);
//   // }
//   // const onChange = (e)=>{
//   //   const inputText = e.target.value;
//   //   setText(inputText);
//   // }

//   const confirm = ()=>{
//     // setName({
//     //   first : firstNameRef.current.value,
//     //   last : lastNameRef.current.value
//     // });
//     const text = inputRef.current.value;
//     setTask([...task, {
//       id: task[task.length-1].id + 1,
//       text
//     }]);
//   };
//   return (
//     <div className="App">
//       {/* <h1>rkwmdi</h1>
//       { conditionRendering }
//       <button onClick={buttonClick}>{text}</button> */}
//       {/* <h1>{last}{first}</h1> */}
//       {/* <input name="name" placeholder="name" ref={firstNameRef}></input> */}
//       <div>
//         <input  placeholder="내 목표" ref ={inputRef}></input>
//         <button onClick={confirm}>confirm</button>
//       </div>
//       <ul>
//         {task.map(v=><li key={v.id}>{v.text}</li>)}
//       </ul>
//     </div>
//   );

  const [second, setSecond] = useState(0);

  // setInterval(()=>{
  //   setSecond(second+1);
  // });
  // componentDidMount, componentDidUpdate와 같은 방식으로

  //마운트 이후 실행되는 부분
  useEffect(() => {

    // API 요청
    let inteval = setInterval(()=>{
     setSecond(second+1);
     }, 1000);
     //언마운트시에 실행
     return () =>{
      clearInterval(inteval);
     }
  }, [second]); // [] -> deps 의존적인 변수가 있으면 넣어주기

  return (
    <div>
      <p>{second}초</p>
      
    </div>
  );
}

// && -> if(text==='aa') return (<div> fds </div>)
export default App;
