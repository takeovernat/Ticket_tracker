import { Avatar, Box, Flex, Text, Card, Button } from "@radix-ui/themes";
import React, { ReactNode } from "react";
import { IoTicket } from "react-icons/io5";

const TicketCard = (props: any) => {
  return (
    <Card style={{ maxWidth: 240 }}>
      <Flex gap="3" align="center">
        <IoTicket />
        <Box>
          <Text as="div" size="2" weight="bold">
            {props.title}
          </Text>
          <Text as="div" size="1" weight="light">
            {props.description}
          </Text>
          <Text as="div" size="2" color="gray">
            {props.status}
          </Text>
          <Button size="1" variant="ghost">
            Edit Status
          </Button>
        </Box>
      </Flex>
    </Card>
  );
};

export default TicketCard;
