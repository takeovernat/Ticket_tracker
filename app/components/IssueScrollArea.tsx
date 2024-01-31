import { Box, Flex, ScrollArea } from "@radix-ui/themes";
import React from "react";

const IssueScrollArea = ({ children }: { children: any }) => {
  return (
    <ScrollArea type="always" scrollbars="vertical" style={{ height: 180 }}>
      <Box p="2" pr="8">
        <Flex>{children}</Flex>
      </Box>
    </ScrollArea>
  );
};

export default IssueScrollArea;
