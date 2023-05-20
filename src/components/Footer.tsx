import "./footer.css";

export const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer>
      <ul>
        <li>© {year} Baptiste Marcon. Made with ❤️</li>
      </ul>
    </footer>
  );
};
