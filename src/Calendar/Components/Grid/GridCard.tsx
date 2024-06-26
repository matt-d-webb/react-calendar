import { prettyDate } from "../../../utils/DateFormatting";
import { CalendarEvent } from "../../Types";
import { classNames } from "../../../utils/Classes";

interface GridCardProps {
  event: CalendarEvent;
  handleClick: Function;
}

export function GridCard(props: GridCardProps) {
  const { event, handleClick } = props;
  return (
    <div className="relative z-0 pt-6 pl-6 pb-4 pr-4 shadow-2xl flex flex-col rounded-xl bg-white border-b border-l border-r border-gray-200">
      <div
        className={classNames(
          event.color,
          "absolute top-0 inset-x-0 px-4 py-1 sm:px-6 border-t text-xs rounded-t-xl"
        )}
      ></div>
      <header>
        <h3 className="text-slate-900 font-extrabold text-2xl tracking-tight mb-1">
          {event.name}
        </h3>
      </header>
      <div className="text-gray-600 flex-grow mb-5">
        <div className="mb-2">
          <p className="sm:inline mr-1 text-sm text-slate-700">
            <i className="fas fa-calendar-alt mr-1"></i>
            <span className="inline">
              {prettyDate(event.startDate, event.endDate)}
            </span>{" "}
          </p>
          {event.timeControl && event.timeControl !== "various" && (
            <p className="sm:inline text-sm text-slate-700">
              <i className="fas fa-clock mr-1"></i>
              <span className="inline">{event.timeControl}</span>{" "}
            </p>
          )}
          {event.rounds && (
            <p className="sm:inline text-sm text-slate-700">
              <i className="fas fa-flag mr-1"></i>
              <span className="inline">{event.rounds} rounds</span>{" "}
            </p>
          )}
        </div>
        <p className="text-gray-900 text-sm font-thin">{event.description}</p>
      </div>
      <div className="absolute bottom-0 bg-gray-100 inset-x-0 px-4 py-1 sm:px-6 border-b text-xs rounded-b-xl">
        {event.url && (
          <div className="text-center align-middle">
            <div className="text-x text-slate-700 hover:underline cursor-pointer">
              <a
                className="inline-flex items-center text-slate-700 "
                onClick={() => handleClick(`${event.url}/${event.id}`)}
              >
                More Info
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function GridComingSoonCard() {
  return (
    <li className="relative bg-white z-0 pt-6 pl-6 pb-4 pr-4 shadow-2xl flex flex-col rounded-xl border-b border-l border-r border-light-blue-300">
      <div className="bg-teal-500 absolute top-0 inset-x-0 px-4 py-1 sm:px-6 border-t text-xs rounded-t-xl"></div>
      <header>
        <h3 className="h4 font-red-hat-display mb-1 text-center">
          Coming Soon...
        </h3>
      </header>
      <div className="text-gray-600 flex-grow mb-5">
        <div></div>
        <p className="text-gray-900 text-base text-center">
          Our latest events will be published here soon. Watch this space.
        </p>
      </div>
      <div className="absolute bottom-0 bg-gray-100 inset-x-0 px-4 py-1 sm:px-6 border-b text-xs rounded-b-xl"></div>
    </li>
  );
}

export function GridSkeleton() {
  return (
    <li className="animate-pulse bg-white relative z-0 pt-6 pl-6 pb-4 pr-4 shadow-2xl flex flex-col rounded-xl border-b border-l border-r border-light-blue-300">
      <div className="bg-gray-400 absolute top-0 inset-x-0 px-4 py-1 sm:px-6 border-t text-xs rounded-t-xl"></div>
      <header className="mb-2">
        <div className="h4 bg-gray-300 font-red-hat-display mb-1 text-center h-14 rounded-md"></div>
      </header>
      <div className="text-gray-600 flex-grow mb-3">
        <p className="text-gray-900 bg-gray-300 text-base text-center w-full h-4 mb-2 rounded-md"></p>
        <p className="text-gray-900 bg-gray-300 text-base text-center w-full h-4 mb-2 rounded-md"></p>
      </div>
      <div className="absolute bottom-0 bg-gray-100 inset-x-0 px-4 py-1 sm:px-6 border-b text-xs rounded-b-xl"></div>
    </li>
  );
}
