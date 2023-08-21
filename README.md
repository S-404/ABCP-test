### задача

<details>

```
    // Мы ожидаем, что Вы исправите синтаксические ошибки, сделаете перехват возможных исключений и улучшите читаемость
    кода.
    // А так же, напишите кастомный хук useThrottle и используете его там где это нужно.
    // Желательно использование React.memo и React.useCallback там где это имеет смысл.
    // Будет большим плюсом, если Вы сможете закэшировать получение случайного пользователя.
    // Укажите правильные типы.
    // По возможности пришлите Ваш вариант в https://codesandbox.io
    
    import React, { useState } from "react";
    
    const URL = "https://jsonplaceholder.typicode.com/users";
    
    type Company = {
        bs: string;
        catchPhrase: string;
        name: string;
    };
    
    type User = {
        id: number;
        email: string;
        name: string;
        phone: string;
        username: string;
        website: string;
        company: Company;
        address: any
    };
    
    interface IButtonProps {
        onClick: any;
    }
    
    function Button({ onClick }: IButtonProps): JSX.Element {
        return (
            <button type="button" onClick={onClick}>
                get random user
            </button>
        );
    }
    
    interface IUserInfoProps {
        user: User;
    }
    
    function UserInfo({ user }: IUserInfoProps): JSX.Element {
    return (
    <table>
        <thead>
            <tr>
            <th>Username</th>
            <th>Phone number</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>{user.name}</td>
            <td>{user.phone}</td>
            </tr>
        </tbody>
    </table>
    );
    }
    
    function App(): JSX.Element {
        const [item, setItem] = useState<Record<number, User>>(null);
        
        const receiveRandomUser = async () => {
            const id = Math.floor(Math.random() * (10 - 1)) + 1;
            const response = await fetch(`${URL}/${id}`);
            const _user = (await response.json()) as User;
            setItem(_user);
        };
    
        const handleButtonClick = (
            event: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ) => {
            event.stopPropagation();
            receiveRandomUser();
        };
        
        return (
            <div>
                <header>Get a random user</header>
                    <Button onClick={handleButtonClick} />
                <UserInfo user={item} />
            </div>
        );
    }

    export default App; 
```

</details>


### комментарии к решению

- для читаемости кода: сделал рефакторинг, растащил отдельно модели, компоненты, ui, utils
- для удобства работы с состоянием настроил rtk стор и апи
- дополнил модели недостающими аттрибутами
- memo применимо для компонента UserInfo в данном случае
- сначала обернул колбэк receiveRandomUser в useCallback, но после добавления хука useThrottle 
и с учетом использования rtk api - сделал следющую схему:  
```
 нажимаем кнопку -> 
 генерируется ид -> 
 хук useThrottle возвращает значение throttledId -> 
 через useEffect при зменении throttledId фетчим пользователя useLazyFetchUserQuery
```


### codesandbox

- <a href="https://codesandbox.io/invite/tmq7m8z4spdj34vn" target="_blank"> invite url  </a> 
- <a href="https://codesandbox.io/p/github/S-404/ABCP-test/master?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522cllklwr9w000h2a64xqv0t75n%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522cllklwr9w000c2a644n1oskd5%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522cllklwr9w000e2a64f0369ism%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522cllklwr9w000g2a64743lroqq%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522cllklwr9w000c2a644n1oskd5%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cllklwr9w000b2a64col8fz91%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%257D%255D%252C%2522id%2522%253A%2522cllklwr9w000c2a644n1oskd5%2522%252C%2522activeTabId%2522%253A%2522cllklwr9w000b2a64col8fz91%2522%257D%252C%2522cllklwr9w000g2a64743lroqq%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cllklwr9w000f2a64s9i55f9l%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522id%2522%253A%2522cllklwr9w000g2a64743lroqq%2522%252C%2522activeTabId%2522%253A%2522cllklwr9w000f2a64s9i55f9l%2522%257D%252C%2522cllklwr9w000e2a64f0369ism%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cllklwr9w000d2a644w639w3r%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%257D%255D%252C%2522id%2522%253A%2522cllklwr9w000e2a64f0369ism%2522%252C%2522activeTabId%2522%253A%2522cllklwr9w000d2a644w639w3r%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D" target="_blank"> branch url <a>
