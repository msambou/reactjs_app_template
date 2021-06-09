import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Dashboard from "../dashboard/Dashboard";
import LeftSideBar from "../navigation/LeftSideBar";
import RightSideBar from "../navigation/RightSideBar";
import Contact from "../contact/Contact";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
        <div class="main_content">
          <LeftSideBar />
          <RightSideBar />
          {/* Page  */}
          {/* <Dashboard /> */}
          <Contact />
          {/* Page */}
        </div>
      </div>
    );
  }
}

export default Home;
