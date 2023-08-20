import UserInfo from "../UserInfo/UserInfo.tsx";
import FetchUserButton from "../Button/FetchUserButton.tsx";
import { useTypedSelector } from "../../store/appStore.ts";
import { FC } from "react";


export const App: FC = () => {
  const { user } = useTypedSelector(state => state.user);

  return (
    <div>
      <header>Get a random user</header>
      <FetchUserButton/>
      {user &&
          <UserInfo user={user}/>
      }
    </div>
  );
};

export default App;