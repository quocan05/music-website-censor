import React from "react";
import { Button, Card, Col, Row, Space, Statistic, Typography } from "antd";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  AudioOutlined,
  AuditOutlined,
  CustomerServiceFilled,
  SketchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import { ButtonLinkSeeAll } from "../../../Button";
import "../../../../styles/styleOverview.css";
import { ListNewestSong } from "./ListNewestSong";
import { Playlist, SingerPlaylist } from "./SingerPlaylist";
import { GenrePlaylist } from "./GenrePlaylist";
import { TopPlaylist } from "./TopPlaylist";
import { RankingDay } from "./RankingDay";
import { RankingWeek } from "./RankingWeek";
import TopSinger from "./TopSinger";
import TopSong from "./TopSong";
const shadow = "0 4px 8px rgba(0, 0, 0, 0.4)";
export const DetailOverview = () => {
  return (
    <>
      <h1>Overview</h1>
      <div className="wrapper">
        <div
          className="left"
          style={{
            width: "60%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <h2>Newest Songs</h2>
          <ListNewestSong />
          <div className="header-space">
            <h2>Playlists</h2>
            <ButtonLinkSeeAll />
          </div>
          <SingerPlaylist />
          <GenrePlaylist />
          <TopPlaylist />
        </div>
        <div
          className="right"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "40%",
            height: "100vh",
          }}
        >
          <h2>Ranking</h2>
          <RankingDay />
          <RankingWeek />

          <h2>Top songs</h2>

          <TopSong />

          <h2>Top singers</h2>
          <TopSinger />
        </div>
      </div>
    </>
  );
};
