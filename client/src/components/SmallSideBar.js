import Wrapper from "../assets/wrappers/SmallSidebar";
import links from "../utils/Links";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { FaTimes } from "react-icons/fa";
import { useAppContext } from "../context/appContext";
import NavLinks from "./NavLinks";

const SmallSideBar = () => {
  const { showSidebar, toggleSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSideBar;
