import React from "react";
import { ActionType, StateInterface } from "../../globalTypes";

export interface FilterProps{
  dispatch: React.Dispatch<ActionType>,
  ctx: React.Context<StateInterface>,
  isInHeader?: boolean
}