import {BsGithub} from 'react-icons/bs'


export default function MainMenu() {
  return (
      <div className="w-full h-full absolute top-0 left-0 bg-gray-50 pt-20">

        <div className="flex items-center pl-3 h-14 cursor-pointer hover:bg-gray-100 text-2xl mb-3">
          <BsGithub />
          <span className="ml-2">
            My Portfolio
          </span>
        </div>
        <div className="flex items-center pl-3 h-14 cursor-pointer hover:bg-gray-100 text-2xl mb-3">
          <BsGithub />
          <span className="ml-2">
            My Portfolio
          </span>
        </div>
      </div>
  );
}
