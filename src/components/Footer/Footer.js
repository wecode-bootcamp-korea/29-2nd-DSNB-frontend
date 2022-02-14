import styled from 'styled-components';
import theme from '../../styles/theme';

const Footer = () => {
  return (
    <FooterWrapper>
      <MainItem>
        <DSNBList>고객센터</DSNBList>
        <Notification>공지사항</Notification>
      </MainItem>
      <ItemsList>
        <li>DSNB PAPER</li>
        <li>제휴카드</li>
        <li>뷰어 다운로드</li>
        <li>동서남Book캐시 충전</li>
      </ItemsList>
      <ItemsList>
        <li>콘텐츠 제공 문의</li>
        <li>CP 사이트</li>
        <li>사업 제휴 문의</li>
        <li>DSNB 셀렉트 B2B</li>
      </ItemsList>
      <ItemsList>
        <li>페이스북</li>
        <li>인스타그램</li>
      </ItemsList>
      <ItemsList>
        <li>회사 소개</li>
        <li>인재채용</li>
      </ItemsList>
      <CorpInfoWrapper>
        <p>동서남Book(주) 사업자 정보</p>
        <CorpInfoList>
          <li>© DSNBook Corp. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </li>
          <li>이용 약관</li>
          <li> 개인 정보 처리 방침</li>
          <li> 청소년 보호 정책</li>
          <li> 사업자 정보 확인</li>
        </CorpInfoList>
      </CorpInfoWrapper>
    </FooterWrapper>
  );
};

const DSNBList = styled.li`
  display: inline-block;
  padding-right: 10px;
  font-weight: bold;
  cursor: pointer;
`;

const Notification = styled.li`
  border-left: 1px solid white;
  padding-left: 10px;
  cursor: pointer;
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 32vh;
  background-color: #303538;
  padding: 3.5vh 15vw;
  color: white;
  font-family: ${theme.fontFamily};
`;

const MainItem = styled.ul`
  padding-right: 6vw;
  font-size: ${theme.fontSize2};

  li {
    display: inline-block;
    font-weight: bold;
  }
`;

const ItemsList = styled.ul`
  height: 10vh;
  margin-right: 4vw;
  cursor: pointer;

  li {
    padding-bottom: 3vh;
    font-size: ${theme.fontSize3};
  }
`;

const CorpInfoWrapper = styled.div`
  margin-top: 13vh;
  color: grey;
  font-size: 14px;

  li {
    display: inline;
  }

  p {
    margin-bottom: 3vh;
  }
`;

const CorpInfoList = styled.ul``;
export default Footer;
