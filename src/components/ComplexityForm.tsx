import { Card, CardHeader, Heading, Stack } from "@chakra-ui/react";
import { IdeasFormData } from "../pages/ideas/Ideas";
import { useEffect, useState } from "react";
import { ComplexityData } from "../types/Ideas";

const ComplexityForm = (props: IdeasFormData) => {
  const [complexity, setComplexity] = useState<ComplexityData[]>([]);

  useEffect(() => {
    setComplexity([
      {
        id: 1,
        value: "Easy",
      },
      {
        id: 2,
        value: "Medium",
      },
      {
        id: 3,
        value: "Hard",
      }
    ]);
  }, []);

  const updateSelectedComplexity= (value: string) => {
    if (props?.data.complexity !== value) {
      props.updateForm("complexity" ,value);
    }
  };
  return (
    <Stack mt={30}>
      <Heading as="h3" size="xl">
        Select the complexity of your project
      </Heading>
      <Stack
        direction={"row"}
        marginTop={30}
        display={"flex"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
      >
        {complexity.map((item) => {
          return (
            <div className="domain-card">
              <Card
                key={item.id}
                size={"lg"}
                onClick={() => updateSelectedComplexity(item.value)}
                variant={
                  props.data.complexity && props.data.complexity === item.value
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

export default ComplexityForm;
