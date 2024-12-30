import { FunctionComponent, useMemo, type CSSProperties } from "react";
import NotificationIcon from "./NotificationIcon";
import Search from "./Search";
import "./Header.css";

export type HeaderType = {
  className?: string;
  showHelloTanzir?: boolean;

  /** Style props */
  helloTanzirTextDecoration?: CSSProperties["textDecoration"];
};

const Header: FunctionComponent<HeaderType> = ({
  className = "",
  showHelloTanzir,
  helloTanzirTextDecoration,
}) => {
  const helloTanzirStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: helloTanzirTextDecoration,
    };
  }, [helloTanzirTextDecoration]);

  return (
    <section className={`header10 ${className}`}>
      <div className="header11">
        {showHelloTanzir && (
          <a className="hello-tanzir" style={helloTanzirStyle}>
            Hello Tanzir
          </a>
        )}
        <div className="date">
          <img
            className="chevrons-right-icon"
            loading="lazy"
            alt=""
            src="/chevronsright.svg"
          />
          <a className="may-19-2021">May 19, 2023</a>
        </div>
      </div>
      <div className="search1">
        <NotificationIcon />
        <Search />
      </div>
    </section>
  );
};

export default Header;
