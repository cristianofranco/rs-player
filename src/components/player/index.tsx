import { Flex, Image, Text, Progress, Stack, Box } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import {
  IoIosPlay,
  IoIosPause,
  IoIosRewind,
  IoIosFastforward,
} from "react-icons/io";

export default function Player({ size, song }: PlayerProps) {
  const playerRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [percentagePlayed, setPercentagePlayed] = useState(0);

  function handleSizes() {
    switch (size) {
      case "lg":
        return { width: "335px", height: "600px", imageCoverSize: "240px" };
      case "md":
        return { width: "445px", height: "330px", imageCoverSize: "110px" };
      default:
        return { width: "445px", height: "250px", imageCoverSize: "110px" };
    }
  }

  function play() {
    playerRef.current?.play();
  }

  function pause() {
    playerRef.current?.pause();
  }

  function adjustVolume() {
    if (playerRef.current) {
      playerRef.current.volume = 0.75;
    }
  }

  function handleTimeUpdate() {
    if (playerRef.current) setCurrentTime(playerRef.current.currentTime);
    setPercentagePlayed((currentTime / song?.duration) * 100);
  }

  function formatSongDuration() {
    const minutes = Math.floor(song?.duration / 60);
    const seconds = song?.duration % 60;
    return `${minutes}:${seconds}`;
  }

  useEffect(() => {
    adjustVolume();
  }, []);

  return (
    <Stack
      backgroundColor="primary"
      borderRadius="lg"
      height={handleSizes().height}
      width={handleSizes().width}
      paddingX={size === "lg" ? "50px" : "35px"}
      paddingY={size === "lg" ? "60px" : "35px"}
      justifyContent="space-between"
    >
      <Flex flexDirection={size === "lg" ? "column" : "row"}>
        <Image
          src={song?.coverUrl}
          alt={song?.name}
          borderRadius="md"
          marginRight={size !== "lg" ? "50px" : "40px"}
          marginBottom={size === "lg" ? "40px" : "5px"}
          width={handleSizes().imageCoverSize}
          height={handleSizes().imageCoverSize}
        />
        <Flex flexDirection="column">
          <Text fontSize="xl" fontWeight="bold" color="whiteAlpha.900">
            {song?.name}
          </Text>
          <Text fontSize="md" fontWeight="semibold" color="artist">
            {song?.artist}
          </Text>
        </Flex>
      </Flex>
      <Flex alignSelf="center" color="whiteAlpha.900">
        <Box marginRight="50px" _hover={{ color: "whiteAlpha.700" }}>
          <IoIosRewind size="40px" color="inherit" />
        </Box>
        <Box
          marginRight="50px"
          _hover={{ color: "whiteAlpha.700" }}
          onClick={() => (isPlaying ? pause() : play())}
        >
          {isPlaying ? (
            <IoIosPause size="40px" color="inherit" />
          ) : (
            <IoIosPlay size="40px" color="inherit" />
          )}
        </Box>
        <Box _hover={{ color: "whiteAlpha.700" }}>
          <IoIosFastforward size="40px" color="inherit" />
        </Box>
      </Flex>
      {size !== "sm" && (
        <Flex flexDirection="column">
          <Progress
            size="sm"
            borderRadius="full"
            value={percentagePlayed}
            height="6px"
            colorScheme="blackAlpha"
            marginBottom="13px"
          />
          <Flex justifyContent="space-between">
            <Text fontSize="sm" color="gray.400">
              0:00
            </Text>
            <Text fontSize="sm" color="gray.400">
              {formatSongDuration()}
            </Text>
          </Flex>
        </Flex>
      )}
      <audio
        ref={playerRef}
        src={song?.audio}
        onTimeUpdate={handleTimeUpdate}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </Stack>
  );
}
