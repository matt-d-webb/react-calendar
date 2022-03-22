import { getDay, getMonth, getDayStr } from "../../../utils/DateFormatting";
import { Event } from "../../Types";
import { classNames } from "../../../utils/Classes";

interface ListCardProps {
  event: Event;
  handleClick: Function;
}

export function ListCard(props: ListCardProps) {
  const { event, handleClick } = props;

  return (
    <li key={event.id} className="flex mb-3 sm:mb-5">
      <div
        className={
          event.endDate && event.startDate !== event.endDate
            ? `relative min-w-full text-center sm:text-left bg-white px-1 sm:pb-3 sm:pt-2 sm:px-3 rounded-lg sm:overflow-hidden mr-2 sm:mr-4 border border-gray-200 border-b-0 shadow-lg`
            : `relative text-center sm:text-left bg-white px-4 sm:pb-3 sm:pt-2 sm:px-6 rounded-lg sm:overflow-hidden mr-2 sm:mr-4 border border-gray-200 border-b-0 shadow-lg`
        }
      >
        <div>
          <p className="text-xs font-base sm:text-lg text-slate-900 mt-2 sm:mt-0 text-center">
            {getMonth(event.startDate)}
          </p>
        </div>
        <div className="items-baseline pb-4 sm:pb-0 sm:text-center">
          {event.endDate && event.startDate !== event.endDate ? (
            <>
              <p className="font-semibold text-lg sm:text-lg text-gray-900 m-auto sm:m-0">
                {`${getDay(event.startDate)}-${getDay(event.endDate)}`}
              </p>
              <p className="text-xs sm:text-sm text-gray-900 m-auto mb-1">
                {`${getDayStr(event.startDate)} & ${getDayStr(event.endDate)}`}
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold text-2xl sm:text-3xl text-gray-900 m-auto sm:m-0">
                {getDay(event.startDate)}
              </p>
              <p className="text-xs sm:text-sm text-gray-900 m-auto mb-0">
                {getDayStr(event.startDate)}
              </p>
            </>
          )}

          <div
            className={classNames(
              event.color,
              "absolute bottom-0 inset-x-0 px-4 py-1 sm:px-6 border-t text-xs rounded-b-lg"
            )}
          ></div>
        </div>
      </div>

      <div
        className="relative z-0 flex-1 flex items-center justify-between border-t border-b border-l border-gray-200 bg-white rounded-lg truncate shadow"
      >
        <div className="px-4 sm:px-6 py-2 sm:py-0 text-sm truncate">
          <p className="text-slate-900 font-extrabold text-2xl tracking-tight mb-1">
            {event.name}
          </p>
          <p className={classNames(event.textColor, "mr-1 mb-1  truncate")}>
            {event.description}
          </p>
          <div className="text-gray-600 flex-grow">
            <div>
              {event.time && (
                <p className="inline text-sm text-slate-700 mr-2">
                  <i className="fas fa-clock mr-1"></i>
                  <span className="inline">{event.time}</span>{" "}
                </p>
              )}
              {event.rounds && (
                <p className="inline text-sm text-slate-700">
                  <i className="fas fa-flag mr-1"></i>
                  <span className="inline">{event.rounds} rounds</span>{" "}
                </p>
              )}
            </div>
          </div>
        </div>
        <div
          className={classNames(
            event.color,
            "absolute right-0 inset-y-0 px-1 text-xs rounded-r-lg"
          )}
        ></div>
        {event.url ? (
          <div className="flex-shrink-0 pr-2">
            <a
              onClick={() => handleClick(`${event.url}/${event.id}`)}
              className={`w-8 h-8 sm:w-12 sm:h-12 bg-gray-100 inline-flex items-center
            justify-center text-gray-400 hover:bg-gray-200 cursor-pointer rounded-lg hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 mr-2 sm:mr-4`}
            >
              <span className={event.textColor || "text-pink-600"}>
                <i className="fas fa-info"></i>
              </span>
            </a>
          </div>
        ) : null}
      </div>
    </li>
  );
}

export function ListComingSoonCard() {
  return (
    <li className="col-span-1 flex mb-3">
      <div className="relative z-0 flex-1 flex items-center justify-between border-t border-b border-l border-gray-200 bg-white rounded-lg truncate shadow">
        <div className="px-4 sm:px-6 py-2 sm:py-6 text-sm truncate rounded-l-lg">
          <h3 className="font-red-hat-display text-xl mb-1">Coming Soon</h3>
          <p className="text-gray-900 text-sm mb-1">
            Our next events will be published here soon.{" "}
          </p>
        </div>
        <div className="bg-teal-500 absolute right-0 inset-y-0 px-1 text-xs rounded-r-lg"></div>
      </div>
    </li>
  );
}

export function ListSkeleton() {
  return (
    <li className="animate-pulse col-span-1 flex mb-3 z-0">
      <div className="relative min-w-16 text-center sm:text-left bg-white px-1 sm:pb-3 sm:pt-2 sm:px-3 rounded-lg sm:overflow-hidden mr-2 sm:mr-4 border border-gray-200 border-b-0 shadow-lg">
        <div className="w-16">
          <p className="text-xs font-base sm:text-lg text-gray-900 mt-2 sm:mt-0 text-center  mx-4 h-5 bg-gray-200 rounded-md mb-2"></p>
        </div>
        <div className="items-baseline pb-4 sm:pb-0 sm:text-center">
          <p className="font-semibold text-2xl sm:text-3xl text-gray-900 m-auto cursor-pointer mx-3 h-8 bg-gray-200 rounded-lg mb-2"></p>
          <p className="text-xs sm:text-sm text-gray-900 m-auto cursor-pointer h-4 mx-2 bg-gray-200 rounded-md sm:mb-2"></p>
          <div className="bg-gray-300 absolute bottom-0 inset-x-0 px-4 py-1 sm:px-6 border-t text-xs rounded-b-lg"></div>
        </div>
      </div>
      <div className="relative z-0 flex-1 flex items-center justify-between border-t border-b border-l border-gray-200 bg-white rounded-lg truncate shadow">
        <div className="px-4 sm:px-6 py-0 text-sm truncate w-full">
          <p className="sm:text-2xl sm:font-medium font-bold text-lg h-7 bg-gray-300 rounded-md mb-2 w-2/3 sm:w-1/4"></p>
          <p className="mr-1 mb-1 text-gray-900 truncate h-4 bg-gray-300 rounded-md w-full sm:w-1/2"></p>
          <div className="text-gray-400 flex-grow">
            <div>
              <p className="inline text-sm text-gray-300 mr-2">
                <i className="fas fa-clock mr-1"></i>
                <span className="inline"></span>{" "}
              </p>
              <p className="inline text-sm text-gray-300">
                <i className="fas fa-flag mr-1"></i>
                <span className="inline"></span>{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-300 absolute right-0 inset-y-0 px-1 text-xs rounded-r-lg"></div>
        <div className="flex-shrink-0 pr-2">
          <div
            className={`w-8 h-8 sm:w-12 sm:h-12 bg-gray-100 inline-flex items-center
            justify-center text-gray-300 rounded-lg hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 mr-2 sm:mr-4`}
          >
            <span className="text-gray-400">
              <i className="fas fa-info"></i>
            </span>
          </div>
        </div>
      </div>
    </li>
  );
}
