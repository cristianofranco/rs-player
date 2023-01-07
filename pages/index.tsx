import { Flex } from "@chakra-ui/react";
import Player from "../components/player";

export default function Home() {
  const songs = {
    first: {
      name: "????",
      artist: "EDEN",
      coverUrl: "/images/no-future.jpg",
      audio: "songs/question.mp3"
    },
    second: {
      name: "Modern Warfare",
      artist: "EDEN",
      coverUrl: "/images/icymi.jpg",
      audio: "songs/modern.mp3"
    },
    third: {
      name: "Untitled",
      artist: "EDEN",
      coverUrl: "/images/no-future.jpg",
      audio: "songs/untitled.mp3"
    },
  };

  return (
    <Flex
      height="100vh"
      backgroundColor="bg"
      alignItems="center"
      justifyContent="center"
    >
      <Flex width="820px" justifyContent="space-between">
        <Player size="lg" song={songs.first} />
        <Flex flexDirection="column" justifyContent="space-between">
          <Player size="md" song={songs.second} />
          <Player size="sm" song={songs.third} />
        </Flex>
      </Flex>
    </Flex>
  );
}
