import { To } from "react-router-dom";

export interface ButtonSmallProps{
  source: string;
  to?: To;
  onclick?: React.MouseEventHandler<HTMLButtonElement>;
  notificationsFlag?: string | number | boolean;
  isCTA?: boolean
}