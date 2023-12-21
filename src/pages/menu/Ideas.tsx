import { Button, Stack } from "@chakra-ui/react";
import Progress from "../../components/Progress";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useState } from "react";
import DomainForm from "../../components/DomainForm";
import DurationForm from "../../components/DurationForm";
import TeamSizeForm from "../../components/TeamSizeForm";
import SkillLevelForm from "../../components/SkillLevelForm";
import ComplexityForm from "../../components/ComplexityForm";
import IdeasResult from "../../components/IdeasResult";

const steps = [
  "Domain",
  "Duration",
  "Team Size",
  "Skill Level",
  "Complexity",
  "Ideas",
];


export type IdeasFormDataType = {
  domainId: string | null,
  duration: number | null,
  teamSize: number | null,
  skillLevel: string | null,
  complexity: string | null,
}


export type IdeasFormData = {
  data: IdeasFormDataType,
  updateForm: (key: any, value: any) =>  void
}

const defaultData : IdeasFormDataType = {
  domainId: null,
  duration: null,
  teamSize: null,
  skillLevel: null,
  complexity: null,
}

const Ideas = () => {
  const [index, setIndex] = useState<number>(0);

  const decreaseIndex = () => {
    if (index < 1) return;
    setIndex(() => index - 1);
  };

  const increaseIndex = () => {
    if (index >= steps.length) return;
    setIndex(() => index + 1);
  };

  const renderSwitch = (index: number) => {
    const [formData, setFormData] = useState<IdeasFormDataType>(defaultData);
  
    const updateFormData = (propertyName: any, newValue: any) => {
      setFormData((prev) => ({
        ...prev,
        [propertyName]: newValue,
      }));
      console.log(formData);
    };
  
    switch (index) {
      case 0:
        return <DomainForm updateForm={updateFormData} data={formData}/>;
      case 1:
        return <DurationForm />;
      case 2:
        return <TeamSizeForm />;
      case 3:
        return <SkillLevelForm />;
      case 4:
        return <ComplexityForm />;
      case 5:
        return <IdeasResult />;
      default:
        return <DomainForm updateForm={updateFormData} data={formData} />;
    }
  };
  
  return (
    <>
      <div style={{ fontSize: 25 }}>Idea Generation</div>
      <hr />
      <div style={{ marginTop: 30 }}>
        <Progress index={index} steps={steps} />
      </div>
      <div style={{ marginTop: 30 }}>{renderSwitch(index)}</div>
      <Stack marginTop={30} direction={"row"} spacing={4} float={"right"}>
        <Button
          leftIcon={<ArrowBackIcon />}
          colorScheme={index == 0 ? "gray" : "teal"}
          onClick={decreaseIndex}
          disabled= {index == 0}
        >
          Back
        </Button>
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="teal"
          onClick={increaseIndex}
        >
          {index == steps.length ? "Submit" : "Next"}
        </Button>
      </Stack>
    </>
  );
};

export default Ideas;
