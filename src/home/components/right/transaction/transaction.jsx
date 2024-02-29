import {
  Sellers,
  User,
  TextSeller,
  Seler136,
  TransactionFull,
  Full,
  Activities,
  RecImg,
  Recent,
  RecentText,
  RecentBorder,
  PM,
  RecentFull,
  NewPhoto,
  November,
  Important,
  ImportantIcon,
  Lorem,
  LoremButton,
} from "./transaction.styles";
import Photo from "../../../../assets/rasel.jpg";
import AnjeliImg from "../../../../assets/anjeli.jpg";
import RaselImg from "../../../../assets/rasel.jpg";
import TomImg from "../../../../assets/tom.jpg";
import { useState } from "react";

const Transaction = () => {
  const sellersObj = [
    {
      title: "Russel Crowe",
      date: "25 April 2022",
      count: 137,
    },
    {
      title: "Tom Cruise",
      date: "29 Mart 2022",
      count: 137,
    },
    {
      title: "Russel Crowe",
      date: "25 April 2022",
      count: 137,
    },
  ];
  return (
    <Full>
      <TransactionFull>
        <h1>Transactions</h1>
        {sellersObj.map((e, index) => (
          <Sellers key={index}>
            <User>
              <img src={Photo} alt="" />
              <TextSeller>
                <h1>{e.title}</h1>
                <h2>{e.date}</h2>
              </TextSeller>
            </User>
            <Seler136>
              <h1>{e.count} Sales</h1>
            </Seler136>
          </Sellers>
        ))}
      </TransactionFull>

      <div>
        <Activities>
          <h1>Recent Activities</h1>
          <h3>Show More</h3>
        </Activities>

        <RecentFull>
          <Recent>
            <RecImg>
              <img src={AnjeliImg} alt="" />
            </RecImg>
            <RecentBorder>
              <RecentText>
                <h2>Sean Connery</h2>
                <h4>Has joined the team</h4>
              </RecentText>
              <PM>
                <h6>07:00 PM</h6>
              </PM>
            </RecentBorder>
          </Recent>
          <Recent>
            <RecImg>
              <img src={TomImg} alt="" />
            </RecImg>
            <RecentBorder>
              <RecentText>
                <h2>Jonny Deep</h2>
                <h4>App 3 new photos</h4>
                <NewPhoto>
                  <img src={RaselImg} alt="" />
                  <img src={TomImg} alt="" />
                  <img src={AnjeliImg} alt="" />
                </NewPhoto>
              </RecentText>
              <PM>
                <h6>07:00 PM</h6>
              </PM>
            </RecentBorder>
          </Recent>

          <November>
            <h6>12 November</h6>
          </November>
          <Recent>
            <RecImg>
              <img src={RaselImg} alt="" />
            </RecImg>
            <RecentBorder>
              <RecentText>
                <h2>Sean Connery</h2>
                <h4>Has changed Samsung Q90 QLED TV price and description</h4>
              </RecentText>
              <PM>
                <h6>07:00 PM</h6>
              </PM>
            </RecentBorder>
          </Recent>
          <Recent>
            <RecImg>
              <img src={AnjeliImg} alt="" />
            </RecImg>
            <RecentBorder>
              <RecentText>
                <h2>Sean Connery</h2>
                <h4>Has joined the team</h4>
              </RecentText>
              <PM>
                <h6>07:00 PM</h6>
              </PM>
            </RecentBorder>
          </Recent>
        </RecentFull>
      </div>

      <div>
        <Important>
          <h2>Important Notes</h2>
          <ImportantIcon>
            <i class="fa-solid fa-chevron-left"></i>
            <i class="fa-solid fa-chevron-right"></i>
          </ImportantIcon>
        </Important>
        <Lorem>
          <h3>I want this job</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
            excepturi eveniet sit eligendi at fuga asperiores quas cumque eaque
            error deleniti ab officiis pariatur velit, voluptatibus, quaerat
            laudantium praesentium dignissimos!
          </p>
          <LoremButton>
            <button className="view">View Notes</button>
            <button className="dismiss">Dismiss</button>
          </LoremButton>
        </Lorem>
      </div>
    </Full>
  );
};
export default Transaction;
