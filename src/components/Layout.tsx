import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="w-full h-full flex items-center justify-center bg-gray-100">
      <div
        className="
        min-w-full 
        min-h-full
        max-h-full
        sm:max-h-[800px]
        sm:min-w-[450px] 
        sm:min-h-[800px] 
        mx-auto 
        sm:rounded-lg 
        overflow-auto 
        bg-white
        relative
       sm:border
       sm:border-gray-200
        "
      >
        <div className="h-full w-full overflow-y-auto pb-8">{children}</div>
      </div>
    </main>
  );
}
