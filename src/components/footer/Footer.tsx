import "./footer.css";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <ul>
        <li>© {year} Baptiste Marcon. Made with ❤️</li>
      </ul>
    </footer>
  );
};
