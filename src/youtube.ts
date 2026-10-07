import 'dotenv/config';
import axios from 'axios';

/**
 * Data required for frontend YouTube video display.
 */
type IContent = {
  _id: string;
  title: string;
  description?: string;
  thumbnail: string;
  badges?: string[];
  url: string;
};
/**
 * Data returned from YouTube's API.
 */
type APIVideo = {
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      high: {
        width: number;
        height: number;
        url: string;
      };
    };
  };
  contentDetails: {
    videoId: string;
  };
};

/**
 * YouTube creator profile picture and three most recent videos.
 */
export type YouTubeData = {
  pfp: string;
  recentContent: IContent[];
};

/**
 * Converts the YouTube API video data into frontend-parsable content
 * @param video
 * @returns
 */
const apiContentToVideo = (video: APIVideo): IContent => {
  const { snippet, contentDetails } = video;
  const url = `https://www.youtube.com/watch?v=${contentDetails.videoId}`;

  // Shortens the video description to 150 characters
  const shortenedDesc = `${snippet.description.slice(0, 150)}...`;

  return {
    _id: contentDetails.videoId,
    title: snippet.title,
    description: shortenedDesc,
    thumbnail: snippet.thumbnails.high.url,
    url,
  };
};

/**
 * Retrives a YouTube creator's profile picture by user ID
 */
const getYoutubePfp = async (userId: string): Promise<string | null> => {
  const thumbnail = await axios
    .get(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&forHandle=${userId}&fields=items(id,snippet(thumbnails(high)))&key=${process.env.YOUTUBE_API_KEY}`
    )
    .catch((e) => console.error(e));

  // Invariance: Items will only be 1 item long
  if (thumbnail && thumbnail.data.items[0].snippet.thumbnails.high.url) {
    const url = thumbnail.data.items[0].snippet.thumbnails.high.url as string;
    // Removes this absolutely wild default photo that is returned without a valid username for some reason?
    if (
      !url.includes(
        'dLHdx9gnMUMqdYnrZ26atHPNfJRIn8t8Q-bF_5I3KmpFFVF-TdBE86A96It6yZYsaAre-AUM=s800-c-k-c0x00ffffff-no-rj'
      )
    ) {
      return url;
    } else return null;
  } else return null;
};

/**
 * Retrives the three most recent YouTube videos of a given creator.
 * TODO: A YouTube channel can also have less than 3 videos. This should be handled at a future date
 */
const getRecentContent = async (userId: string): Promise<IContent[] | null> => {
  const playlists = await axios
    .get(
      `https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&forHandle=${userId}&fields=items(id,contentDetails(relatedPlaylists))&key=${process.env.YOUTUBE_API_KEY}`
    )
    .catch((e) => console.error(e));

  if (playlists) {
    const rc = await axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${playlists.data.items[0].contentDetails.relatedPlaylists.uploads}&fields=items(id,snippet(title,description,thumbnails(high)),contentDetails(videoId))&key=${process.env.YOUTUBE_API_KEY}`
      )
      .catch((e) => console.error(e));

    if (rc) {
      const recentVideos: APIVideo[] = rc.data.items.slice(0, 3);
      const parsedVideos: IContent[] = recentVideos.map(
        (v): IContent => apiContentToVideo(v)
      );
      return parsedVideos;
    } else return null;
  } else return null;
};

/**
 * Returns a YouTube creator's profile picture and three most recent videos
 */
export const getYoutubeDataForCreator = async (
  userId: string
): Promise<YouTubeData> => {
  const pfp = await getYoutubePfp(userId);
  const recentContent = await getRecentContent(userId);
  if (pfp === null || recentContent === null)
    throw new Error(`YouTube creator "${userId}" data not found.`);

  return { pfp, recentContent };
};
