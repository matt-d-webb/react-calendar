import { events } from "./mock-data/events.js";
import Calendar from "./Calendar/Calendar";
import "./assets/fontawesome.all.min.js";

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

export interface Event {
  id: string;
  name: string | null;
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

export default function App() {
  const MOCK_DATA: Event[] = events;
  return (
    <div>
      <div className="absolute beams inset-0 bg-no-repeat bg-bottom bg-slate-50 opacity-70"></div>
      <Calendar data={MOCK_DATA}></Calendar>
    </div>
  );
}
