import { Flex } from "@chakra-ui/react";
import Player from "../components/player";

export default function Home() {
  const songs = [
    {
      id: 1,
      name: "Adagio Sostenuto",
      artist: "Paul Pitman",
      coverUrl: "/images/cover.jpg",
      audio: "songs/movementI.mp3",
      duration: 335,
    },
    {
      id: 2,
      name: "Allegreto",
      artist: "Paul Pitman",
      coverUrl: "/images/cover.jpg",
      audio: "songs/movementII.mp3",
      duration: 131
    },
    {
      id: 3,
      name: "Presto",
      artist: "Paul Pitman",
      coverUrl: "/images/cover.jpg",
      audio: "songs/movementIII.mp3",
      duration: 493,
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
