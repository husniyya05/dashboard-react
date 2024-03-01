import styled from "styled-components";

export const Full = styled.div`
  padding: 20px;
  background-color: #f1f5f9;
  border-radius: 0 20px 20px  0;
`;
export const TransactionFull = styled.div`
  h1 {
    color: #475569;
    font-size: 18px;
  }
`;

export const Sellers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  box-shadow: 0 3px 5px #0000000b;
  border-radius: 15px;
  background-color: white;
  border: 1px solid #e2e8f0;
  margin: 10px 0;
  width: 90%;
  &:hover {
    transition: 0.2s ease;
    transform: scale(1.1);
    cursor: pointer;
  }
  &:not(:hover) {
    transition: 0.2s ease;
    transform: scale(1);
    cursor: pointer;
  }
`;

export const User = styled.div`
  display: flex;
  gap: 10px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 5px;
    object-fit: cover;
  }
`;
export const TextSeller = styled.div`
  h1 {
    font-size: 14px;
    font-weight: 700;
    margin: 0;
    text-align: start;
  }
  h2 {
    font-size: 12px;
    font-weight: 500;
    color: #64748b;
    text-align: start;
    margin: 3px 0 0;
  }
`;
export const Seler136 = styled.div`
  padding: 4px 10px;
  h1 {
    font-size: 12px;
    color: #84cc16;
    font-weight: 600;
    margin: 0;
  }
`;

export const Activities = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    color: #475569;
    font-size: 18px;
  }
  h3 {
    color: #1e3a8a;
    font-size: 12px;
    font-weight: 500;
  }
`;
export const RecImg = styled.div`
  img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    object-fit: cover;
  }
`;
export const Recent = styled.div`
  display: flex;
  align-items: center;
`;
export const RecentBorder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 12px 20px;
  box-shadow: 0 3px 5px #0000000b;
  border-radius: 10px;
  background-color: white;
  border: 1px solid #e2e8f0;
  margin: 0 0 0 16px;
  width: 100%;
  &:hover {
    transition: 0.2s ease;
    transform: scale(1.1);
    cursor: pointer;
  }
  &:not(:hover) {
    transition: 0.3s ease;
    transform: scale(1);
    cursor: pointer;
  }
  
`;
export const RecentText = styled.div`
  margin: 0 0 0 16px;
  h2 {
    margin: 0;
    color: #475569;
    font-size: 14px;
    font-weight: 800;
  }
  h4 {
    margin: 4px 0 0;
    color: #475569;
    font-size: 14px;
    font-weight: 500;
  }
`;
export const PM = styled.div`
  h6 {
    color: #64748b;
    font-weight: 500;
    font-size: 12px;
    margin: 0;
  }
`;
export const RecentFull = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  position:relative;
  z-index:2;
  &::before {
    content: "";
    background-color: #e2e8f0;
    width: 1px;
    height: 350px;
    position: absolute;
    top:20px;
    left: 18px;
    z-index:-1;
  }
`;

export const NewPhoto = styled.div`
  display: flex;
  gap: 7px;
  margin: 8px 0 0;
  img {
    width: 32px;
    height: 32px;
    border-radius: 7px;
  }
`;
export const November = styled.div`
  h6 {
    color: #64748b;
    font-size: 12px;
    margin: 16px 0px;
    text-align: center;
  }
`;
export const Important = styled.div`
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    color: #475569;
    font-size: 18px;
  }
`;
export const ImportantIcon = styled.div`
  i {
    color: #475569;
    padding: 12px;
    box-shadow: 0 3px 5px #0000000b;
    border-radius: 5px;
    background-color: white;
    border: 1px solid #e2e8f0;
    font-size: 12px;
    margin: 0 3px;
    background-color: #f1f5f9;
  }
`;
export const Lorem = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  h3 {
    color: #475569;
    font-size: 16px;
  }
  p {
    color: #64748b;
    font-size: 14px;
    margin: 4px 0 0;
  }
`;
export const LoremButton = styled.div`
  margin: 20px 0 0;
  display: flex;
  justify-content: space-between;
  .view {
    font-size: 14px;
    color: #64748b;
    font-size: 14px;
    background: #e2e8f0b3;
    padding: 4px 8px;
    border: none;
    border: 1px solid #e2e8f0;
    border-radius: 3px;
  }
  .dismiss {
    font-size: 14px;
    color: #64748b;
    font-size: 14px;
    padding: 4px 8px;
    box-shadow: 0 3px 5px #0000000b;
    border-radius: 3px;
    border: 1px solid #e2e8f0;
    background: #fff;
  }
`;
export const Empty=styled.div`
height:327px;

`