import styled from "styled-components";

export const Full = styled.div`
  padding: 20px;
  background-color: #f1f5f9;
  border-right: 1px solid #e2e8f0;
`;
export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    color: #476559;
    font-size: 18px;
  }
`;
export const GeneralHead = styled.div`
  display: flex;
  align-items: center;
  justify-contenet: center;

  i {
    font-size: 14px;
    color:  #476559;
    margin: 3px 12px 0 0;
  }
  h3 {
    font-size: 14px;
    color: #476559;
    margin: 0;
  }
`;

export const Box = styled.div`
  top: 0;
  left: 0;
  box-shadow: 0 3px 5px #0000000b;
  border-radius: 10px;
  padding: 20px;
  background-color: white;
  border: 1px solid #e2e8f0;
  width: 80%;
  position: absolute;
  z-index: 3;
`;
export const Text = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 10px;
  margin: 24px 0 0 0;
  h6 {
    margin: 0px;
    font-size: 16px;
    color: #475569;
    font-weight: 600;
  }
  h1 {
    margin: 0px;
    font-size: 24px;
    color: #475569;
    font-weight: 600;
  }
`;
export const BoxFull = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  position: relative;
  padding-bottom: 150px;
`;
export const BoxHead = styled.div`
  display: flex;
  justify-content: space-between;
  i {
    color: rgb(90, 125, 220);
  }
`;
export const CardIcon = styled.div`
  i {
    color: rgb(240, 93, 24);
  }
`;
export const ComputerIcon = styled.div`
  i {
    color: yellow;
  }
`;
export const UserIcon = styled.div`
  i {
    color: #7ec365;
  }
`;
export const Percentage = styled.div`
  display: flex;
  background-color: #7ec365;
  border-radius: 20px;
  margin: 0px;
  padding: 3px 5px;
  h6 {
    margin: 0px;
    padding: 0px 5px;
    color: #fff;
    font-weight: 500;
    font-size: 12px;
  }
  i {
    font-size: 12px;
    color: #fff;
    margin: 2px 0 0 0;
  }
`;

export const PercentageRed = styled.div`
  display: flex;
  background-color: red;
  border-radius: 20px;
  margin: 0px;
  padding: 3px 5px;
  h6 {
    margin: 0px;
    padding: 0px 5px;
    color: #fff;
    font-weight: 500;
    font-size: 12px;
  }
  i {
    font-size: 12px;
    color: #fff;
    margin: 2px 0 0 0;
  }
`;

export const Sales = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  h1 {
    font-size: 18px;
    color: #475569;
  }
  input {
    color: #475569;
    padding: 8px 12px 8px;
    border-radius: 10px;
    border: 1px solid #e2e8f0;
    box-shadow: 0 3px 5px #0000000b;
  }
`;
export const Dollar = styled.div`
  display: flex;
  gap: 20px;
`;
export const Border = styled.div`
  border-style: dashed;
  border-color: #64748b;
  border-width: 1px;
  height: 60px;
  display: flex;
  // align-content:center;
  // align-items: center;
  // justify-content:center;
`;
export const This = styled.div`
  h1 {
    font-size: 18px;
    color: #1e3a8a;
    margin: 0;
    font-weight: 500;
  }
  h2 {
    font-size: 14px;
    color: #64748b;
    font-weight: 500;
  }
`;
export const Option = styled.option`

}
`;
export const Select = styled.select`
  padding: 8px 12px;
  color: #64748b;
  border-radius: 5px;
  height: 80%;
`;
export const Filter = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const StatisticaImg = styled.div`
  padding: 20px 10px 0;
  img {
    width: 100%;
  }
`;

export const FilterFull = styled.div`
  box-shadow: 0 3px 5px #0000000b;
  border-radius: 15px;
  padding: 20px;
  background-color: white;
  border: 1px solid #e2e8f0;
`;
export const Weekly = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  h1 {
    font-size: 18px;
    color: #475569;
  }
  h2 {
    color: #1e3a8a;
    font-size: 14px;
  }
`;
export const Diagram = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  background-color: red;
`;
export const DiagramSales = styled.div`
  box-shadow: 0 3px 5px #0000000b;
  border-radius: 15px;
  padding: 20px;
  background-color: white;
  border: 1px solid #e2e8f0;
  img {
    width: 100%;
  }
`;
export const Width1 = styled.div`
  width: 50%;
`;
export const Width2 = styled.div`
  width: 50%;
  display: flex;
  gap: 30px;
`;
export const Flex = styled.div`
  display: flex;
  gap: 30px;
  padding: 40px 0;
`;
export const OfficalStore = styled.div`
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 18px;
    color: #475569;
  }
  .city {
    border-radius: 10px;
    border: 1px solid #e2e8f0;
    box-shadow: 0 3px 5px #0000000b;
    padding: 8px 0 0 12px;
    input {
      color: #475569;
      padding: 8px 12px 8px;
      border: none;
      background: none;
    }
    i {
      color: #475569;
    }
  }
`;
export const P = styled.p`
  color: #475569;
  font-size: 14px;
  font-weight: 500;
  text-align: start;
`;
export const Map = styled.div`
  width: 60%;
`;
export const Flex2 = styled.div`
  display: flex;
  gap: 40px;
  padding: 40px 0;
`;

