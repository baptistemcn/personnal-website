import { Link } from "react-router-dom";

import "./header.css";
import { useState } from "react";

interface HeaderProps {
  headers: Array<LinksProps>;
}

interface LinksProps {
  name: string;
  url: string;
}

export const Header = ({ headers }: HeaderProps) => {
  const [activeNavItem, setActiveNavItem] = useState("");

  const handleNavItemClick = (item: string) => {
    setActiveNavItem(item);
  };

  return (
    <header>
      <nav>
        <ul>
          {headers.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => handleNavItemClick(item.name)}
                className={activeNavItem === item.name ? "active" : ""}
              >
                <Link to={item.url}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
