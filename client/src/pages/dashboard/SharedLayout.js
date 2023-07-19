import { Outlet, Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout.js";
import { NavBar, SmallSideBar, BigSideBar } from "../../components/index.js";

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSideBar />
        <BigSideBar />
        <div>
          <NavBar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayout;
