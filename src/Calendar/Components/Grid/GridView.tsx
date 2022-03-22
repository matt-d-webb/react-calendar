import moment from "moment";
import { GridCard, GridComingSoonCard, GridSkeleton } from "./GridCard";
import { CalendarEvent } from "../../Types";
import { classNames } from "../../../utils/Classes";

interface GridViewProps {
  isLoading: boolean;
  isError: boolean;
  data: CalendarEvent[];
  months: Array<number>;
  selectedMonth: number;
  setSelectedMonth: Function;
  filters: {
    [key: string]: boolean;
  };
  noneSelected: boolean;
}

export default function GridView(props: GridViewProps) {
  const {
    isLoading,
    isError,
    data,
    months,
    selectedMonth,
    setSelectedMonth,
    filters,
    noneSelected,
  } = props;

  const handleClick = (url: string): void => {
    console.log(url);
  };

  return (
    <div>
      <>
        {!isError && (
          <div className="flex items-start">
            <div className="relative mr-4 sm:mr-12 lg:mr-22">
              <div
                className="absolute inset-0 my-6 ml-16 pointer-events-none -z-1"
                aria-hidden="true"
              >
                <div className="absolute inset-0 w-0.5 h-full bg-gray-300"></div>
              </div>
              {months.map((month, key) => {
                return (
                  <button
                    key={key}
                    className="flex items-center hover:text-pink-600 justify-between font-medium text-slate-700 w-20 py-3 pr-2 text-left"
                    onClick={() => setSelectedMonth(month)}
                  >
                    <span className="block">
                      {moment(new Date(2000, month, 1)).format("MMM")}
                    </span>
                    <span
                      className={classNames(
                        `${
                          selectedMonth === month
                            ? "bg-cyan-500"
                            : "bg-slate-600"
                        }`,
                        "z-0 block w-3.5 h-3.5 border-2 border-white rounded-full"
                      )}
                    ></span>
                  </button>
                );
              })}
            </div>

            {!isLoading && !noneSelected && (
              <>
                {months.map((month, i) => {
                  return (
                    <div
                      key={i}
                      className={`flex-grow ${
                        selectedMonth !== month && "hidden"
                      }`}
                    >
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4">
                        {data
                          .filter(
                            (data) =>
                              new Date(data.startDate).getMonth() === month
                          )
                          .filter(({ type: { eventType } }: any) => {
                            return filters[eventType];
                          })
                          .map((data, key) => (
                            <GridCard
                              key={key}
                              event={data}
                              handleClick={handleClick}
                            />
                          ))}

                        {/* TODO: refactor. Here we drop in a placeholder to cover when no future events have been published. */}
                        {data.filter(
                          (data) =>
                            new Date(data.startDate).getMonth() === month
                        ).length === 0 && <GridComingSoonCard />}
                      </div>
                    </div>
                  );
                })}
              </>
            )}
            {isLoading && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 w-full">
                {[1, 2, 3].map((val) => (
                  <GridSkeleton key={val} />
                ))}
              </div>
            )}

            {!isLoading && noneSelected && (
              <div className="relative block w-full bg-slate-50 opacity-80 border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                <i className="fas fa-grip-horizontal fa-4x text-slate-700"></i>
                <span className="mt-2 block text-sm font-medium text-gray-900">
                  Select a filter <i className="fas fa-filter"></i> to see
                  events
                </span>
              </div>
            )}
          </div>
        )}
      </>
      {isError && (
        <div className="relative block w-full bg-slate-50 opacity-80 border-2 border-pink-500 border-dashed rounded-lg p-12 text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
          <i className="fas fa-exclamation-circle fa-4x text-pink-700"></i>
          <span className="mt-2 block text-sm font-medium text-pink-900">
            Error loading calendar events
          </span>
        </div>
      )}
    </div>
  );
}
