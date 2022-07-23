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

// Additionally:
//eventTypeId:	string;
//isLiveUrl:	string;
//timeControl:	string;


export interface APICalendarEvent { 
  id:	string;
  name:	string;
  description:	string;
  rounds:	number;
  // time: string  | null;
  startDate:	string;
  endDate:	string;
  maxEntries:	number;
  entryCount:	number;
  complete:	boolean;
  cancelled:	boolean;
  isLive:	boolean;
  // active: string;
  // type: EventType;
  // color: string | null;
  // textColor: string | null;
  url:	string;
  // isFull: boolean
}

// {
//   id: "aeb459b9-989b-49f7-8fcd-0e01c594b0b3",
//   name: "IGS Junior Rapidplay",
//   description: "A dedicated junior event",
//   rounds: 5,
//   time: "various",
//   startDate: "2022-09-03",
//   endDate: null,
//   maxEntries: 80,
//   entryCount: 10,
//   complete: false,
//   cancelled: false,
//   isLive: false
//   timeControl: "25 mins",
//   eventType: "junior",
//   eventTypeId: "cab4247a-e9b3-4cbf-9f04-73d0e76c69f5",
//   },

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

export interface CalendarData {
  isLoading: boolean;
  isError: boolean;
  data: CalendarEvent[];
}



