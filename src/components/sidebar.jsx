import React from "react";
import "../style/sidenav.css";
import "../style/container.less";
import PropTypes from "prop-types";
import logo from "../../public/tarnas_logo.png";
import logoName from "../../public/qc-tarnas-logo.png";

import {
  Container,
  Header,
  Sidebar,
  Sidenav,
  Content,
  Navbar,
  Nav,
} from "rsuite";
import AngleLeftIcon from "@rsuite/icons/legacy/AngleLeft";
import AngleRightIcon from "@rsuite/icons/legacy/AngleRight";
import DashboardIcon from "@rsuite/icons/Dashboard";
import FileUploadIcon from '@rsuite/icons/FileUpload';
import TaskIcon from '@rsuite/icons/Task';
import ExitIcon from "@rsuite/icons/Exit";
import EventDetailIcon from '@rsuite/icons/EventDetail';
import NavBar from "./navbar";
import { Link } from "react-router-dom";

const headerStyles = {
  padding: 10,
  fontSize: 16,
  height: 56,
  //   background: "#34c3ff",
  color: " #fff",
  whiteSpace: "nowrap",
  overflow: "hidden",
};

const NavToggle = ({ expand, onChange }) => {
  return (
    <Navbar appearance="subtle" className="nav-toggle">
      <Nav>
        <Nav.Menu
          noCaret
          placement="topStart"
          trigger="click"
          title={<ExitIcon style={{ width: 20, height: 20 }} size="sm" />}
        >
          {/* <Nav.Item>Help</Nav.Item>
          <Nav.Item>Settings</Nav.Item>
          <Nav.Item>Sign out</Nav.Item> */}
        </Nav.Menu>
      </Nav>

      <Nav pullRight>
        <Nav.Item onClick={onChange} style={{ width: 56, textAlign: "center" }}>
          {expand ? <AngleLeftIcon /> : <AngleRightIcon />}
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

// Adding prop validation
NavToggle.propTypes = {
  expand: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

const SideBar = ({children}) => {
  const [expand, setExpand] = React.useState(true);
  return (
    <div className="show-fake-browser sidebar-page" style={{height: "100vh"}}>
      <Container>
        <Sidebar
          style={{ display: "flex", flexDirection: "column", height: "100vh"}}
          width={expand ? 260 : 56}
          collapsible
        >
          <Sidenav.Header>
            <div style={headerStyles}>
              <span>
                {" "}
                <img src={logo} style={{ height: 40 }} />{" "}
                <img src={logoName} style={{ height: 20, marginLeft: 2 }} />
              </span>
            </div>
          </Sidenav.Header>
          <Sidenav
            expanded={expand}
            defaultOpenKeys={["3"]}
            appearance="subtle"
          >
            <Sidenav.Body>
              <Nav>
                <Nav.Item eventKey="1" active icon={<DashboardIcon />}  as={Link} to="/">
                  Dashboard
                </Nav.Item>
                <Nav.Item eventKey="2" icon={<FileUploadIcon />}>
                  สร้างโครงการ
                </Nav.Item>

                <Nav.Item eventKey="2" icon={<TaskIcon />}>
                 จัดการโครงการ
                </Nav.Item>

                <Nav.Item eventKey="2" icon={<EventDetailIcon />}>
                 งานเกินกำหนด
                </Nav.Item>
                {/* <Nav.Menu
                  eventKey="3"
                  trigger="hover"
                  title="Advanced"
                  icon={<MagicIcon />}
                  placement="rightStart"
                >
                  <Nav.Item eventKey="3-1">Geo</Nav.Item>
                  <Nav.Item eventKey="3-2">Devices</Nav.Item>
                  <Nav.Item eventKey="3-3">Brand</Nav.Item>
                  <Nav.Item eventKey="3-4">Loyalty</Nav.Item>
                  <Nav.Item eventKey="3-5">Visit Depth</Nav.Item>
                </Nav.Menu>
                <Nav.Menu
                  eventKey="4"
                  trigger="hover"
                  title="Settings"
                  icon={<GearCircleIcon />}
                  placement="rightStart"
                >
                  <Nav.Item eventKey="4-1">Applications</Nav.Item>
                  <Nav.Item eventKey="4-2">Websites</Nav.Item>
                  <Nav.Item eventKey="4-3">Channels</Nav.Item>
                  <Nav.Item eventKey="4-4">Tags</Nav.Item>
                  <Nav.Item eventKey="4-5">Versions</Nav.Item>
                </Nav.Menu> */}
              </Nav>
            </Sidenav.Body>
          </Sidenav>
          <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
        </Sidebar>

        <Container>
          <Header>
            <NavBar />
          </Header>
          <Content>{children}</Content>
        </Container>
      </Container>
    </div>
  );
};

// Adding prop validation for children
SideBar.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default SideBar;
