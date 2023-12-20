import {
  AreaChartOutlined,
  AuditOutlined,
  BankOutlined,
  ContainerOutlined,
  CustomerServiceOutlined,
  FileSearchOutlined,
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
    <Link to="/censor-manage-singers/singers">Singers</Link>,
    "singers",
    <PiMicrophoneStageDuotone /> // [
    //   getItem(<Link to="/add-new-singer">Add new singer</Link>, "add-new"),
    //   getItem(<Link to="/edit-singer">Edit singers</Link>, "edit"),
    //   getItem(<Link to="/delete-singer">Delete singer</Link>, "delete"),
    // ]
  ),

  getItem(
    <Link to="/censor-manage-songs/songs">Songs</Link>,
    "songs",
    <FaMusic />
  ),

  getItem(
    <Link to="censor-manage-playlist">Playlists</Link>,
    "playlist",
    <ContainerOutlined />
  ),
  getItem(
    <Link to="censor-support">Support</Link>,
    "support",
    <FileSearchOutlined />
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
