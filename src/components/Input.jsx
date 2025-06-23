export function Input({ className = "", error = false, ...rest }) {
  const baseClasses =
    "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors";
  const errorClasses = error
    ? "border-red-500 focus:ring-red-500"
    : "border-gray-300";

  return (
    <input
      className={`${baseClasses} ${errorClasses} ${className}`}
      {...rest}
    />
  );
}
