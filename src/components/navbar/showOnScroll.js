import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";

export default (props) => {
  const { children, showId = "" } = props;
  const [show, setShow] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const target = document.getElementById(showId);
      if (target) {
        setShow(window.pageYOffset >= target.clientHeight);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  if (isMobile) {
    return null;
  }

  return show ? children : null;
};
