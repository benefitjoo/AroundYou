# 실행방법

* npm install
* npm run build - build 폴더에 babel을 이용해 es5 문법으로 변환, 서버 리스닝
* localhost:7777 접속
* 지도 아래에 upload 버튼 클릭시 form으로 이동


# 요청사항

1. Map.js에서 가장 하단의 pin을 움직일때 얻는 좌표 값을 UploadView의 props로 전송

2. UploadView에서 ajax post로 routes.js에 state를 전송 (form에 입력값은 전송되지만, state는 전송되지 않음)


componenets/Map.js
componenets/UploadView.js
server/routes.js
파일을 중점적으로 보시면 조금 편할 것 같습니다.



_______________________________________________________________________________________________________________




# Around You Project

shakedownflight의 repository에 오신 것을 환영합니다.
저희 shakedownflight는 Code-states immersive 2기로 이루어진 프로젝트 팀입니다.
6주 간의 스프린트가 끝나고 그 동안 배운 것들을 활용하여 작은 서비스를 만들어보았습니다.

## Around You?

구글맵 기반의 서비스로 사용자 주변의 영화, 드라마 등의 촬영장소의 위치를 보여주며 해당 지역 선택 시 영상과 콘텐츠의 간략한 정보를 볼 수 있는 서비스 입니다.

## Development Stack

* Back-end
 * node-express

* Front-end
 * ReactJS

## Collaboration Tools

* Github
* Slack

## 진행상황

현재는 dummy data를 이용하고 있습니다.

## 향후계획

* mongoDB를 연결하여 더 많은 데이터 표기
* Redux를 통한 state관리
