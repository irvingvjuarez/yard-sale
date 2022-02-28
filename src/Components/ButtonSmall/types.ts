import React from "react";
import { To } from "react-router-dom";
import { ActionType } from "../../globalTypes";

export interface ButtonSmallProps{
  source: string;
  to?: To;
  onclick?: React.MouseEventHandler<HTMLButtonElement>;
  notificationsFlag?: string | number | boolean;
  isCTA?: boolean;
  dispatch?: React.Dispatch<ActionType>
}