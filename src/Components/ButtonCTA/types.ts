import React from "react";
import { ActionType } from "../../globalTypes";

export interface ButtonCTAProps{
  content: string;
  ItemId: number;
  dispatch: React.Dispatch<ActionType>
}