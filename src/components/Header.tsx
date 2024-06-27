import React from "react";
import { Text } from "react-native-paper";

const Header = (props: any) => {
  // Props
  const { classname: cls, ...rest } = props;
  // CSS
  const classname = `text-[21px] font-bold py-3 ${cls || ""}`;

  return <Text className={classname} {...rest} />;
};

export default Header;
