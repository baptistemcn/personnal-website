import { Link } from "react-router-dom";

import "./header.css";

interface HeaderProps {
  headers: Array<LinksProps>;
}

interface LinksProps {
  name: string;
  url: string;
}

export const Header = ({ headers }: HeaderProps) => {
  return (
    <header>
      <ul>
        {headers.map((item, index) => {
          return (
            <Link to={item.url} key={index}>
              <li>{item.name}</li>
            </Link>
          );
        })}
      </ul>
    </header>
  );
};
