import ReactModal from 'react-modal';
import styled from 'styled-components';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Document from './Document';

const PreviewModal = ({ prev, onClose, list }) => {
  const handlePrevModal = () => {
    onClose();
  };

  return (
    <ReactModal isOpen={prev} style={modalStyle}>
      <Back onClick={handlePrevModal}>
        <FontAwesomeIcon icon={faX} size="lg" transform="right--15" />
      </Back>
      <Wrapper>
        <BodyWrapper>
          <Document list={list} />
        </BodyWrapper>
        <SideWrapper>
          <Image src={list.img} />
          <Title>{list.name}</Title>
          <Author>{list.author.name}</Author>
        </SideWrapper>
      </Wrapper>
    </ReactModal>
  );
};

const modalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    zIndex: 10,
  },
  content: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '960px',
    height: '870px',
    zIndex: 100,
    padding: 0,
    border: 'none',
  },
};

const Back = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: transparent;
  border: none;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 820px;
`;

const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 900px;
  height: 100%;
`;

const SideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-left: 1px solid rgb(0, 0, 0, 0.2);
`;

const Image = styled.img`
  width: 200px;
`;

const Title = styled.div`
  margin-top: 50px;
  font-size: 24px;
`;

const Author = styled.div`
  margin-top: 20px;
  font-size: 20px;
`;

export default PreviewModal;
