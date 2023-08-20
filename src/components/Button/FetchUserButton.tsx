import MyButton from "../UI/MyButton/MyButton.tsx";
import { useEffect, useState } from "react";
import { getRandomId } from "../../utils/getRandomId.ts";
import { useLazyFetchUserQuery } from "../../api/userApi.ts";
import { useThrottle } from "../../hooks/useThrottle.ts";

const FetchUserButton = () => {
  const [generatedId, setGeneratedId] = useState<number | null>();
  const throttledId = useThrottle(generatedId, 1000);
  const [fetchUser] = useLazyFetchUserQuery();

  useEffect(() => {
    if (throttledId) {
      fetchUser(throttledId);
    }
  }, [throttledId]);

  const handleButtonClick = () => {
    setGeneratedId(getRandomId());
  };

  return (
    <MyButton
      onClick={handleButtonClick}
      text={"get random user"}
    />
  );
};

export default FetchUserButton;