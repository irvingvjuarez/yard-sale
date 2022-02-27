import React from "react";
import { ActionType } from "../../globalTypes";

export interface SearchInputInterface {
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>,
  dispatch: React.Dispatch<ActionType>
}