export const BestSeller = styled.div`
  width: 40%;
  h1 {
    font-size: 18px;
    color: #475569;
  }
`;
export const Sellers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  box-shadow: 0 3px 5px #0000000b;
  border-radius: 10px;
  background-color: white;
  border: 1px solid #e2e8f0;
  margin: 10px 0;
`;
export const User = styled.div`
  display: flex;
  gap: 10px;
  img {
    width: 40px;
    height: 45px;
    border-radius: 5px;
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
  background-color: #84cc16;
  border-radius: 20px;
  padding: 4px 10px;
  height: 80%;
  h1 {
    font-size: 12px;
    color: #fff;
    font-weight: 600;
    margin: 0;
  }
`;

export const BorderRadius = styled.div`
  padding: 15px;
  box-shadow: 0 3px 5px #0000000b;
  border-radius: 15px;
  background-color: white;
  border: 1px solid #e2e8f0;
  margin: 10px 0;
  img {
    width: 100%;
  }
`;

export const Button = styled.button`
  color: #64748b;
  border: 1px solid #64748b;
  padding: 20px 0;
  border-radius: 5px;
  background-color: #f1f5f9;
  width: 100%;
`;
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 18px;
    color: #475569;
  }
`;
export const ButtonBox = styled.div`
  display: flex;
  gap: 5px;
  button {
    box-shadow: 0 3px 5px #0000000b;
    border-radius: 10px;
    padding: 0 15px;
    background-color: white;
    border: 1px solid #e2e8f0;
    color: #475569;
    font-weight: 600;
    font-size: 14px;
  }
`;
export const TopText = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  th {
    color: #475569;
    font-weight: 600;
    font-size: 14px;
    padding: 12px 20px;
  }
`;

export const ImgBox = styled.td`
  display: flex;
  position: relative;
  padding: 12px 40px 40px 20px;
  margin:0;

  .a {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 3px solid #fff;
    position: absolute;
    z-index: 1;
    left: 0;
    top:0;
    margin:0;
  }
  .b {
    width: 50px;
    height: 50px;
    margin:0;
    border-radius: 100%;
    border: 3px solid #fff;
    position: absolute;
    z-index: 2;
    left: 30px;
    top:0;
  }
  .c {
    width: 50px;
    height: 50px;
    margin: 0;
    border-radius: 100%;
    border: 3px solid #fff;
    position: absolute;
    z-index: 3;
    left: 60px;
    top: 0;
  }
`;
export const Name = styled.div`
  padding: 12px 20px;
  h2 {
    color: #475569;
    font-size: 14px;
    margin: 0;
  }
  h3 {
    color: #64748b;
    font-size: 12px;
    margin: 2px 0 0;
  }
`;
export const Number = styled.div`
  padding: 12px 20px;
  h2 {
    color: #475569;
    font-size: 14px;
    margin: 0;
  }
`;
export const TopList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items:center;
  box-shadow: 0 3px 5px #0000000b;
  border-radius: 15px;
  background-color: white;
  border: 1px solid #e2e8f0;
  margin: 10px 0;
  width: 100%;
`;
export const Status = styled.div`
  padding: 12px 20px;
  display:flex;
  gap: 7px;
  i{
    color: #dc2626;
    font-size: 14px;
    padding-top: 3px;
  }
  h4 {
    color: #dc2626;
    font-size: 14px;
    margin: 0;
  }
  // :: before{
  //     content:"";
  //     width:10px;
  //     height:30px;
  //     background-color: yellow;
  // }
`;
export const Action= styled.div`
  padding: 12px 20px;
  gap: 10px;
  .edit {
    text-decoration: none;
    color: #475569;
    font-size: 14px;
    border: none;
    background-color: #fff;
    padding: 0 10px;
    i{
      padding-left:5px;
    }
  }
  .delete {
    text-decoration: none;
    color: red;
    font-size: 14px;
    border: none;
    background-color: #fff;
    padding: 0 10px;
    i{
      padding-left:5px;
    }

  }
`;

export const Position = styled.div`
  position: relative;
  width: 100%;
  &:hover {
    transition: 0.5s ease;
    transform: scale(1.1);
    cursor: pointer;
  }
  &:not(:hover) {
    transition: 0.5s ease;
    transform: scale(1);
    cursor: pointer;
  }
`;
export const PositionBox = styled.div`
  width: 85%;
  position: absolute;
  z-index: 2;
  top: 75px;
  left: 15px;
  box-shadow: 0 3px 5px #0000000b;
  border-radius: 10px;
  background-color: white;
  border: 1px solid #e2e8f0;
`;
export const Table = styled.table`
  width: 100%;
`;
