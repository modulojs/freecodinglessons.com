
const currentYear = (new Date()).getFullYear();

// TODO: Possibly auto generate?
const firstNav = [
    {
        title: "by FreeCodingLessons.com",
        style: "link",
        file: "https://freecodinglessons.com/",
    },
    {
        title: "Welcome",
        file: "foundations/",
    },
    {
        title: "Part 1",
        divider: true,
    },
    {
        title: "HTML Basics",
        module: "1.1",
        completion: 80,
    },
    {
        title: "Tags and Styles",
        module: "1.2",
        completion: 30,
    },
    {
        title: "Lab: Single Page Projects",
        module: "1.3",
        completion: 50,
    },
    {
        title: "Part 2 and onward",
        divider: true,
    },
    {
        title: "IN DEVELOPMENT: Access previews of Parts 2, 3, and 4 on GitHub",
        style: "link",
        file: "https://github.com/modulojs/foundations/",
    },
];


const extraNav = [
    {
        title: "Overview",
        file: "foundations/overview.html",
    },
    {
        title: "Part 2",
        divider: true,
    },
    {
        title: "Multipage Sites",
        module: "2.1",
        completion: 30,
    },
    {
        title: "Flex Layout",
        module: "2.2",
        completion: 0,
    },
    {
        title: "Lab: Multi-Page Projects",
        module: "2.3",
        completion: 0,
    },
    {
        title: "Part 3",
        divider: true,
    },
    {
        title: "Tailwind",
        module: "3.1",
        completion: 30,
    },
    {
        title: "Forms",
        module: "3.2",
        completion: 0,
    },
    {
        title: "Lab: Forms and Frameworks",
        module: "3.3",
        completion: 0,
    },
    {
        title: "Part 4",
        divider: true,
    },
    {
        title: "Web Components",
        module: "4.1",
        completion: 0,
    },
    {
        title: "Modulo Layouts",
        module: "4.2",
        completion: 0,
    },
    {
        title: "Lab: JAMStack Apps with Modulo",
        module: "4.3",
        completion: 0,
    },
];

function getNav(showExtra = false) {
    return firstNav.concat(showExtra ? extraNav : []);
}

modulo.register('util', getNav);

/*
function isVisible (elem) {
    const r = elem.getBoundingClientRect();
    console.log('thsi is r', r);
    return (r.top >= 0 && r.left >= 0) &&
        (r.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        r.right <= (window.innerWidth || document.documentElement.clientWidth));
}
*/

function prepareCallback() {
    //let hash = String(window.location.hash).replace('#', '');
    let hash = 'NONE';
    const THRESH = 5; // 5px leeway
    if (props.subnav) {
        const sel = props.subnav.map(({ slug }) => `[name=${ slug }]`).join(',');
        const elems = document.body.querySelectorAll(sel);
        for (const elem of elems) {
            if (elem.getBoundingClientRect().top < THRESH) {
                hash = elem.getAttribute('name');
            }
        }
    }
    return {
        navigation: getNav(state.showExtra),
        currentYear,
        hash,
    };
}

function toggleVisible() {
    state.showExtra = !state.showExtra;
}

// Hacky scrollspy + debounce
const SCROLL_DEBOUNCE = 2000;
let timeout = null;
let setup = false;
function updateCallback() {
    if (!setup) {
        document.addEventListener("scroll", (event) => {
            if (timeout) {
                window.clearTimeout(timeout);
            }
            timeout = window.setTimeout(() => {
                element.rerender();
            });
        }, SCROLL_DEBOUNCE);
        setup = true;
    }
}


