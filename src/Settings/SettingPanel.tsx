import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { SettingSwitch } from "./";

interface SettingPanelProps {
  open: boolean,
  setOpen: Function,
  isLoading: boolean,
  setIsLoading: Function,
  isError: boolean,
  setIsError: Function
}

export default function SettingPanel({ open, setOpen, isLoading, setIsLoading, isError, setIsError }: SettingPanelProps) {

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden"
        onClose={() => setOpen(false)}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="pointer-events-auto relative w-96">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close panel</span>
                      <i className="fas fa-times h-5 w-5"></i>
                    </button>
                  </div>
                </Transition.Child>
                <div className="h-full overflow-y-auto bg-white p-8">
                  <div className="space-y-6 pb-16">
                    <div>
                      <div className="mt-4 flex items-start justify-between">
                        <div>
                          <h2 className="text-lg font-medium text-gray-900">
                            Settings
                          </h2>
                          <p className="text-sm font-medium text-gray-500">
                            Events Calendar
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">View States</h3>
                      <dl className="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200">
                        <div className="flex justify-between py-3 text-sm font-medium">
                          <dt className="text-gray-500">Loading</dt>
                          <dd className="text-gray-900"><SettingSwitch stateValue={isLoading} setValue={setIsLoading} /></dd>
                        </div>
                        <div className="flex justify-between py-3 text-sm font-medium">
                          <dt className="text-gray-500">Error</dt>
                          <dd className="text-gray-900"><SettingSwitch stateValue={isError} setValue={setIsError} /></dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
