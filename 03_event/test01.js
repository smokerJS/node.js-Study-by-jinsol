/*

    이벤트 처리의 원리 이해하기

    이벤트를 연결 할 수 있는 모든 객체는 EventEmitter 객체를 상속 받아야 한다.
    사용자 이벤트를 정의 할 때 EventEmitter 객체를 활용

    on   : 이벤트 설정
    emit : 이벤트 호출

*/

var EventEmitter = require("events").EventEmitter;
var util = require("util");

// 이벤트를 설정할 객체 선언
var Member = function(){};

// Member 객체가 EventEmitter 를 상속하게 한다.
util.inherits(Member,EventEmitter);

Member.prototype.join = function(id="id를 입력해주세요",name="이름을 입력해주세요"){
    //myJoin 이벤트 호출
    this.emit("myJoin",id,name);
};
Member.prototype.list = function(){
    //myList 이벤트 호출
    this.emit("myList");
};

var mem = new Member();

// 사용자가 정의하는 이벤트 설정하기
// 객체.on("이벤트명",실행할 콜백함수(파라미터){})
mem.on("myJoin",function(id,name){
    console.log("myJoin 이벤트 호출");
    console.log(id,name);
});
mem.on("myList",function(){
    console.log("myList 이벤트 호출");
});


// 설정된 이벤트를 호출
// 객체.emit("이벤트명","파라미터");


// 함수 호출
mem.join();
mem.list();
mem.join("jinsol","진솔");