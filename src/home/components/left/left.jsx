import { Dashboard, Home, LeftFull, Line} from "./left.styles";

const Left = () => {

  return (
    <LeftFull>
      <ul>
        <li>
          <Dashboard>
            <Home>
              <i className="fa-solid fa-house"></i>
              <h6>Dashboard</h6>
            </Home>
            {/* <i className="fa-solid fa-chevron-down"></i> */}
          </Dashboard>

        </li>
        <li>
          <Dashboard>
            <Home>
              <i className="fa-solid fa-bag-shopping"></i>
              <h6>E-Commerce</h6>
            </Home>
            {/* <i className="fa-solid fa-chevron-down"></i> */}
          </Dashboard>

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

        <li>
          <Line>

          </Line>
        </li>
        <li>
          <Dashboard>
            <Home>
            <i className="fa-solid fa-file-pen"></i>
              <h6>Crud</h6>
            </Home>
          </Dashboard>
        </li>
        <li>
          <Dashboard>
            <Home>
            <i class="fa-solid fa-user-group"></i>
              <h6>Users</h6>
            </Home>
          </Dashboard>
        </li>
        <li>
          <Dashboard>
            <Home>
            <i className="fa-solid fa-square-poll-vertical"></i>
              <h6>Profile</h6>
            </Home>
          </Dashboard>
          <Dashboard>
            <Home>
            <i className="fa-solid fa-table-columns"></i>
              <h6>Pages</h6>
            </Home>
          </Dashboard>
        </li>

      </ul>
    </LeftFull>
  );
};

export default Left;
