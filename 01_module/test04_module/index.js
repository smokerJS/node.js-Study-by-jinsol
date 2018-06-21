/*

    exports 객체를 함수로 변경

*/

module.exports = function() {
    return {
        add(i,j){ return i+j; },
        sub(i,j){ return i-j; }
    }  
};