import React from "react";
import { ActionType } from "../../globalTypes"

export interface HeaderProps{
  dispatch: React.Dispatch<ActionType>;
  notificationsFlag: number;
  current: string
}