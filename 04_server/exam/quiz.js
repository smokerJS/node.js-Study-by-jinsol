/*

    사용자 요청 URL에 따라서 아래와 같이 처리하는 프로그램 작성
    - "/"  = board/index.html 파일의 내용을 읽어서 응답
    - "/writeForm.do"  = board/writeForm.html 파일의 내용을 읽어서 응답
    - "/write.do"  = 전송된 파라미터의 내용을 읽어서 화면에 출력

    등록된 내용
    제목 : 
    글쓴이 :
    내용 :
    <a href="/list.do">목록</a>

    목록 클릭시 list.do 호출 => list.html 출력 

    만약 위의 url 과 다르다면 error404.html 출력

*/