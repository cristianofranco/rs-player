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

  function play(event: React.MouseEvent<HTMLDivElement>) {
    playerRef.current?.play();
  }

  function pause(event: React.MouseEvent<HTMLDivElement>) {
    playerRef.current?.pause();
  }

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
          <Text fontSize="2xl" fontWeight="bold" color="whiteAlpha.900">
            {song?.name}
          </Text>
          <Text fontSize="xl" fontWeight="semibold" color="artist">
            {song?.artist}
          </Text>
        </Flex>
      </Flex>
      <Flex alignSelf="center" color="whiteAlpha.900">
        <Box marginRight="50px" _hover={{ color: "whiteAlpha.700" }}>
          <IoIosRewind size="40px" color="inherit" />
        </Box>
        <Box marginRight="50px" _hover={{ color: "whiteAlpha.700" }}>
          <IoIosPlay size="40px" color="inherit" />
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
            value={80}
            height="6px"
            colorScheme="blackAlpha"
            marginBottom="13px"
          />
          <audio ref={playerRef} src={song?.audio} />
          <Flex justifyContent="space-between">
            <Text fontSize="sm" color="gray.400">
              2:06
            </Text>
            <Text fontSize="sm" color="gray.400">
              2:38
            </Text>
          </Flex>
        </Flex>
      )}
    </Stack>
  );
}
