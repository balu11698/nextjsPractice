import { copyFile } from "fs/promises";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { animated, config, useSpring, useTransition } from "react-spring";

const NavBar = ({ children }: any) => {
  const router = useRouter();

  const [transition, api] = useSpring(() => ({
    from: { opacitiy: 0, transform: "translate3d(-20px,0,0)" },
    to: { opacitiy: 0, transform: "translate3d(0px,0,0)" },
    config: { ...config.molasses, duration: 500 },
  }));

  // useEffect(() => {
  //   if (router) {
  //     const handleRouteChange = () => {
  //       api.start({ opacity: 0, transform: "translate3d(0px,0,0)" });
  //     };

  //     const routeChangeComplete = () => {
  //       api.start({ opacity: 1, transform: "translate3d(0px,0,0)" });
  //     };

  //     router.events.on("routeChangeStart", handleRouteChange);
  //     router.events.on("routeChangeComplete", routeChangeComplete);

  //     // If the component is unmounted, unsubscribe
  //     // from the event with the `off` method:
  //     return () => {
  //       console.log("Router Listener Unmounted");
  //       router.events.off("routeChangeStart", handleRouteChange);
  //     };
  //   }
  // }, []);

  return (
    <div>
      <div>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
      </div>
      {/* {transition(
        (styles, item) => */}
      <animated.div style={transition}>{children}</animated.div>
      {/* )} */}
    </div>
  );
};

export default NavBar;
