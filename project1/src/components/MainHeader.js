import React, { useState } from 'react';
import './MainHeader.scss';


//  SASS -> css 변수 할당, 깔끔한 코드
const style = {
    color : "red"
};


function MainHeader(props) {
    // 상태를 처리하는 함수
    // [상태 데이터, 상태를 위한 setter함수]
    //const [text, setClickState] = React.useState("false");
    //return <h1 className="main_header">{props.text}</h1>;
    const [color, setColor] = useState("red");
    
    // 인라인 style 방식은 추천하지 않는다 -> 상위라서 유지보수가 어렵당
    //return(
    //    <h1
    //    style = {{color: color}}
    //    onClick = {()=>{setColor(color==="red" ? "green":"red");}}
    //    >{props.text}</h1>
    //);

    return(
        <h1
        className = {color}
        onClick = {()=>{setColor(color==="red" ? "green":"red");}}
        >{props.text}</h1>
    );
    
}
//arrow function -> 익명 함수 
export default MainHeader;