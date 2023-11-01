import TabButton from "../TabButton/TabButton";
import { useState } from "react";

function Header() {
  const [button, setButton] = useState('');
  function handleClick(props) {
    console.log("jnh");
    setButton(props);
  }
  return (
    /** Header component which has header section */
    <>
      <h1>Users</h1>
      <div className="header">
        <div className="input-tag">
          <i className="fa fa-search" aria-hidden="true"></i>
          <input placeholder="Search users" className="search"></input>
        </div>
        <section className="tabButton">
          <menu>
            <TabButton
              onclicked={() => handleClick("Reputation")}
              onSelected={button === "Reputation"}
            >
              Reputation
            </TabButton>
            <TabButton
              onclicked={() => handleClick("New users")}
              onSelected={button === "New users"}
            >
              New users
            </TabButton>
            <TabButton
              onclicked={() => handleClick("Voters")}
              onSelected={button === "Voters"}
            >
              Voters
            </TabButton>
            <TabButton
              onclicked={() => handleClick("Editors")}
              onSelected={button === "Editors"}
            >
              Editors
            </TabButton>
            <TabButton
              onclicked={() => handleClick("Moderators")}
              onSelected={button === "Moderators"}
            >
              Moderators
            </TabButton>
          </menu>
        </section>
      </div>
    </>
  );
}

export default Header;
