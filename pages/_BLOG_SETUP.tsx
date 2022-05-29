import { ContainerWidths, NavbarLayouts } from "../src/shared/enums";
import { IAuthor } from "../src/shared/interfaces";

export const MAYUR: IAuthor = {
    name: "Mayur Nalwala",
    designation: "Software Engineer at Paytm",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profilePic: "",
}

export const RUPALI: IAuthor = {
    name: "Rupali Yadav",
    designation: "IT Analyst at TCS",
    github: "",
    linkedIn: "",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profilePic: "",
}


export const PRIMARY_NAV = {
    // max size 40x40px for default and max width 80px for centered or text
    logo: '',
    type: NavbarLayouts.DEFAULT,
    width: ContainerWidths.DEFAULT,
    showThemeSwitch: true,
    showSearch: true,
    links: [
        {
            label: 'Home',
            path: '/'
        },
        {
            label: 'About',
            path: '/'
        },
        {
            label: 'Contact',
            path: '/'
        },
        {
            // for categoriest dont add path and add type: dropdown
            label: 'Categories',
            type: 'dropdown'
        },
    ],
    socials: [
        {
            link: '',
            type: ''
        },
        {
            link: '',
            type: ''
        },
        {
            link: '',
            type: ''
        },
    ]
}