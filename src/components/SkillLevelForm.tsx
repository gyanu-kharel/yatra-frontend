import { Card, CardHeader, Heading, Stack } from "@chakra-ui/react";
import { IdeasFormData } from "../pages/menu/Ideas";
import { useEffect, useState } from "react";
import { SkillLevelData } from "../types/Ideas";

const SkillLevelForm = (props: IdeasFormData) => {
  const [skillLevel, setSkillLevel] = useState<SkillLevelData[]>([]);

  useEffect(() => {
    setSkillLevel([
      {
        id: 1,
        value: "Beginner",
      },
      {
        id: 2,
        value: "Intermediate",
      },
      {
        id: 3,
        value: "Experienced",
      },
      {
        id: 4,
        value: "Expert",
      }
    ]);
  }, []);

  const updateSelectedSkillLevel= (value: string) => {
    if (props?.data.skillLevel !== value) {
      props.updateForm("skillLevel" ,value);
    }
  };
  return (
    <Stack mt={30}>
      <Heading as="h3" size="xl">
        Select the skill level of your project team member
      </Heading>
      <Stack
        direction={"row"}
        marginTop={30}
        display={"flex"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
      >
        {skillLevel.map((item) => {
          return (
            <div className="domain-card">
              <Card
                key={item.id}
                size={"lg"}
                onClick={() => updateSelectedSkillLevel(item.value)}
                variant={
                  props.data.skillLevel && props.data.skillLevel === item.value
                    ? "filled"
                    : "outline"
                }
              >
                <CardHeader>
                  <Heading size="sm"> {item.value}</Heading>
                </CardHeader>
              </Card>
            </div>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default SkillLevelForm;
