import { Flex, Badge } from "@radix-ui/themes";
import React from "react";

const IssueBadge = ({ type }: { type: string }) => {
  return (
    <Flex gap="2">
      {type === "IN_PROGRESS" && <Badge color="orange">IN PROGRESS</Badge>}
      {type === "OPEN" && <Badge color="blue">OPEN</Badge>}
      {type === "CLOSED" && <Badge color="green">CLOSED</Badge>}
    </Flex>
  );
};

export default IssueBadge;
