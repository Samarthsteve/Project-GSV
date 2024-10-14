import { useEffect } from 'react'

function NavbarScript() {
  useEffect(() => {
    console.log(1)
    let lastScrollTop = 0;
    const navbar = document.getElementById("header");

    const handleScroll = () => {
      const ScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (ScrollTop > lastScrollTop) {
        if (navbar) navbar.style.top = "-100px"; // hide navbar
      } else {
        if (navbar) navbar.style.top = "0"; // show navbar
      }
      lastScrollTop = ScrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // cleanup on component unmount
    };
  }, []);

  return null;
}

export default NavbarScript;
