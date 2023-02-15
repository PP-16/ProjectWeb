import HeaderAdmin from "./HeaderAdmin";
import FooterAdmin from "./FooterAdmin";
import Sidebar from "./Sidebar";

export const MainAdmin = ({ children }) => {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <HeaderAdmin />
          <div id="main">{children}</div>
        </div>
        <FooterAdmin />
      </div>
    </div>
  );
};
