import { useState, useMemo } from "react";
import {
  FilterMenu,
  ToggleView,
  TabMonths,
  GridView,
  ListView,
} from "./Components";
import { Event } from "./Types";

export default function Calendar(props: any) {
  const {
    isLoading,
    error,
    data,
  }: { isLoading: boolean; error: boolean; data: Event[] } = props;


  const [calendarState, setCalendarState] = useState({
    viewTyep: 'grid',
    selectedMenuFilter: false,
    allUnselected: false,
    filters: {},
    months: [],
    selectedMonth: 0
  });


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
    <div className="max-w-6xl mt-10 mx-4 sm:mx-auto">
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
                setAllDeselected,
              }}
            />
          </div>
        </div>
      </div>

      {calendarView === "grid" && (
        <GridView
          {...{
            isLoading,
            error,
            data,
            months,
            filters,
            selectedMonth,
            setSelectedMonth,
            allDeselected,
          }}
        />
      )}

      {calendarView === "list" && (
        <ListView
          {...{
            isLoading,
            error,
            data,
            months,
            filters,
            selectedMonth,
            setSelectedMonth,
            allDeselected,
          }}
        />
      )}
    </div>
  );
}
