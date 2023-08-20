import MyButton from "../UI/MyButton/MyButton.tsx";
import { useCallback } from "react";
import { getRandomId } from "../../utils/getRandomId.ts";
import { useLazyFetchUserQuery } from "../../api/userApi.ts";

const FetchUserButton = () => {
  const [fetchUser] = useLazyFetchUserQuery();

  const receiveRandomUser = useCallback(async () => {
    fetchUser(getRandomId());
  }, []);

  const handleButtonClick = () => {
    receiveRandomUser();
  };

  return (
    <MyButton
      onClick={handleButtonClick}
      text={"get random user"}
    />
  );
};

export default FetchUserButton;