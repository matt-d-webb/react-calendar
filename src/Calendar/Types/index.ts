export enum CalendarType {
  "grid",
  "list"
}

export interface Config {
  view: CalendarType;
  months: number | null;
}

export interface EventType {
  id: string;
  name: string;
  description: string;
  url: string;
  color: string;
  textColor: string;
  maxEntries: number;
  timeControl: string;
  eventType: string;
  defaultPrice: string;
  canRegister: boolean;
}

export interface CalendarEvent {
  id: string;
  name: string;
  description: string | null;
  rounds: number | null;
  timeControl: string | null;
  startDate: string;
  endDate: string | null;
  maxEntries: number;
  entryCount: number | null;
  complete: boolean;
  cancelled: boolean;
  isLive: boolean;
  active: string;
  eventType: string;
  color: string | null;
  textColor: string | null;
  url: string;
  isFull: boolean;
}




