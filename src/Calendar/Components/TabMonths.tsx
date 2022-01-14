function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}

export default function ToggleView({ selectedMonth, months, setSelectedMonth } : { selectedMonth: number, months: Array<number>, setSelectedMonth: Function}) {
  return (
    <div className="inline-flex shadow-md rounded-md m-auto -ml-1">
      <div className="relative z-0 inline-flex rounded-md">

        {
          months.map((_, index) => {

            const isFirst = index === 0;
            const isLast = index === months.length - 1;
            const isActive = selectedMonth === months[index];

            return (
              <button
              onClick={() => setSelectedMonth(months[index])}
              type="button"
              className={classNames(`${isActive ? "text-pink-700 font-bold" : "text-slate-600"}`,
               `${isFirst ? "rounded-l-md" : "-ml-px"}`,
               `${isLast && "rounded-r-md"}`,
               `relative border inline-flex items-center px-4 py-2 border-gray-300 bg-white text-xs  hover:bg-gray-50
                          focus:z-10 focus:outline-none`)}
            >
              {new Date(2000, months[index], 1).toLocaleString("default", {
                month: "short",
              })}
            </button>
            )
          })
        }
      </div>
    </div>
  );
}
