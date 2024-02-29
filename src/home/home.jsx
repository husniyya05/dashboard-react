import Right from "./components/right/right";
import Left from "./components/left/left";
import {
  Full,
  HomeFull,
  Position,
  Position1,
} from "./home.styled";
const Home = () => {
  return (
    <HomeFull>
      <Position1>
        <Position>
          <h1>salam</h1>
        </Position>
      </Position1>

      <Full>
        <Left />

        <Right />
      </Full>
    </HomeFull>
  );
};
export default Home;
