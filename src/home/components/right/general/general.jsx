import {
  Box,
  BoxHead,
  Head,
  Percentage,
  Full,
  BoxFull,
  BorderRadius,
  Number,
  TopList,
  Text,
  TextSeller,
  Seler136,
  Sales,
  Dollar,
  Border,
  This,
  Sellers,
  Select,
  Map,
  Filter,
  Weekly,
  DiagramSales,
  Width1,
  Width2,
  Flex,
  OfficalStore,
  P,
  BestSeller,
  User,
  Flex2,
  Button,
  Top,
  ButtonBox,
  TopText,
  ImgBox,
  Name,
  Status,
  Position,
  PositionBox,
  GeneralHead,
  PercentageRed,
  CardIcon,
  ComputerIcon,
  UserIcon,
  FilterFull,
  StatisticaImg,
  Table,
  Action,
} from "./general.styles";
import Photo from "../../../../assets/rasel.jpg";
import A from "../../../../assets/a.jpg";
import B from "../../../../assets/b.jpg";
import C from "../../../../assets/c.jpg";
import Statistica from "../../../../assets/statistica.png";
import DiagramImg from "../../../../assets/diagram.png";
import DiagramImg2 from "../../../../assets/diagram2.png";
import MapImg from "../../../../assets/map.png";
import TomImg from "../../../../assets/tom.jpg";
import Pit from "../../../../assets/profile-12-XFncj00x.jpg";

