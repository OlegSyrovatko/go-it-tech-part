import styled from '@emotion/styled';


export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  margin-right: 4px;
  margin-left: 4px;
`;

export const Name = styled.span`
  font-weight: 700;
  font-size: 14px;
  margin-right: 12px;
  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

export const ContactsHead = styled.div`
  display: flex;
  gap: 15px;
`;



export const Book = styled.div`
  margin-top: 20px;
  margin-left: 20px;
`;

export const Button = styled.button`
  font-size: 16px;
  line-height: 26px;
  background-color: #fff;
  color: #000;
  padding: 5px 15px 5px 15px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid #000;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #000;
    color: #fff;
  }
  @media (max-width: 767px) {
    padding: 5px 7px 5px 7px;
  }
`;

export const CloseButton = styled.button`
  background-color: #fff;
  color: #000;
  padding: 2px 5px 2px 5px;
  height: 25px;
  border-radius: 4px;
  border: 1px solid #000;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export const UL = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  margin-top: 10px;
`;

export const Li = styled.div`
  display: flex;
  gap: 15px;
  align-items: baseline;
`;