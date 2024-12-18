import { useEffect } from 'react'

function NavbarScript(setTrigger: (value: boolean) => void) {
  useEffect(() => {
    let lastScrollTop = 0;
    const navbar = document.getElementById("header") as HTMLElement;

    const handleScroll = () => {
      const ScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (ScrollTop > lastScrollTop) {
        navbar.style.top = "-100px"; // hide navbar
        setTrigger(false)
      } else {
        navbar.style.top = "0"; // show navbar
      }
      lastScrollTop = ScrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // cleanup on component unmount
    };
  }, [setTrigger]);

  return null;
}

export default NavbarScript;
