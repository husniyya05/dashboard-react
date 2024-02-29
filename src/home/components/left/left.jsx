import { Dashboard, Home, LI, LeftFull, Overwiev, UL } from "./left.styles";

const Left = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <LeftFull>
      <ul>
        <li>
          <Dashboard>
            <Home>
              <i className="fa-solid fa-house"></i>
              <h6>Dashboard</h6>
            </Home>
            <i className="fa-solid fa-chevron-down"></i>
          </Dashboard>
          <UL>
            <LI>
              <Overwiev>
                <i className="fa-solid fa-wave-square"></i>
                <h6>Overwiev 1</h6>
              </Overwiev>
            </LI>
            <LI>
              <Overwiev>
                <i className="fa-solid fa-wave-square"></i>
                <h6>Overwiev 1</h6>
              </Overwiev>
            </LI>
            <LI>
              <Overwiev>
                <i className="fa-solid fa-wave-square"></i>
                <h6>Overwiev 1</h6>
              </Overwiev>
            </LI>
            <LI>
              <Overwiev>
                <i className="fa-solid fa-wave-square"></i>
                <h6>Overwiev 1</h6>
              </Overwiev>
            </LI>
          </UL>
        </li>
        <li>
          <Dashboard>
            <Home>
              <i className="fa-solid fa-bag-shopping"></i>
              <h6>E-Commerce</h6>
            </Home>
            <i className="fa-solid fa-chevron-down"></i>
          </Dashboard>
          <UL>
            <LI>
              <Overwiev>
                <i className="fa-solid fa-wave-square"></i>
                <h6>Categories</h6>
              </Overwiev>
            </LI>
            <LI>
              <Overwiev>
                <i className="fa-solid fa-wave-square"></i>
                <h6>Add product</h6>
              </Overwiev>
            </LI>
            <LI>
              <Overwiev>
                <i className="fa-solid fa-wave-square"></i>
                <h6>Products</h6>
              </Overwiev>
            </LI>
            <LI>
              <Overwiev>
                <i className="fa-solid fa-wave-square"></i>
                <h6>Reviews</h6>
              </Overwiev>
            </LI>
          </UL>
        </li>
        <li>
          <Dashboard>
            <Home>
              <i className="fa-solid fa-inbox"></i>
              <h6>Inbox</h6>
            </Home>
          </Dashboard>
        </li>

        <li>
          <Dashboard>
            <Home>
              <i className="fa-solid fa-inbox"></i>
              <h6>File Manager</h6>
            </Home>
          </Dashboard>
        </li>
        <li>
          <Dashboard>
            <Home>
              <i className="fa-regular fa-message"></i>
              <h6>Chat</h6>
            </Home>
          </Dashboard>
        </li>
        <li>
          <Dashboard>
            <Home>
              <i className="fa-regular fa-calendar"></i>
              <h6>Calendar</h6>
            </Home>
          </Dashboard>
        </li>
        <li>
          <Dashboard>
            <Home>
              <i class="fa-regular fa-file-lines"></i>
              <h6>Post</h6>
            </Home>
          </Dashboard>
        </li>
      </ul>
    </LeftFull>
  );
};

export default Left;
