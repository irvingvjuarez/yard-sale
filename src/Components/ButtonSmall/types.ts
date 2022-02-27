export interface ButtonSmallProps{
  isLink: boolean;
  source: string;
  to?: string;
  onclick?: React.MouseEventHandler<HTMLButtonElement>;
  notificationsFlag?: string | number | boolean;
}