export default function Input({ ...rest }: { [x: string]: any }) {
  return (
    <input
      className="w-full max-w-lg h-12 px-4 py-2 text-lg text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 outline-none rounded-lg focus:outline-2 focus:outline-gray-400"
      {...rest}
    />
  );
}
