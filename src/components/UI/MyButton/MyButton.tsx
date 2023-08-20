import React, { FC } from "react";

interface IButtonProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  text: string;
}

const MyButton: FC <IButtonProps> = ({onClick, text}) => {
  return (
    <button type="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default MyButton;