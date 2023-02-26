import Head from "next/head";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Habitly - Habit tracking made easy</title>
        <meta name="description" content="A very simple habit tracking app" />
        <meta name="viewport" content="width=device-width, initial-scale:1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-full flex items-center justify-center">
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
        bg-gray-50
        relative
       sm:border
       sm:border-gray-200
        "
        >
          <div className="h-full w-full overflow-y-auto pb-8">{children}</div>
        </div>
      </main>
    </>
  );
}
