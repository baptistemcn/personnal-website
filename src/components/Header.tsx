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
      <ul>
        {headers.map((item, index) => {
          return (
            <Link to={item.url} key={index}>
              <li
                onClick={() => handleNavItemClick(item.name)}
                className={activeNavItem === item.name ? "active" : ""}
              >
                {item.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </header>
  );
};
