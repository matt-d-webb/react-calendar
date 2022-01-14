import { useState, useMemo } from "react";
import {
  FilterMenu,
  ToggleView,
  TabMonths,
  GridView,
  ListView,
} from "./Components";
import { Event } from "../App";

export default function Calendar(props: any) {
  const {
    isLoading,
    error,
    data,
  }: { isLoading: boolean; error: boolean; data: Event[] } = props;

  const defaultView = window.innerWidth > 600 ? "grid" : "list";
  const [calendarView, setCalendarView] = useState(defaultView);
  const [selectedMenuFilter, setSelectedMenuFilter] = useState(false);
  const [allDeselected, setAllDeselected] = useState(false);
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
      const availableTypes = data.reduce(
        (pre: object, { type: { eventType } }: any) => {
          return {
            ...pre,
            [eventType]: true,
          };
        },
        {}
      );
      setFilters(availableTypes);
    }
  }, [data]);

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <div>
        <div className="relative inline-flex w-full mb-10">
          <div className="absolute left-1">
            {calendarView === "list" && (
              <TabMonths
                {...{
                  selectedMonth,
                  months,
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
                selected={selectedMenuFilter}
                setSelected={setSelectedMenuFilter}
                {...{
                  filters,
                  setFilters,
                  setAllDeselected,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {calendarView === "grid" ? (
        <GridView
          filtersSelected={selectedMenuFilter}
          selected={selectedMonth}
          {...{
            filters,
            isLoading,
            error,
            data,
            months,
            setSelectedMonth,
            allDeselected,
          }}
        />
      ) : (
        <ListView
          filtersSelected={selectedMenuFilter}
          selected={selectedMonth}
          {...{
            filters,
            isLoading,
            error,
            data,
            months,
            setSelectedMonth,
            allDeselected,
          }}
        />
      )}
    </div>
  );
}
