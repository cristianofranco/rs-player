import { Flex } from "@chakra-ui/react";
import Player from "../components/player";

export default function Home() {
  const songs = [
    {
      id: 1,
      name: "????",
      artist: "EDEN",
      coverUrl: "/images/no-future.jpg",
      audio: "songs/question.mp3",
      duration: 179,
    },
    {
      id: 2,
      name: "Modern Warfare",
      artist: "EDEN",
      coverUrl: "/images/icymi.jpg",
      audio: "songs/modern.mp3",
      duration: 202
    },
    {
      id: 3,
      name: "Untitled",
      artist: "EDEN",
      coverUrl: "/images/no-future.jpg",
      audio: "songs/untitled.mp3",
      duration: 216,
    },
  ];

  return (
    <Flex
      height="100vh"
      backgroundColor="bg"
      alignItems="center"
      justifyContent="center"
    >
      <Flex width="820px" justifyContent="space-between">
        <Player size="lg" song={songs[0]} />
        <Flex flexDirection="column" justifyContent="space-between">
          <Player size="md" song={songs[1]} />
          <Player size="sm" song={songs[2]} />
        </Flex>
      </Flex>
    </Flex>
  );
}
