import { Switch } from '@headlessui/react'
import { classNames } from '../utils/Classes';

interface SettingsSwitchProps {
  stateValue: boolean,
  setValue: VoidFunction
}

export default function SettingSwitch({ stateValue, setValue }: SettingsSwitchProps) {

  return (
    <Switch
      checked={stateValue}
      onChange={setValue}
      className="flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
    >
      <span className="sr-only">Use setting</span>
      <span aria-hidden="true" className="pointer-events-none absolute bg-white w-full h-full rounded-md" />
      <span
        aria-hidden="true"
        className={classNames(
          stateValue ? 'bg-cyan-600' : 'bg-gray-200',
          'pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200'
        )}
      />
      <span
        aria-hidden="true"
        className={classNames(
          stateValue ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200'
        )}
      />
    </Switch>
  )
}