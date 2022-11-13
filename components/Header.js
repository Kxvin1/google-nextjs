import User from "./User";

export default function Header() {
  return (
    <header className="flex justify-between p-5 text-sm text-gray-700">
      {/* Left Part of Header */}
      <div className="flex space-x-4 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>

      {/* Right Part of Header */}
      <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>
        <User />
      </div>
    </header>
  );
}