const General = () => {
  const tableObj = [
    {
      title: "Nikon Z6",
      product: "Photography",
      number: 50,
    },
    {
      title: "Nikon Z6",
      product: "Photography",
      number: 50,
    },
    {
      title: "Nikon Z6",
      product: "Photography",
      number: 50,
    },
  ];
  return (
    <Full>
      <div>
        <Head>
          <h1>General</h1>
          <GeneralHead>
            <i className="fa-solid fa-rotate"></i>
            <h3>Reload Data</h3>
          </GeneralHead>
        </Head>
        <BoxFull>
          <Position>
            <Box>
              <BoxHead>
                <i className="fa-solid fa-cart-shopping"></i>
                <Percentage>
                  <h6>33%</h6>
                  <i className="fa-solid fa-angle-up"></i>
                </Percentage>
              </BoxHead>
              <Text>
                <h1>4.710</h1>
                <h6>Items Sales</h6>
              </Text>
            </Box>
            <PositionBox>
              <h1>saalm</h1>
            </PositionBox>
          </Position>
          <Position>
            <Box>
              <BoxHead>
                <CardIcon>
                  <i className="fa-regular fa-credit-card"></i>
                </CardIcon>
                <PercentageRed>
                  <h6>2%</h6>
                  <i className="fa-solid fa-angle-up"></i>
                </PercentageRed>
              </BoxHead>
              <Text>
                <h1>4.710</h1>
                <h6>Items Sales</h6>
              </Text>
            </Box>
            <PositionBox>
              <h1>saalm</h1>
            </PositionBox>
          </Position>
          <Position>
            <Box>
              <BoxHead>
                <ComputerIcon>
                  <i className="fa-solid fa-display"></i>
                </ComputerIcon>
                <Percentage>
                  <h6>12%</h6>
                  <i className="fa-solid fa-angle-up"></i>
                </Percentage>
              </BoxHead>
              <Text>
                <h1>4.710</h1>
                <h6>Items Sales</h6>
              </Text>
            </Box>
            <PositionBox>
              <h1>saalm</h1>
            </PositionBox>
          </Position>
          <Position>
            <Box>
              <BoxHead>
                <UserIcon>
                  <i className="fa-regular fa-user"></i>
                </UserIcon>
                <Percentage>
                  <h6>23%</h6>
                  <i className="fa-solid fa-angle-up"></i>
                </Percentage>
              </BoxHead>
              <Text>
                <h1>4.710</h1>
                <h6>Items Sales</h6>
              </Text>
            </Box>
            <PositionBox>
              <h1>saalm</h1>
            </PositionBox>
          </Position>
        </BoxFull>
      </div>

      <Flex>
        <Width1>
          <Sales>
            <h1>Sales Report </h1>
            <input type="date" placeholder="25 Feb, 2024-25 Mar, 2024" />
          </Sales>
          <FilterFull>
            <Filter>
              <Dollar>
                <This>
                  <h1>$15.000</h1>
                  <h2>This Month</h2>
                </This>
                <Border></Border>
                <This>
                  <h1>$10.000</h1>
                  <h2>Last Month</h2>
                </This>
              </Dollar>

              <Select>
                <option value="0">Filter by Categories</option>
                <option value="1">Smartphone</option>
                <option value="2">Electronic</option>
              </Select>
            </Filter>
            <StatisticaImg>
              <img src={Statistica} alt="" />
            </StatisticaImg>
          </FilterFull>
        </Width1>
        <Width2>
          <div>
            <Weekly>
              <h1>Weekly Top Saller</h1>
              <h2>Show More</h2>
            </Weekly>
            <DiagramSales>
              <img src={DiagramImg} alt="" />
            </DiagramSales>
          </div>
          <div>
            <Weekly>
              <h1> Sales Report</h1>
              <h2>Show More</h2>
            </Weekly>
            <DiagramSales>
              <img src={DiagramImg2} alt="" />
            </DiagramSales>
          </div>
        </Width2>
      </Flex>

      <Flex2>
        <Map>
          <OfficalStore>
            <h1>Offical Store</h1>
            <div className="city">
              <i className="fa-solid fa-location-dot"></i>
              <input type="text" placeholder="Filter by city" />
            </div>
          </OfficalStore>
          <BorderRadius>
            <P>
              250 Official stores in 21 countries, click the marker to see
              location details.
            </P>
            <img src={MapImg} alt="" />
          </BorderRadius>
        </Map>

        <BestSeller>
          <h1>Weekle Best Sellers</h1>

          <Sellers>
            <User>
              <img src={Photo} alt="" />
              <TextSeller>
                <h1>Russel Crowe</h1>
                <h2>25 April 2022</h2>
              </TextSeller>
            </User>
            <Seler136>
              <h1>137 Sales</h1>
            </Seler136>
          </Sellers>
          <Sellers>
            <User>
              <img src={Pit} alt="" />
              <TextSeller>
                <h1>Brad Pitt</h1>
                <h2>12 May 2023</h2>
              </TextSeller>
            </User>
            <Seler136>
              <h1>137 Sales</h1>
            </Seler136>
          </Sellers>
          <Sellers>
            <User>
              <img src={TomImg} alt="" />
              <TextSeller>
                <h1>Tom Hardy</h1>
                <h2>19 August 2022</h2>
              </TextSeller>
            </User>
            <Seler136>
              <h1>137 Sales</h1>
            </Seler136>
          </Sellers>
          <Sellers>
            <User>
              <img src={Photo} alt="" />
              <TextSeller>
                <h1>Russel Crowe</h1>
                <h2>25 April 2022</h2>
              </TextSeller>
            </User>
            <Seler136>
              <h1>137 Sales</h1>
            </Seler136>
          </Sellers>
          <Button>Viev More</Button>
        </BestSeller>
      </Flex2>
      <div>
        <Top>
          <h1>Weekly Top Products</h1>
          <ButtonBox>
            <button>Export to Excel</button>
            <button>Export to PDF</button>
          </ButtonBox>
        </Top>
        <Table>
          <thead>
            <TopText>
              <th>IMAGE</th>
              <th>PRODUST NAME</th>
              <th>STOCK</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </TopText>
          </thead>
          {tableObj.map((e,index) => (
            <tbody key={index}>
              <TopList>
                <ImgBox>
                  <img className="a" src={A} alt="" />
                  <img className="b" src={B} alt="" />
                  <img className="c" src={C} alt="" />
                </ImgBox>
                <td>
                  <Name>
                    <h2>{e.title}</h2>
                    <h3>{e.product}</h3>
                  </Name>
                </td>
                <td>
                  <Number>
                    <h2>{e.number}</h2>
                  </Number>
                </td>
                <td>
                  <Status>
                    <i className="fa-regular fa-square-check"></i>
                    <h4>Inactive</h4>
                  </Status>
                </td>
                <td>
                  <Action>
                    <a className="edit" href="">
                      <i className="fa-regular fa-square-check"></i>
                      Edit
                    </a>
                    <a className="delete" href="">
                      <i className="fa-regular fa-trash-can"></i>
                      Delete
                    </a>
                  </Action>
                </td>
              </TopList>
            </tbody>
          ))}
        </Table>
      </div>
    </Full>
  );
};
export default General;
