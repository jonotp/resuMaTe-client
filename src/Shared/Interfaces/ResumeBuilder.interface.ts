import { Dispatch, SetStateAction } from "react";

export interface ResumeBuilderSectionProps<T> {
  state: T,
  setState: Dispatch<SetStateAction<T>>,
  onContinue: () => void
}