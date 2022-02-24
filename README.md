# RIDIBOOKS 클론코딩

## 팀 구성원

- 프론트엔드 : 김기만, 문지원, 오수민, 이주미
- 백엔드 : 김혜린, 최희택

## 필수 구현 사항

- 로그인 페이지 (소셜 로그인)
- 제품 리스트 페이지
- 제품 상세페이지
- 결제기능 (포인트)
- 내 서재(구입목록 페이지)
- 검색기능

## 담당페이지

- 김기만 : 내 서재
- 문지원 : nav, footer, filter, social login
- 오수민 : 상품디테일 페이지
- 이주미 : 상품 리스트 페이지

# DSNB-frontend

## 프로젝트 소개

종말된 시대에 알맞은 상품들을 판매하는 커머스 사이트

향수 판매 커머스 사이트인 JoMalone의 클론코딩 프로젝트 입니다.

## 개발 인원 및 기간

- 2022/02/14 ~ 2022/02/24
- 프론트엔드 : 김기만, 문지원, 오수민, 이주미 (4명)
- 백엔드 : 김혜린, 최희택 (2명)

## 적용 기술

- Frontend : javascript, React.JS
- Backend : Python, Django, Mysql, AWS(EC2, RDS, S3)
- 협업 및 일정관리 : Git, GitHub, Slack, Trello, Notion

## 구현 영상

[![프로젝트 구현 영상 링크](https://i9.ytimg.com/vi/-o1fdA5EuOU/mq1.jpg?sqp=CMzO7JAG&rs=AOn4CLCq2T5FsnOGDks2m2R0CxGjuVhWzg)](https://youtu.be/-o1fdA5EuOU)

## 구현 기능

#### 1. nav, footer, filter, social login / 문지원

- Social Login을 통한 로그인 JWT Token 발생
- Nav 내 검색 기능 및 카테고리 별 제품 필터링 기능 구현

#### 2. 상품 리스트 페이지 / 이주미

- 캐로셀 Library를 통한 책 소개 기능 구현
- 좌표를 통한 위치 표현 및 관련 서적 소개 기능 구현

#### 3. 상품디테일 페이지 / 오수민

- 유저 보유 포인트를 활용한 제품 결제 기능 구현
- Star-Rating Library를 통한 별점 기능 구현
- 관련 서적 소개 기능 구현
- 순위표 기능 구현
- PDF Library를 통한 미리보기 기능 구현(미리보기 페이지 제한)

#### 4. 내 서재 / 김기만

- PDF Library를 통한 독서 기능 구현
- Star-Rating Library를 통한 별점 기능 구현
- 서버에 저장된 페이지 정보를 통한 이어보기/처음부터보기 기능 구현
- PDF 뷰어 종료 시점의 정보를 서버로 전송함으로써 페이지 저장 기능 구현
