import { useEffect, useState } from "react";
import { Menu } from "@headlessui/react";
import { classNames } from "../../utils/Classes";

interface FilerMenuProps {
  filters: {
    [key: string]: boolean
  },
  selectedMenuFilter: boolean,
  setFilters: Function
  setSelectedMenuFilter: Function
  setNoneSelected: Function
}

export default function FilterMenu(props: FilerMenuProps) {
  const {
    filters,
    selectedMenuFilter,
    setFilters,
    setSelectedMenuFilter,
    setNoneSelected,
  } = props;

  const trueState = Object.keys(filters).reduce(
    (pre, cur) => ({ ...pre, [cur]: true }),
    {}
  );
  const falseState = Object.keys(filters).reduce(
    (pre, cur) => ({ ...pre, [cur]: false }),
    {}
  );
  const [someSelected, setSomeSelected] = useState(false);
  const handleFilterItemClick = async (type: any) => {
    setFilters((state: any) => ({
      ...state,
      [type]: !state[type],
    }));
  };
  const handleSelectAll = () => {
    selectedMenuFilter ? setFilters(trueState) : setFilters(falseState);
    setSelectedMenuFilter(!selectedMenuFilter);
  };

  useEffect(() => {
    const allSelected = Object.values(filters).every((filter) => filter);
    if (allSelected) {
      setSelectedMenuFilter(false /* "Deselect All =" */);
    }
    setNoneSelected(
      Object.values(filters).every((filter) => filter === false)
    );

    // Note: "selected" is unchecked i.e false!
    setSomeSelected(Object.values(filters).some((filter) => !filter));
  }, [filters, setSelectedMenuFilter, setNoneSelected]);

  return (
    <div className="mt-0.5">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            className={classNames(
              someSelected
                ? "text-cyan-500 bg-gray-50"
                : "text-gray-500 bg-white hover:bg-gray-50",
              `ml-2 relative inline-flex items-center px-2 py-2 shadow-md 
                      rounded-md border border-gray-300 text-sm focus:outline-none `
            )}
          >
            <span className="sr-only">Filter</span>
            <i className="fas fa-filter"></i>
          </Menu.Button>
        </div>

        <Menu.Items className="z-10 origin-top-right absolute right-0 mt-2 w-34 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          {Object.keys(filters).map((filterName: string, key: number) => {
            return (
              <Menu.Item
                key={key}
                onClick={() => handleFilterItemClick(filterName)}
              >
                {({ active }) => (
                  <div
                    className={classNames(
                      active ? "bg-gray-100 text-cyan-900" : "text-gray-700",
                      "group flex items-center px-4 py-2 text-sm cursor-pointer"
                    )}
                  >
                    <input
                      type="checkbox"
                      onChange={() => {}}
                      checked={filters[filterName]}
                      className="mr-3 text-cyan-500 focus:ring-cyan-400 focus:ring-opacity-25 border border-gray-300 rounded cursor-pointer"
                    />
                    {`${filterName[0].toUpperCase()}${filterName.slice(1)}`}
                  </div>
                )}
              </Menu.Item>
            );
          })}
          <div className="py-1 border-t border-gray-100">
            <Menu.Item onClick={handleSelectAll}>
              {({ active }) => (
                <div
                  className={classNames(
                    active ? "bg-gray-100 text-fuchsia-700" : "text-gray-700",
                    "group flex items-center px-4 py-2 text-xs cursor-pointer text-center"
                  )}
                >
                  {selectedMenuFilter ? "Select All" : "Deselect All"}
                </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
}
