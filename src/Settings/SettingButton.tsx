export default function SettingButton({ setOpen }: { setOpen: Function }) {
  return (
    <button
      onClick={() => setOpen(true)}
      className="absolute -right-1 border border-gray-200 pl-3 pr-3 py-3 text-pink-700 hover:text-pink-800 bg-white hover:bg-gray-50 rounded-l-lg shadow-lg"
    >
      <i className="fas fa-cogs fa-2x"></i>
    </button>
  );
}
