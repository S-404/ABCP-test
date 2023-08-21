import { FC, memo } from "react";
import { IUser } from "../../models/IUser.ts";

interface IUserInfoProps {
  user: IUser;
}


const UserInfo: FC<IUserInfoProps> = memo(({ user }) => {

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
});

export default UserInfo;