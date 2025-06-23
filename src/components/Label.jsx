export function Label({ className = "", children, ...rest }) {
  return (
    <label className={`block font-medium text-gray-700 ${className}`} {...rest}>
      {children}
    </label>
  );
}
