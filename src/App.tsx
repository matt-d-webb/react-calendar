import { ReactElement, useEffect, useState } from "react";
import Calendar from "./Calendar/Calendar";
import { SettingPanel, SettingButton } from "./Settings";
import { CalendarEvent, CalendarData } from "./Calendar/Types";
import { events } from "./mocks/events.js";

// TODO: Look for better peer dependency strategy here to avoid pulling in this mammoth lib:
import "./static/fontawesome/css/all.min.css";

const MOCK_DATA: CalendarEvent[] = events;

export default function App(): ReactElement {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [eventList, setEventList] = useState<CalendarEvent[]>([]);

  useEffect(() => {

    const getEvents = async () => {
      setIsLoading(true);
      const response = fetch("https://api.chesscentre.online/events");
      const { events } = await (await response).json();
      setEventList(events);
      setIsLoading(false);
    }

    getEvents();
    
  }, []);

  return (
    <div>
      <div className="absolute beams inset-0 bg-no-repeat bg-bottom bg-slate-50 opacity-70"></div>
      <SettingButton {...{ setOpen }} />
      <Calendar
        data={eventList}
        {...{
          isLoading,
          isError,
        }}
      ></Calendar>
      <SettingPanel
        {...{
          open,
          setOpen,
          isLoading,
          setIsLoading,
          isError,
          setIsError,
        }}
      />
    </div>
  );
}
