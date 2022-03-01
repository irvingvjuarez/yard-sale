import React from "react";
import { ActionType, StateInterface } from "../../globalTypes";

export interface ButtonCategoryProps{
  content: string;
  dispatch: React.Dispatch<ActionType>
  ctx: React.Context<StateInterface>
}