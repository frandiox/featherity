import { Box, Divider, Flex, Text, Link, Icon, useColorMode } from "@chakra-ui/core";
import { StringParam, useQueryParam } from "use-query-params";
import { useKeyBindings } from "../lib/key";

const Layout = ({ children }) => {
  const [, setQuery] = useQueryParam("query", StringParam);
  const { colorMode, toggleColorMode } = useColorMode();

  useKeyBindings({
    Escape: {
      fn: () => setQuery(""),
    },
    KeyT: {
      fn: () => toggleColorMode(),
    },
  });

  return (
    <Box h="100vh">
      <Flex mb={16} w="full">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          pt={4}
          pb={4}
          maxW="1250px"
          margin="0 auto"
          w="full"
          px={8}
        >
          <Flex justifyContent="center" alignItems="center">
            <Text
              fontSize="4xl"
              onClick={() => setQuery("")}
              style={{ cursor: "pointer" }}
            >
              Featherity
            </Text>
          </Flex>
          <Flex justifyContent="center" alignItems="center">
          <Link href="https://github.com/featherity/featherity" isExternal style={{ fontSize: "18px", marginRight: '24px' }}>
            Github
          </Link>
            <div onClick={toggleColorMode} style={{ cursor: "pointer" }}>
              <Icon name={colorMode == "light" ? "moon" : "sun"} size="24px" />
            </div>
          </Flex>
        </Flex>
      </Flex>
      <Flex margin="0 auto" direction="column" maxW="1250px" px={8}>
        {children}
        <Divider marginTop={10} marginBottom={10} />
      </Flex>
    </Box>
  );
};

export default Layout;
