import { FiMenu } from "react-icons/fi";
import Link from "next/dist/client/link";
import { useState } from "react";
import Icon from "../public/Icon";
export default function NavBar() {
  const [active, setActive] = useState(false);

  //Use to toggle the menue
  const handleClick = () => {
    setActive(!active);
  };

  return <></>;
}
