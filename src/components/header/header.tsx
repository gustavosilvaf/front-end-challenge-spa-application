import { HeaderItem } from "./header-item/header-item";
import { MENU_ITEMS } from "./header.constants";
import "./header.module.scss";

export const Header = () => {
  return (
    <div className="container">
      <header>
        <div className="content">
          <div className="logo-area"></div>
          <nav>
            {MENU_ITEMS.map((item) => (
              <HeaderItem key={item.link} label={item.label} link={item.link} />
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
};
