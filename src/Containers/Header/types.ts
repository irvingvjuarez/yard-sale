import React from "react";
import { ActionType, StateInterface } from "../../globalTypes"

export interface HeaderProps{
  dispatch: React.Dispatch<ActionType>;
  ctx: React.Context<StateInterface>
}