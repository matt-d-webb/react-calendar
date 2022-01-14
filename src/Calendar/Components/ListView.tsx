import { ListCard, ListComingSoonCard, ListSkeleton } from "./ListCard";
import { Event } from "../../App";

export default function ListView(props: any) {
  const {
    isLoading,
    error,
    data,
    selected,
    filters,
    allDeselected,
  }: {
    isLoading: boolean;
    error: boolean;
    data: Event[];
    selected: any;
    filters: Array<string>;
    allDeselected: boolean;
  } = props;

  return (
    <>
      {!error ? (
        <>
          {!isLoading && !allDeselected && (
            <>
              <ul>
                {data
                  .filter(
                    (event) => new Date(event.startDate).getMonth() === selected
                  )
                  .filter(({ type: { eventType } }: any) => {
                    return filters[eventType];
                  })
                  .map((data, key) => (
                    <ListCard key={key} event={data} handleClick={() => {}} />
                  ))}

                {/* TODO: refactor. Here we drop in a placeholder to cover when no future events have been published. */}
                {data.filter(
                  (event) => new Date(event.startDate).getMonth() === selected
                ).length === 0 && <ListComingSoonCard />}
              </ul>
            </>
          )}

          {isLoading && (
            <>
              <ul>
                {[1, 2, 3].map((dummy) => {
                  return <ListSkeleton key={dummy} />;
                })}
              </ul>
            </>
          )}

          {!isLoading && allDeselected && (
            <div className="relative sm:ml-28 block border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
              <i className="fas fa-th-list fa-4x text-slate-700"></i>
              <span className="mt-2 block text-sm font-medium text-gray-900">
                Select a filter <i className="far fa-filter"></i> to see events
              </span>
            </div>
          )}
        </>
      ) : (
        <div className="m-auto text-center">
          <div className="italic text-red-800">Error fetching events.</div>
        </div>
      )}
    </>
  );
}