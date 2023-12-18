import { Censor } from "../../components/Censor";
import { DetailOverview } from "../../components/Censor/Content/OverviewContent/Overview";
import { ManageSinger } from "../../components/Censor/Content/SingerContent";
import { TabSinger } from "../../components/Censor/Content/SingerContent/body";
import { ManageSongs } from "../../components/Censor/Content/SongContent";
import { AllSongs } from "../../components/Censor/Content/SongContent/AllSongs";
import TabSongs from "../../components/Censor/Content/SongContent/body";

const RoutesConfig = [
  // {
  //   path: "/censor",
  //   element: <Censor />,
  // },
  {
    path: "/censor-overview",
    element: <DetailOverview />,
  },
  {
    path: "/censor-manage-users",
    element: <div></div>,
  },
  {
    path: "censor-manage-songs",
    element: <ManageSongs />,
    children: [
      {
        path: "songs",
        element: <TabSongs />,
      },
    ],
  },
  {
    path: "censor-manage-singers",
    element: <ManageSinger />,
    children: [
      {
        path: "singers",
        element: <TabSinger />,
      },
    ],
  },
];

export default RoutesConfig;
