import React from 'react';

type PodcastEpisode = {
  title: string;
  audioUrl: string;
};

type PodcastPlaylistProps = {
  episodes: PodcastEpisode[];
};

const PodcastPlaylist: React.FC<PodcastPlaylistProps> = ({ episodes }) => {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Podcast Playlist</div>
        {episodes.map((episode, index) => (
          <div key={index} className="mt-4">
            <div className="text-xl font-medium text-black">{episode.title}</div>
            <div className="mt-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Play
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PodcastPlaylist;