import classes from "./Navbar.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import { THEME_ICONS } from "../../constants/appConstants";
import { combineClasses, getCategories} from "../../utils/utils";
import { LogoType, THEMES } from "../../shared/enums";

const CenteredNavbar = ({
    openSearch,
    scrolled,
    theme = THEMES.LIGHT,
    changeTheme,
    toggleSideMenu,
    openSidebar = false,
    navSetup }: any) => {
    const { navLinks, socials, logo } = navSetup;

    const CATEGORIES = getCategories();
    const [openDD, setOpenDD] = useState(false)

    return (
        <nav className={combineClasses(classes.navbar, classes.shadow, scrolled ? classes.hideNav : " ", theme === THEMES.DARK ? classes.dark : null, "py-[10px]")}>
            <div className={'container'}>
                <div className={combineClasses("flex items-center justify-between px-3")}>
                    <div className="flex" style={{ width: "120px" }}>
                        <div
                            className={combineClasses(classes.mobileBurgerToggle, "mr-3", openSidebar ? classes.mobileBurgerToggle__close : ' ')}
                            onClick={() => toggleSideMenu()}>
                            <span></span>
                        </div>
                        <div className={combineClasses(classes.search_icon_wrapper)} onClick={() => openSearch()}>
                            <button>
                                <img src={(THEME_ICONS as any)[theme].search} width="100%" alt="" />
                            </button>
                        </div>
                    </div>

                    <Link href="/" passHref={true}>
                        {
                            logo ?
                                logo.type === LogoType.IMAGE ?
                                    <img src={theme === THEMES.DARK ? logo.logoLight : logo.logo} alt="WebExpe" className="cursor-pointer" width="100px" /> :
                                    <a className={combineClasses(theme === THEMES.DARK ? 'text-white' : 'text-black', 'text-[22px]', 'cursor-pointer')}>{logo.logo}</a>
                                : <a className={combineClasses(theme === THEMES.DARK ? 'text-white' : 'text-black', 'text-[22px]', 'cursor-pointer')}>Logo</a>
                        }
                    </Link>

                    <div className="flex justify-end" style={{ width: "120px" }}>
                        {
                            socials &&
                            socials.map((each: any, i: any) => (
                                <a href={each.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={each.link}
                                    className={combineClasses(theme === THEMES.DARK ? 'text-white' : 'text-black', 'text-[24px] d-inline-block', i === socials.length - 1 ? 'ml-3' : 'mx-3')}>{each.icon}
                                </a>
                            ))
                        }
                    </div>
                </div>
                <div className={combineClasses(theme === THEMES.DARK ? 'font-white' : 'font-black', "flex justify-center items-center font-regular text-[14px] d-sm-none mt-3")}>
                    {
                        navLinks.map((each: any, i: any) => (
                            each.type !== 'dropdown' ? !each.newTab ?
                                <Link href={each.path} key={i} passHref={true}>
                                    <a className='mx-2 font-light	'>{each.label}</a>
                                </Link> :
                                <a href={each.path} key={each.path} target="_blank" rel="noopener noreferrer" className='block mx-2 flex-wrap font-light	'>
                                    {each.label}
                                </a>
                                : <div className={classes.sidebarCategoryDD_wrapper} key={each.label}>
                                    <div className='flex items-center cursor-pointer mx-2' key={each.label} onClick={() => setOpenDD(!openDD)}>
                                        <p className='my-0 font-light	'>
                                            {each.label}
                                        </p>
                                        <i className='icofont-caret-down'></i>
                                    </div>
                                    {
                                        openDD &&
                                        <div className={combineClasses(classes.sidebarCategoryDD, classes.sidebarCategoryDD__floating, 'bg-white')}>
                                            <Link href={'/blog'} passHref={true}>
                                                <a className='font-light'>All Articles</a>
                                            </Link>
                                            {
                                                CATEGORIES.map(each => (
                                                    <Link href={"/blog?category=" + each} key={each} passHref={true}>
                                                        <a className='font-light' style={{ textTransform: 'capitalize' }}>{each}</a>
                                                    </Link>
                                                ))
                                            }
                                        </div>
                                    }
                                </div>
                        ))
                    }
                </div>
            </div>
        </nav>
    );
};

export default CenteredNavbar;
