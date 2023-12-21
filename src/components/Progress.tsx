import {
  Box,
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export interface ProgressProps {
  index: number;
  steps: string[]
}

const Progress = ({ index, steps}: ProgressProps) => {
  const [stepIndex, setStepIndex] = useState<number>(index);

  useEffect(() => {
    setStepIndex(index);
  }, [index]);

  return (
    <Stepper size="lg" colorScheme="teal" index={stepIndex} display={"flex"} justifyContent={"space-between"}>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>
          <Box flexShrink="0">
            <StepTitle>{step}</StepTitle>
          </Box>
          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
};

export default Progress;
