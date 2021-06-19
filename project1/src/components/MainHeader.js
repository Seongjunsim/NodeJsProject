import React , {useState} from 'react';

function MainHeader() {
    // 상태를 처리하는 함수
    // [상태 데이터, 상태를 위한 setter함수]
    const [text, setClickState] = React.useState("false");
    
    return(
        <h1 onClick={() => {setClickState("Bye world!")}}>{text}</h1>
    );
    
}
//arrow function -> 익명 함수 
export default MainHeader;