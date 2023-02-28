export default function Toggle({
  value,
  onChange,
}: {
  value: boolean;
  onChange: () => void;
}) {
  return (
    <div
      onClick={onChange}
      className={`cursor-pointer transition-bg duration-300 ${
        value ? "bg-green-300" : "bg-gray-200"
      } h-12 w-28 rounded-full relative`}
    >
      <div
        style={{
          left: value ? "calc(100% - 44px)" : "4px",
          transition: "all .3s ease-in-out",
        }}
        className={`w-10 h-10 rounded-full absolute top-1 bg-white`}
      ></div>
    </div>
  );
}
