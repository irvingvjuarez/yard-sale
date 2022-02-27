import React from "react";
import { ActionType } from "../../globalTypes";

export interface ButtonCTAProps{
  ItemId: number;
  dispatch: React.Dispatch<ActionType>;
  added: boolean
}