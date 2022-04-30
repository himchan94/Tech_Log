import React, { useState } from "react";
import Image from "next/image";
import { darkmode_on, darkmode_off } from "../../public/images/icon";

const DarkmodeToggleBtn = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  if (toggle) {
    return (
      <Image
        src={darkmode_on}
        width={43}
        height={47}
        alt='darkmod icon'
        onClick={handleClick}
      />
    );
  }

  return (
    <Image
      src={darkmode_off}
      width={43}
      height={47}
      alt='darkmod icon'
      onClick={handleClick}
    />
  );
};

export default DarkmodeToggleBtn;
