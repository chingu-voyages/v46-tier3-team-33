import React, { ReactElement } from "react";

export default function useMultiStepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
    setCurrentStepIndex((i: number) => {
      if (i >= steps.length - 1) return i;
      i + 1;
    });
  }
  function back() {}
  function goTo(index: number) {
    setCurrentStepIndex(index);
  }
  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    goTo,
  };
}
