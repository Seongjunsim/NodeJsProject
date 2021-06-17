// import React from 'react';
// import ReactDom from 'react-dom';

// 함수형 컴포넌트
function helloWorldButton(){
    //비 구조화 할당
    // React.useState를 통해 isClick과 setClickState가 결과값으로 나옴
    const [isClick, setClickState] = React.useState(false); // 컴포넌트의 상태를 설정하는 메서드
    const text = isClick ? "Bye world!" : "Hello World!"; 
    return React.createElement(
        "button",
        {onClick:()=>{
            setClickState(!isClick);            
        }},
        text
    );
    //Bable & JSX : 필수로 알아야 함
}

const rootContainer = document.getElementById('react-root');
ReactDOM.render(React.createElement(helloWorldButton),rootContainer);