import styled from '@emotion/styled';
import Rectangle from './images/Rectangle.png';

export const ButtonFw = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  margin-top: 26px;
  width: 196px;
  height: 50px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;

export const ButtonFwg = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  margin-top: 26px;
  width: 196px;
  height: 50px;

  background: #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;

export const ButtonText = styled.span`
  height: 22px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
`;

export const Avatar = styled.div`
  position: absolute;
  margin: 187px 159px 211px;

  border-radius: 50%;
  z-index: 1;
`;

export const Img = styled.img`
  border-radius: 50%;
  width: 63px;
  height: 63px;
`;

export const Rect = styled.div`
  position: absolute;
  margin-top: 214px;
  margin-bottom: 238px;
  width: 100%;
  height: 8px;
  background: url(${Rectangle}) no-repeat;
`;

export const Blocks = styled.div`
  position: absolute;
  margin-top: 284px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
`;

export const Tweets = styled.div`
  height: 24px;
  text-align: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const Foll = styled.div`
  margin-top: 16px;
  height: 24px;
  text-align: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;
