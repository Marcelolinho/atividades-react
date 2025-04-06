import Logo from "./Logo";
import NavMenu from "./NavMenu";
import "./styles.css";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <NavMenu />
    </header>
  )
}