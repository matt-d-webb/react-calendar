export interface Config {
  view: string | null;
  months: number | null;
}

export interface EventType {
  id: string;
  name: string;
  description: string;
  url: string;
  color: string;
  textColor: string;
  time: string | null;
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
  time: string | null;
  startDate: string;
  endDate: string | null;
  maxEntries: number;
  entryCount: number | null;
  complete: boolean;
  cancelled: boolean;
  isLive: boolean;
  active: string;
  type: EventType;
  color: string | null;
  textColor: string | null;
  url: string;
  isFull: boolean;
}

export interface CalendarData {
  isLoading: boolean;
  isError: boolean;
  data: CalendarEvent[];
}
