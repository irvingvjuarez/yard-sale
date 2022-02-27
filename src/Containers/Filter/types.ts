import React from "react";
import { ActionType } from "../../globalTypes";

export interface FilterProps{
  categories: Array<string>,
  dispatch: React.Dispatch<ActionType>
}