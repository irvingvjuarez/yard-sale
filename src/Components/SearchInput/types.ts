import React from "react";
import { ActionType, StateInterface } from "../../globalTypes";

export interface SearchInputInterface {
  dispatch: React.Dispatch<ActionType>
  ctx: React.Context<StateInterface>
}