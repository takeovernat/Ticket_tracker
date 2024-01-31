"use client";
import axios from "axios";
import { Key, useEffect, useState } from "react";
import TicketCard from "./components/TicketCard";
import { Button, Separator, Text } from "@radix-ui/themes";
import IssueBadge from "./components/Badge";
import { SiProtodotio } from "react-icons/si";
import IssueScrollArea from "./components/IssueScrollArea";

async function getIssues() {
  const res = await axios.get("/api/issues/");
  return res;
}

export default function Home() {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    getIssues().then((issues) => {
      setData(issues.data);
    });

    //console.log(typeof data);
  }, []);
  console.log(data);
  return (
    <div>
      <div className="flex justify-start px-1">
        <Button>
          <SiProtodotio />
          All Tickets
        </Button>
      </div>
      <Separator my="3" size="4" />
      <div className="flex">
        {Object.keys(data).length > 0 && (
          <div className="py-5">
            {data.map(
              (issue: {
                id: Key | number;
                title: string;
                description: string;
                status: string;
              }) => (
                <div key={issue.id} className="my-2">
                  <TicketCard
                    title={issue.title}
                    description={issue.description}
                    status={<IssueBadge type={issue.status}></IssueBadge>}
                  ></TicketCard>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
