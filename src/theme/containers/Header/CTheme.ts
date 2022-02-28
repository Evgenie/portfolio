import menu from "./menu";
import cwrap from "./cwrap";
import logo from "./logo";
import button from "./button";
import termin from "./termin";
import navbar from "./navbar";
import linknav from "./linknav";

export interface ICTheme {
    cwrap: typeof cwrap;
    button: typeof button;
    menu: typeof menu;
    logo: typeof logo;
    termin: typeof termin;
    navbar: typeof navbar;
    linknav: typeof linknav;
}

export const CTheme: ICTheme = {
    cwrap,
    button,
    menu,
    logo,
    termin,
    navbar,
    linknav,
};

export default CTheme;