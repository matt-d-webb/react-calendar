interface SettingsButtonProps {
  setOpen: Function
}

export default function SettingButton({ setOpen }: SettingsButtonProps) {
  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="hidden lg:block lg:absolute -right-1 top-10 border border-gray-200 pl-3 pr-3 py-3 text-pink-700 hover:text-pink-800 bg-white hover:bg-gray-50 rounded-l-lg shadow-lg"
      >
        <i className="fas fa-cogs fa-2x"></i>
      </button>
    </div>
  );
}
