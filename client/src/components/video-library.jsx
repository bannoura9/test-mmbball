import React, { useEffect, useState } from "react";
import { flattenDeep } from "lodash";
import InfiniteScroll from "react-infinite-scroll-component";
import VideoLibraryHeader from "./modules/video-library-header";

const playlistIds = [
  "PLtAzkECGU1yXDNefSuSbxODu9hrRK0UtP",
  "PLtAzkECGU1yXhKBF1t-pJmH8S1nuBiu8z",
  "PLtAzkECGU1yU8nN3YhEpa15W7fLmgxRkP",
];

const VideoLibrary = ({ isHomepage }) => {
  const [playlists, setPlaylists] = useState([]);
  const [videos, setVideos] = useState([]);
  const [videosCopy, setVideosCopy] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [filter, setFilter] = useState("");
  const pageSize = 6;

  useEffect(() => {
    if (videos.length && videos.length === videosCopy.length) setHasMore(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videos.length]);

  useEffect(() => {
    (async () => {
      try {
        const playlistRes = await fetch(
          "https://www.googleapis.com/youtube/v3/playlists?" +
            new URLSearchParams({
              key: "AIzaSyCAH8cKrD6ASDhtfMYIfEGzNU6v9mcltRI",
              part: "id,snippet",
              id: playlistIds.join(","),
            })
        );
        const playlistResJsOn = await playlistRes.json();
        setPlaylists(
          playlistResJsOn.items.map(({ id, snippet }) => ({
            id,
            title: snippet.localized.title,
          }))
        );

        const playlistItemsResJsOn = await Promise.all(
          playlistIds.map(async (playlistId) => {
            const playlistItemsRes = await fetch(
              "https://www.googleapis.com/youtube/v3/playlistItems?" +
                new URLSearchParams({
                  part: "snippet",
                  key: "AIzaSyCAH8cKrD6ASDhtfMYIfEGzNU6v9mcltRI",
                  channelId: "UCHBDAkjxufCaEfmRaf7Bj3Q",
                  maxResults: 200,
                  playlistId,
                })
            );
            return playlistItemsRes.json();
          })
        );

        let filteredVideos = flattenDeep(
          playlistItemsResJsOn.map((playlistItems) =>
            playlistItems.items.map((i) => i.snippet)
          )
        ).sort((a, b) => (a.publishedAt > b.publishedAt ? 1 : -1));

        filteredVideos = isHomepage
          ? filteredVideos.slice(0, 6)
          : filteredVideos;

        setVideos(filteredVideos.slice(0, pageSize));
        setVideosCopy(filteredVideos);
        //   setPlaylists(mockData.playlists);
        //   setVideos(mockData.videos);
        //   setVideosCopy(mockData.videos);
      } catch (err) {}
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterVideos = (e) => {
    const { value } = e.target;
    if (value) {
      setVideos(videosCopy.filter((v) => v.playlistId === value));
      setFilter(value);
    } else {
      setVideos(videosCopy);
    }
  };

  const fetchData = () => {
    console.log(`${videos.length} loaded!`, `loading ${pageSize} videos more`);
    setVideos((vids) => videosCopy.slice(0, vids.length + 10));
  };

  const refresh = () => {};

  return (
    <div>
      <div className="container dashOpacity mt-1 mb-5">
        <div id="video-wrapper" className="card mb-1">
          <VideoLibraryHeader
            filterVideos={filterVideos}
            playlists={playlists}
            filter={filter}
          />

          <InfiniteScroll
            dataLength={videos.length} //This is important field to render the next data
            next={fetchData}
            hasMore={hasMore}
            // loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
            // below props only if you need pull down functionality
            refreshFunction={refresh}
            pullDownToRefresh
            pullDownToRefreshThreshold={50}
            pullDownToRefreshContent={
              <h3 style={{ textAlign: "center" }}>
                &#8595; Pull down to refresh
              </h3>
            }
            releaseToRefreshContent={
              <h3 style={{ textAlign: "center" }}>
                &#8593; Release to refresh
              </h3>
            }
          >
            <div className="video-container">
              {videos.map((video, i) => (
                <div key={i} className="video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.resourceId.videoId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.resourceId.videoId}
                  ></iframe>
                </div>
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

export default VideoLibrary;
