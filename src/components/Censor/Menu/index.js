import {
  AreaChartOutlined,
  AuditOutlined,
  BankOutlined,
  ContainerOutlined,
  CustomerServiceOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { FaMusic } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PiMicrophoneStageDuotone } from "react-icons/pi";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const MenuSiderbar = [
  getItem(
    <Link to="/censor-overview">Overview</Link>,
    "overview",
    <AreaChartOutlined />
  ),

  getItem(
    <Link to="/censor-manage-users">Users</Link>,
    "users",
    <UserOutlined />
    // [
    //   getItem(<Link to="/add-new-user">Add new user</Link>, "add-new"),
    //   getItem(<Link to="/edit-user">Edit user</Link>, "edit"),
    //   getItem(<Link to="/delete-user">Delete user</Link>, "delete"),
    // ]
  ),

  getItem(
    <Link to="/censor-manage-singers">Singers</Link>,
    "singers",
    <PiMicrophoneStageDuotone /> // [
    //   getItem(<Link to="/add-new-singer">Add new singer</Link>, "add-new"),
    //   getItem(<Link to="/edit-singer">Edit singers</Link>, "edit"),
    //   getItem(<Link to="/delete-singer">Delete singer</Link>, "delete"),
    // ]
  ),

  getItem(
    <Link to="/censor-manage-songs">Songs</Link>,
    "songs",
    <FaMusic />
    // [
    //   getItem(<Link to="/add-new-song">Add new song</Link>, "add-new"),
    //   getItem(<Link to="/edit-song">Edit song</Link>, "edit"),
    //   getItem(<Link to="/delete-song">Delete song</Link>, "delete"),
    // ]
  ),

  getItem(
    <Link to="censor-playlist">Playlists</Link>,
    "playlist",
    <ContainerOutlined />
  ),
  //   {
  //     key: "user",
  //     icon: <UserOutlined />,
  //     label:
  //   },
  //   {
  //     key: "singer",
  //     icon: <UserOutlined />,
  //     label: <Link to="/singer">Singer</Link>,
  //   },
  //   {
  //     key: "censor",
  //     icon: <AuditOutlined />,
  //     label: <Link to="/censor">Censor</Link>,
  //   },
  //   {
  //     key: "song",
  //     icon: <CustomerServiceOutlined />,
  //     label: <Link to="/song">Songs</Link>,
  //   },
];

export default MenuSiderbar;
