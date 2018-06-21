/*

    모듈 만들기

    - 재할용 가능한 기능이나 객체를 별도의 파일로 관리하고 필요한 위치에서 사용할 수 있게 한다.
    - 분리된 함수나 객체의 묶음을 "모듈(module)" 이라고 한다.

    1) 모듈 정의
      => test01_modeul.js
    
    2) 모듈 사용
      => test01.js
      => require("test01_modeul.js");

    
    - 만들고자 하는 모듈을 파일로 생성한다.
    - exports 객체의 속성이나 메서드로 등록한다.
        exports.a = 100;
        exports.call = function () {};
    - 생성된 모듈을 전역함수 (require()) 를 이용해서 추출하여 사용한다.

*/

function add(i,j){
    return i+j;
}
function sub(i,j){
    return i-j;
}
exports.add = add;
exports.sub = sub;
// exports.name 에서 name 부분은 꺼내 쓰기 위한 이름이다.
// = add; 부분의 add 는 이 페이지에서 참조할 객체이다. 