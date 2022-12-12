import Button from "../common/button";
import { FaWallet } from "react-icons/fa";
import "./header.css";

export default function Header() {
  return (
    <header id="header" className="fixed flex justify-end p-5 w-full z-50">
      <Button variant="hovered" className="connect_btn">
        <FaWallet /> Connect Wallet
      </Button>
    </header>
  );
}
