import { Link } from "react-router-dom"

const TopBar = () => {
  return (
    <header id="top" aria-label="Site Header" className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12" data-aos="zoom-in">
            <a className="block text-teal-600 text-[24px] cursor-pointer" href="/">
              NEXT INVEST
            </a>
          </div>
          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Site Nav" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a className="text-gray-500 text-[16px] transition hover:text-gray-500/75" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="text-gray-500 transition text-[16px] hover:text-gray-500/75" href="#project">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="text-gray-500 transition text-[16px] hover:text-gray-500/75" href="#information">
                    Information
                  </a>
                </li>
                <li>
                  <a className="text-gray-500 transition text-[16px] hover:text-gray-500/75" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link data-aos="zoom-in-down" className="rounded-md bg-teal-600 px-5 py-2.5 text-[16px] font-medium text-white shadow" to="signin">
                  Login
                </Link>
                <div className="hidden sm:flex">
                  <a data-aos="zoom-in-down" className="rounded-md bg-gray-100 px-5 py-2.5 text-[16px] font-medium text-teal-600" href="/">
                    Register
                  </a>
                </div>
              </div>
              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default TopBar