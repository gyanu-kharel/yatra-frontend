import { Card, CardHeader, Heading, Stack } from "@chakra-ui/react";
import { IdeasFormData } from "../pages/ideas/Ideas";
import { useEffect, useState } from "react";
import { TeamSizeData } from "../types/Ideas";

const TeamSizeForm = (props: IdeasFormData) => {
  const [teamSize, setTeamSize] = useState<TeamSizeData[]>([]);

  useEffect(() => {
    setTeamSize([
      {
        id: 1,
        value: 1,
      },
      {
        id: 2,
        value: 2,
      },
      {
        id: 3,
        value: 3,
      },
      {
        id: 4,
        value: 4,
      },
    ]);
  }, []);

  const updateSelectedTeamSize = (value: number) => {
    if (Number(props?.data.teamSize) !== value) {
      props.updateForm("teamSize", value);
    }
  };
  return (
    <Stack mt={30}>
      <Heading as="h3" size="xl">
        Select the team size of your project
      </Heading>
      <Stack
        direction={"row"}
        marginTop={30}
        display={"flex"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
      >
        {teamSize.map((item) => {
          return (
            <div className="domain-card">
              <Card
                key={item.id}
                size={"lg"}
                onClick={() => updateSelectedTeamSize(item.value)}
                variant={
                  props.data.teamSize && props.data.teamSize === item.value
                    ? "filled"
                    : "outline"
                }
              >
                <CardHeader>
                  <Heading size="sm">
                    {" "}
                    {item.value} {item.value == 1 ? "member" : "members"}{" "}
                  </Heading>
                </CardHeader>
              </Card>
            </div>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default TeamSizeForm;
