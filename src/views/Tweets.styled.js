import styled from '@emotion/styled';
import picture2 from './images/picture2.png';
import Vector from './images/Vector.svg';

import Ellipse from './images/Ellipse.png';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Book = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  @media (max-width: 767px) {
    margin-left: 0px;
  }
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
  gap: 15px;
  margin: 20px 0;
`;

export const Li = styled.div`
  display: flex;
  gap: 15px;
  align-items: baseline;
  width: 380px;
  height: 460px;
  background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Pic = styled.div`
  position: absolute;
  margin: 28px 36px 264px;
  width: 308px;
  height: 168px;
  background: url(${picture2})  no-repeat;
`;

export const Goit = styled.div`
  position: absolute;
  margin-top: 20px;
  margin-left: 20px;
  width: 76px;
  height: 22px;
  background: url(${Vector})  no-repeat;
`;

export const Ellip = styled.div`
  position: absolute;
  margin: 178px 145px 202px;
  width: 90px;
  height: 89px;
  background: url(${Ellipse})  no-repeat;
  z-index: 2;
`;

