import { Censor } from "../../components/Censor";
import { DetailOverview } from "../../components/Censor/Content/OverviewContent/Overview";

const RoutesConfig = [
  {
    path: "/censor",
    element: <Censor />,
  },
  {
    path: "/censor-statistical",
    element: <DetailOverview />,
  },
  {
    path: "/censor-manage-users",
    element: <div></div>,
  },
];

export default RoutesConfig;
