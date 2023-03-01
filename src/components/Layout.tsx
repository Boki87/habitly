import { ReactNode } from "react";
import {motion} from 'framer-motion'
import { useStore } from "./Store";
import MainMenu from "./MainMenu";

export default function Layout({ children }: { children: ReactNode }) {

  const {showMainMenu, setShowMainMenu} = useStore()

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
        overflow-hidden 
        bg-white
        relative
       sm:border
       sm:border-gray-200
        "
      >
        <MainMenu />
        <motion.div animate={{x:showMainMenu ? "90%" : 0}} className="h-full w-full overflow-y-auto absolute top-0 left-0 z-40 bg-white" style={{boxShadow: '-22px 0px 24px -10px rgba(0,0,0,0.37)'}}>
          
          {children}
          
          {showMainMenu && <div onClick={() => setShowMainMenu(false)} className="h-full w-full absolute top-0 left-0 z-50"></div>} 
          </motion.div>
      </div>
    </main>
  );
}
