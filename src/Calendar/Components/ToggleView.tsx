export default function ToggleView({
  calendarView,
  handleViewSwitch,
}: {
  calendarView: string;
  handleViewSwitch: (view: string) => void
}) {
  return (
    <div className="shadow-md rounded-md mt-0.5">
      <button
        onClick={() => handleViewSwitch("list")}
        type="button"
        className={`${
          calendarView === "list"
            ? "text-pink-700 font-bold bg-gray-50"
            : "font-medium text-gray-500 bg-white"
        } relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm
     hover:bg-gray-50 focus:z-10 focus:outline-none`}
      >
        <span className="sr-only">List</span>
        <i className="fas fa-list"></i>
      </button>
      <button
        onClick={() => handleViewSwitch("grid")}
        type="button"
        className={`${
          calendarView === "grid"
            ? "text-pink-700 font-bold bg-gray-50"
            : "font-medium text-gray-500 bg-white"
        } -ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300  text-sm
      hover:bg-gray-50 focus:z-10 focus:outline-none`}
      >
        <span className="sr-only">Grid</span>
        <i className="fas fa-th"></i>
      </button>
    </div>
  );
}
