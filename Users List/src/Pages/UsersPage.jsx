import Header from "../components/Header/Header";
import { Card } from "../components/Card/Card";
import {Users} from "../Users.js";
import "../components/Card/Card.css"
import "../components/Header/Header.css"
import "../components/TabButton/TabButton.css"
import "./UsersPage.css";

export default function UsersPage() {
  return (
    <>
      <Header />
      <div className="container">
        {Users.map((item) => (
          <Card {...item} key={item.name}>
            {" "}
          </Card>
        ))}
      </div>
    </>
  );
}

