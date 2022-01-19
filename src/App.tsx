import { ReactElement } from "react"
import { Event } from "./Calendar/Types";
import { events } from "./mocks/events.js";
import Calendar from "./Calendar/Calendar";
import "./static/fontawesome/css/all.min.css";

const MOCK_DATA: Event[] = events;

export default function App(): ReactElement {
  return (
    <div>
      <div className="absolute beams inset-0 bg-no-repeat bg-bottom bg-slate-50 opacity-70"></div>
      <Calendar data={MOCK_DATA}></Calendar>
    </div>
  );
}
