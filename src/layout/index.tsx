import * as React from 'react'
import LayoutProvider from '../contexts/layout'
import Footer from './Footer'
import MobileMenu from './MobileMenu'
import SideMenu from './SideMenu'
import TopBar from './TopBar'
import { useState } from 'react';
import { useEffect } from 'react';

export interface ILayoutProps {
  children?: React.ReactNode
}

export default function Layout(props: ILayoutProps) {
  const { children } = props;
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <LayoutProvider>
      <div className='relative'>
        {/* BEGIN: Mobile Menu */}
        {/* <MobileMenu /> */}
        {/* END: Mobile Menu */}
        {/* BEGIN: Top Bar */}
        <TopBar />
        {/* END: Top Bar */}
        <div className="wrapper">
          <div className="wrapper-box">
            {/* BEGIN: Side Menu */}
            {/* <SideMenu /> */}
            {/* END: Side Menu */}
            {/* BEGIN: Content */}
            <div className="content">{children}</div>
            {/* END: Content */}
          </div>
        </div>
        <Footer />
        {/* BEGIN: JS Assets*/}
        {/* END: JS Assets*/}
        <div className="scroll-to-top">
          {isVisible && (
            <div onClick={scrollToTop} className="cursor-pointer w-[60px] h-[60px] rounded-full bg-green-600 flex justify-center items-center absolute right-0 bottom-[3%]">
              <h3 className='font-semibold'>Go up!</h3>
            </div>
          )}
        </div>
      </div>
    </LayoutProvider>
  )
}
