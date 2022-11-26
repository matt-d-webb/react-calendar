import { ReactElement, useEffect, useState } from "react";
import Calendar from "./Calendar/Calendar";
import { SettingPanel, SettingButton } from "./Settings";
import { CalendarEvent } from "./Calendar/Types";

// TODO: Look for better peer dependency strategy here to avoid pulling in this mammoth lib:
import "./static/fontawesome/css/all.min.css";
const DATA_SOURCE_URL = "https://api.chesscentre.online/events";

export default function App(): ReactElement {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<CalendarEvent[]>([]);

  useEffect(() => {
    const getEvents = async (): Promise<void> => {
      setIsLoading(true);
      const response = await fetch(DATA_SOURCE_URL);
      const { events }: { events: CalendarEvent[] } = await response.json();
      setData(events);
      setIsLoading(false);
    };
    getEvents();
  }, []);

  return (
    <div>
      <div className="absolute beams inset-0 bg-no-repeat bg-bottom bg-slate-50 opacity-70"></div>

      {/* EXAMPLE USAGE */}
      <div className="container">
        <Calendar
          {...{
            data, // Your data
            isLoading,
            isError,
          }}
        />
      </div>

      {/* FOR DEMO PURPOSES ONLY */}
      <SettingButton {...{ setOpen }} />
      <SettingPanel
        {...{
          open,
          setOpen,
          isLoading,
          setIsLoading,
          isError,
          setIsError,
        }}
        eventJson={data}
        setEventJson={setData}
      />
    </div>
  );
}
