import { Card, CardHeader, Heading, Stack } from "@chakra-ui/react";
import { IdeasFormData } from "../pages/menu/Ideas";
import { useEffect, useState } from "react";
import { DurationData } from "../types/Ideas";

const DurationForm = (props: IdeasFormData) => {
  const [duration, setDuration] = useState<DurationData[]>([]);

  useEffect(() => {
    setDuration([
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
        value: 6,
      },
      {
        id: 5,
        value: 12,
      },
    ]);
  }, []);

  const updateSelectedDuration = (value: number) => {
    if (Number(props?.data.domainId) !== value) {
      props.updateForm("duration" ,value);
    }
  };
  return (
    <Stack mt={30}>
      <Heading as="h3" size="xl">
        Select the duration for your project
      </Heading>
      <Stack
        direction={"row"}
        marginTop={30}
        display={"flex"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
      >
        {duration.map((item) => {
          return (
            <div className="domain-card">
              <Card
                key={item.id}
                size={"lg"}
                onClick={() => updateSelectedDuration(item.value)}
                variant={
                  props.data.duration && props.data.duration === item.value
                    ? "filled"
                    : "outline"
                }
              >
                <CardHeader>
                  <Heading size="sm"> {item.value} {item.value == 1 ? "month" : "months"}</Heading>
                </CardHeader>
              </Card>
            </div>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default DurationForm;
