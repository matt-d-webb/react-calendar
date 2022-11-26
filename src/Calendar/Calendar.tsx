import { useState, useMemo } from "react";
import {
  FilterMenu,
  ToggleView,
  TabMonths,
  GridView,
  ListView,
} from "./Components";
import { CalendarEvent } from "./Types";

interface CalendarProps {
  isLoading: boolean;
  isError: boolean;
  data: CalendarEvent[];
}

export default function Calendar(props: CalendarProps) {
  const { isLoading, isError, data } = props;

  const defaultView = window.innerWidth > 600 ? "grid" : "list";
  const [calendarView, setCalendarView] = useState(defaultView);
  const [selectedMenuFilter, setSelectedMenuFilter] = useState(false);
  const [noneSelected, setNoneSelected] = useState(false);
  const [filters, setFilters] = useState({});
  const today = new Date();
  const currentMonth = today.getMonth();
  const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
  const nextNextMonth = nextMonth + 1;
  const months = [currentMonth, nextMonth, nextNextMonth];
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  const handleViewSwitch = (view: string): void => {
    setCalendarView(view);
  };

  useMemo(() => {
    if (data) {
      const availableTypes = data.reduce((types, { eventType }) => {
        return {
          ...types,
          [eventType]: true,
        };
      }, {});
      setFilters(availableTypes);
    }
  }, [data]);

  return (
    <div className="max-w-4xl mt-10 mx-6 sm:mx-auto">
      <div className="relative inline-flex w-full mb-12">
        <div className="absolute left-1">
          {calendarView === "list" && (
            <TabMonths
              {...{
                months,
                selectedMonth,
                setSelectedMonth,
              }}
            />
          )}
        </div>
        <div className="absolute right-0">
          <div className="relative inline-flex">
            <ToggleView
              {...{
                calendarView,
                handleViewSwitch,
              }}
            />
            <FilterMenu
              {...{
                filters,
                selectedMenuFilter,
                setSelectedMenuFilter,
                setFilters,
                setNoneSelected,
              }}
            />
          </div>
        </div>
      </div>

      {calendarView === "grid" && (
        <GridView
          {...{
            isLoading,
            isError,
            data,
            months,
            filters,
            selectedMonth,
            setSelectedMonth,
            noneSelected,
          }}
        />
      )}

      {calendarView === "list" && (
        <ListView
          {...{
            isLoading,
            isError,
            data,
            months,
            filters,
            selectedMonth,
            setSelectedMonth,
            noneSelected,
          }}
        />
      )}
    </div>
  );
}
