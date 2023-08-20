// Мы ожидаем, что Вы исправите синтаксические ошибки, сделаете перехват возможных исключений и улучшите читаемость кода.
// А так же, напишите кастомный хук useThrottle и используете его там где это нужно.
// Желательно использование React.memo и React.useCallback там где это имеет смысл.
// Будет большим плюсом, если Вы сможете закэшировать получение случайного пользователя.
// Укажите правильные типы.
// По возможности пришлите Ваш вариант в https://codesandbox.io

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