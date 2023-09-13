window.moduloBuild = window.moduloBuild || { modules: {} };
window.moduloBuild.modules["x1uccufu"] = function library1_LessonNav (modulo) {

        const def = modulo.definitions['library1_LessonNav'];
        class x_LessonNav extends window.HTMLElement {
            constructor() {
                super();
                modulo.registry.utils.initElement(modulo, def, this);
            }
            connectedCallback() {
                window.setTimeout(() => this.parsedCallback(), 0);
            }
            parsedCallback() {
                modulo.registry.utils.mountElement(modulo, def, this);
            }
        }
        modulo.registry.utils.initClass(modulo, def, x_LessonNav);
        window.customElements.define(def.TagName, x_LessonNav);
        return x_LessonNav;
    
};
window.moduloBuild.modules["xxl1jd7t"] = function library1_LessonNav_script (modulo) {
var script = { exports: {} }; var props, state, style, element;

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
    },
    {
        title: "Tags and Styles",
        module: "1.2",
    },
    {
        title: "Lab: Single Page Projects",
        module: "1.3",
    },
    {
        title: "Part 2",
        divider: true,
    },
    {
        title: "Multipage Sites",
        module: "2.1",
    },
    //]; const extraNav = [
    {
        title: "Flex Layout",
        module: "2.2",
        completion: 70,
    },
    {
        title: "Lab: Multi-Page Projects",
        module: "2.3",
        completion: 50,
    },
    {
        title: "Part 3",
        divider: true,
    },
    {
        title: "Tailwind",
        module: "3.1",
        completion: 80,
    },
    {
        title: "Forms",
        module: "3.2",
        completion: 50,
    },
    {
        title: "Lab: Forms and Frameworks",
        module: "3.3",
        completion: 30,
    },
    {
        title: "Part 4",
        divider: true,
    },
    {
        title: "Web Components",
        module: "4.1",
        completion: 30,
    },
    {
        title: "Modulo Layouts",
        module: "4.2",
        completion: 30,
    },
    {
        title: "Lab: JAMStack Apps with Modulo",
        module: "4.3",
        completion: 30,
    },
];

const extraNav = [
    {
        title: "Overview",
        file: "foundations/overview.html",
    },
    {
        title: "Deisgn Lab 1.4",
        file: "index.html#Unavailable",
    },
    {
        title: "Deisgn Lab 2.4",
        file: "index.html#Unavailable",
    },
    {
        title: "Deisgn Lab 3.4",
        file: "index.html#Unavailable",
    },
    {
        title: "Deisgn Lab 4.4",
        file: "index.html#Unavailable",
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



return {"getNav": typeof getNav !== "undefined" ? getNav : undefined, "isVisible": typeof isVisible !== "undefined" ? isVisible : undefined, "prepareCallback": typeof prepareCallback !== "undefined" ? prepareCallback : undefined, "toggleVisible": typeof toggleVisible !== "undefined" ? toggleVisible : undefined, "updateCallback": typeof updateCallback !== "undefined" ? updateCallback : undefined, setLocalVariables: function(o) {props=o.props; state=o.state; style=o.style; element=o.element}, exports: script.exports }

};
window.moduloBuild.modules["x1725c3s"] = function library1_LessonNav_template (modulo) {
return function (CTX, G) { var OUT=[];
  OUT.push("<nav class=\"Page-nav\">\n    <!--<img src=\"/static/images/example_logo.svg\" />-->\n    <h1 class=\"u--desktop\">Foundations <br /><span class=\"of\">of</span><br /> Web Design</h1>\n    <div class=\"u--mobile\">\n        <!--<button  class=\"Page-navToggle\"\n        onClick=\"querySelector('#nav').classList.toggle('Page-nav--visible')\">&#9776;</button>-->\n        <h1>Foundations of Web Design</h1>\n    </div>\n    <ul>\n        "); // "<nav class=\"Page-nav\"><!--<img src=\"/static/images/example_logo.svg\" />--><h1 class=\"u--desktop\">Foundations <br /><span class=\"of\">of</span><br /> Web Design</h1><div class=\"u--mobile\"><!--<button class=\"Page-navToggle\" onClick=\"querySelector('#nav').classList.toggle('Page-nav--visible')\">&#9776;</button>--><h1>Foundations of Web Design</h1></div><ul>"
  var ARR0=CTX.script.navigation;for (var KEY in ARR0) {CTX. page=ARR0[KEY]; // "for page in script.navigation"
  OUT.push("\n            <li>\n                "); // "<li>"
  if (CTX.page.divider) { // "if page.divider"
  OUT.push("\n                    <h2>"); // "<h2>"
  OUT.push(G.escapeText(CTX.page.title)); // "page.title"
  OUT.push("</h2>\n                "); // "</h2>"
  } // "endif"
  OUT.push("\n                "); // ""
  if (CTX.page.file) { // "if page.file"
  OUT.push("\n                    <a href=\""); // "<a href=\""
  if (CTX.page.style != "link") { // "if page.style != \"link\""
  OUT.push("/"); // "/"
  } // "endif"
  OUT.push(G.escapeText(CTX.page.file)); // "page.file"
  OUT.push("\"\n                        title=\""); // "\" title=\""
  OUT.push(G.escapeText(CTX.page.title)); // "page.title"
  OUT.push("\"\n                        class=\"\n                            Page-navLink\n                            "); // "\" class=\" Page-navLink"
  if (CTX.page.file === CTX.props.navselected) { // "if page.file == props.navselected"
  OUT.push("Page-navLink--selected"); // "Page-navLink--selected"
  } // "endif"
  OUT.push("\n                            "); // ""
  if (CTX.page.style) { // "if page.style"
  OUT.push("Page-navLink--"); // "Page-navLink--"
  OUT.push(G.escapeText(CTX.page.style)); // "page.style"
  } // "endif"
  OUT.push("\n                        \">\n                        "); // "\">"
  OUT.push(G.escapeText(CTX.page.title)); // "page.title"
  OUT.push("\n                    </a>\n                "); // "</a>"
  } // "endif"
  OUT.push("\n                "); // ""
  if (CTX.page.module) { // "if page.module"
  OUT.push("\n                    <a href=\"/foundations/"); // "<a href=\"/foundations/"
  OUT.push(G.escapeText(CTX.page.module)); // "page.module"
  OUT.push("/\"\n                        title=\""); // "/\" title=\""
  OUT.push(G.escapeText(CTX.page.title)); // "page.title"
  OUT.push("\"\n                        class=\"\n                            Page-navLink\n                            "); // "\" class=\" Page-navLink"
  if ((CTX.props.navselected).includes ? (CTX.props.navselected).includes(CTX.page.module) : (CTX.page.module in CTX.props.navselected)) { // "if page.module in props.navselected"
  OUT.push("Page-navLink--selected"); // "Page-navLink--selected"
  } // "endif"
  OUT.push("\n                        \">\n                        <span class=\"Page-navLinkModule\">"); // "\"><span class=\"Page-navLinkModule\">"
  OUT.push(G.escapeText(CTX.page.module)); // "page.module"
  OUT.push("</span>\n                        "); // "</span>"
  if (CTX.page.completion === 0) { // "if page.completion is 0"
  OUT.push("&#x25CB;"); // "&#x25CB;"
  } // "endif"
  OUT.push("\n                        "); // ""
  if (CTX.page.completion) { // "if page.completion"
  OUT.push("\n                            "); // ""
  if (CTX.page.completion > 90) { // "if page.completion gt 90"
  OUT.push("&#x25CF;\n                            "); // "&#x25CF;"
  } else if (CTX.page.completion > 70) { // "elif page.completion gt 70"
  OUT.push("&#x25D5;\n                            "); // "&#x25D5;"
  } else if (CTX.page.completion > 40) { // "elif page.completion gt 40"
  OUT.push("&#x25D1;\n                            "); // "&#x25D1;"
  } else if (CTX.page.completion > 20) { // "elif page.completion gt 20"
  OUT.push("&#x25D4;"); // "&#x25D4;"
  } // "endif"
  OUT.push("\n                        "); // ""
  } // "endif"
  OUT.push("\n                        "); // ""
  OUT.push(G.escapeText(CTX.page.title)); // "page.title"
  OUT.push("\n                    </a>\n                    "); // "</a>"
  if ((CTX.props.navselected).includes ? (CTX.props.navselected).includes(CTX.page.module) : (CTX.page.module in CTX.props.navselected)) { // "if page.module in props.navselected"
  OUT.push("\n                        "); // ""
  if (CTX.props.subnav) { // "if props.subnav"
  OUT.push("\n                            "); // ""
  var ARR4=CTX.props.subnav;for (var KEY in ARR4) {CTX. subnav=ARR4[KEY]; // "for subnav in props.subnav"
  OUT.push("\n                              <a href=\"#"); // "<a href=\"#"
  OUT.push(G.escapeText(CTX.subnav.slug)); // "subnav.slug"
  OUT.push("\"\n                                  title=\""); // "\" title=\""
  OUT.push(G.escapeText(CTX.subnav.title)); // "subnav.title"
  OUT.push("\"\n                                  class=\"subnav\">\n                                  "); // "\" class=\"subnav\">"
  if (CTX.subnav.slug === CTX.script.hash) { // "if subnav.slug == script.hash"
  OUT.push("&bull;"); // "&bull;"
  } // "endif"
  OUT.push("\n                                  "); // ""
  OUT.push(G.escapeText(CTX.subnav.title)); // "subnav.title"
  OUT.push("\n                              </a>\n                            "); // "</a>"
  } // "endfor"
  OUT.push("\n                        "); // ""
  } // "endif"
  OUT.push("\n                    "); // ""
  } // "endif"
  OUT.push("\n                "); // ""
  } // "endif"
  OUT.push("\n            </li>\n        "); // "</li>"
  } // "endfor"
  OUT.push("\n\t<li>\n            <button class=\"navbtn\" @click:=script.toggleVisible>"); // "<li><button class=\"navbtn\" @click:=script.toggleVisible>"
  if (CTX.state.showExtra) { // "if state.showExtra"
  OUT.push("&uarr;"); // "&uarr;"
  } else { // "else"
  OUT.push("&darr;"); // "&darr;"
  } // "endif"
  OUT.push(" Early Access</button>\n\t</li>\n    </ul>\n</nav>\n\n"); // "Early Access</button></li></ul></nav>"

return OUT.join(""); };
};
window.moduloBuild.modules["xx6vu8g6"] = function library1_LessonPage (modulo) {

        const def = modulo.definitions['library1_LessonPage'];
        class x_LessonPage extends window.HTMLElement {
            constructor() {
                super();
                modulo.registry.utils.initElement(modulo, def, this);
            }
            connectedCallback() {
                window.setTimeout(() => this.parsedCallback(), 0);
            }
            parsedCallback() {
                modulo.registry.utils.mountElement(modulo, def, this);
            }
        }
        modulo.registry.utils.initClass(modulo, def, x_LessonPage);
        window.customElements.define(def.TagName, x_LessonPage);
        return x_LessonPage;
    
};
window.moduloBuild.modules["x1ls6273"] = function library1_LessonPage_script (modulo) {
var script = { exports: {} }; var props, staticdata;
// various ways to call activities or solutions
let activityAliases = [ 'activity', 'act', 'project', 'solution', 'sols', 'sol' ];
activityAliases = activityAliases.concat(activityAliases.map(s => s + '_')); // Add in an optional "_"

function getFilesInModule(module, files) {
    if (!module) {
        return [];
    }
    return files
        .filter(path => path.includes('/' + module + '/'))
        .filter(path => !path.includes('/.')) // remove hidden
        .map(path => path.split('/' + module + '/')[1]);
}

function getActivitiesFromFiles(files, pathPrefix) {
      const activities = {};
      const activityNames = [];
      for (const pathString of files) { // Loop through every activity-related file
          const pathSplit = pathString.split('/');
          const fullPath = pathPrefix + pathString;

          // If its in an "activities" directory...
          if (pathSplit[0] === 'activities') {
              const slug = pathSplit[1];
              if (!(slug in activities)) {
                  activityNames.push(slug);
                  const files = [ fullPath ];
                  const solutionFiles = [ ];
                  const number = slug.replace(/\D+/g, '');
                  const title = 'Activity ' + number;
                  activities[slug] = { files, title, solutionFiles, slug, number };
                  const firstDir = fullPath.replace(/^\//, '').split('/')[0];
                  const dirName = fullPath.replace(/\/[\w\.]+$/, '').replace('/' + firstDir, '');
                  activities[slug].filesPathRawAbs = `https://github.com/modulojs/${ firstDir }/tree/main${ dirName }`;
              }
              if (pathSplit[2] === 'instructions.md') {
                  // Activity instructions were found
                  activities[slug].instructionsPath = fullPath;
                  activities[slug].instructionsPathRawAbs = 'https://modulojs.github.io' + fullPath;
              }
          }

          // If its in a "solutions" directory...
          if (pathSplit[0] === 'solutions') {
              let slug = pathSplit[1];
              const activityNumber = slug.replace(/\D+/g, '');
              for (const prefix of activityAliases) { // Scan "aliases"
                  if (slug in activities) {
                      break; // Match found, leave loop
                  }
                  slug = prefix + activityNumber; // Try next combo
              }

              if (!(slug in activities)) {
                  console.error('No activity for solution:', fullPath, slug);
                  continue;
              }
              activities[slug].solutionFiles.push(fullPath);
              if ((fullPath.endsWith('.html') && !activities[slug].solutionPath)
                    || fullPath.endsWith('index.html')) {
                  // The solution path points toward any HTML files found among
                  // solution files. If there are multiple, choose index.html.
                  activities[slug].solutionPath = fullPath;
              }
          }
      }

      // Now, ensure ordered, sorted by number in slug
      const actArray = Array.from(Object.values(activities));
      actArray.sort((a, b) => a.number < b.number ? -1 : (a.number === b.number ? 0 : 1));
      return actArray;
}

function getSubnavFromActivities(activities) {
    const subnav = [];
    for (const [ title, slug ] of activities) {
        subnav.push({ title, slug: slug });
    }
    return subnav.length ? subnav : null; // returns null instead of empty list, so if is false
}

function prepareCallback() {
    const { getNav } = modulo.registry.utils;
    const navigation = getNav();
    let path = props.path || '';
    if (!path) {
        /// try to autodetermine if possible
        path = window.location.pathname;
        if (path.endsWith('.html')) { // Strip filename, if exists
            path = path.replace(/\/[^\/]+$/, '/');
        }
    }
    let foundNavItem = {};
    for (const navItem of getNav(true)) {
        if (navItem.file && navItem.file === path) {
            foundNavItem = navItem;
            break;
        } else if (navItem.module && path.includes(navItem.module)) {
            foundNavItem = navItem;
            break;
        }
    }

    const files = getFilesInModule(foundNavItem.module, staticdata.files);
    const activities = getActivitiesFromFiles(files, path);

    // (TODO: Add as a prop)
    const subnavPrefix = [ { title: 'Introduction', slug: 'introduction' } ];
    const subnav = activities.length ? subnavPrefix.concat(activities) : null;
    return {
        files,
        activities,
        navigation,
        subnav,
        path,
        ...foundNavItem,
    };
}



return {"getFilesInModule": typeof getFilesInModule !== "undefined" ? getFilesInModule : undefined, "getActivitiesFromFiles": typeof getActivitiesFromFiles !== "undefined" ? getActivitiesFromFiles : undefined, "getSubnavFromActivities": typeof getSubnavFromActivities !== "undefined" ? getSubnavFromActivities : undefined, "prepareCallback": typeof prepareCallback !== "undefined" ? prepareCallback : undefined, setLocalVariables: function(o) {props=o.props; staticdata=o.staticdata}, exports: script.exports }

};
window.moduloBuild.modules["x1bl25af"] = function library1_LessonPage_staticdata (modulo) {
return {"files":["/home/michaelb/projects/freecodinglessons/src/foundations/.git","/home/michaelb/projects/freecodinglessons/src/foundations/.gitignore","/home/michaelb/projects/freecodinglessons/src/foundations/.overview.md.swp","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act1/challenge1.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act1/challenge2.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act1/challenge3.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act1/challenge4.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act1/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act2/challenge1.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act2/challenge2.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act2/challenge3.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act2/challenge4.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act2/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act3/challenge1.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act3/challenge2.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act3/challenge3.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act3/challenge4.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act3/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act4/challenge1.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act4/challenge2.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act4/challenge3.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act4/challenge4.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act4/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/slides/part_1_terminology.md","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/solutions/solution1.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/solutions/solution2.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/solutions/solution3.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/solutions/solution4.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act1/challenge1.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act1/challenge2.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act1/challenge3.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act1/challenge4.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act1/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act2/challenge1.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act2/challenge2.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act2/challenge3.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act2/challenge4.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act2/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act3/challenge1.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act3/challenge2.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act3/challenge3.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act3/challenge4.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act3/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act4/challenge1.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act4/challenge2.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act4/challenge3.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act4/challenge4.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act4/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/solutions/solution1.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/solutions/solution2.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/solutions/solution3.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/solutions/solution4.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project1/clue1.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project1/clue2.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project1/clue3.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project1/clue4.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project1/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project1/project1.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project2/clue1.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project2/clue2.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project2/clue3.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project2/clue4.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project2/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project2/project2.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project3/clue1.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project3/clue2.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project3/clue3.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project3/clue4.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project3/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project3/project3.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project4/clue1.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project4/clue2.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project4/clue3.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project4/clue4.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project4/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project4/project4.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.3/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.3/solutions/.project_4.html.swp","/home/michaelb/projects/freecodinglessons/src/foundations/1.3/solutions/project_1.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.3/solutions/project_2.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.3/solutions/project_3.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.3/solutions/project_4.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act1/challenge1.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act1/challenge2.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act1/challenge3.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act1/challenge4.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act1/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/adalovelace.png","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/alanturing.png","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/charlesbabbage.jpg","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/adalovelace.png","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/alanturing.png","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/babbage.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/charlesbabbage.jpg","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/lovelace.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/turing.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch3/adalovelace.png","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch3/alanturing.png","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch3/babbage.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch3/charlesbabbage.jpg","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch3/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch3/lovelace.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch3/turing.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch4/adalovelace.png","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch4/alanturing.png","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch4/babbage.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch4/charlesbabbage.jpg","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch4/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch4/lovelace.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch4/turing.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act3/ch1ch2/art.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act3/ch1ch2/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act3/ch1ch2/photos.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act3/ch3ch4/art.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act3/ch3ch4/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act3/ch3ch4/mystyles.css","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act3/ch3ch4/photos.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act3/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act4/ch1ch2/css/site.css","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act4/ch1ch2/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act4/ch3ch4/css/site.css","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act4/ch3ch4/images/coolmonster.svg","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act4/ch3ch4/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act4/ch3ch4/shop.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act4/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/old_index.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols1/solution1.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols1/solution2.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols1/solution3.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols1/solution4.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/adalovelace.png","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/alanturing.png","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/babbage.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/charlesbabbage.jpg","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/lovelace.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/turing.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols3/art.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols3/extrastyle.css","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols3/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols3/mystyles.css","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols3/photos.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols4/css/site.css","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols4/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols4/shop.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.2/activities/act1/challenge1.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.2/activities/act1/challenge2.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.2/activities/act1/challenge3.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.2/activities/act1/challenge4.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.2/activities/act1/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/2.2/activities/act2/challenge1.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.2/activities/act2/challenge2.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.2/activities/act2/challenge3.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.2/activities/act2/challenge4.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.2/activities/act2/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/2.2/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.2/solutions/sols1.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.2/solutions/sols2.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.3/activities/project1/clue1.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.3/activities/project1/clue2.css","/home/michaelb/projects/freecodinglessons/src/foundations/2.3/activities/project1/clue3.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.3/activities/project1/clue4.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.3/activities/project1/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/2.3/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.3/solutions/project1/articles.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.3/solutions/project1/css/site.css","/home/michaelb/projects/freecodinglessons/src/foundations/2.3/solutions/project1/images/coolmonster.svg","/home/michaelb/projects/freecodinglessons/src/foundations/2.3/solutions/project1/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.3/solutions/project1/shop.html","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/act4/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/challenge_1.html","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/challenge_1_styles.css","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/challenge_2.html","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/challenge_2_styles.css","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/challenge_3.html","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/challenge_3_styles.css","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act2/challenge1.html","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act2/challenge2.html","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act2/challenge3.html","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act2/challenge4.html","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act2/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act3/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act4/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/.sols2.html.swp","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols1/challenge_1_styles.css","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols1/challenge_2_styles.css","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols1/challenge_3_styles.css","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols1/solution_1.html","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols1/solution_2.html","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols1/solution_3.html","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols2.html","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols3.html","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols4.html","/home/michaelb/projects/freecodinglessons/src/foundations/3.2/activities/act1/act4/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/3.2/activities/act1/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/3.2/activities/act2/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/3.2/activities/act3/challenge1.html","/home/michaelb/projects/freecodinglessons/src/foundations/3.2/activities/act3/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/3.2/activities/act4/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/3.2/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/3.2/solutions/.sols2.html.swp","/home/michaelb/projects/freecodinglessons/src/foundations/3.2/solutions/.sols3.html.swp","/home/michaelb/projects/freecodinglessons/src/foundations/3.2/solutions/.sols4.html.swp","/home/michaelb/projects/freecodinglessons/src/foundations/3.2/solutions/sols2.html","/home/michaelb/projects/freecodinglessons/src/foundations/3.2/solutions/sols3.html","/home/michaelb/projects/freecodinglessons/src/foundations/3.2/solutions/sols4.html","/home/michaelb/projects/freecodinglessons/src/foundations/3.3/activities/act1/act4/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/3.3/activities/act1/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/3.3/activities/act2/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/3.3/activities/act3/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/3.3/activities/act4/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/3.3/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/3.3/solutions/project_1.html","/home/michaelb/projects/freecodinglessons/src/foundations/4.1/activities/act1/challenge1.html","/home/michaelb/projects/freecodinglessons/src/foundations/4.1/activities/act1/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/4.1/activities/act2/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/4.1/activities/act3/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/4.1/activities/act4/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/4.1/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/4.2/activities/act1/act4/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/4.2/activities/act1/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/4.2/activities/act2/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/4.2/activities/act3/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/4.2/activities/act4/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/4.2/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/4.3/activities/act1/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/4.3/activities/act2/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/4.3/activities/act3/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/4.3/activities/act4/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/4.3/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/4.3/solutions/project_1.html","/home/michaelb/projects/freecodinglessons/src/foundations/4.3/solutions/project_2.html","/home/michaelb/projects/freecodinglessons/src/foundations/4.3/solutions/project_4.html","/home/michaelb/projects/freecodinglessons/src/foundations/LICENSE","/home/michaelb/projects/freecodinglessons/src/foundations/README.md","/home/michaelb/projects/freecodinglessons/src/foundations/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/overview.html","/home/michaelb/projects/freecodinglessons/src/foundations/overview.md"]};
};
window.moduloBuild.modules["x12323c6"] = function library1_LessonPage_template (modulo) {
return function (CTX, G) { var OUT=[];
  OUT.push("<x-Page navselected=\""); // "<x-Page navselected=\""
  OUT.push(G.escapeText(CTX.script.path)); // "script.path"
  OUT.push("\" title=\""); // "\" title=\""
  OUT.push(G.escapeText(CTX.script.title)); // "script.title"
  OUT.push("\" subnav:=\""); // "\" subnav:=\""
  OUT.push(G.escapeText(G.filters["json"](CTX.script.subnav))); // "script.subnav|json"
  OUT.push("\">\n\n<h1>"); // "\"><h1>"
  OUT.push(G.escapeText(CTX.script.module)); // "script.module"
  OUT.push(" - "); // "-"
  OUT.push(G.escapeText(CTX.script.title)); // "script.title"
  OUT.push("</h1>\n\n<a name=\"introduction\"></a>\n\n"); // "</h1><a name=\"introduction\"></a>"
  OUT.push("\n<slot></slot>\n\n"); // "<slot></slot>"
  OUT.push("\n"); // ""
  var ARR0=CTX.script.activities;for (var KEY in ARR0) {CTX. act=ARR0[KEY]; // "for act in script.activities"
  OUT.push("\n    <a name=\""); // "<a name=\""
  OUT.push(G.escapeText(CTX.act.slug)); // "act.slug"
  OUT.push("\"></a>\n    <div class=\"LessonPage-activity\">\n        <h2>"); // "\"></a><div class=\"LessonPage-activity\"><h2>"
  OUT.push(G.escapeText(CTX.act.title)); // "act.title"
  OUT.push("</h2>\n        <aside>\n            <div class=\"slide-card\">\n                <div class=\"slide-preview\">\n                    <x-Markdown \n                        slideshow:=true\n                        firstslide:=true\n                        src=\""); // "</h2><aside><div class=\"slide-card\"><div class=\"slide-preview\"><x-Markdown slideshow:=true firstslide:=true src=\""
  OUT.push(G.escapeText(CTX.act.instructionsPath)); // "act.instructionsPath"
  OUT.push("\"\n                    ></x-Markdown>\n                </div>\n                <a href=\"/slides.html?title="); // "\" ></x-Markdown></div><a href=\"/slides.html?title="
  OUT.push(G.escapeText(CTX.act.title)); // "act.title"
  OUT.push("&path="); // "&path="
  OUT.push(G.escapeText(CTX.act.instructionsPath)); // "act.instructionsPath"
  OUT.push("\">\n                    View "); // "\"> View"
  OUT.push(G.escapeText(CTX.act.title)); // "act.title"
  OUT.push(" Slides\n                </a>\n            </div>\n            <!--\n            <a class=\"Btn\" href=\"/slides.html?path="); // "Slides </a></div><!-- <a class=\"Btn\" href=\"/slides.html?path="
  OUT.push(G.escapeText(CTX.act.instructionsPathRawAbs)); // "act.instructionsPathRawAbs"
  OUT.push("\">"); // "\">"
  OUT.push(G.escapeText(CTX.act.title)); // "act.title"
  OUT.push(" Instruction Slides</a>\n            <a class=\"Btn\" href=\"/slides.html?path="); // "Instruction Slides</a><a class=\"Btn\" href=\"/slides.html?path="
  OUT.push(G.escapeText(CTX.act.instructionsPathRawAbs)); // "act.instructionsPathRawAbs"
  OUT.push("\">Open "); // "\">Open"
  OUT.push(G.escapeText(CTX.act.title)); // "act.title"
  OUT.push(" In Web Editor</a>\n            -->\n            <ul>\n                <li>\n                    <a href=\""); // "In Web Editor</a> --><ul><li><a href=\""
  OUT.push(G.escapeText(CTX.act.instructionsPathRawAbs)); // "act.instructionsPathRawAbs"
  OUT.push("\">Open "); // "\">Open"
  OUT.push(G.escapeText(CTX.act.title)); // "act.title"
  OUT.push(" instructions (raw markdown, GitHub) &raquo;</a>\n                </li>\n                <li>\n                    <a href=\""); // "instructions (raw markdown, GitHub) &raquo;</a></li><li><a href=\""
  OUT.push(G.escapeText(CTX.act.filesPathRawAbs)); // "act.filesPathRawAbs"
  OUT.push("\">View "); // "\">View"
  OUT.push(G.escapeText(CTX.act.title)); // "act.title"
  OUT.push(" code files (GitHub) &raquo;</a>\n                </li>\n            </ul>\n        </aside>\n        <figure>\n            <img src=\"/__screenshot"); // "code files (GitHub) &raquo;</a></li></ul></aside><figure><img src=\"/__screenshot"
  OUT.push(G.escapeText(CTX.act.solutionPath)); // "act.solutionPath"
  OUT.push(".png\" />\n            <a href=\""); // ".png\" /><a href=\""
  OUT.push(G.escapeText(CTX.act.solutionPath)); // "act.solutionPath"
  OUT.push("\">View "); // "\">View"
  OUT.push(G.escapeText(CTX.act.title)); // "act.title"
  OUT.push(" Solution</a>\n        </figure>\n\n        "); // "Solution</a></figure>"
  /* // "comment"
  OUT.push("\n            <x-Markdown \n                slideshow:=true\n                src=\""); // "<x-Markdown slideshow:=true src=\""
  OUT.push(G.escapeText(CTX.act.instructionsPath)); // "act.instructionsPath"
  OUT.push("\"\n            ></x-Markdown>\n        "); // "\" ></x-Markdown>"
  */ // "endcomment"
  OUT.push("\n        "); // ""
  /* // "comment"
  OUT.push("\n        <!--<x-Btn payload=\"act.instructionsPath\">Open "); // "<!--<x-Btn payload=\"act.instructionsPath\">Open"
  OUT.push(G.escapeText(CTX.act.instructionsPath)); // "act.instructionsPath"
  OUT.push("</x-Btn>-->\n        <div class=\"LessonPage-activity\" style=\"background-image: url('/__screenshot"); // "</x-Btn>--><div class=\"LessonPage-activity\" style=\"background-image: url('/__screenshot"
  OUT.push(G.escapeText(CTX.act.solutionPath)); // "act.solutionPath"
  OUT.push(".png')\">\n        (opens in modal) <a href=\"#\">Open "); // ".png')\"> (opens in modal) <a href=\"#\">Open"
  OUT.push(G.escapeText(CTX.act.instructionsPath)); // "act.instructionsPath"
  OUT.push("</a>\n        (opens in modal) <a href=\"#\">Edit in web Editor</a>\n        "); // "</a> (opens in modal) <a href=\"#\">Edit in web Editor</a>"
  if (CTX.act.instructionsPath) { // "if act.instructionsPath"
  OUT.push("\n            <x-Markdown \n                slideshow:=true\n                src=\""); // "<x-Markdown slideshow:=true src=\""
  OUT.push(G.escapeText(CTX.act.instructionsPath)); // "act.instructionsPath"
  OUT.push("\"\n            ></x-Markdown>\n        "); // "\" ></x-Markdown>"
  } // "endif"
  OUT.push("\n        <a href=\"/editor.html?file="); // "<a href=\"/editor.html?file="
  OUT.push(G.escapeText(CTX.act.solutionPath)); // "act.solutionPath"
  OUT.push("\">Edit in Web Editor</a>\n        "); // "\">Edit in Web Editor</a>"
  */ // "endcomment"
  OUT.push("\n    </div>\n"); // "</div>"
  } // "endfor"
  OUT.push("\n</x-Page>\n\n"); // "</x-Page>"

return OUT.join(""); };
};
window.moduloBuild.modules["x18768n2"] = function library1_Markdown (modulo) {

        const def = modulo.definitions['library1_Markdown'];
        class x_Markdown extends window.HTMLElement {
            constructor() {
                super();
                modulo.registry.utils.initElement(modulo, def, this);
            }
            connectedCallback() {
                window.setTimeout(() => this.parsedCallback(), 0);
            }
            parsedCallback() {
                modulo.registry.utils.mountElement(modulo, def, this);
            }
        }
        modulo.registry.utils.initClass(modulo, def, x_Markdown);
        window.customElements.define(def.TagName, x_Markdown);
        return x_Markdown;
    
};
window.moduloBuild.modules["x1nrlkcc"] = function library1_Markdown_script (modulo) {
var script = { exports: {} }; var props, state, component, element;

        const { moduloMarkdown } = modulo.registry.utils;
        function prepareCallback() {
            // TODO: Why is lifecycle="inititalized" not working..?
            const myState = state;
            const myElement = element;
            if (props.src && state.source === null) {
                modulo.fetchQueue.fetch(props.src).then(text => {
                    myState.source = text;
                    myElement.rerender();
                });
            }
        }

        function renderCallback() {
            if (state.source === null) {
                return;
            }
            const opts = {};
            if (props.slideshow) {
                opts.slideshow = true;
            }
            if (props.editorlinks) {
                opts.editorlinks = true;
            }
            let results = moduloMarkdown(state.source, opts);
            if (props.firstslide) { // extract first slide content
                results = results.split('</x-Slide>')[0];
                results = results.replace('<x-SlideShow>', '');
                results = results.replace('<x-Slide>', '');
            }
            if (results !== state.results) {
                state.results = results;
                component.innerHTML = results; // cause reconcile
            }
        }
    
return {"prepareCallback": typeof prepareCallback !== "undefined" ? prepareCallback : undefined, "renderCallback": typeof renderCallback !== "undefined" ? renderCallback : undefined, setLocalVariables: function(o) {props=o.props; state=o.state; component=o.component; element=o.element}, exports: script.exports }

};
window.moduloBuild.modules["xxb3ajao"] = function library1_Slide (modulo) {

        const def = modulo.definitions['library1_Slide'];
        class x_Slide extends window.HTMLElement {
            constructor() {
                super();
                modulo.registry.utils.initElement(modulo, def, this);
            }
            connectedCallback() {
                window.setTimeout(() => this.parsedCallback(), 0);
            }
            parsedCallback() {
                modulo.registry.utils.mountElement(modulo, def, this);
            }
        }
        modulo.registry.utils.initClass(modulo, def, x_Slide);
        window.customElements.define(def.TagName, x_Slide);
        return x_Slide;
    
};
window.moduloBuild.modules["x12ecn35"] = function library1_SlideShow (modulo) {

        const def = modulo.definitions['library1_SlideShow'];
        class x_SlideShow extends window.HTMLElement {
            constructor() {
                super();
                modulo.registry.utils.initElement(modulo, def, this);
            }
            connectedCallback() {
                window.setTimeout(() => this.parsedCallback(), 0);
            }
            parsedCallback() {
                modulo.registry.utils.mountElement(modulo, def, this);
            }
        }
        modulo.registry.utils.initClass(modulo, def, x_SlideShow);
        window.customElements.define(def.TagName, x_SlideShow);
        return x_SlideShow;
    
};
window.moduloBuild.modules["xxn0hhmv"] = function library1_SlideShow_script (modulo) {
var script = { exports: {} }; var state, component, element;

        function prepareCallback() {
            const slides = state.slides;
            if (!slides.length) {
                let index = 0;
                for (const child of element.originalChildren) {
                    if (!child.isModulo) {
                        continue; // only get Modulo components as children
                    }
                    slides.push({ index, html: child.innerHTML, select: state.select });
                    index++;
                }
            }
            let offset = 0;
            for (const slide of slides) {
                slide.isSelected = slide.index === state.select;
                if (slide.isSelected) {
                    offset = slide.index;
                }
            }
            state.slides = slides;
            state.offset = offset;
        }

        function setSlide(newIndex) {
            state.select = newIndex;
        }
    
return {"prepareCallback": typeof prepareCallback !== "undefined" ? prepareCallback : undefined, "setSlide": typeof setSlide !== "undefined" ? setSlide : undefined, setLocalVariables: function(o) {state=o.state; component=o.component; element=o.element}, exports: script.exports }

};
window.moduloBuild.modules["xxuc5o6h"] = function library1_SlideShow_template (modulo) {
return function (CTX, G) { var OUT=[];
  OUT.push("\n        <div class=\"toolbar\">\n            "); // "<div class=\"toolbar\">"
  var ARR0=CTX.state.slides;for (var KEY in ARR0) {CTX. slide=ARR0[KEY]; // "for slide in state.slides"
  OUT.push("\n                <button class=\"slide-preview "); // "<button class=\"slide-preview"
  if (CTX.slide.isSelected) { // "if slide.isSelected"
  OUT.push("slide--selected"); // "slide--selected"
  } // "endif"
  OUT.push("\" @click:=\"script.setSlide\" payload:=\""); // "\" @click:=\"script.setSlide\" payload:=\""
  OUT.push(G.escapeText(CTX.slide.index)); // "slide.index"
  OUT.push("\">"); // "\">"
  OUT.push(G.escapeText(G.filters["safe"](CTX.slide.html))); // "slide.html|safe"
  OUT.push("</button>\n            "); // "</button>"
  } // "endfor"
  OUT.push("\n        </div>\n        <div class=\"current-slide-window\">\n            <div class=\"all-slides\" style=\"\n                        --slide-offset: "); // "</div><div class=\"current-slide-window\"><div class=\"all-slides\" style=\" --slide-offset:"
  OUT.push(G.escapeText(CTX.state.offset)); // "state.offset"
  OUT.push(";\n                        --slide-count: "); // "; --slide-count:"
  OUT.push(G.escapeText(G.filters["length"](CTX.state.slides))); // "state.slides|length"
  OUT.push(";\n                    \">\n                "); // "; \">"
  var ARR0=CTX.state.slides;for (var KEY in ARR0) {CTX. slide=ARR0[KEY]; // "for slide in state.slides"
  OUT.push("\n                    <div class=\"slide-wrapper\">\n                        <div class=\"slide\">\n                            "); // "<div class=\"slide-wrapper\"><div class=\"slide\">"
  OUT.push(G.escapeText(G.filters["safe"](CTX.slide.html))); // "slide.html|safe"
  OUT.push("\n                        </div>\n                    </div>\n                "); // "</div></div>"
  } // "endfor"
  OUT.push("\n            </div>\n        </div>\n    "); // "</div></div>"

return OUT.join(""); };
};
window.moduloBuild.modules["x1dl9f33"] = function library1_configuration (modulo) {
/*! showdown v 2.1.0 - 21-04-2022 */
!function(){function a(e){"use strict";var r={omitExtraWLInCodeBlocks:{defaultValue:!1,describe:"Omit the default extra whiteline added to code blocks",type:"boolean"},noHeaderId:{defaultValue:!1,describe:"Turn on/off generated header id",type:"boolean"},prefixHeaderId:{defaultValue:!1,describe:"Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",type:"string"},rawPrefixHeaderId:{defaultValue:!1,describe:'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',type:"boolean"},ghCompatibleHeaderId:{defaultValue:!1,describe:"Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",type:"boolean"},rawHeaderId:{defaultValue:!1,describe:"Remove only spaces, ' and \" from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids",type:"boolean"},headerLevelStart:{defaultValue:!1,describe:"The header blocks level start",type:"integer"},parseImgDimensions:{defaultValue:!1,describe:"Turn on/off image dimension parsing",type:"boolean"},simplifiedAutoLink:{defaultValue:!1,describe:"Turn on/off GFM autolink style",type:"boolean"},excludeTrailingPunctuationFromURLs:{defaultValue:!1,describe:"Excludes trailing punctuation from links generated with autoLinking",type:"boolean"},literalMidWordUnderscores:{defaultValue:!1,describe:"Parse midword underscores as literal underscores",type:"boolean"},literalMidWordAsterisks:{defaultValue:!1,describe:"Parse midword asterisks as literal asterisks",type:"boolean"},strikethrough:{defaultValue:!1,describe:"Turn on/off strikethrough support",type:"boolean"},tables:{defaultValue:!1,describe:"Turn on/off tables support",type:"boolean"},tablesHeaderId:{defaultValue:!1,describe:"Add an id to table headers",type:"boolean"},ghCodeBlocks:{defaultValue:!0,describe:"Turn on/off GFM fenced code blocks support",type:"boolean"},tasklists:{defaultValue:!1,describe:"Turn on/off GFM tasklist support",type:"boolean"},smoothLivePreview:{defaultValue:!1,describe:"Prevents weird effects in live previews due to incomplete input",type:"boolean"},smartIndentationFix:{defaultValue:!1,describe:"Tries to smartly fix indentation in es6 strings",type:"boolean"},disableForced4SpacesIndentedSublists:{defaultValue:!1,describe:"Disables the requirement of indenting nested sublists by 4 spaces",type:"boolean"},simpleLineBreaks:{defaultValue:!1,describe:"Parses simple line breaks as <br> (GFM Style)",type:"boolean"},requireSpaceBeforeHeadingText:{defaultValue:!1,describe:"Makes adding a space between `#` and the header text mandatory (GFM Style)",type:"boolean"},ghMentions:{defaultValue:!1,describe:"Enables github @mentions",type:"boolean"},ghMentionsLink:{defaultValue:"https://github.com/{u}",describe:"Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",type:"string"},encodeEmails:{defaultValue:!0,describe:"Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",type:"boolean"},openLinksInNewWindow:{defaultValue:!1,describe:"Open all links in new windows",type:"boolean"},backslashEscapesHTMLTags:{defaultValue:!1,describe:"Support for HTML Tag escaping. ex: <div>foo</div>",type:"boolean"},emoji:{defaultValue:!1,describe:"Enable emoji support. Ex: `this is a :smile: emoji`",type:"boolean"},underline:{defaultValue:!1,describe:"Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",type:"boolean"},ellipsis:{defaultValue:!0,describe:"Replaces three dots with the ellipsis unicode character",type:"boolean"},completeHTMLDocument:{defaultValue:!1,describe:"Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",type:"boolean"},metadata:{defaultValue:!1,describe:"Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",type:"boolean"},splitAdjacentBlockquotes:{defaultValue:!1,describe:"Split adjacent blockquote blocks",type:"boolean"}};if(!1===e)return JSON.parse(JSON.stringify(r));var t,a={};for(t in r)r.hasOwnProperty(t)&&(a[t]=r[t].defaultValue);return a}var x={},t={},d={},p=a(!0),h="vanilla",_={github:{omitExtraWLInCodeBlocks:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,disableForced4SpacesIndentedSublists:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghCompatibleHeaderId:!0,ghMentions:!0,backslashEscapesHTMLTags:!0,emoji:!0,splitAdjacentBlockquotes:!0},original:{noHeaderId:!0,ghCodeBlocks:!1},ghost:{omitExtraWLInCodeBlocks:!0,parseImgDimensions:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,smoothLivePreview:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghMentions:!1,encodeEmails:!0},vanilla:a(!0),allOn:function(){"use strict";var e,r=a(!0),t={};for(e in r)r.hasOwnProperty(e)&&(t[e]=!0);return t}()};function g(e,r){"use strict";var t=r?"Error in "+r+" extension->":"Error in unnamed extension",a={valid:!0,error:""};x.helper.isArray(e)||(e=[e]);for(var n=0;n<e.length;++n){var s=t+" sub-extension "+n+": ",o=e[n];if("object"!=typeof o)return a.valid=!1,a.error=s+"must be an object, but "+typeof o+" given",a;if(!x.helper.isString(o.type))return a.valid=!1,a.error=s+'property "type" must be a string, but '+typeof o.type+" given",a;var i=o.type=o.type.toLowerCase();if("lang"!==(i="html"===(i="language"===i?o.type="lang":i)?o.type="output":i)&&"output"!==i&&"listener"!==i)return a.valid=!1,a.error=s+"type "+i+' is not recognized. Valid values: "lang/language", "output/html" or "listener"',a;if("listener"===i){if(x.helper.isUndefined(o.listeners))return a.valid=!1,a.error=s+'. Extensions of type "listener" must have a property called "listeners"',a}else if(x.helper.isUndefined(o.filter)&&x.helper.isUndefined(o.regex))return a.valid=!1,a.error=s+i+' extensions must define either a "regex" property or a "filter" method',a;if(o.listeners){if("object"!=typeof o.listeners)return a.valid=!1,a.error=s+'"listeners" property must be an object but '+typeof o.listeners+" given",a;for(var l in o.listeners)if(o.listeners.hasOwnProperty(l)&&"function"!=typeof o.listeners[l])return a.valid=!1,a.error=s+'"listeners" property must be an hash of [event name]: [callback]. listeners.'+l+" must be a function but "+typeof o.listeners[l]+" given",a}if(o.filter){if("function"!=typeof o.filter)return a.valid=!1,a.error=s+'"filter" must be a function, but '+typeof o.filter+" given",a}else if(o.regex){if(x.helper.isString(o.regex)&&(o.regex=new RegExp(o.regex,"g")),!(o.regex instanceof RegExp))return a.valid=!1,a.error=s+'"regex" property must either be a string or a RegExp object, but '+typeof o.regex+" given",a;if(x.helper.isUndefined(o.replace))return a.valid=!1,a.error=s+'"regex" extensions must implement a replace string or function',a}}return a}function n(e,r){"use strict";return"¨E"+r.charCodeAt(0)+"E"}x.helper={},x.extensions={},x.setOption=function(e,r){"use strict";return p[e]=r,this},x.getOption=function(e){"use strict";return p[e]},x.getOptions=function(){"use strict";return p},x.resetOptions=function(){"use strict";p=a(!0)},x.setFlavor=function(e){"use strict";if(!_.hasOwnProperty(e))throw Error(e+" flavor was not found");x.resetOptions();var r,t=_[e];for(r in h=e,t)t.hasOwnProperty(r)&&(p[r]=t[r])},x.getFlavor=function(){"use strict";return h},x.getFlavorOptions=function(e){"use strict";if(_.hasOwnProperty(e))return _[e]},x.getDefaultOptions=a,x.subParser=function(e,r){"use strict";if(x.helper.isString(e)){if(void 0===r){if(t.hasOwnProperty(e))return t[e];throw Error("SubParser named "+e+" not registered!")}t[e]=r}},x.extension=function(e,r){"use strict";if(!x.helper.isString(e))throw Error("Extension 'name' must be a string");if(e=x.helper.stdExtName(e),x.helper.isUndefined(r)){if(d.hasOwnProperty(e))return d[e];throw Error("Extension named "+e+" is not registered!")}"function"==typeof r&&(r=r());var t=g(r=x.helper.isArray(r)?r:[r],e);if(!t.valid)throw Error(t.error);d[e]=r},x.getAllExtensions=function(){"use strict";return d},x.removeExtension=function(e){"use strict";delete d[e]},x.resetExtensions=function(){"use strict";d={}},x.validateExtension=function(e){"use strict";e=g(e,null);return!!e.valid||(console.warn(e.error),!1)},x.hasOwnProperty("helper")||(x.helper={}),x.helper.isString=function(e){"use strict";return"string"==typeof e||e instanceof String},x.helper.isFunction=function(e){"use strict";return e&&"[object Function]"==={}.toString.call(e)},x.helper.isArray=function(e){"use strict";return Array.isArray(e)},x.helper.isUndefined=function(e){"use strict";return void 0===e},x.helper.forEach=function(e,r){"use strict";if(x.helper.isUndefined(e))throw new Error("obj param is required");if(x.helper.isUndefined(r))throw new Error("callback param is required");if(!x.helper.isFunction(r))throw new Error("callback param must be a function/closure");if("function"==typeof e.forEach)e.forEach(r);else if(x.helper.isArray(e))for(var t=0;t<e.length;t++)r(e[t],t,e);else{if("object"!=typeof e)throw new Error("obj does not seem to be an array or an iterable object");for(var a in e)e.hasOwnProperty(a)&&r(e[a],a,e)}},x.helper.stdExtName=function(e){"use strict";return e.replace(/[_?*+\/\\.^-]/g,"").replace(/\s/g,"").toLowerCase()},x.helper.escapeCharactersCallback=n,x.helper.escapeCharacters=function(e,r,t){"use strict";r="(["+r.replace(/([\[\]\\])/g,"\\$1")+"])",t&&(r="\\\\"+r),t=new RegExp(r,"g");return e=e.replace(t,n)},x.helper.unescapeHTMLEntities=function(e){"use strict";return e.replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")};function u(e,r,t,a){"use strict";var n,s,o,i=-1<(a=a||"").indexOf("g"),l=new RegExp(r+"|"+t,"g"+a.replace(/g/g,"")),c=new RegExp(r,a.replace(/g/g,"")),u=[];do{for(n=0;p=l.exec(e);)if(c.test(p[0]))n++||(o=(s=l.lastIndex)-p[0].length);else if(n&&!--n){var d=p.index+p[0].length,p={left:{start:o,end:s},match:{start:s,end:p.index},right:{start:p.index,end:d},wholeMatch:{start:o,end:d}};if(u.push(p),!i)return u}}while(n&&(l.lastIndex=s));return u}function s(u){"use strict";return function(e,r,t,a,n,s,o){var i=t=t.replace(x.helper.regexes.asteriskDashAndColon,x.helper.escapeCharactersCallback),l="",c="",r=r||"",o=o||"";return/^www\./i.test(t)&&(t=t.replace(/^www\./i,"http://www.")),u.excludeTrailingPunctuationFromURLs&&s&&(l=s),r+'<a href="'+t+'"'+(c=u.openLinksInNewWindow?' rel="noopener noreferrer" target="¨E95Eblank"':c)+">"+i+"</a>"+l+o}}function o(n,s){"use strict";return function(e,r,t){var a="mailto:";return r=r||"",t=x.subParser("unescapeSpecialChars")(t,n,s),n.encodeEmails?(a=x.helper.encodeEmailAddress(a+t),t=x.helper.encodeEmailAddress(t)):a+=t,r+'<a href="'+a+'">'+t+"</a>"}}x.helper.matchRecursiveRegExp=function(e,r,t,a){"use strict";for(var n=u(e,r,t,a),s=[],o=0;o<n.length;++o)s.push([e.slice(n[o].wholeMatch.start,n[o].wholeMatch.end),e.slice(n[o].match.start,n[o].match.end),e.slice(n[o].left.start,n[o].left.end),e.slice(n[o].right.start,n[o].right.end)]);return s},x.helper.replaceRecursiveRegExp=function(e,r,t,a,n){"use strict";x.helper.isFunction(r)||(s=r,r=function(){return s});var s,o=u(e,t,a,n),t=e,i=o.length;if(0<i){var l=[];0!==o[0].wholeMatch.start&&l.push(e.slice(0,o[0].wholeMatch.start));for(var c=0;c<i;++c)l.push(r(e.slice(o[c].wholeMatch.start,o[c].wholeMatch.end),e.slice(o[c].match.start,o[c].match.end),e.slice(o[c].left.start,o[c].left.end),e.slice(o[c].right.start,o[c].right.end))),c<i-1&&l.push(e.slice(o[c].wholeMatch.end,o[c+1].wholeMatch.start));o[i-1].wholeMatch.end<e.length&&l.push(e.slice(o[i-1].wholeMatch.end)),t=l.join("")}return t},x.helper.regexIndexOf=function(e,r,t){"use strict";if(!x.helper.isString(e))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";if(r instanceof RegExp==!1)throw"InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";e=e.substring(t||0).search(r);return 0<=e?e+(t||0):e},x.helper.splitAtIndex=function(e,r){"use strict";if(x.helper.isString(e))return[e.substring(0,r),e.substring(r)];throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string"},x.helper.encodeEmailAddress=function(e){"use strict";var t=[function(e){return"&#"+e.charCodeAt(0)+";"},function(e){return"&#x"+e.charCodeAt(0).toString(16)+";"},function(e){return e}];return e=e.replace(/./g,function(e){var r;return e="@"===e?t[Math.floor(2*Math.random())](e):.9<(r=Math.random())?t[2](e):.45<r?t[1](e):t[0](e)})},x.helper.padEnd=function(e,r,t){"use strict";return r>>=0,t=String(t||" "),e.length>r?String(e):((r-=e.length)>t.length&&(t+=t.repeat(r/t.length)),String(e)+t.slice(0,r))},"undefined"==typeof console&&(console={warn:function(e){"use strict";alert(e)},log:function(e){"use strict";alert(e)},error:function(e){"use strict";throw e}}),x.helper.regexes={asteriskDashAndColon:/([*_:~])/g},x.helper.emojis={"+1":"👍","-1":"👎",100:"💯",1234:"🔢","1st_place_medal":"🥇","2nd_place_medal":"🥈","3rd_place_medal":"🥉","8ball":"🎱",a:"🅰️",ab:"🆎",abc:"🔤",abcd:"🔡",accept:"🉑",aerial_tramway:"🚡",airplane:"✈️",alarm_clock:"⏰",alembic:"⚗️",alien:"👽",ambulance:"🚑",amphora:"🏺",anchor:"⚓️",angel:"👼",anger:"💢",angry:"😠",anguished:"😧",ant:"🐜",apple:"🍎",aquarius:"♒️",aries:"♈️",arrow_backward:"◀️",arrow_double_down:"⏬",arrow_double_up:"⏫",arrow_down:"⬇️",arrow_down_small:"🔽",arrow_forward:"▶️",arrow_heading_down:"⤵️",arrow_heading_up:"⤴️",arrow_left:"⬅️",arrow_lower_left:"↙️",arrow_lower_right:"↘️",arrow_right:"➡️",arrow_right_hook:"↪️",arrow_up:"⬆️",arrow_up_down:"↕️",arrow_up_small:"🔼",arrow_upper_left:"↖️",arrow_upper_right:"↗️",arrows_clockwise:"🔃",arrows_counterclockwise:"🔄",art:"🎨",articulated_lorry:"🚛",artificial_satellite:"🛰",astonished:"😲",athletic_shoe:"👟",atm:"🏧",atom_symbol:"⚛️",avocado:"🥑",b:"🅱️",baby:"👶",baby_bottle:"🍼",baby_chick:"🐤",baby_symbol:"🚼",back:"🔙",bacon:"🥓",badminton:"🏸",baggage_claim:"🛄",baguette_bread:"🥖",balance_scale:"⚖️",balloon:"🎈",ballot_box:"🗳",ballot_box_with_check:"☑️",bamboo:"🎍",banana:"🍌",bangbang:"‼️",bank:"🏦",bar_chart:"📊",barber:"💈",baseball:"⚾️",basketball:"🏀",basketball_man:"⛹️",basketball_woman:"⛹️&zwj;♀️",bat:"🦇",bath:"🛀",bathtub:"🛁",battery:"🔋",beach_umbrella:"🏖",bear:"🐻",bed:"🛏",bee:"🐝",beer:"🍺",beers:"🍻",beetle:"🐞",beginner:"🔰",bell:"🔔",bellhop_bell:"🛎",bento:"🍱",biking_man:"🚴",bike:"🚲",biking_woman:"🚴&zwj;♀️",bikini:"👙",biohazard:"☣️",bird:"🐦",birthday:"🎂",black_circle:"⚫️",black_flag:"🏴",black_heart:"🖤",black_joker:"🃏",black_large_square:"⬛️",black_medium_small_square:"◾️",black_medium_square:"◼️",black_nib:"✒️",black_small_square:"▪️",black_square_button:"🔲",blonde_man:"👱",blonde_woman:"👱&zwj;♀️",blossom:"🌼",blowfish:"🐡",blue_book:"📘",blue_car:"🚙",blue_heart:"💙",blush:"😊",boar:"🐗",boat:"⛵️",bomb:"💣",book:"📖",bookmark:"🔖",bookmark_tabs:"📑",books:"📚",boom:"💥",boot:"👢",bouquet:"💐",bowing_man:"🙇",bow_and_arrow:"🏹",bowing_woman:"🙇&zwj;♀️",bowling:"🎳",boxing_glove:"🥊",boy:"👦",bread:"🍞",bride_with_veil:"👰",bridge_at_night:"🌉",briefcase:"💼",broken_heart:"💔",bug:"🐛",building_construction:"🏗",bulb:"💡",bullettrain_front:"🚅",bullettrain_side:"🚄",burrito:"🌯",bus:"🚌",business_suit_levitating:"🕴",busstop:"🚏",bust_in_silhouette:"👤",busts_in_silhouette:"👥",butterfly:"🦋",cactus:"🌵",cake:"🍰",calendar:"📆",call_me_hand:"🤙",calling:"📲",camel:"🐫",camera:"📷",camera_flash:"📸",camping:"🏕",cancer:"♋️",candle:"🕯",candy:"🍬",canoe:"🛶",capital_abcd:"🔠",capricorn:"♑️",car:"🚗",card_file_box:"🗃",card_index:"📇",card_index_dividers:"🗂",carousel_horse:"🎠",carrot:"🥕",cat:"🐱",cat2:"🐈",cd:"💿",chains:"⛓",champagne:"🍾",chart:"💹",chart_with_downwards_trend:"📉",chart_with_upwards_trend:"📈",checkered_flag:"🏁",cheese:"🧀",cherries:"🍒",cherry_blossom:"🌸",chestnut:"🌰",chicken:"🐔",children_crossing:"🚸",chipmunk:"🐿",chocolate_bar:"🍫",christmas_tree:"🎄",church:"⛪️",cinema:"🎦",circus_tent:"🎪",city_sunrise:"🌇",city_sunset:"🌆",cityscape:"🏙",cl:"🆑",clamp:"🗜",clap:"👏",clapper:"🎬",classical_building:"🏛",clinking_glasses:"🥂",clipboard:"📋",clock1:"🕐",clock10:"🕙",clock1030:"🕥",clock11:"🕚",clock1130:"🕦",clock12:"🕛",clock1230:"🕧",clock130:"🕜",clock2:"🕑",clock230:"🕝",clock3:"🕒",clock330:"🕞",clock4:"🕓",clock430:"🕟",clock5:"🕔",clock530:"🕠",clock6:"🕕",clock630:"🕡",clock7:"🕖",clock730:"🕢",clock8:"🕗",clock830:"🕣",clock9:"🕘",clock930:"🕤",closed_book:"📕",closed_lock_with_key:"🔐",closed_umbrella:"🌂",cloud:"☁️",cloud_with_lightning:"🌩",cloud_with_lightning_and_rain:"⛈",cloud_with_rain:"🌧",cloud_with_snow:"🌨",clown_face:"🤡",clubs:"♣️",cocktail:"🍸",coffee:"☕️",coffin:"⚰️",cold_sweat:"😰",comet:"☄️",computer:"💻",computer_mouse:"🖱",confetti_ball:"🎊",confounded:"😖",confused:"😕",congratulations:"㊗️",construction:"🚧",construction_worker_man:"👷",construction_worker_woman:"👷&zwj;♀️",control_knobs:"🎛",convenience_store:"🏪",cookie:"🍪",cool:"🆒",policeman:"👮",copyright:"©️",corn:"🌽",couch_and_lamp:"🛋",couple:"👫",couple_with_heart_woman_man:"💑",couple_with_heart_man_man:"👨&zwj;❤️&zwj;👨",couple_with_heart_woman_woman:"👩&zwj;❤️&zwj;👩",couplekiss_man_man:"👨&zwj;❤️&zwj;💋&zwj;👨",couplekiss_man_woman:"💏",couplekiss_woman_woman:"👩&zwj;❤️&zwj;💋&zwj;👩",cow:"🐮",cow2:"🐄",cowboy_hat_face:"🤠",crab:"🦀",crayon:"🖍",credit_card:"💳",crescent_moon:"🌙",cricket:"🏏",crocodile:"🐊",croissant:"🥐",crossed_fingers:"🤞",crossed_flags:"🎌",crossed_swords:"⚔️",crown:"👑",cry:"😢",crying_cat_face:"😿",crystal_ball:"🔮",cucumber:"🥒",cupid:"💘",curly_loop:"➰",currency_exchange:"💱",curry:"🍛",custard:"🍮",customs:"🛃",cyclone:"🌀",dagger:"🗡",dancer:"💃",dancing_women:"👯",dancing_men:"👯&zwj;♂️",dango:"🍡",dark_sunglasses:"🕶",dart:"🎯",dash:"💨",date:"📅",deciduous_tree:"🌳",deer:"🦌",department_store:"🏬",derelict_house:"🏚",desert:"🏜",desert_island:"🏝",desktop_computer:"🖥",male_detective:"🕵️",diamond_shape_with_a_dot_inside:"💠",diamonds:"♦️",disappointed:"😞",disappointed_relieved:"😥",dizzy:"💫",dizzy_face:"😵",do_not_litter:"🚯",dog:"🐶",dog2:"🐕",dollar:"💵",dolls:"🎎",dolphin:"🐬",door:"🚪",doughnut:"🍩",dove:"🕊",dragon:"🐉",dragon_face:"🐲",dress:"👗",dromedary_camel:"🐪",drooling_face:"🤤",droplet:"💧",drum:"🥁",duck:"🦆",dvd:"📀","e-mail":"📧",eagle:"🦅",ear:"👂",ear_of_rice:"🌾",earth_africa:"🌍",earth_americas:"🌎",earth_asia:"🌏",egg:"🥚",eggplant:"🍆",eight_pointed_black_star:"✴️",eight_spoked_asterisk:"✳️",electric_plug:"🔌",elephant:"🐘",email:"✉️",end:"🔚",envelope_with_arrow:"📩",euro:"💶",european_castle:"🏰",european_post_office:"🏤",evergreen_tree:"🌲",exclamation:"❗️",expressionless:"😑",eye:"👁",eye_speech_bubble:"👁&zwj;🗨",eyeglasses:"👓",eyes:"👀",face_with_head_bandage:"🤕",face_with_thermometer:"🤒",fist_oncoming:"👊",factory:"🏭",fallen_leaf:"🍂",family_man_woman_boy:"👪",family_man_boy:"👨&zwj;👦",family_man_boy_boy:"👨&zwj;👦&zwj;👦",family_man_girl:"👨&zwj;👧",family_man_girl_boy:"👨&zwj;👧&zwj;👦",family_man_girl_girl:"👨&zwj;👧&zwj;👧",family_man_man_boy:"👨&zwj;👨&zwj;👦",family_man_man_boy_boy:"👨&zwj;👨&zwj;👦&zwj;👦",family_man_man_girl:"👨&zwj;👨&zwj;👧",family_man_man_girl_boy:"👨&zwj;👨&zwj;👧&zwj;👦",family_man_man_girl_girl:"👨&zwj;👨&zwj;👧&zwj;👧",family_man_woman_boy_boy:"👨&zwj;👩&zwj;👦&zwj;👦",family_man_woman_girl:"👨&zwj;👩&zwj;👧",family_man_woman_girl_boy:"👨&zwj;👩&zwj;👧&zwj;👦",family_man_woman_girl_girl:"👨&zwj;👩&zwj;👧&zwj;👧",family_woman_boy:"👩&zwj;👦",family_woman_boy_boy:"👩&zwj;👦&zwj;👦",family_woman_girl:"👩&zwj;👧",family_woman_girl_boy:"👩&zwj;👧&zwj;👦",family_woman_girl_girl:"👩&zwj;👧&zwj;👧",family_woman_woman_boy:"👩&zwj;👩&zwj;👦",family_woman_woman_boy_boy:"👩&zwj;👩&zwj;👦&zwj;👦",family_woman_woman_girl:"👩&zwj;👩&zwj;👧",family_woman_woman_girl_boy:"👩&zwj;👩&zwj;👧&zwj;👦",family_woman_woman_girl_girl:"👩&zwj;👩&zwj;👧&zwj;👧",fast_forward:"⏩",fax:"📠",fearful:"😨",feet:"🐾",female_detective:"🕵️&zwj;♀️",ferris_wheel:"🎡",ferry:"⛴",field_hockey:"🏑",file_cabinet:"🗄",file_folder:"📁",film_projector:"📽",film_strip:"🎞",fire:"🔥",fire_engine:"🚒",fireworks:"🎆",first_quarter_moon:"🌓",first_quarter_moon_with_face:"🌛",fish:"🐟",fish_cake:"🍥",fishing_pole_and_fish:"🎣",fist_raised:"✊",fist_left:"🤛",fist_right:"🤜",flags:"🎏",flashlight:"🔦",fleur_de_lis:"⚜️",flight_arrival:"🛬",flight_departure:"🛫",floppy_disk:"💾",flower_playing_cards:"🎴",flushed:"😳",fog:"🌫",foggy:"🌁",football:"🏈",footprints:"👣",fork_and_knife:"🍴",fountain:"⛲️",fountain_pen:"🖋",four_leaf_clover:"🍀",fox_face:"🦊",framed_picture:"🖼",free:"🆓",fried_egg:"🍳",fried_shrimp:"🍤",fries:"🍟",frog:"🐸",frowning:"😦",frowning_face:"☹️",frowning_man:"🙍&zwj;♂️",frowning_woman:"🙍",middle_finger:"🖕",fuelpump:"⛽️",full_moon:"🌕",full_moon_with_face:"🌝",funeral_urn:"⚱️",game_die:"🎲",gear:"⚙️",gem:"💎",gemini:"♊️",ghost:"👻",gift:"🎁",gift_heart:"💝",girl:"👧",globe_with_meridians:"🌐",goal_net:"🥅",goat:"🐐",golf:"⛳️",golfing_man:"🏌️",golfing_woman:"🏌️&zwj;♀️",gorilla:"🦍",grapes:"🍇",green_apple:"🍏",green_book:"📗",green_heart:"💚",green_salad:"🥗",grey_exclamation:"❕",grey_question:"❔",grimacing:"😬",grin:"😁",grinning:"😀",guardsman:"💂",guardswoman:"💂&zwj;♀️",guitar:"🎸",gun:"🔫",haircut_woman:"💇",haircut_man:"💇&zwj;♂️",hamburger:"🍔",hammer:"🔨",hammer_and_pick:"⚒",hammer_and_wrench:"🛠",hamster:"🐹",hand:"✋",handbag:"👜",handshake:"🤝",hankey:"💩",hatched_chick:"🐥",hatching_chick:"🐣",headphones:"🎧",hear_no_evil:"🙉",heart:"❤️",heart_decoration:"💟",heart_eyes:"😍",heart_eyes_cat:"😻",heartbeat:"💓",heartpulse:"💗",hearts:"♥️",heavy_check_mark:"✔️",heavy_division_sign:"➗",heavy_dollar_sign:"💲",heavy_heart_exclamation:"❣️",heavy_minus_sign:"➖",heavy_multiplication_x:"✖️",heavy_plus_sign:"➕",helicopter:"🚁",herb:"🌿",hibiscus:"🌺",high_brightness:"🔆",high_heel:"👠",hocho:"🔪",hole:"🕳",honey_pot:"🍯",horse:"🐴",horse_racing:"🏇",hospital:"🏥",hot_pepper:"🌶",hotdog:"🌭",hotel:"🏨",hotsprings:"♨️",hourglass:"⌛️",hourglass_flowing_sand:"⏳",house:"🏠",house_with_garden:"🏡",houses:"🏘",hugs:"🤗",hushed:"😯",ice_cream:"🍨",ice_hockey:"🏒",ice_skate:"⛸",icecream:"🍦",id:"🆔",ideograph_advantage:"🉐",imp:"👿",inbox_tray:"📥",incoming_envelope:"📨",tipping_hand_woman:"💁",information_source:"ℹ️",innocent:"😇",interrobang:"⁉️",iphone:"📱",izakaya_lantern:"🏮",jack_o_lantern:"🎃",japan:"🗾",japanese_castle:"🏯",japanese_goblin:"👺",japanese_ogre:"👹",jeans:"👖",joy:"😂",joy_cat:"😹",joystick:"🕹",kaaba:"🕋",key:"🔑",keyboard:"⌨️",keycap_ten:"🔟",kick_scooter:"🛴",kimono:"👘",kiss:"💋",kissing:"😗",kissing_cat:"😽",kissing_closed_eyes:"😚",kissing_heart:"😘",kissing_smiling_eyes:"😙",kiwi_fruit:"🥝",koala:"🐨",koko:"🈁",label:"🏷",large_blue_circle:"🔵",large_blue_diamond:"🔷",large_orange_diamond:"🔶",last_quarter_moon:"🌗",last_quarter_moon_with_face:"🌜",latin_cross:"✝️",laughing:"😆",leaves:"🍃",ledger:"📒",left_luggage:"🛅",left_right_arrow:"↔️",leftwards_arrow_with_hook:"↩️",lemon:"🍋",leo:"♌️",leopard:"🐆",level_slider:"🎚",libra:"♎️",light_rail:"🚈",link:"🔗",lion:"🦁",lips:"👄",lipstick:"💄",lizard:"🦎",lock:"🔒",lock_with_ink_pen:"🔏",lollipop:"🍭",loop:"➿",loud_sound:"🔊",loudspeaker:"📢",love_hotel:"🏩",love_letter:"💌",low_brightness:"🔅",lying_face:"🤥",m:"Ⓜ️",mag:"🔍",mag_right:"🔎",mahjong:"🀄️",mailbox:"📫",mailbox_closed:"📪",mailbox_with_mail:"📬",mailbox_with_no_mail:"📭",man:"👨",man_artist:"👨&zwj;🎨",man_astronaut:"👨&zwj;🚀",man_cartwheeling:"🤸&zwj;♂️",man_cook:"👨&zwj;🍳",man_dancing:"🕺",man_facepalming:"🤦&zwj;♂️",man_factory_worker:"👨&zwj;🏭",man_farmer:"👨&zwj;🌾",man_firefighter:"👨&zwj;🚒",man_health_worker:"👨&zwj;⚕️",man_in_tuxedo:"🤵",man_judge:"👨&zwj;⚖️",man_juggling:"🤹&zwj;♂️",man_mechanic:"👨&zwj;🔧",man_office_worker:"👨&zwj;💼",man_pilot:"👨&zwj;✈️",man_playing_handball:"🤾&zwj;♂️",man_playing_water_polo:"🤽&zwj;♂️",man_scientist:"👨&zwj;🔬",man_shrugging:"🤷&zwj;♂️",man_singer:"👨&zwj;🎤",man_student:"👨&zwj;🎓",man_teacher:"👨&zwj;🏫",man_technologist:"👨&zwj;💻",man_with_gua_pi_mao:"👲",man_with_turban:"👳",tangerine:"🍊",mans_shoe:"👞",mantelpiece_clock:"🕰",maple_leaf:"🍁",martial_arts_uniform:"🥋",mask:"😷",massage_woman:"💆",massage_man:"💆&zwj;♂️",meat_on_bone:"🍖",medal_military:"🎖",medal_sports:"🏅",mega:"📣",melon:"🍈",memo:"📝",men_wrestling:"🤼&zwj;♂️",menorah:"🕎",mens:"🚹",metal:"🤘",metro:"🚇",microphone:"🎤",microscope:"🔬",milk_glass:"🥛",milky_way:"🌌",minibus:"🚐",minidisc:"💽",mobile_phone_off:"📴",money_mouth_face:"🤑",money_with_wings:"💸",moneybag:"💰",monkey:"🐒",monkey_face:"🐵",monorail:"🚝",moon:"🌔",mortar_board:"🎓",mosque:"🕌",motor_boat:"🛥",motor_scooter:"🛵",motorcycle:"🏍",motorway:"🛣",mount_fuji:"🗻",mountain:"⛰",mountain_biking_man:"🚵",mountain_biking_woman:"🚵&zwj;♀️",mountain_cableway:"🚠",mountain_railway:"🚞",mountain_snow:"🏔",mouse:"🐭",mouse2:"🐁",movie_camera:"🎥",moyai:"🗿",mrs_claus:"🤶",muscle:"💪",mushroom:"🍄",musical_keyboard:"🎹",musical_note:"🎵",musical_score:"🎼",mute:"🔇",nail_care:"💅",name_badge:"📛",national_park:"🏞",nauseated_face:"🤢",necktie:"👔",negative_squared_cross_mark:"❎",nerd_face:"🤓",neutral_face:"😐",new:"🆕",new_moon:"🌑",new_moon_with_face:"🌚",newspaper:"📰",newspaper_roll:"🗞",next_track_button:"⏭",ng:"🆖",no_good_man:"🙅&zwj;♂️",no_good_woman:"🙅",night_with_stars:"🌃",no_bell:"🔕",no_bicycles:"🚳",no_entry:"⛔️",no_entry_sign:"🚫",no_mobile_phones:"📵",no_mouth:"😶",no_pedestrians:"🚷",no_smoking:"🚭","non-potable_water":"🚱",nose:"👃",notebook:"📓",notebook_with_decorative_cover:"📔",notes:"🎶",nut_and_bolt:"🔩",o:"⭕️",o2:"🅾️",ocean:"🌊",octopus:"🐙",oden:"🍢",office:"🏢",oil_drum:"🛢",ok:"🆗",ok_hand:"👌",ok_man:"🙆&zwj;♂️",ok_woman:"🙆",old_key:"🗝",older_man:"👴",older_woman:"👵",om:"🕉",on:"🔛",oncoming_automobile:"🚘",oncoming_bus:"🚍",oncoming_police_car:"🚔",oncoming_taxi:"🚖",open_file_folder:"📂",open_hands:"👐",open_mouth:"😮",open_umbrella:"☂️",ophiuchus:"⛎",orange_book:"📙",orthodox_cross:"☦️",outbox_tray:"📤",owl:"🦉",ox:"🐂",package:"📦",page_facing_up:"📄",page_with_curl:"📃",pager:"📟",paintbrush:"🖌",palm_tree:"🌴",pancakes:"🥞",panda_face:"🐼",paperclip:"📎",paperclips:"🖇",parasol_on_ground:"⛱",parking:"🅿️",part_alternation_mark:"〽️",partly_sunny:"⛅️",passenger_ship:"🛳",passport_control:"🛂",pause_button:"⏸",peace_symbol:"☮️",peach:"🍑",peanuts:"🥜",pear:"🍐",pen:"🖊",pencil2:"✏️",penguin:"🐧",pensive:"😔",performing_arts:"🎭",persevere:"😣",person_fencing:"🤺",pouting_woman:"🙎",phone:"☎️",pick:"⛏",pig:"🐷",pig2:"🐖",pig_nose:"🐽",pill:"💊",pineapple:"🍍",ping_pong:"🏓",pisces:"♓️",pizza:"🍕",place_of_worship:"🛐",plate_with_cutlery:"🍽",play_or_pause_button:"⏯",point_down:"👇",point_left:"👈",point_right:"👉",point_up:"☝️",point_up_2:"👆",police_car:"🚓",policewoman:"👮&zwj;♀️",poodle:"🐩",popcorn:"🍿",post_office:"🏣",postal_horn:"📯",postbox:"📮",potable_water:"🚰",potato:"🥔",pouch:"👝",poultry_leg:"🍗",pound:"💷",rage:"😡",pouting_cat:"😾",pouting_man:"🙎&zwj;♂️",pray:"🙏",prayer_beads:"📿",pregnant_woman:"🤰",previous_track_button:"⏮",prince:"🤴",princess:"👸",printer:"🖨",purple_heart:"💜",purse:"👛",pushpin:"📌",put_litter_in_its_place:"🚮",question:"❓",rabbit:"🐰",rabbit2:"🐇",racehorse:"🐎",racing_car:"🏎",radio:"📻",radio_button:"🔘",radioactive:"☢️",railway_car:"🚃",railway_track:"🛤",rainbow:"🌈",rainbow_flag:"🏳️&zwj;🌈",raised_back_of_hand:"🤚",raised_hand_with_fingers_splayed:"🖐",raised_hands:"🙌",raising_hand_woman:"🙋",raising_hand_man:"🙋&zwj;♂️",ram:"🐏",ramen:"🍜",rat:"🐀",record_button:"⏺",recycle:"♻️",red_circle:"🔴",registered:"®️",relaxed:"☺️",relieved:"😌",reminder_ribbon:"🎗",repeat:"🔁",repeat_one:"🔂",rescue_worker_helmet:"⛑",restroom:"🚻",revolving_hearts:"💞",rewind:"⏪",rhinoceros:"🦏",ribbon:"🎀",rice:"🍚",rice_ball:"🍙",rice_cracker:"🍘",rice_scene:"🎑",right_anger_bubble:"🗯",ring:"💍",robot:"🤖",rocket:"🚀",rofl:"🤣",roll_eyes:"🙄",roller_coaster:"🎢",rooster:"🐓",rose:"🌹",rosette:"🏵",rotating_light:"🚨",round_pushpin:"📍",rowing_man:"🚣",rowing_woman:"🚣&zwj;♀️",rugby_football:"🏉",running_man:"🏃",running_shirt_with_sash:"🎽",running_woman:"🏃&zwj;♀️",sa:"🈂️",sagittarius:"♐️",sake:"🍶",sandal:"👡",santa:"🎅",satellite:"📡",saxophone:"🎷",school:"🏫",school_satchel:"🎒",scissors:"✂️",scorpion:"🦂",scorpius:"♏️",scream:"😱",scream_cat:"🙀",scroll:"📜",seat:"💺",secret:"㊙️",see_no_evil:"🙈",seedling:"🌱",selfie:"🤳",shallow_pan_of_food:"🥘",shamrock:"☘️",shark:"🦈",shaved_ice:"🍧",sheep:"🐑",shell:"🐚",shield:"🛡",shinto_shrine:"⛩",ship:"🚢",shirt:"👕",shopping:"🛍",shopping_cart:"🛒",shower:"🚿",shrimp:"🦐",signal_strength:"📶",six_pointed_star:"🔯",ski:"🎿",skier:"⛷",skull:"💀",skull_and_crossbones:"☠️",sleeping:"😴",sleeping_bed:"🛌",sleepy:"😪",slightly_frowning_face:"🙁",slightly_smiling_face:"🙂",slot_machine:"🎰",small_airplane:"🛩",small_blue_diamond:"🔹",small_orange_diamond:"🔸",small_red_triangle:"🔺",small_red_triangle_down:"🔻",smile:"😄",smile_cat:"😸",smiley:"😃",smiley_cat:"😺",smiling_imp:"😈",smirk:"😏",smirk_cat:"😼",smoking:"🚬",snail:"🐌",snake:"🐍",sneezing_face:"🤧",snowboarder:"🏂",snowflake:"❄️",snowman:"⛄️",snowman_with_snow:"☃️",sob:"😭",soccer:"⚽️",soon:"🔜",sos:"🆘",sound:"🔉",space_invader:"👾",spades:"♠️",spaghetti:"🍝",sparkle:"❇️",sparkler:"🎇",sparkles:"✨",sparkling_heart:"💖",speak_no_evil:"🙊",speaker:"🔈",speaking_head:"🗣",speech_balloon:"💬",speedboat:"🚤",spider:"🕷",spider_web:"🕸",spiral_calendar:"🗓",spiral_notepad:"🗒",spoon:"🥄",squid:"🦑",stadium:"🏟",star:"⭐️",star2:"🌟",star_and_crescent:"☪️",star_of_david:"✡️",stars:"🌠",station:"🚉",statue_of_liberty:"🗽",steam_locomotive:"🚂",stew:"🍲",stop_button:"⏹",stop_sign:"🛑",stopwatch:"⏱",straight_ruler:"📏",strawberry:"🍓",stuck_out_tongue:"😛",stuck_out_tongue_closed_eyes:"😝",stuck_out_tongue_winking_eye:"😜",studio_microphone:"🎙",stuffed_flatbread:"🥙",sun_behind_large_cloud:"🌥",sun_behind_rain_cloud:"🌦",sun_behind_small_cloud:"🌤",sun_with_face:"🌞",sunflower:"🌻",sunglasses:"😎",sunny:"☀️",sunrise:"🌅",sunrise_over_mountains:"🌄",surfing_man:"🏄",surfing_woman:"🏄&zwj;♀️",sushi:"🍣",suspension_railway:"🚟",sweat:"😓",sweat_drops:"💦",sweat_smile:"😅",sweet_potato:"🍠",swimming_man:"🏊",swimming_woman:"🏊&zwj;♀️",symbols:"🔣",synagogue:"🕍",syringe:"💉",taco:"🌮",tada:"🎉",tanabata_tree:"🎋",taurus:"♉️",taxi:"🚕",tea:"🍵",telephone_receiver:"📞",telescope:"🔭",tennis:"🎾",tent:"⛺️",thermometer:"🌡",thinking:"🤔",thought_balloon:"💭",ticket:"🎫",tickets:"🎟",tiger:"🐯",tiger2:"🐅",timer_clock:"⏲",tipping_hand_man:"💁&zwj;♂️",tired_face:"😫",tm:"™️",toilet:"🚽",tokyo_tower:"🗼",tomato:"🍅",tongue:"👅",top:"🔝",tophat:"🎩",tornado:"🌪",trackball:"🖲",tractor:"🚜",traffic_light:"🚥",train:"🚋",train2:"🚆",tram:"🚊",triangular_flag_on_post:"🚩",triangular_ruler:"📐",trident:"🔱",triumph:"😤",trolleybus:"🚎",trophy:"🏆",tropical_drink:"🍹",tropical_fish:"🐠",truck:"🚚",trumpet:"🎺",tulip:"🌷",tumbler_glass:"🥃",turkey:"🦃",turtle:"🐢",tv:"📺",twisted_rightwards_arrows:"🔀",two_hearts:"💕",two_men_holding_hands:"👬",two_women_holding_hands:"👭",u5272:"🈹",u5408:"🈴",u55b6:"🈺",u6307:"🈯️",u6708:"🈷️",u6709:"🈶",u6e80:"🈵",u7121:"🈚️",u7533:"🈸",u7981:"🈲",u7a7a:"🈳",umbrella:"☔️",unamused:"😒",underage:"🔞",unicorn:"🦄",unlock:"🔓",up:"🆙",upside_down_face:"🙃",v:"✌️",vertical_traffic_light:"🚦",vhs:"📼",vibration_mode:"📳",video_camera:"📹",video_game:"🎮",violin:"🎻",virgo:"♍️",volcano:"🌋",volleyball:"🏐",vs:"🆚",vulcan_salute:"🖖",walking_man:"🚶",walking_woman:"🚶&zwj;♀️",waning_crescent_moon:"🌘",waning_gibbous_moon:"🌖",warning:"⚠️",wastebasket:"🗑",watch:"⌚️",water_buffalo:"🐃",watermelon:"🍉",wave:"👋",wavy_dash:"〰️",waxing_crescent_moon:"🌒",wc:"🚾",weary:"😩",wedding:"💒",weight_lifting_man:"🏋️",weight_lifting_woman:"🏋️&zwj;♀️",whale:"🐳",whale2:"🐋",wheel_of_dharma:"☸️",wheelchair:"♿️",white_check_mark:"✅",white_circle:"⚪️",white_flag:"🏳️",white_flower:"💮",white_large_square:"⬜️",white_medium_small_square:"◽️",white_medium_square:"◻️",white_small_square:"▫️",white_square_button:"🔳",wilted_flower:"🥀",wind_chime:"🎐",wind_face:"🌬",wine_glass:"🍷",wink:"😉",wolf:"🐺",woman:"👩",woman_artist:"👩&zwj;🎨",woman_astronaut:"👩&zwj;🚀",woman_cartwheeling:"🤸&zwj;♀️",woman_cook:"👩&zwj;🍳",woman_facepalming:"🤦&zwj;♀️",woman_factory_worker:"👩&zwj;🏭",woman_farmer:"👩&zwj;🌾",woman_firefighter:"👩&zwj;🚒",woman_health_worker:"👩&zwj;⚕️",woman_judge:"👩&zwj;⚖️",woman_juggling:"🤹&zwj;♀️",woman_mechanic:"👩&zwj;🔧",woman_office_worker:"👩&zwj;💼",woman_pilot:"👩&zwj;✈️",woman_playing_handball:"🤾&zwj;♀️",woman_playing_water_polo:"🤽&zwj;♀️",woman_scientist:"👩&zwj;🔬",woman_shrugging:"🤷&zwj;♀️",woman_singer:"👩&zwj;🎤",woman_student:"👩&zwj;🎓",woman_teacher:"👩&zwj;🏫",woman_technologist:"👩&zwj;💻",woman_with_turban:"👳&zwj;♀️",womans_clothes:"👚",womans_hat:"👒",women_wrestling:"🤼&zwj;♀️",womens:"🚺",world_map:"🗺",worried:"😟",wrench:"🔧",writing_hand:"✍️",x:"❌",yellow_heart:"💛",yen:"💴",yin_yang:"☯️",yum:"😋",zap:"⚡️",zipper_mouth_face:"🤐",zzz:"💤",octocat:'<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',showdown:"<span style=\"font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;\">S</span>"},x.Converter=function(e){"use strict";var r,t,n={},i=[],l=[],o={},a=h,s={parsed:{},raw:"",format:""};for(r in e=e||{},p)p.hasOwnProperty(r)&&(n[r]=p[r]);if("object"!=typeof e)throw Error("Converter expects the passed parameter to be an object, but "+typeof e+" was passed instead.");for(t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);function c(e,r){if(r=r||null,x.helper.isString(e)){if(r=e=x.helper.stdExtName(e),x.extensions[e]){console.warn("DEPRECATION WARNING: "+e+" is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!");var t=x.extensions[e],a=e;if("function"==typeof t&&(t=t(new x.Converter)),x.helper.isArray(t)||(t=[t]),!(a=g(t,a)).valid)throw Error(a.error);for(var n=0;n<t.length;++n)switch(t[n].type){case"lang":i.push(t[n]);break;case"output":l.push(t[n]);break;default:throw Error("Extension loader error: Type unrecognized!!!")}return}if(x.helper.isUndefined(d[e]))throw Error('Extension "'+e+'" could not be loaded. It was either not found or is not a valid extension.');e=d[e]}"function"==typeof e&&(e=e());a=g(e=x.helper.isArray(e)?e:[e],r);if(!a.valid)throw Error(a.error);for(var s=0;s<e.length;++s){switch(e[s].type){case"lang":i.push(e[s]);break;case"output":l.push(e[s])}if(e[s].hasOwnProperty("listeners"))for(var o in e[s].listeners)e[s].listeners.hasOwnProperty(o)&&u(o,e[s].listeners[o])}}function u(e,r){if(!x.helper.isString(e))throw Error("Invalid argument in converter.listen() method: name must be a string, but "+typeof e+" given");if("function"!=typeof r)throw Error("Invalid argument in converter.listen() method: callback must be a function, but "+typeof r+" given");o.hasOwnProperty(e)||(o[e]=[]),o[e].push(r)}n.extensions&&x.helper.forEach(n.extensions,c),this._dispatch=function(e,r,t,a){if(o.hasOwnProperty(e))for(var n=0;n<o[e].length;++n){var s=o[e][n](e,r,this,t,a);s&&void 0!==s&&(r=s)}return r},this.listen=function(e,r){return u(e,r),this},this.makeHtml=function(r){if(!r)return r;var e,t,a={gHtmlBlocks:[],gHtmlMdBlocks:[],gHtmlSpans:[],gUrls:{},gTitles:{},gDimensions:{},gListLevel:0,hashLinkCounts:{},langExtensions:i,outputModifiers:l,converter:this,ghCodeBlocks:[],metadata:{parsed:{},raw:"",format:""}};return r=(r=(r=(r=(r=r.replace(/¨/g,"¨T")).replace(/\$/g,"¨D")).replace(/\r\n/g,"\n")).replace(/\r/g,"\n")).replace(/\u00A0/g,"&nbsp;"),n.smartIndentationFix&&(t=(e=r).match(/^\s*/)[0].length,t=new RegExp("^\\s{0,"+t+"}","gm"),r=e.replace(t,"")),r="\n\n"+r+"\n\n",r=(r=x.subParser("detab")(r,n,a)).replace(/^[ \t]+$/gm,""),x.helper.forEach(i,function(e){r=x.subParser("runExtension")(e,r,n,a)}),r=x.subParser("metadata")(r,n,a),r=x.subParser("hashPreCodeTags")(r,n,a),r=x.subParser("githubCodeBlocks")(r,n,a),r=x.subParser("hashHTMLBlocks")(r,n,a),r=x.subParser("hashCodeTags")(r,n,a),r=x.subParser("stripLinkDefinitions")(r,n,a),r=x.subParser("blockGamut")(r,n,a),r=x.subParser("unhashHTMLSpans")(r,n,a),r=(r=(r=x.subParser("unescapeSpecialChars")(r,n,a)).replace(/¨D/g,"$$")).replace(/¨T/g,"¨"),r=x.subParser("completeHTMLDocument")(r,n,a),x.helper.forEach(l,function(e){r=x.subParser("runExtension")(e,r,n,a)}),s=a.metadata,r},this.makeMarkdown=this.makeMd=function(e,r){if(e=(e=(e=e.replace(/\r\n/g,"\n")).replace(/\r/g,"\n")).replace(/>[ \t]+</,">¨NBSP;<"),!r){if(!window||!window.document)throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");r=window.document}for(var r=r.createElement("div"),t=(r.innerHTML=e,{preList:function(e){for(var r=e.querySelectorAll("pre"),t=[],a=0;a<r.length;++a)if(1===r[a].childElementCount&&"code"===r[a].firstChild.tagName.toLowerCase()){var n=r[a].firstChild.innerHTML.trim(),s=r[a].firstChild.getAttribute("data-language")||"";if(""===s)for(var o=r[a].firstChild.className.split(" "),i=0;i<o.length;++i){var l=o[i].match(/^language-(.+)$/);if(null!==l){s=l[1];break}}n=x.helper.unescapeHTMLEntities(n),t.push(n),r[a].outerHTML='<precode language="'+s+'" precodenum="'+a.toString()+'"></precode>'}else t.push(r[a].innerHTML),r[a].innerHTML="",r[a].setAttribute("prenum",a.toString());return t}(r)}),a=(!function e(r){for(var t=0;t<r.childNodes.length;++t){var a=r.childNodes[t];3===a.nodeType?/\S/.test(a.nodeValue)||/^[ ]+$/.test(a.nodeValue)?(a.nodeValue=a.nodeValue.split("\n").join(" "),a.nodeValue=a.nodeValue.replace(/(\s)+/g,"$1")):(r.removeChild(a),--t):1===a.nodeType&&e(a)}}(r),r.childNodes),n="",s=0;s<a.length;s++)n+=x.subParser("makeMarkdown.node")(a[s],t);return n},this.setOption=function(e,r){n[e]=r},this.getOption=function(e){return n[e]},this.getOptions=function(){return n},this.addExtension=function(e,r){c(e,r=r||null)},this.useExtension=function(e){c(e)},this.setFlavor=function(e){if(!_.hasOwnProperty(e))throw Error(e+" flavor was not found");var r,t=_[e];for(r in a=e,t)t.hasOwnProperty(r)&&(n[r]=t[r])},this.getFlavor=function(){return a},this.removeExtension=function(e){x.helper.isArray(e)||(e=[e]);for(var r=0;r<e.length;++r){for(var t=e[r],a=0;a<i.length;++a)i[a]===t&&i.splice(a,1);for(var n=0;n<l.length;++n)l[n]===t&&l.splice(n,1)}},this.getAllExtensions=function(){return{language:i,output:l}},this.getMetadata=function(e){return e?s.raw:s.parsed},this.getMetadataFormat=function(){return s.format},this._setMetadataPair=function(e,r){s.parsed[e]=r},this._setMetadataFormat=function(e){s.format=e},this._setMetadataRaw=function(e){s.raw=e}},x.subParser("anchors",function(e,i,l){"use strict";function r(e,r,t,a,n,s,o){if(x.helper.isUndefined(o)&&(o=""),t=t.toLowerCase(),-1<e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m))a="";else if(!a){if(a="#"+(t=t||r.toLowerCase().replace(/ ?\n/g," ")),x.helper.isUndefined(l.gUrls[t]))return e;a=l.gUrls[t],x.helper.isUndefined(l.gTitles[t])||(o=l.gTitles[t])}return e='<a href="'+(a=a.replace(x.helper.regexes.asteriskDashAndColon,x.helper.escapeCharactersCallback))+'"',""!==o&&null!==o&&(e+=' title="'+(o=(o=o.replace(/"/g,"&quot;")).replace(x.helper.regexes.asteriskDashAndColon,x.helper.escapeCharactersCallback))+'"'),i.openLinksInNewWindow&&!/^#/.test(a)&&(e+=' rel="noopener noreferrer" target="¨E95Eblank"'),e+=">"+r+"</a>"}return e=(e=(e=(e=(e=l.converter._dispatch("anchors.before",e,i,l)).replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g,r)).replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,r)).replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,r)).replace(/\[([^\[\]]+)]()()()()()/g,r),i.ghMentions&&(e=e.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gim,function(e,r,t,a,n){if("\\"===t)return r+a;if(!x.helper.isString(i.ghMentionsLink))throw new Error("ghMentionsLink option must be a string");t="";return r+'<a href="'+i.ghMentionsLink.replace(/\{u}/g,n)+'"'+(t=i.openLinksInNewWindow?' rel="noopener noreferrer" target="¨E95Eblank"':t)+">"+a+"</a>"})),e=l.converter._dispatch("anchors.after",e,i,l)});var i=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,l=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,c=/()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,m=/(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gim,f=/<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi;x.subParser("autoLinks",function(e,r,t){"use strict";return e=(e=(e=t.converter._dispatch("autoLinks.before",e,r,t)).replace(c,s(r))).replace(f,o(r,t)),e=t.converter._dispatch("autoLinks.after",e,r,t)}),x.subParser("simplifiedAutoLinks",function(e,r,t){"use strict";return r.simplifiedAutoLink?(e=t.converter._dispatch("simplifiedAutoLinks.before",e,r,t),e=(e=r.excludeTrailingPunctuationFromURLs?e.replace(l,s(r)):e.replace(i,s(r))).replace(m,o(r,t)),t.converter._dispatch("simplifiedAutoLinks.after",e,r,t)):e}),x.subParser("blockGamut",function(e,r,t){"use strict";return e=t.converter._dispatch("blockGamut.before",e,r,t),e=x.subParser("blockQuotes")(e,r,t),e=x.subParser("headers")(e,r,t),e=x.subParser("horizontalRule")(e,r,t),e=x.subParser("lists")(e,r,t),e=x.subParser("codeBlocks")(e,r,t),e=x.subParser("tables")(e,r,t),e=x.subParser("hashHTMLBlocks")(e,r,t),e=x.subParser("paragraphs")(e,r,t),e=t.converter._dispatch("blockGamut.after",e,r,t)}),x.subParser("blockQuotes",function(e,r,t){"use strict";e=t.converter._dispatch("blockQuotes.before",e,r,t);var a=/(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;return r.splitAdjacentBlockquotes&&(a=/^ {0,3}>[\s\S]*?(?:\n\n)/gm),e=(e+="\n\n").replace(a,function(e){return e=(e=(e=e.replace(/^[ \t]*>[ \t]?/gm,"")).replace(/¨0/g,"")).replace(/^[ \t]+$/gm,""),e=x.subParser("githubCodeBlocks")(e,r,t),e=(e=(e=x.subParser("blockGamut")(e,r,t)).replace(/(^|\n)/g,"$1  ")).replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(e,r){return r.replace(/^  /gm,"¨0").replace(/¨0/g,"")}),x.subParser("hashBlock")("<blockquote>\n"+e+"\n</blockquote>",r,t)}),e=t.converter._dispatch("blockQuotes.after",e,r,t)}),x.subParser("codeBlocks",function(e,n,s){"use strict";e=s.converter._dispatch("codeBlocks.before",e,n,s);return e=(e=(e+="¨0").replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g,function(e,r,t){var a="\n",r=x.subParser("outdent")(r,n,s);return r=x.subParser("encodeCode")(r,n,s),r="<pre><code>"+(r=(r=(r=x.subParser("detab")(r,n,s)).replace(/^\n+/g,"")).replace(/\n+$/g,""))+(a=n.omitExtraWLInCodeBlocks?"":a)+"</code></pre>",x.subParser("hashBlock")(r,n,s)+t})).replace(/¨0/,""),e=s.converter._dispatch("codeBlocks.after",e,n,s)}),x.subParser("codeSpans",function(e,n,s){"use strict";return e=(e=void 0===(e=s.converter._dispatch("codeSpans.before",e,n,s))?"":e).replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(e,r,t,a){return a=(a=a.replace(/^([ \t]*)/g,"")).replace(/[ \t]*$/g,""),a=r+"<code>"+(a=x.subParser("encodeCode")(a,n,s))+"</code>",a=x.subParser("hashHTMLSpans")(a,n,s)}),e=s.converter._dispatch("codeSpans.after",e,n,s)}),x.subParser("completeHTMLDocument",function(e,r,t){"use strict";if(!r.completeHTMLDocument)return e;e=t.converter._dispatch("completeHTMLDocument.before",e,r,t);var a,n="html",s="<!DOCTYPE HTML>\n",o="",i='<meta charset="utf-8">\n',l="",c="";for(a in void 0!==t.metadata.parsed.doctype&&(s="<!DOCTYPE "+t.metadata.parsed.doctype+">\n","html"!==(n=t.metadata.parsed.doctype.toString().toLowerCase())&&"html5"!==n||(i='<meta charset="utf-8">')),t.metadata.parsed)if(t.metadata.parsed.hasOwnProperty(a))switch(a.toLowerCase()){case"doctype":break;case"title":o="<title>"+t.metadata.parsed.title+"</title>\n";break;case"charset":i="html"===n||"html5"===n?'<meta charset="'+t.metadata.parsed.charset+'">\n':'<meta name="charset" content="'+t.metadata.parsed.charset+'">\n';break;case"language":case"lang":l=' lang="'+t.metadata.parsed[a]+'"',c+='<meta name="'+a+'" content="'+t.metadata.parsed[a]+'">\n';break;default:c+='<meta name="'+a+'" content="'+t.metadata.parsed[a]+'">\n'}return e=s+"<html"+l+">\n<head>\n"+o+i+c+"</head>\n<body>\n"+e.trim()+"\n</body>\n</html>",e=t.converter._dispatch("completeHTMLDocument.after",e,r,t)}),x.subParser("detab",function(e,r,t){"use strict";return e=(e=(e=(e=(e=(e=t.converter._dispatch("detab.before",e,r,t)).replace(/\t(?=\t)/g,"    ")).replace(/\t/g,"¨A¨B")).replace(/¨B(.+?)¨A/g,function(e,r){for(var t=r,a=4-t.length%4,n=0;n<a;n++)t+=" ";return t})).replace(/¨A/g,"    ")).replace(/¨B/g,""),e=t.converter._dispatch("detab.after",e,r,t)}),x.subParser("ellipsis",function(e,r,t){"use strict";return r.ellipsis?(e=(e=t.converter._dispatch("ellipsis.before",e,r,t)).replace(/\.\.\./g,"…"),t.converter._dispatch("ellipsis.after",e,r,t)):e}),x.subParser("emoji",function(e,r,t){"use strict";if(!r.emoji)return e;return e=(e=t.converter._dispatch("emoji.before",e,r,t)).replace(/:([\S]+?):/g,function(e,r){return x.helper.emojis.hasOwnProperty(r)?x.helper.emojis[r]:e}),e=t.converter._dispatch("emoji.after",e,r,t)}),x.subParser("encodeAmpsAndAngles",function(e,r,t){"use strict";return e=(e=(e=(e=(e=t.converter._dispatch("encodeAmpsAndAngles.before",e,r,t)).replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;")).replace(/<(?![a-z\/?$!])/gi,"&lt;")).replace(/</g,"&lt;")).replace(/>/g,"&gt;"),e=t.converter._dispatch("encodeAmpsAndAngles.after",e,r,t)}),x.subParser("encodeBackslashEscapes",function(e,r,t){"use strict";return e=(e=(e=t.converter._dispatch("encodeBackslashEscapes.before",e,r,t)).replace(/\\(\\)/g,x.helper.escapeCharactersCallback)).replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g,x.helper.escapeCharactersCallback),e=t.converter._dispatch("encodeBackslashEscapes.after",e,r,t)}),x.subParser("encodeCode",function(e,r,t){"use strict";return e=(e=t.converter._dispatch("encodeCode.before",e,r,t)).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/([*_{}\[\]\\=~-])/g,x.helper.escapeCharactersCallback),e=t.converter._dispatch("encodeCode.after",e,r,t)}),x.subParser("escapeSpecialCharsWithinTagAttributes",function(e,r,t){"use strict";return e=(e=(e=t.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before",e,r,t)).replace(/<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi,function(e){return e.replace(/(.)<\/?code>(?=.)/g,"$1`").replace(/([\\`*_~=|])/g,x.helper.escapeCharactersCallback)})).replace(/<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi,function(e){return e.replace(/([\\`*_~=|])/g,x.helper.escapeCharactersCallback)}),e=t.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after",e,r,t)}),x.subParser("githubCodeBlocks",function(e,s,o){"use strict";return s.ghCodeBlocks?(e=o.converter._dispatch("githubCodeBlocks.before",e,s,o),e=(e=(e+="¨0").replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g,function(e,r,t,a){var n=s.omitExtraWLInCodeBlocks?"":"\n";return a=x.subParser("encodeCode")(a,s,o),a="<pre><code"+(t?' class="'+t+" language-"+t+'"':"")+">"+(a=(a=(a=x.subParser("detab")(a,s,o)).replace(/^\n+/g,"")).replace(/\n+$/g,""))+n+"</code></pre>",a=x.subParser("hashBlock")(a,s,o),"\n\n¨G"+(o.ghCodeBlocks.push({text:e,codeblock:a})-1)+"G\n\n"})).replace(/¨0/,""),o.converter._dispatch("githubCodeBlocks.after",e,s,o)):e}),x.subParser("hashBlock",function(e,r,t){"use strict";return e=(e=t.converter._dispatch("hashBlock.before",e,r,t)).replace(/(^\n+|\n+$)/g,""),e="\n\n¨K"+(t.gHtmlBlocks.push(e)-1)+"K\n\n",e=t.converter._dispatch("hashBlock.after",e,r,t)}),x.subParser("hashCodeTags",function(e,n,s){"use strict";e=s.converter._dispatch("hashCodeTags.before",e,n,s);return e=x.helper.replaceRecursiveRegExp(e,function(e,r,t,a){t=t+x.subParser("encodeCode")(r,n,s)+a;return"¨C"+(s.gHtmlSpans.push(t)-1)+"C"},"<code\\b[^>]*>","</code>","gim"),e=s.converter._dispatch("hashCodeTags.after",e,n,s)}),x.subParser("hashElement",function(e,r,t){"use strict";return function(e,r){return r=(r=(r=r.replace(/\n\n/g,"\n")).replace(/^\n/,"")).replace(/\n+$/g,""),r="\n\n¨K"+(t.gHtmlBlocks.push(r)-1)+"K\n\n"}}),x.subParser("hashHTMLBlocks",function(e,r,n){"use strict";e=n.converter._dispatch("hashHTMLBlocks.before",e,r,n);function t(e,r,t,a){return-1!==t.search(/\bmarkdown\b/)&&(e=t+n.converter.makeHtml(r)+a),"\n\n¨K"+(n.gHtmlBlocks.push(e)-1)+"K\n\n"}var a=["pre","div","h1","h2","h3","h4","h5","h6","blockquote","table","dl","ol","ul","script","noscript","form","fieldset","iframe","math","style","section","header","footer","nav","article","aside","address","audio","canvas","figure","hgroup","output","video","p"];r.backslashEscapesHTMLTags&&(e=e.replace(/\\<(\/?[^>]+?)>/g,function(e,r){return"&lt;"+r+"&gt;"}));for(var s=0;s<a.length;++s)for(var o=new RegExp("^ {0,3}(<"+a[s]+"\\b[^>]*>)","im"),i="<"+a[s]+"\\b[^>]*>",l="</"+a[s]+">";-1!==(c=x.helper.regexIndexOf(e,o));){var c=x.helper.splitAtIndex(e,c),u=x.helper.replaceRecursiveRegExp(c[1],t,i,l,"im");if(u===c[1])break;e=c[0].concat(u)}return e=e.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,x.subParser("hashElement")(e,r,n)),e=(e=x.helper.replaceRecursiveRegExp(e,function(e){return"\n\n¨K"+(n.gHtmlBlocks.push(e)-1)+"K\n\n"},"^ {0,3}\x3c!--","--\x3e","gm")).replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,x.subParser("hashElement")(e,r,n)),e=n.converter._dispatch("hashHTMLBlocks.after",e,r,n)}),x.subParser("hashHTMLSpans",function(e,r,t){"use strict";function a(e){return"¨C"+(t.gHtmlSpans.push(e)-1)+"C"}return e=(e=(e=(e=(e=t.converter._dispatch("hashHTMLSpans.before",e,r,t)).replace(/<[^>]+?\/>/gi,a)).replace(/<([^>]+?)>[\s\S]*?<\/\1>/g,a)).replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g,a)).replace(/<[^>]+?>/gi,a),e=t.converter._dispatch("hashHTMLSpans.after",e,r,t)}),x.subParser("unhashHTMLSpans",function(e,r,t){"use strict";e=t.converter._dispatch("unhashHTMLSpans.before",e,r,t);for(var a=0;a<t.gHtmlSpans.length;++a){for(var n=t.gHtmlSpans[a],s=0;/¨C(\d+)C/.test(n);){var o=RegExp.$1,n=n.replace("¨C"+o+"C",t.gHtmlSpans[o]);if(10===s){console.error("maximum nesting of 10 spans reached!!!");break}++s}e=e.replace("¨C"+a+"C",n)}return e=t.converter._dispatch("unhashHTMLSpans.after",e,r,t)}),x.subParser("hashPreCodeTags",function(e,n,s){"use strict";e=s.converter._dispatch("hashPreCodeTags.before",e,n,s);return e=x.helper.replaceRecursiveRegExp(e,function(e,r,t,a){t=t+x.subParser("encodeCode")(r,n,s)+a;return"\n\n¨G"+(s.ghCodeBlocks.push({text:e,codeblock:t})-1)+"G\n\n"},"^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>","^ {0,3}</code>\\s*</pre>","gim"),e=s.converter._dispatch("hashPreCodeTags.after",e,n,s)}),x.subParser("headers",function(e,n,s){"use strict";e=s.converter._dispatch("headers.before",e,n,s);var o=isNaN(parseInt(n.headerLevelStart))?1:parseInt(n.headerLevelStart),r=n.smoothLivePreview?/^(.+)[ \t]*\n={2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n=+[ \t]*\n+/gm,t=n.smoothLivePreview?/^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n-+[ \t]*\n+/gm,r=(e=(e=e.replace(r,function(e,r){var t=x.subParser("spanGamut")(r,n,s),r=n.noHeaderId?"":' id="'+i(r)+'"',r="<h"+o+r+">"+t+"</h"+o+">";return x.subParser("hashBlock")(r,n,s)})).replace(t,function(e,r){var t=x.subParser("spanGamut")(r,n,s),r=n.noHeaderId?"":' id="'+i(r)+'"',a=o+1,r="<h"+a+r+">"+t+"</h"+a+">";return x.subParser("hashBlock")(r,n,s)}),n.requireSpaceBeforeHeadingText?/^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm:/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm);function i(e){var r=e=n.customizedHeaderId&&(r=e.match(/\{([^{]+?)}\s*$/))&&r[1]?r[1]:e,e=x.helper.isString(n.prefixHeaderId)?n.prefixHeaderId:!0===n.prefixHeaderId?"section-":"";return n.rawPrefixHeaderId||(r=e+r),r=(n.ghCompatibleHeaderId?r.replace(/ /g,"-").replace(/&amp;/g,"").replace(/¨T/g,"").replace(/¨D/g,"").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g,""):n.rawHeaderId?r.replace(/ /g,"-").replace(/&amp;/g,"&").replace(/¨T/g,"¨").replace(/¨D/g,"$").replace(/["']/g,"-"):r.replace(/[^\w]/g,"")).toLowerCase(),n.rawPrefixHeaderId&&(r=e+r),s.hashLinkCounts[r]?r=r+"-"+s.hashLinkCounts[r]++:s.hashLinkCounts[r]=1,r}return e=e.replace(r,function(e,r,t){var a=t,a=(n.customizedHeaderId&&(a=t.replace(/\s?\{([^{]+?)}\s*$/,"")),x.subParser("spanGamut")(a,n,s)),t=n.noHeaderId?"":' id="'+i(t)+'"',r=o-1+r.length,t="<h"+r+t+">"+a+"</h"+r+">";return x.subParser("hashBlock")(t,n,s)}),e=s.converter._dispatch("headers.after",e,n,s)}),x.subParser("horizontalRule",function(e,r,t){"use strict";e=t.converter._dispatch("horizontalRule.before",e,r,t);var a=x.subParser("hashBlock")("<hr />",r,t);return e=(e=(e=e.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm,a)).replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm,a)).replace(/^ {0,2}( ?_){3,}[ \t]*$/gm,a),e=t.converter._dispatch("horizontalRule.after",e,r,t)}),x.subParser("images",function(e,r,d){"use strict";function l(e,r,t,a,n,s,o,i){var l=d.gUrls,c=d.gTitles,u=d.gDimensions;if(t=t.toLowerCase(),i=i||"",-1<e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m))a="";else if(""===a||null===a){if(a="#"+(t=""!==t&&null!==t?t:r.toLowerCase().replace(/ ?\n/g," ")),x.helper.isUndefined(l[t]))return e;a=l[t],x.helper.isUndefined(c[t])||(i=c[t]),x.helper.isUndefined(u[t])||(n=u[t].width,s=u[t].height)}r=r.replace(/"/g,"&quot;").replace(x.helper.regexes.asteriskDashAndColon,x.helper.escapeCharactersCallback);e='<img src="'+(a=a.replace(x.helper.regexes.asteriskDashAndColon,x.helper.escapeCharactersCallback))+'" alt="'+r+'"';return i&&x.helper.isString(i)&&(e+=' title="'+(i=i.replace(/"/g,"&quot;").replace(x.helper.regexes.asteriskDashAndColon,x.helper.escapeCharactersCallback))+'"'),n&&s&&(e=e+(' width="'+(n="*"===n?"auto":n))+'" height="'+(s="*"===s?"auto":s)+'"'),e+=" />"}return e=(e=(e=(e=(e=(e=d.converter._dispatch("images.before",e,r,d)).replace(/!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,l)).replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,function(e,r,t,a,n,s,o,i){return l(e,r,t,a=a.replace(/\s/g,""),n,s,0,i)})).replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,l)).replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,l)).replace(/!\[([^\[\]]+)]()()()()()/g,l),e=d.converter._dispatch("images.after",e,r,d)}),x.subParser("italicsAndBold",function(e,r,t){"use strict";return e=t.converter._dispatch("italicsAndBold.before",e,r,t),e=r.literalMidWordUnderscores?(e=(e=e.replace(/\b___(\S[\s\S]*?)___\b/g,function(e,r){return"<strong><em>"+r+"</em></strong>"})).replace(/\b__(\S[\s\S]*?)__\b/g,function(e,r){return"<strong>"+r+"</strong>"})).replace(/\b_(\S[\s\S]*?)_\b/g,function(e,r){return"<em>"+r+"</em>"}):(e=(e=e.replace(/___(\S[\s\S]*?)___/g,function(e,r){return/\S$/.test(r)?"<strong><em>"+r+"</em></strong>":e})).replace(/__(\S[\s\S]*?)__/g,function(e,r){return/\S$/.test(r)?"<strong>"+r+"</strong>":e})).replace(/_([^\s_][\s\S]*?)_/g,function(e,r){return/\S$/.test(r)?"<em>"+r+"</em>":e}),e=r.literalMidWordAsterisks?(e=(e=e.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g,function(e,r,t){return r+"<strong><em>"+t+"</em></strong>"})).replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g,function(e,r,t){return r+"<strong>"+t+"</strong>"})).replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g,function(e,r,t){return r+"<em>"+t+"</em>"}):(e=(e=e.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g,function(e,r){return/\S$/.test(r)?"<strong><em>"+r+"</em></strong>":e})).replace(/\*\*(\S[\s\S]*?)\*\*/g,function(e,r){return/\S$/.test(r)?"<strong>"+r+"</strong>":e})).replace(/\*([^\s*][\s\S]*?)\*/g,function(e,r){return/\S$/.test(r)?"<em>"+r+"</em>":e}),e=t.converter._dispatch("italicsAndBold.after",e,r,t)}),x.subParser("lists",function(e,d,c){"use strict";function p(e,r){c.gListLevel++,e=e.replace(/\n{2,}$/,"\n");var t=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,l=/\n[ \t]*\n(?!¨0)/.test(e+="¨0");return d.disableForced4SpacesIndentedSublists&&(t=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm),e=(e=e.replace(t,function(e,r,t,a,n,s,o){o=o&&""!==o.trim();var n=x.subParser("outdent")(n,d,c),i="";return s&&d.tasklists&&(i=' class="task-list-item" style="list-style-type: none;"',n=n.replace(/^[ \t]*\[(x|X| )?]/m,function(){var e='<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';return o&&(e+=" checked"),e+=">"})),n=n.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g,function(e){return"¨A"+e}),n="<li"+i+">"+(n=(n=r||-1<n.search(/\n{2,}/)?(n=x.subParser("githubCodeBlocks")(n,d,c),x.subParser("blockGamut")(n,d,c)):(n=(n=x.subParser("lists")(n,d,c)).replace(/\n$/,""),n=(n=x.subParser("hashHTMLBlocks")(n,d,c)).replace(/\n\n+/g,"\n\n"),(l?x.subParser("paragraphs"):x.subParser("spanGamut"))(n,d,c))).replace("¨A",""))+"</li>\n"})).replace(/¨0/g,""),c.gListLevel--,e=r?e.replace(/\s+$/,""):e}function h(e,r){if("ol"===r){r=e.match(/^ *(\d+)\./);if(r&&"1"!==r[1])return' start="'+r[1]+'"'}return""}function n(n,s,o){var e,i=d.disableForced4SpacesIndentedSublists?/^ ?\d+\.[ \t]/gm:/^ {0,3}\d+\.[ \t]/gm,l=d.disableForced4SpacesIndentedSublists?/^ ?[*+-][ \t]/gm:/^ {0,3}[*+-][ \t]/gm,c="ul"===s?i:l,u="";return-1!==n.search(c)?function e(r){var t=r.search(c),a=h(n,s);-1!==t?(u+="\n\n<"+s+a+">\n"+p(r.slice(0,t),!!o)+"</"+s+">\n",c="ul"===(s="ul"===s?"ol":"ul")?i:l,e(r.slice(t))):u+="\n\n<"+s+a+">\n"+p(r,!!o)+"</"+s+">\n"}(n):(e=h(n,s),u="\n\n<"+s+e+">\n"+p(n,!!o)+"</"+s+">\n"),u}return e=c.converter._dispatch("lists.before",e,d,c),e+="¨0",e=(e=c.gListLevel?e.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(e,r,t){return n(r,-1<t.search(/[*+-]/g)?"ul":"ol",!0)}):e.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(e,r,t,a){return n(t,-1<a.search(/[*+-]/g)?"ul":"ol",!1)})).replace(/¨0/,""),e=c.converter._dispatch("lists.after",e,d,c)}),x.subParser("metadata",function(e,r,a){"use strict";return r.metadata?(e=(e=(e=(e=a.converter._dispatch("metadata.before",e,r,a)).replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/,function(e,r,t){return n(t),"¨M"})).replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/,function(e,r,t){return r&&(a.metadata.format=r),n(t),"¨M"})).replace(/¨M/g,""),a.converter._dispatch("metadata.after",e,r,a)):e;function n(e){(e=(e=(a.metadata.raw=e).replace(/&/g,"&amp;").replace(/"/g,"&quot;")).replace(/\n {4}/g," ")).replace(/^([\S ]+): +([\s\S]+?)$/gm,function(e,r,t){return a.metadata.parsed[r]=t,""})}}),x.subParser("outdent",function(e,r,t){"use strict";return e=(e=(e=t.converter._dispatch("outdent.before",e,r,t)).replace(/^(\t|[ ]{1,4})/gm,"¨0")).replace(/¨0/g,""),e=t.converter._dispatch("outdent.after",e,r,t)}),x.subParser("paragraphs",function(e,r,t){"use strict";for(var a=(e=(e=(e=t.converter._dispatch("paragraphs.before",e,r,t)).replace(/^\n+/g,"")).replace(/\n+$/g,"")).split(/\n{2,}/g),n=[],s=a.length,o=0;o<s;o++){var i=a[o];0<=i.search(/¨(K|G)(\d+)\1/g)?n.push(i):0<=i.search(/\S/)&&(i=(i=x.subParser("spanGamut")(i,r,t)).replace(/^([ \t]*)/g,"<p>"),i+="</p>",n.push(i))}for(s=n.length,o=0;o<s;o++){for(var l="",c=n[o],u=!1;/¨(K|G)(\d+)\1/.test(c);){var d=RegExp.$1,p=RegExp.$2;l=(l="K"===d?t.gHtmlBlocks[p]:u?x.subParser("encodeCode")(t.ghCodeBlocks[p].text,r,t):t.ghCodeBlocks[p].codeblock).replace(/\$/g,"$$$$"),c=c.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/,l),/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(c)&&(u=!0)}n[o]=c}return e=(e=(e=n.join("\n")).replace(/^\n+/g,"")).replace(/\n+$/g,""),t.converter._dispatch("paragraphs.after",e,r,t)}),x.subParser("runExtension",function(e,r,t,a){"use strict";return e.filter?r=e.filter(r,a.converter,t):e.regex&&((a=e.regex)instanceof RegExp||(a=new RegExp(a,"g")),r=r.replace(a,e.replace)),r}),x.subParser("spanGamut",function(e,r,t){"use strict";return e=t.converter._dispatch("spanGamut.before",e,r,t),e=x.subParser("codeSpans")(e,r,t),e=x.subParser("escapeSpecialCharsWithinTagAttributes")(e,r,t),e=x.subParser("encodeBackslashEscapes")(e,r,t),e=x.subParser("images")(e,r,t),e=x.subParser("anchors")(e,r,t),e=x.subParser("autoLinks")(e,r,t),e=x.subParser("simplifiedAutoLinks")(e,r,t),e=x.subParser("emoji")(e,r,t),e=x.subParser("underline")(e,r,t),e=x.subParser("italicsAndBold")(e,r,t),e=x.subParser("strikethrough")(e,r,t),e=x.subParser("ellipsis")(e,r,t),e=x.subParser("hashHTMLSpans")(e,r,t),e=x.subParser("encodeAmpsAndAngles")(e,r,t),r.simpleLineBreaks?/\n\n¨K/.test(e)||(e=e.replace(/\n+/g,"<br />\n")):e=e.replace(/  +\n/g,"<br />\n"),e=t.converter._dispatch("spanGamut.after",e,r,t)}),x.subParser("strikethrough",function(e,t,a){"use strict";return t.strikethrough&&(e=(e=a.converter._dispatch("strikethrough.before",e,t,a)).replace(/(?:~){2}([\s\S]+?)(?:~){2}/g,function(e,r){return r=r,"<del>"+(r=t.simplifiedAutoLink?x.subParser("simplifiedAutoLinks")(r,t,a):r)+"</del>"}),e=a.converter._dispatch("strikethrough.after",e,t,a)),e}),x.subParser("stripLinkDefinitions",function(i,l,c){"use strict";function e(e,r,t,a,n,s,o){return r=r.toLowerCase(),i.toLowerCase().split(r).length-1<2?e:(t.match(/^data:.+?\/.+?;base64,/)?c.gUrls[r]=t.replace(/\s/g,""):c.gUrls[r]=x.subParser("encodeAmpsAndAngles")(t,l,c),s?s+o:(o&&(c.gTitles[r]=o.replace(/"|'/g,"&quot;")),l.parseImgDimensions&&a&&n&&(c.gDimensions[r]={width:a,height:n}),""))}return i=(i=(i=(i+="¨0").replace(/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm,e)).replace(/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,e)).replace(/¨0/,"")}),x.subParser("tables",function(e,y,P){"use strict";if(!y.tables)return e;function r(e){for(var r=e.split("\n"),t=0;t<r.length;++t)/^ {0,3}\|/.test(r[t])&&(r[t]=r[t].replace(/^ {0,3}\|/,"")),/\|[ \t]*$/.test(r[t])&&(r[t]=r[t].replace(/\|[ \t]*$/,"")),r[t]=x.subParser("codeSpans")(r[t],y,P);var a,n,s,o,i,l=r[0].split("|").map(function(e){return e.trim()}),c=r[1].split("|").map(function(e){return e.trim()}),u=[],d=[],p=[],h=[];for(r.shift(),r.shift(),t=0;t<r.length;++t)""!==r[t].trim()&&u.push(r[t].split("|").map(function(e){return e.trim()}));if(l.length<c.length)return e;for(t=0;t<c.length;++t)p.push((a=c[t],/^:[ \t]*--*$/.test(a)?' style="text-align:left;"':/^--*[ \t]*:[ \t]*$/.test(a)?' style="text-align:right;"':/^:[ \t]*--*[ \t]*:$/.test(a)?' style="text-align:center;"':""));for(t=0;t<l.length;++t)x.helper.isUndefined(p[t])&&(p[t]=""),d.push((n=l[t],s=p[t],void 0,o="",n=n.trim(),"<th"+(o=y.tablesHeaderId||y.tableHeaderId?' id="'+n.replace(/ /g,"_").toLowerCase()+'"':o)+s+">"+(n=x.subParser("spanGamut")(n,y,P))+"</th>\n"));for(t=0;t<u.length;++t){for(var _=[],g=0;g<d.length;++g)x.helper.isUndefined(u[t][g]),_.push((i=u[t][g],"<td"+p[g]+">"+x.subParser("spanGamut")(i,y,P)+"</td>\n"));h.push(_)}for(var m=d,f=h,b="<table>\n<thead>\n<tr>\n",w=m.length,k=0;k<w;++k)b+=m[k];for(b+="</tr>\n</thead>\n<tbody>\n",k=0;k<f.length;++k){b+="<tr>\n";for(var v=0;v<w;++v)b+=f[k][v];b+="</tr>\n"}return b+="</tbody>\n</table>\n"}return e=(e=(e=(e=P.converter._dispatch("tables.before",e,y,P)).replace(/\\(\|)/g,x.helper.escapeCharactersCallback)).replace(/^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,r)).replace(/^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm,r),e=P.converter._dispatch("tables.after",e,y,P)}),x.subParser("underline",function(e,r,t){"use strict";return r.underline?(e=t.converter._dispatch("underline.before",e,r,t),e=(e=r.literalMidWordUnderscores?(e=e.replace(/\b___(\S[\s\S]*?)___\b/g,function(e,r){return"<u>"+r+"</u>"})).replace(/\b__(\S[\s\S]*?)__\b/g,function(e,r){return"<u>"+r+"</u>"}):(e=e.replace(/___(\S[\s\S]*?)___/g,function(e,r){return/\S$/.test(r)?"<u>"+r+"</u>":e})).replace(/__(\S[\s\S]*?)__/g,function(e,r){return/\S$/.test(r)?"<u>"+r+"</u>":e})).replace(/(_)/g,x.helper.escapeCharactersCallback),t.converter._dispatch("underline.after",e,r,t)):e}),x.subParser("unescapeSpecialChars",function(e,r,t){"use strict";return e=(e=t.converter._dispatch("unescapeSpecialChars.before",e,r,t)).replace(/¨E(\d+)E/g,function(e,r){r=parseInt(r);return String.fromCharCode(r)}),e=t.converter._dispatch("unescapeSpecialChars.after",e,r,t)}),x.subParser("makeMarkdown.blockquote",function(e,r){"use strict";var t="";if(e.hasChildNodes())for(var a=e.childNodes,n=a.length,s=0;s<n;++s){var o=x.subParser("makeMarkdown.node")(a[s],r);""!==o&&(t+=o)}return t="> "+(t=t.trim()).split("\n").join("\n> ")}),x.subParser("makeMarkdown.codeBlock",function(e,r){"use strict";var t=e.getAttribute("language"),e=e.getAttribute("precodenum");return"```"+t+"\n"+r.preList[e]+"\n```"}),x.subParser("makeMarkdown.codeSpan",function(e){"use strict";return"`"+e.innerHTML+"`"}),x.subParser("makeMarkdown.emphasis",function(e,r){"use strict";var t="";if(e.hasChildNodes()){t+="*";for(var a=e.childNodes,n=a.length,s=0;s<n;++s)t+=x.subParser("makeMarkdown.node")(a[s],r);t+="*"}return t}),x.subParser("makeMarkdown.header",function(e,r,t){"use strict";var t=new Array(t+1).join("#"),a="";if(e.hasChildNodes())for(var a=t+" ",n=e.childNodes,s=n.length,o=0;o<s;++o)a+=x.subParser("makeMarkdown.node")(n[o],r);return a}),x.subParser("makeMarkdown.hr",function(){"use strict";return"---"}),x.subParser("makeMarkdown.image",function(e){"use strict";var r="";return e.hasAttribute("src")&&(r=(r+="!["+e.getAttribute("alt")+"](")+"<"+e.getAttribute("src")+">",e.hasAttribute("width")&&e.hasAttribute("height")&&(r+=" ="+e.getAttribute("width")+"x"+e.getAttribute("height")),e.hasAttribute("title")&&(r+=' "'+e.getAttribute("title")+'"'),r+=")"),r}),x.subParser("makeMarkdown.links",function(e,r){"use strict";var t="";if(e.hasChildNodes()&&e.hasAttribute("href")){for(var a=e.childNodes,n=a.length,t="[",s=0;s<n;++s)t+=x.subParser("makeMarkdown.node")(a[s],r);t=(t+="](")+("<"+e.getAttribute("href")+">"),e.hasAttribute("title")&&(t+=' "'+e.getAttribute("title")+'"'),t+=")"}return t}),x.subParser("makeMarkdown.list",function(e,r,t){"use strict";var a="";if(!e.hasChildNodes())return"";for(var n=e.childNodes,s=n.length,o=e.getAttribute("start")||1,i=0;i<s;++i)void 0!==n[i].tagName&&"li"===n[i].tagName.toLowerCase()&&(a+=("ol"===t?o.toString()+". ":"- ")+x.subParser("makeMarkdown.listItem")(n[i],r),++o);return(a+="\n\x3c!-- --\x3e\n").trim()}),x.subParser("makeMarkdown.listItem",function(e,r){"use strict";for(var t="",a=e.childNodes,n=a.length,s=0;s<n;++s)t+=x.subParser("makeMarkdown.node")(a[s],r);return/\n$/.test(t)?t=t.split("\n").join("\n    ").replace(/^ {4}$/gm,"").replace(/\n\n+/g,"\n\n"):t+="\n",t}),x.subParser("makeMarkdown.node",function(e,r,t){"use strict";t=t||!1;var a="";if(3===e.nodeType)return x.subParser("makeMarkdown.txt")(e,r);if(8===e.nodeType)return"\x3c!--"+e.data+"--\x3e\n\n";if(1!==e.nodeType)return"";switch(e.tagName.toLowerCase()){case"h1":t||(a=x.subParser("makeMarkdown.header")(e,r,1)+"\n\n");break;case"h2":t||(a=x.subParser("makeMarkdown.header")(e,r,2)+"\n\n");break;case"h3":t||(a=x.subParser("makeMarkdown.header")(e,r,3)+"\n\n");break;case"h4":t||(a=x.subParser("makeMarkdown.header")(e,r,4)+"\n\n");break;case"h5":t||(a=x.subParser("makeMarkdown.header")(e,r,5)+"\n\n");break;case"h6":t||(a=x.subParser("makeMarkdown.header")(e,r,6)+"\n\n");break;case"p":t||(a=x.subParser("makeMarkdown.paragraph")(e,r)+"\n\n");break;case"blockquote":t||(a=x.subParser("makeMarkdown.blockquote")(e,r)+"\n\n");break;case"hr":t||(a=x.subParser("makeMarkdown.hr")(e,r)+"\n\n");break;case"ol":t||(a=x.subParser("makeMarkdown.list")(e,r,"ol")+"\n\n");break;case"ul":t||(a=x.subParser("makeMarkdown.list")(e,r,"ul")+"\n\n");break;case"precode":t||(a=x.subParser("makeMarkdown.codeBlock")(e,r)+"\n\n");break;case"pre":t||(a=x.subParser("makeMarkdown.pre")(e,r)+"\n\n");break;case"table":t||(a=x.subParser("makeMarkdown.table")(e,r)+"\n\n");break;case"code":a=x.subParser("makeMarkdown.codeSpan")(e,r);break;case"em":case"i":a=x.subParser("makeMarkdown.emphasis")(e,r);break;case"strong":case"b":a=x.subParser("makeMarkdown.strong")(e,r);break;case"del":a=x.subParser("makeMarkdown.strikethrough")(e,r);break;case"a":a=x.subParser("makeMarkdown.links")(e,r);break;case"img":a=x.subParser("makeMarkdown.image")(e,r);break;default:a=e.outerHTML+"\n\n"}return a}),x.subParser("makeMarkdown.paragraph",function(e,r){"use strict";var t="";if(e.hasChildNodes())for(var a=e.childNodes,n=a.length,s=0;s<n;++s)t+=x.subParser("makeMarkdown.node")(a[s],r);return t=t.trim()}),x.subParser("makeMarkdown.pre",function(e,r){"use strict";e=e.getAttribute("prenum");return"<pre>"+r.preList[e]+"</pre>"}),x.subParser("makeMarkdown.strikethrough",function(e,r){"use strict";var t="";if(e.hasChildNodes()){t+="~~";for(var a=e.childNodes,n=a.length,s=0;s<n;++s)t+=x.subParser("makeMarkdown.node")(a[s],r);t+="~~"}return t}),x.subParser("makeMarkdown.strong",function(e,r){"use strict";var t="";if(e.hasChildNodes()){t+="**";for(var a=e.childNodes,n=a.length,s=0;s<n;++s)t+=x.subParser("makeMarkdown.node")(a[s],r);t+="**"}return t}),x.subParser("makeMarkdown.table",function(e,r){"use strict";for(var t="",a=[[],[]],n=e.querySelectorAll("thead>tr>th"),s=e.querySelectorAll("tbody>tr"),o=0;o<n.length;++o){var i=x.subParser("makeMarkdown.tableCell")(n[o],r),l="---";if(n[o].hasAttribute("style"))switch(n[o].getAttribute("style").toLowerCase().replace(/\s/g,"")){case"text-align:left;":l=":---";break;case"text-align:right;":l="---:";break;case"text-align:center;":l=":---:"}a[0][o]=i.trim(),a[1][o]=l}for(o=0;o<s.length;++o)for(var c=a.push([])-1,u=s[o].getElementsByTagName("td"),d=0;d<n.length;++d){var p=" ";void 0!==u[d]&&(p=x.subParser("makeMarkdown.tableCell")(u[d],r)),a[c].push(p)}var h=3;for(o=0;o<a.length;++o)for(d=0;d<a[o].length;++d){var _=a[o][d].length;h<_&&(h=_)}for(o=0;o<a.length;++o){for(d=0;d<a[o].length;++d)1===o?":"===a[o][d].slice(-1)?a[o][d]=x.helper.padEnd(a[o][d].slice(-1),h-1,"-")+":":a[o][d]=x.helper.padEnd(a[o][d],h,"-"):a[o][d]=x.helper.padEnd(a[o][d],h);t+="| "+a[o].join(" | ")+" |\n"}return t.trim()}),x.subParser("makeMarkdown.tableCell",function(e,r){"use strict";var t="";if(!e.hasChildNodes())return"";for(var a=e.childNodes,n=a.length,s=0;s<n;++s)t+=x.subParser("makeMarkdown.node")(a[s],r,!0);return t.trim()}),x.subParser("makeMarkdown.txt",function(e){"use strict";e=e.nodeValue;return e=(e=e.replace(/ +/g," ")).replace(/¨NBSP;/g," "),e=(e=(e=(e=(e=(e=(e=(e=(e=x.helper.unescapeHTMLEntities(e)).replace(/([*_~|`])/g,"\\$1")).replace(/^(\s*)>/g,"\\$1>")).replace(/^#/gm,"\\#")).replace(/^(\s*)([-=]{3,})(\s*)$/,"$1\\$2$3")).replace(/^( {0,3}\d+)\./gm,"$1\\.")).replace(/^( {0,3})([+-])/gm,"$1\\$2")).replace(/]([\s]*)\(/g,"\\]$1\\(")).replace(/^ {0,3}\[([\S \t]*?)]:/gm,"\\[$1]:")});"function"==typeof define&&define.amd?define(function(){"use strict";return x}):"undefined"!=typeof module&&module.exports?module.exports=x:this.showdown=x}.call(this);
//# sourceMappingURL=showdown.min.js.map

    let defaultOptions = { allowNamespace: 'x' };
    function _replaceSigiledElements(html, sigil, elemPrefix) {
        const lines = (html + '\n\n').split('\n'); // add space at end
        let moduloRun = '';
        let componentName = '';
        let inBody = false;
        let componentBody = [];
        const results = [];
        for (const line of lines) {
            if (line.startsWith('%')) { // Modulo CMD
                const content = line.replace(/^% ?/, ''); // Collapse 1 space
                if (!componentName) {
                    // Starting a new component
                    componentName = options.elementPrefix + content;
                    results.push('<' + componentName);
                } else if (inBody) {
                    // Already in a component body, should always assume body
                    results.push(content);
                } else if (content.startsWith(' ')) { // At least 2 spaces
                    // Not in body, but space prefixed, is attribute
                    results.push(content);
                    // TODO: Maybe apply regexp to content to ensure attribute?
                } else {
                    // Not in body, but starting body, so close opening tag
                    inBody = true;
                    results.push('>');
                    results.push(content);
                }
            } else if (componentName) {
                results.push('</' + componentName + '>');
            } else {
                results.push(line);
            }
        }
        return results.join('\n');
    }

    function _splitAndWrap(splitBy, wrappingTag, innerTag, html) {
        const splitSlides = html.split(splitBy); // Split by ----
        html = `<${ wrappingTag }>\n`; // Open wrapping tag
        for (const slideContent of splitSlides) { // Loop through slides
            html += `<${ innerTag }>\n${ slideContent }\n</${ innerTag }>`;
        }
        return html + `\n</${ wrappingTag }>`; // Close wrapping tag
    }

    // Default
    let editorURL = 'https://freecodinglessons.com/editor.html?file=';
    let basePath = '';
    let dirName = '';
    function setupEditorURL() {
        const urlParams = new URLSearchParams(location.search);
        const myPath = urlParams.get('path') || '';
        if (window.location.host.startsWith('localhost')) {
            editorURL = 'http://localhost:3334/editor.html?file=';
        } else if (window.location.host.startsWith('127')) {
            editorURL = 'http://localhost:3334/editor.html?file=';
        }
        if (myPath.includes('/') && (myPath.lastIndexOf('/') !== (myPath.length - 1))) {
            basePath = myPath.substr(0, myPath.lastIndexOf('/')); // Get base path
            editorURL += basePath;
            const dirs = basePath.split('/');
            dirs.pop();
            dirName = dirs.join('/');
        }
    }
    setupEditorURL();

    function moduloMarkdown(source, options = defaultOptions) {
        // Unescape
        source = source.replace(/&gt;/gi, '>').replace(/&lt;/gi, '<');
        let html = (new showdown.Converter()).makeHtml(source);
        if (options.allowNamespace) {
            html = _replaceSigiledElements(html, '%', options.allowNamespace + '-');
        }
        if (options.slideshow) {
            let { slideshow, slide } = options;
            if (slideshow === true) { // "slideshow: true" is default opts
                slideshow = 'x-SlideShow';
                slide = 'x-Slide';
            }
            html = _splitAndWrap(/<hr *\/?>/ig, slideshow, slide, html);
        }
        if (options.editorlinks) {
            html = html.replace(/<a href="\.\./gi, '<a target="_blank" href="' + dirName);
            html = html.replace(/<a href="\./gi, '<a target="_blank" href="' + editorURL);
        }
        return html;
    }

    //modulo.register('util', showdown);
    modulo.register('util', moduloMarkdown);

};
window.moduloBuild.modules["x18q8cua"] = function library_LandingPage (modulo) {

        const def = modulo.definitions['library_LandingPage'];
        class x_LandingPage extends window.HTMLElement {
            constructor() {
                super();
                modulo.registry.utils.initElement(modulo, def, this);
            }
            connectedCallback() {
                window.setTimeout(() => this.parsedCallback(), 0);
            }
            parsedCallback() {
                modulo.registry.utils.mountElement(modulo, def, this);
            }
        }
        modulo.registry.utils.initClass(modulo, def, x_LandingPage);
        window.customElements.define(def.TagName, x_LandingPage);
        return x_LandingPage;
    
};
window.moduloBuild.modules["x1g0b0et"] = function library_LandingPage_script (modulo) {
var script = { exports: {} }; 
const currentYear = (new Date()).getFullYear();

function prepareCallback() {
    return {
        currentYear,
    };
}


return {"prepareCallback": typeof prepareCallback !== "undefined" ? prepareCallback : undefined, setLocalVariables: function(o) {}, exports: script.exports }

};
window.moduloBuild.modules["x15i1qub"] = function library_LandingPage_template (modulo) {
return function (CTX, G) { var OUT=[];
  OUT.push("<head>\n    <title>"); // "<head><title>"
  OUT.push(G.escapeText(CTX.props.title)); // "props.title"
  OUT.push("</title>\n    <meta charset=\"utf8\" />\n    <link rel=\"stylesheet\" href=\"/static/css/site.css\" />\n</head>\n<body>\n    <div class=\"Page-container Page--"); // "</title><meta charset=\"utf8\" /><link rel=\"stylesheet\" href=\"/static/css/site.css\" /></head><body><div class=\"Page-container Page--"
  OUT.push(G.escapeText(G.filters["default"](CTX.props.cls,"landing"))); // "props.cls|default:\"landing\""
  OUT.push("\">\n      <slot></slot>\n    </div>\n    <footer class=\"Page-footer\">\n        &copy; "); // "\"><slot></slot></div><footer class=\"Page-footer\"> &copy;"
  OUT.push(G.escapeText(CTX.script.currentYear)); // "script.currentYear"
  OUT.push(" Michael Bethencourt\n        %\n        <a href=\"https://modulojs.org/\" title=\"Made with Modulo.js\">\n            A Modulo.js Course\n        </a>\n        %\n        <a href=\"https://kickstartcoding.com/\" title=\"Hosted by Kickstart Coding\">\n            In-person sessions by Kickstart Coding\n        </a>\n    </footer>\n</body>\n"); // "Michael Bethencourt % <a href=\"https://modulojs.org/\" title=\"Made with Modulo.js\"> A Modulo.js Course </a> % <a href=\"https://kickstartcoding.com/\" title=\"Hosted by Kickstart Coding\"> In-person sessions by Kickstart Coding </a></footer></body>"

return OUT.join(""); };
};
window.moduloBuild.modules["x1833ghl"] = function library_Page (modulo) {

        const def = modulo.definitions['library_Page'];
        class x_Page extends window.HTMLElement {
            constructor() {
                super();
                modulo.registry.utils.initElement(modulo, def, this);
            }
            connectedCallback() {
                window.setTimeout(() => this.parsedCallback(), 0);
            }
            parsedCallback() {
                modulo.registry.utils.mountElement(modulo, def, this);
            }
        }
        modulo.registry.utils.initClass(modulo, def, x_Page);
        window.customElements.define(def.TagName, x_Page);
        return x_Page;
    
};
window.moduloBuild.modules["x1nnnajo"] = function library_Page_template (modulo) {
return function (CTX, G) { var OUT=[];
  OUT.push("<head>\n    <title>"); // "<head><title>"
  OUT.push(G.escapeText(CTX.props.title)); // "props.title"
  OUT.push("</title>\n    <meta charset=\"utf8\" />\n    <link rel=\"stylesheet\" href=\"/static/css/site.css\" />\n</head>\n<body>\n    <div class=\"Page-container\">\n        <x-LessonNav navselected=\""); // "</title><meta charset=\"utf8\" /><link rel=\"stylesheet\" href=\"/static/css/site.css\" /></head><body><div class=\"Page-container\"><x-LessonNav navselected=\""
  OUT.push(G.escapeText(CTX.props.navselected)); // "props.navselected"
  OUT.push("\" subnav:=\""); // "\" subnav:=\""
  OUT.push(G.escapeText(G.filters["json"](CTX.props.subnav))); // "props.subnav|json"
  OUT.push("\"></x-LessonNav>\n\n        <main class=\"Page-mainContent\">\n            <slot></slot>\n        </main>\n        <nav class=\"Page-toolbar\">\n            <abbr class=\"Page-earlyAccess\" title=\"We haven't finished releasing new course yet, but we're opening it up to get early feedback! \">Early Access</abbr>\n            <!-- \n                Later, we'll put sign-in, etc. here\n                - Full feature ideas:\n                - (DONE!) Modulo editor mini? (E.g. share some code with modulo editor)\n                - Signs in to modulo.page (or whatever)\n                - Take notes / highlight page on any URL\n                - Quiz results, etc\n                - ----------------- -\n                - more stuff:\n                - Component creator! Paste in arbitrary HTML snippets, like the ones in StackOverflow, and it transforms scripts int Script -src= etc.\n                - This could be useful for a \"scratch pad\" - it transmogrifies a textarea into a component, so we can use existing shadow mounting code etc\n            -->\n        </nav>\n    </div>\n\n    <footer class=\"Page-footer\">\n        &copy; "); // "\"></x-LessonNav><main class=\"Page-mainContent\"><slot></slot></main><nav class=\"Page-toolbar\"><abbr class=\"Page-earlyAccess\" title=\"We haven't finished releasing new course yet, but we're opening it up to get early feedback! \">Early Access</abbr><!-- Later, we'll put sign-in, etc. here - Full feature ideas: - (DONE!) Modulo editor mini? (E.g. share some code with modulo editor) - Signs in to modulo.page (or whatever) - Take notes / highlight page on any URL - Quiz results, etc - ----------------- - - more stuff: - Component creator! Paste in arbitrary HTML snippets, like the ones in StackOverflow, and it transforms scripts int Script -src= etc. - This could be useful for a \"scratch pad\" - it transmogrifies a textarea into a component, so we can use existing shadow mounting code etc --></nav></div><footer class=\"Page-footer\"> &copy;"
  OUT.push(G.escapeText(CTX.script.currentYear)); // "script.currentYear"
  OUT.push(" Michael Bethencourt\n        %\n        <a href=\"https://modulojs.org/\" title=\"Made with Modulo.js\">\n            A Modulo.js Course\n        </a>\n        %\n        <a href=\"https://kickstartcoding.com/\" title=\"Hosted by Kickstart Coding\">\n            In-person sessions by Kickstart Coding\n        </a>\n    </footer>\n</body>\n"); // "Michael Bethencourt % <a href=\"https://modulojs.org/\" title=\"Made with Modulo.js\"> A Modulo.js Course </a> % <a href=\"https://kickstartcoding.com/\" title=\"Hosted by Kickstart Coding\"> In-person sessions by Kickstart Coding </a></footer></body>"

return OUT.join(""); };
};
window.moduloBuild.modules["x1s3c0k7"] = function library_TabCarousel (modulo) {

        const def = modulo.definitions['library_TabCarousel'];
        class x_TabCarousel extends window.HTMLElement {
            constructor() {
                super();
                modulo.registry.utils.initElement(modulo, def, this);
            }
            connectedCallback() {
                window.setTimeout(() => this.parsedCallback(), 0);
            }
            parsedCallback() {
                modulo.registry.utils.mountElement(modulo, def, this);
            }
        }
        modulo.registry.utils.initClass(modulo, def, x_TabCarousel);
        window.customElements.define(def.TagName, x_TabCarousel);
        return x_TabCarousel;
    
};
window.moduloBuild.modules["x1d2u1uf"] = function library_TabCarousel_script (modulo) {
var script = { exports: {} }; var state, element;

        // TODO: Make more generalized, and then reuse scirpt between Tabs and Slides
        function prepareCallback() {
            const tabs = state.tabs;
            if (!tabs.length) {
                let index = 0;
                for (const child of element.originalChildren) {
                    const title = child.getAttribute('title');
                    if (title) {
                        tabs.push({ index, html: child.innerHTML, title });
                        index++;
                    }
                }
            }
            let offset = 0;
            for (const tab of tabs) {
                tab.isSelected = tab.index === state.select;
                if (tab.isSelected) {
                    offset = tab.index;
                }
            }
            state.tabs = tabs;
            state.offset = offset;
        }

        function setSlide(newIndex) {
            state.select = newIndex;
        }
    
return {"prepareCallback": typeof prepareCallback !== "undefined" ? prepareCallback : undefined, "setSlide": typeof setSlide !== "undefined" ? setSlide : undefined, setLocalVariables: function(o) {state=o.state; element=o.element}, exports: script.exports }

};
window.moduloBuild.modules["xx6pq29v"] = function library_TabCarousel_template (modulo) {
return function (CTX, G) { var OUT=[];
  OUT.push("\n    "); // ""

return OUT.join(""); };
};
window.moduloBuild.nameToHash = {
 "library1_configuration": "x1dl9f33",
 "library_Page": "x1833ghl",
 "library_LandingPage": "x18q8cua",
 "library_TabCarousel": "x1s3c0k7",
 "library_Page_script": "x1g0b0et",
 "library_LandingPage_script": "x1g0b0et",
 "library_TabCarousel_script": "x1d2u1uf",
 "library1_Markdown": "x18768n2",
 "library1_SlideShow": "x12ecn35",
 "library1_Slide": "xxb3ajao",
 "library1_LessonPage": "xx6vu8g6",
 "library1_LessonNav": "x1uccufu",
 "library1_Markdown_script": "x1nrlkcc",
 "library1_SlideShow_script": "xxn0hhmv",
 "library1_LessonPage_script": "x1ls6273",
 "library1_LessonNav_script": "xxl1jd7t",
 "library_Page_template": "x1nnnajo",
 "library_LandingPage_template": "x15i1qub",
 "library_TabCarousel_template": "xx6pq29v",
 "library1_SlideShow_template": "xxuc5o6h",
 "library1_LessonPage_template": "x12323c6",
 "library1_LessonPage_staticdata": "x1bl25af",
 "library1_LessonNav_template": "x1725c3s"
};
window.moduloBuild.definitions = {
 "library": {
  "Type": "Library",
  "DefLoaders": [
   "DefinedAs",
   "Src",
   "Content",
   "SetAttrs"
  ],
  "namespace": "x",
  "DefName": null,
  "Parent": null,
  "Name": "library",
  "DefinitionName": "library",
  "Source": "http://127.0.0.1:6627/static/libraries/layout.html",
  "ChildrenNames": [
   "library_Page",
   "library_LandingPage",
   "library_TabCarousel"
  ]
 },
 "library1": {
  "Type": "Library",
  "DefLoaders": [
   "DefinedAs",
   "Src",
   "Content",
   "SetAttrs"
  ],
  "namespace": "x",
  "DefName": null,
  "Parent": null,
  "Name": "library1",
  "DefinitionName": "library1",
  "Source": "http://127.0.0.1:6627/static/libraries/courseware.html",
  "ChildrenNames": [
   "library1_configuration",
   "library1_Markdown",
   "library1_SlideShow",
   "library1_Slide",
   "library1_LessonPage",
   "library1_LessonNav"
  ]
 },
 "library_Page": {
  "mode": "vanish-into-document",
  "rerender": "event",
  "engine": "Reconciler",
  "RenderObj": "component",
  "DefLoaders": [
   "DefinedAs",
   "Src",
   "Content"
  ],
  "DefBuilders": [
   "CustomElement",
   "Code"
  ],
  "DefFinalizers": [
   "MainRequire"
  ],
  "Directives": [
   "slotLoad",
   "eventMount",
   "eventUnmount",
   "dataPropMount",
   "dataPropUnmount"
  ],
  "Type": "Component",
  "namespace": "x",
  "name": "Page",
  "DefName": null,
  "Parent": "library",
  "Name": "Page",
  "DefinitionName": "library_Page",
  "ChildrenNames": [
   "library_Page_props",
   "library_Page_template",
   "library_Page_script",
   "library_Page_style"
  ],
  "TagName": "x-page"
 },
 "library_LandingPage": {
  "mode": "vanish-into-document",
  "rerender": "event",
  "engine": "Reconciler",
  "RenderObj": "component",
  "DefLoaders": [
   "DefinedAs",
   "Src",
   "Content"
  ],
  "DefBuilders": [
   "CustomElement",
   "Code"
  ],
  "DefFinalizers": [
   "MainRequire"
  ],
  "Directives": [
   "slotLoad",
   "eventMount",
   "eventUnmount",
   "dataPropMount",
   "dataPropUnmount"
  ],
  "Type": "Component",
  "namespace": "x",
  "name": "LandingPage",
  "DefName": null,
  "Parent": "library",
  "Name": "LandingPage",
  "DefinitionName": "library_LandingPage",
  "ChildrenNames": [
   "library_LandingPage_props",
   "library_LandingPage_template",
   "library_LandingPage_style",
   "library_LandingPage_script"
  ],
  "TagName": "x-landingpage"
 },
 "library_TabCarousel": {
  "mode": "regular",
  "rerender": "event",
  "engine": "Reconciler",
  "RenderObj": "component",
  "DefLoaders": [
   "DefinedAs",
   "Src",
   "Content"
  ],
  "DefBuilders": [
   "CustomElement",
   "Code"
  ],
  "DefFinalizers": [
   "MainRequire"
  ],
  "Directives": [
   "slotLoad",
   "eventMount",
   "eventUnmount",
   "dataPropMount",
   "dataPropUnmount"
  ],
  "Type": "Component",
  "namespace": "x",
  "name": "TabCarousel",
  "DefName": null,
  "Parent": "library",
  "Name": "TabCarousel",
  "DefinitionName": "library_TabCarousel",
  "ChildrenNames": [
   "library_TabCarousel_template",
   "library_TabCarousel_state",
   "library_TabCarousel_script"
  ],
  "TagName": "x-tabcarousel"
 },
 "library_Page_props": {
  "Type": "Props",
  "title": "",
  "navselected": "",
  "subnav": "",
  "Content": "",
  "DefName": null,
  "Parent": "library_Page",
  "Name": "props",
  "DefinitionName": "library_Page_props"
 },
 "library_Page_template": {
  "Type": "Template",
  "DefFinalizers": [
   "TemplatePrebuild"
  ],
  "DefName": null,
  "Parent": "library_Page",
  "Name": "template",
  "DefinitionName": "library_Page_template",
  "Source": "http://127.0.0.1:6627/static/libraries/layout/Page.html",
  "Hash": "Tx1nnnajo"
 },
 "library_Page_script": {
  "Type": "Script",
  "lifecycle": null,
  "DefBuilders": [
   "Content|ScriptAutoExport",
   "Code"
  ],
  "DefName": null,
  "Parent": "library_Page",
  "Name": "script",
  "DefinitionName": "library_Page_script",
  "Source": "http://127.0.0.1:6627/static/libraries/layout/Page.js",
  "Directives": []
 },
 "library_Page_style": {
  "Type": "Style",
  "DefFinalizers": [
   "Content|PrefixCSS"
  ],
  "DefName": null,
  "Parent": "library_Page",
  "Name": "style",
  "DefinitionName": "library_Page_style",
  "Source": "http://127.0.0.1:6627/static/libraries/layout/Page.css"
 },
 "library_LandingPage_props": {
  "Type": "Props",
  "title": "",
  "cls": "",
  "Content": "",
  "DefName": null,
  "Parent": "library_LandingPage",
  "Name": "props",
  "DefinitionName": "library_LandingPage_props"
 },
 "library_LandingPage_template": {
  "Type": "Template",
  "DefFinalizers": [
   "TemplatePrebuild"
  ],
  "DefName": null,
  "Parent": "library_LandingPage",
  "Name": "template",
  "DefinitionName": "library_LandingPage_template",
  "Source": "http://127.0.0.1:6627/static/libraries/layout/LandingPage.html",
  "Hash": "Tx15i1qub"
 },
 "library_LandingPage_style": {
  "Type": "Style",
  "DefFinalizers": [
   "Content|PrefixCSS"
  ],
  "DefName": null,
  "Parent": "library_LandingPage",
  "Name": "style",
  "DefinitionName": "library_LandingPage_style",
  "Source": "http://127.0.0.1:6627/static/libraries/layout/LandingPage.css"
 },
 "library_LandingPage_script": {
  "Type": "Script",
  "lifecycle": null,
  "DefBuilders": [
   "Content|ScriptAutoExport",
   "Code"
  ],
  "DefName": null,
  "Parent": "library_LandingPage",
  "Name": "script",
  "DefinitionName": "library_LandingPage_script",
  "Source": "http://127.0.0.1:6627/static/libraries/layout/Page.js",
  "Directives": []
 },
 "library_TabCarousel_template": {
  "Type": "Template",
  "DefFinalizers": [
   "TemplatePrebuild"
  ],
  "DefName": null,
  "Parent": "library_TabCarousel",
  "Name": "template",
  "DefinitionName": "library_TabCarousel_template",
  "Hash": "Txx6pq29v"
 },
 "library_TabCarousel_state": {
  "Type": "State",
  "Directives": [
   "bindMount",
   "bindUnmount"
  ],
  "Store": null,
  "tabs": [],
  "Content": "",
  "DefName": null,
  "Parent": "library_TabCarousel",
  "Name": "state",
  "DefinitionName": "library_TabCarousel_state"
 },
 "library_TabCarousel_script": {
  "Type": "Script",
  "lifecycle": "initialized",
  "DefBuilders": [
   "Content|ScriptAutoExport",
   "Code"
  ],
  "DefName": null,
  "Parent": "library_TabCarousel",
  "Name": "script",
  "DefinitionName": "library_TabCarousel_script",
  "Directives": []
 },
 "library1_configuration": {
  "Type": "Configuration",
  "DefLoaders": [
   "DefinedAs",
   "SetAttrs",
   "Src"
  ],
  "DefBuilders": [
   "Content|Code",
   "DefinitionName|MainRequire"
  ],
  "DefName": null,
  "Parent": "library1",
  "Name": "configuration",
  "Source": "https://unpkg.com/showdown/dist/showdown.min.js"
 },
 "library1_Markdown": {
  "mode": "regular",
  "rerender": "event",
  "engine": "Reconciler",
  "RenderObj": "component",
  "DefLoaders": [
   "DefinedAs",
   "Src",
   "Content"
  ],
  "DefBuilders": [
   "CustomElement",
   "Code"
  ],
  "DefFinalizers": [
   "MainRequire"
  ],
  "Directives": [
   "slotLoad",
   "eventMount",
   "eventUnmount",
   "dataPropMount",
   "dataPropUnmount"
  ],
  "Type": "Component",
  "namespace": "x",
  "name": "Markdown",
  "DefName": null,
  "Parent": "library1",
  "Name": "Markdown",
  "DefinitionName": "library1_Markdown",
  "ChildrenNames": [
   "library1_Markdown_props",
   "library1_Markdown_state",
   "library1_Markdown_script"
  ],
  "TagName": "x-markdown"
 },
 "library1_SlideShow": {
  "mode": "regular",
  "rerender": "event",
  "engine": "Reconciler",
  "RenderObj": "component",
  "DefLoaders": [
   "DefinedAs",
   "Src",
   "Content"
  ],
  "DefBuilders": [
   "CustomElement",
   "Code"
  ],
  "DefFinalizers": [
   "MainRequire"
  ],
  "Directives": [
   "slotLoad",
   "eventMount",
   "eventUnmount",
   "dataPropMount",
   "dataPropUnmount"
  ],
  "Type": "Component",
  "namespace": "x",
  "name": "SlideShow",
  "DefName": null,
  "Parent": "library1",
  "Name": "SlideShow",
  "DefinitionName": "library1_SlideShow",
  "ChildrenNames": [
   "library1_SlideShow_template",
   "library1_SlideShow_state",
   "library1_SlideShow_script",
   "library1_SlideShow_style"
  ],
  "TagName": "x-slideshow"
 },
 "library1_Slide": {
  "mode": "regular",
  "rerender": "event",
  "engine": "Reconciler",
  "RenderObj": "component",
  "DefLoaders": [
   "DefinedAs",
   "Src",
   "Content"
  ],
  "DefBuilders": [
   "CustomElement",
   "Code"
  ],
  "DefFinalizers": [
   "MainRequire"
  ],
  "Directives": [
   "slotLoad",
   "eventMount",
   "eventUnmount",
   "dataPropMount",
   "dataPropUnmount"
  ],
  "Type": "Component",
  "namespace": "x",
  "name": "Slide",
  "DefName": null,
  "Parent": "library1",
  "Name": "Slide",
  "DefinitionName": "library1_Slide",
  "ChildrenNames": [
   "library1_Slide_style"
  ],
  "TagName": "x-slide"
 },
 "library1_LessonPage": {
  "mode": "vanish-into-document",
  "rerender": "event",
  "engine": "Reconciler",
  "RenderObj": "component",
  "DefLoaders": [
   "DefinedAs",
   "Src",
   "Content"
  ],
  "DefBuilders": [
   "CustomElement",
   "Code"
  ],
  "DefFinalizers": [
   "MainRequire"
  ],
  "Directives": [
   "slotLoad",
   "eventMount",
   "eventUnmount",
   "dataPropMount",
   "dataPropUnmount"
  ],
  "Type": "Component",
  "namespace": "x",
  "name": "LessonPage",
  "DefName": null,
  "Parent": "library1",
  "Name": "LessonPage",
  "DefinitionName": "library1_LessonPage",
  "ChildrenNames": [
   "library1_LessonPage_props",
   "library1_LessonPage_template",
   "library1_LessonPage_staticdata",
   "library1_LessonPage_script",
   "library1_LessonPage_style"
  ],
  "TagName": "x-lessonpage"
 },
 "library1_LessonNav": {
  "mode": "regular",
  "rerender": "event",
  "engine": "Reconciler",
  "RenderObj": "component",
  "DefLoaders": [
   "DefinedAs",
   "Src",
   "Content"
  ],
  "DefBuilders": [
   "CustomElement",
   "Code"
  ],
  "DefFinalizers": [
   "MainRequire"
  ],
  "Directives": [
   "slotLoad",
   "eventMount",
   "eventUnmount",
   "dataPropMount",
   "dataPropUnmount"
  ],
  "Type": "Component",
  "namespace": "x",
  "name": "LessonNav",
  "DefName": null,
  "Parent": "library1",
  "Name": "LessonNav",
  "DefinitionName": "library1_LessonNav",
  "ChildrenNames": [
   "library1_LessonNav_props",
   "library1_LessonNav_template",
   "library1_LessonNav_state",
   "library1_LessonNav_script",
   "library1_LessonNav_style"
  ],
  "TagName": "x-lessonnav"
 },
 "library1_Markdown_props": {
  "Type": "Props",
  "slideshow": "",
  "firstslide": "",
  "editorlinks": "",
  "src": "",
  "Content": "",
  "DefName": null,
  "Parent": "library1_Markdown",
  "Name": "props",
  "DefinitionName": "library1_Markdown_props"
 },
 "library1_Markdown_state": {
  "Type": "State",
  "Directives": [
   "bindMount",
   "bindUnmount"
  ],
  "Store": null,
  "results": null,
  "source": null,
  "Content": "",
  "DefName": null,
  "Parent": "library1_Markdown",
  "Name": "state",
  "DefinitionName": "library1_Markdown_state"
 },
 "library1_Markdown_script": {
  "Type": "Script",
  "lifecycle": "initialized",
  "DefBuilders": [
   "Content|ScriptAutoExport",
   "Code"
  ],
  "DefName": null,
  "Parent": "library1_Markdown",
  "Name": "script",
  "DefinitionName": "library1_Markdown_script",
  "Directives": []
 },
 "library1_SlideShow_template": {
  "Type": "Template",
  "DefFinalizers": [
   "TemplatePrebuild"
  ],
  "DefName": null,
  "Parent": "library1_SlideShow",
  "Name": "template",
  "DefinitionName": "library1_SlideShow_template",
  "Hash": "Txxuc5o6h"
 },
 "library1_SlideShow_state": {
  "Type": "State",
  "Directives": [
   "bindMount",
   "bindUnmount"
  ],
  "Store": null,
  "select": 0,
  "slides": [],
  "Content": "",
  "DefName": null,
  "Parent": "library1_SlideShow",
  "Name": "state",
  "DefinitionName": "library1_SlideShow_state"
 },
 "library1_SlideShow_script": {
  "Type": "Script",
  "lifecycle": "initialized",
  "DefBuilders": [
   "Content|ScriptAutoExport",
   "Code"
  ],
  "DefName": null,
  "Parent": "library1_SlideShow",
  "Name": "script",
  "DefinitionName": "library1_SlideShow_script",
  "Directives": []
 },
 "library1_SlideShow_style": {
  "Type": "Style",
  "DefFinalizers": [
   "Content|PrefixCSS"
  ],
  "DefName": null,
  "Parent": "library1_SlideShow",
  "Name": "style",
  "DefinitionName": "library1_SlideShow_style",
  "Source": "http://127.0.0.1:6627/static/libraries/courseware/SlideShow.css"
 },
 "library1_Slide_style": {
  "Type": "Style",
  "DefFinalizers": [
   "Content|PrefixCSS"
  ],
  "DefName": null,
  "Parent": "library1_Slide",
  "Name": "style",
  "DefinitionName": "library1_Slide_style"
 },
 "library1_LessonPage_props": {
  "Type": "Props",
  "path": "",
  "Content": "",
  "DefName": null,
  "Parent": "library1_LessonPage",
  "Name": "props",
  "DefinitionName": "library1_LessonPage_props"
 },
 "library1_LessonPage_template": {
  "Type": "Template",
  "DefFinalizers": [
   "TemplatePrebuild"
  ],
  "DefName": null,
  "Parent": "library1_LessonPage",
  "Name": "template",
  "DefinitionName": "library1_LessonPage_template",
  "Source": "http://127.0.0.1:6627/static/libraries/layout/LessonPage.html",
  "Hash": "Tx12323c6"
 },
 "library1_LessonPage_staticdata": {
  "Type": "StaticData",
  "DefLoaders": [
   "DefinedAs",
   "DataType",
   "Src"
  ],
  "DefBuilders": [
   "ContentCSV",
   "ContentTXT",
   "ContentJSON",
   "ContentJS"
  ],
  "DefFinalizers": [
   "Code",
   "RequireData"
  ],
  "Content": "{\"files\":[\"/home/michaelb/projects/freecodinglessons/src/foundations/.git\",\"/home/michaelb/projects/freecodinglessons/src/foundations/.gitignore\",\"/home/michaelb/projects/freecodinglessons/src/foundations/.overview.md.swp\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act1/challenge1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act1/challenge2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act1/challenge3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act1/challenge4.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act1/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act2/challenge1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act2/challenge2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act2/challenge3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act2/challenge4.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act2/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act3/challenge1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act3/challenge2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act3/challenge3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act3/challenge4.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act3/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act4/challenge1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act4/challenge2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act4/challenge3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act4/challenge4.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act4/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/slides/part_1_terminology.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/solutions/solution1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/solutions/solution2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/solutions/solution3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/solutions/solution4.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act1/challenge1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act1/challenge2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act1/challenge3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act1/challenge4.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act1/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act2/challenge1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act2/challenge2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act2/challenge3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act2/challenge4.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act2/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act3/challenge1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act3/challenge2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act3/challenge3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act3/challenge4.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act3/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act4/challenge1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act4/challenge2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act4/challenge3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act4/challenge4.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act4/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/solutions/solution1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/solutions/solution2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/solutions/solution3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/solutions/solution4.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project1/clue1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project1/clue2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project1/clue3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project1/clue4.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project1/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project1/project1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project2/clue1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project2/clue2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project2/clue3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project2/clue4.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project2/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project2/project2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project3/clue1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project3/clue2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project3/clue3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project3/clue4.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project3/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project3/project3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project4/clue1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project4/clue2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project4/clue3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project4/clue4.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project4/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project4/project4.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.3/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.3/solutions/.project_4.html.swp\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.3/solutions/project_1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.3/solutions/project_2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.3/solutions/project_3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.3/solutions/project_4.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act1/challenge1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act1/challenge2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act1/challenge3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act1/challenge4.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act1/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/adalovelace.png\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/alanturing.png\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/charlesbabbage.jpg\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/adalovelace.png\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/alanturing.png\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/babbage.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/charlesbabbage.jpg\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/lovelace.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/turing.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch3/adalovelace.png\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch3/alanturing.png\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch3/babbage.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch3/charlesbabbage.jpg\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch3/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch3/lovelace.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch3/turing.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch4/adalovelace.png\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch4/alanturing.png\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch4/babbage.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch4/charlesbabbage.jpg\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch4/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch4/lovelace.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch4/turing.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act3/ch1ch2/art.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act3/ch1ch2/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act3/ch1ch2/photos.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act3/ch3ch4/art.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act3/ch3ch4/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act3/ch3ch4/mystyles.css\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act3/ch3ch4/photos.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act3/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act4/ch1ch2/css/site.css\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act4/ch1ch2/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act4/ch3ch4/css/site.css\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act4/ch3ch4/images/coolmonster.svg\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act4/ch3ch4/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act4/ch3ch4/shop.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act4/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/old_index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols1/solution1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols1/solution2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols1/solution3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols1/solution4.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/adalovelace.png\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/alanturing.png\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/babbage.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/charlesbabbage.jpg\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/lovelace.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/turing.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols3/art.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols3/extrastyle.css\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols3/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols3/mystyles.css\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols3/photos.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols4/css/site.css\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols4/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols4/shop.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.2/activities/act1/challenge1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.2/activities/act1/challenge2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.2/activities/act1/challenge3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.2/activities/act1/challenge4.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.2/activities/act1/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.2/activities/act2/challenge1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.2/activities/act2/challenge2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.2/activities/act2/challenge3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.2/activities/act2/challenge4.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.2/activities/act2/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.2/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.2/solutions/sols1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.2/solutions/sols2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.3/activities/project1/clue1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.3/activities/project1/clue2.css\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.3/activities/project1/clue3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.3/activities/project1/clue4.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.3/activities/project1/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.3/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.3/solutions/project1/articles.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.3/solutions/project1/css/site.css\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.3/solutions/project1/images/coolmonster.svg\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.3/solutions/project1/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.3/solutions/project1/shop.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/act4/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/challenge_1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/challenge_1_styles.css\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/challenge_2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/challenge_2_styles.css\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/challenge_3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/challenge_3_styles.css\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act2/challenge1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act2/challenge2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act2/challenge3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act2/challenge4.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act2/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act3/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act4/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/.sols2.html.swp\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols1/challenge_1_styles.css\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols1/challenge_2_styles.css\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols1/challenge_3_styles.css\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols1/solution_1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols1/solution_2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols1/solution_3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols4.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.2/activities/act1/act4/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.2/activities/act1/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.2/activities/act2/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.2/activities/act3/challenge1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.2/activities/act3/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.2/activities/act4/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.2/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.2/solutions/.sols2.html.swp\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.2/solutions/.sols3.html.swp\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.2/solutions/.sols4.html.swp\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.2/solutions/sols2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.2/solutions/sols3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.2/solutions/sols4.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.3/activities/act1/act4/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.3/activities/act1/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.3/activities/act2/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.3/activities/act3/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.3/activities/act4/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.3/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.3/solutions/project_1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/4.1/activities/act1/challenge1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/4.1/activities/act1/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/4.1/activities/act2/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/4.1/activities/act3/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/4.1/activities/act4/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/4.1/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/4.2/activities/act1/act4/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/4.2/activities/act1/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/4.2/activities/act2/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/4.2/activities/act3/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/4.2/activities/act4/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/4.2/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/4.3/activities/act1/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/4.3/activities/act2/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/4.3/activities/act3/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/4.3/activities/act4/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/4.3/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/4.3/solutions/project_1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/4.3/solutions/project_2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/4.3/solutions/project_4.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/LICENSE\",\"/home/michaelb/projects/freecodinglessons/src/foundations/README.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/overview.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/overview.md\"]}",
  "DefName": null,
  "Parent": "library1_LessonPage",
  "Name": "staticdata",
  "DefinitionName": "library1_LessonPage_staticdata",
  "Source": "http://127.0.0.1:6627/__dirlist/foundations.json",
  "data": {
   "files": [
    "/home/michaelb/projects/freecodinglessons/src/foundations/.git",
    "/home/michaelb/projects/freecodinglessons/src/foundations/.gitignore",
    "/home/michaelb/projects/freecodinglessons/src/foundations/.overview.md.swp",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act1/challenge1.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act1/challenge2.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act1/challenge3.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act1/challenge4.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act1/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act2/challenge1.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act2/challenge2.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act2/challenge3.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act2/challenge4.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act2/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act3/challenge1.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act3/challenge2.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act3/challenge3.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act3/challenge4.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act3/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act4/challenge1.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act4/challenge2.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act4/challenge3.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act4/challenge4.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act4/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.1/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.1/slides/part_1_terminology.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.1/solutions/solution1.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.1/solutions/solution2.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.1/solutions/solution3.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.1/solutions/solution4.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act1/challenge1.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act1/challenge2.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act1/challenge3.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act1/challenge4.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act1/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act2/challenge1.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act2/challenge2.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act2/challenge3.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act2/challenge4.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act2/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act3/challenge1.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act3/challenge2.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act3/challenge3.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act3/challenge4.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act3/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act4/challenge1.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act4/challenge2.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act4/challenge3.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act4/challenge4.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act4/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.2/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.2/solutions/solution1.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.2/solutions/solution2.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.2/solutions/solution3.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.2/solutions/solution4.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project1/clue1.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project1/clue2.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project1/clue3.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project1/clue4.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project1/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project1/project1.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project2/clue1.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project2/clue2.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project2/clue3.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project2/clue4.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project2/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project2/project2.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project3/clue1.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project3/clue2.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project3/clue3.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project3/clue4.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project3/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project3/project3.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project4/clue1.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project4/clue2.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project4/clue3.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project4/clue4.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project4/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project4/project4.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.3/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.3/solutions/.project_4.html.swp",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.3/solutions/project_1.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.3/solutions/project_2.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.3/solutions/project_3.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.3/solutions/project_4.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act1/challenge1.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act1/challenge2.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act1/challenge3.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act1/challenge4.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act1/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/adalovelace.png",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/alanturing.png",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/charlesbabbage.jpg",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/adalovelace.png",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/alanturing.png",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/babbage.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/charlesbabbage.jpg",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/lovelace.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/turing.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch3/adalovelace.png",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch3/alanturing.png",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch3/babbage.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch3/charlesbabbage.jpg",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch3/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch3/lovelace.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch3/turing.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch4/adalovelace.png",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch4/alanturing.png",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch4/babbage.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch4/charlesbabbage.jpg",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch4/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch4/lovelace.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch4/turing.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act3/ch1ch2/art.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act3/ch1ch2/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act3/ch1ch2/photos.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act3/ch3ch4/art.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act3/ch3ch4/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act3/ch3ch4/mystyles.css",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act3/ch3ch4/photos.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act3/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act4/ch1ch2/css/site.css",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act4/ch1ch2/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act4/ch3ch4/css/site.css",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act4/ch3ch4/images/coolmonster.svg",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act4/ch3ch4/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act4/ch3ch4/shop.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act4/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/old_index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols1/solution1.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols1/solution2.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols1/solution3.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols1/solution4.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/adalovelace.png",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/alanturing.png",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/babbage.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/charlesbabbage.jpg",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/lovelace.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/turing.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols3/art.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols3/extrastyle.css",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols3/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols3/mystyles.css",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols3/photos.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols4/css/site.css",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols4/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols4/shop.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.2/activities/act1/challenge1.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.2/activities/act1/challenge2.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.2/activities/act1/challenge3.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.2/activities/act1/challenge4.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.2/activities/act1/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.2/activities/act2/challenge1.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.2/activities/act2/challenge2.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.2/activities/act2/challenge3.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.2/activities/act2/challenge4.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.2/activities/act2/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.2/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.2/solutions/sols1.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.2/solutions/sols2.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.3/activities/project1/clue1.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.3/activities/project1/clue2.css",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.3/activities/project1/clue3.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.3/activities/project1/clue4.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.3/activities/project1/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.3/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.3/solutions/project1/articles.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.3/solutions/project1/css/site.css",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.3/solutions/project1/images/coolmonster.svg",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.3/solutions/project1/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.3/solutions/project1/shop.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/act4/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/challenge_1.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/challenge_1_styles.css",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/challenge_2.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/challenge_2_styles.css",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/challenge_3.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/challenge_3_styles.css",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act2/challenge1.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act2/challenge2.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act2/challenge3.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act2/challenge4.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act2/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act3/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act4/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/.sols2.html.swp",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols1/challenge_1_styles.css",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols1/challenge_2_styles.css",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols1/challenge_3_styles.css",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols1/solution_1.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols1/solution_2.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols1/solution_3.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols2.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols3.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols4.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.2/activities/act1/act4/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.2/activities/act1/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.2/activities/act2/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.2/activities/act3/challenge1.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.2/activities/act3/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.2/activities/act4/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.2/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.2/solutions/.sols2.html.swp",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.2/solutions/.sols3.html.swp",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.2/solutions/.sols4.html.swp",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.2/solutions/sols2.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.2/solutions/sols3.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.2/solutions/sols4.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.3/activities/act1/act4/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.3/activities/act1/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.3/activities/act2/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.3/activities/act3/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.3/activities/act4/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.3/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.3/solutions/project_1.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/4.1/activities/act1/challenge1.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/4.1/activities/act1/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/4.1/activities/act2/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/4.1/activities/act3/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/4.1/activities/act4/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/4.1/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/4.2/activities/act1/act4/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/4.2/activities/act1/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/4.2/activities/act2/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/4.2/activities/act3/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/4.2/activities/act4/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/4.2/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/4.3/activities/act1/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/4.3/activities/act2/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/4.3/activities/act3/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/4.3/activities/act4/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/4.3/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/4.3/solutions/project_1.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/4.3/solutions/project_2.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/4.3/solutions/project_4.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/LICENSE",
    "/home/michaelb/projects/freecodinglessons/src/foundations/README.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/overview.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/overview.md"
   ]
  }
 },
 "library1_LessonPage_script": {
  "Type": "Script",
  "lifecycle": null,
  "DefBuilders": [
   "Content|ScriptAutoExport",
   "Code"
  ],
  "DefName": null,
  "Parent": "library1_LessonPage",
  "Name": "script",
  "DefinitionName": "library1_LessonPage_script",
  "Source": "http://127.0.0.1:6627/static/libraries/layout/LessonPage.js",
  "Directives": []
 },
 "library1_LessonPage_style": {
  "Type": "Style",
  "DefFinalizers": [
   "Content|PrefixCSS"
  ],
  "DefName": null,
  "Parent": "library1_LessonPage",
  "Name": "style",
  "DefinitionName": "library1_LessonPage_style",
  "Source": "http://127.0.0.1:6627/static/libraries/layout/LessonPage.css"
 },
 "library1_LessonNav_props": {
  "Type": "Props",
  "navselected": "",
  "subnav": "",
  "Content": "",
  "DefName": null,
  "Parent": "library1_LessonNav",
  "Name": "props",
  "DefinitionName": "library1_LessonNav_props"
 },
 "library1_LessonNav_template": {
  "Type": "Template",
  "DefFinalizers": [
   "TemplatePrebuild"
  ],
  "DefName": null,
  "Parent": "library1_LessonNav",
  "Name": "template",
  "DefinitionName": "library1_LessonNav_template",
  "Source": "http://127.0.0.1:6627/static/libraries/layout/LessonNav.html",
  "Hash": "Tx1725c3s"
 },
 "library1_LessonNav_state": {
  "Type": "State",
  "Directives": [
   "bindMount",
   "bindUnmount"
  ],
  "Store": null,
  "showExtra": false,
  "Content": "",
  "DefName": null,
  "Parent": "library1_LessonNav",
  "Name": "state",
  "DefinitionName": "library1_LessonNav_state"
 },
 "library1_LessonNav_script": {
  "Type": "Script",
  "lifecycle": null,
  "DefBuilders": [
   "Content|ScriptAutoExport",
   "Code"
  ],
  "DefName": null,
  "Parent": "library1_LessonNav",
  "Name": "script",
  "DefinitionName": "library1_LessonNav_script",
  "Source": "http://127.0.0.1:6627/static/libraries/layout/LessonNav.js",
  "Directives": []
 },
 "library1_LessonNav_style": {
  "Type": "Style",
  "DefFinalizers": [
   "Content|PrefixCSS"
  ],
  "DefName": null,
  "Parent": "library1_LessonNav",
  "Name": "style",
  "DefinitionName": "library1_LessonNav_style",
  "Source": "http://127.0.0.1:6627/static/libraries/layout/LessonNav.css"
 }
};

// Modulo.js - Copyright 2023 - LGPL 2.1 - https://modulojs.org/
window.ModuloPrevious = window.Modulo; // Avoid overwriting Modulo
window.moduloPrevious = window.modulo;
window.Modulo = class Modulo {
    constructor(parentModulo = null, registryKeys = null) {
        window._moduloID = (window._moduloID || 0) + 1; // Global ID
        window._moduloStack = (window._moduloStack || [ ]);
        this.id = window._moduloID;
        this._configSteps = 0;
        this.config = {};
        this.definitions = {};
        this.stores = {};
        if (parentModulo) { // TODO: Delete code path (Note: parentModulo arg is still being used by mws/Demo.js)
            this.parentModulo = parentModulo;
            const { deepClone } = modulo.registry.utils;
            this.config = deepClone(parentModulo.config, parentModulo);
            this.registry = deepClone(parentModulo.registry, parentModulo);
            this.assets = parentModulo.assetManager;
        } else {
            this.registry = Object.fromEntries(registryKeys.map(cat => [ cat, {} ] ));
        }
    }

    static moduloClone(modulo, other) {
        return modulo; // Never clone Modulos to prevent reference loops
    }

    pushGlobal() {
        if (window.modulo && window.modulo.id !== this.id) {
            window._moduloStack.push(window.modulo);
        }
        window.modulo = this;
    }

    popGlobal() {
        if (window._moduloStack.length > 0) {
            window.modulo = window._moduloStack.pop();
        }
    }

    start(build = null) {
        const elem = build && build.tagName ? build : window.document.head;
        if (build && !build.tagName) {
            if (build.loadedBy) {
                return;
            }
            this.assets.modules = build.modules;
            this.assets.nameToHash = build.nameToHash;
            this.definitions = build.definitions;
            build.loadedBy = this.id;
        } else if (elem) { // Loadable tag exists, load sync/blocking
            this.loadFromDOM(elem, null, true);
            this.preprocessAndDefine();
        } else { // Doesn't exist, wait for page to load
            window.document.addEventListener('DOMContentLoaded', () => {
                this.loadFromDOM(window.document.head, null, true);
                this.preprocessAndDefine();
            });
        }
    }

    register(type, cls, defaults = undefined) {
        type = (`${type}s` in this.registry) ? `${type}s` : type; // plural / singular
        this.assert(type in this.registry, 'Unknown registration type: ' + type);
        this.registry[type][cls.name] = cls;

        if (type === 'commands') { // Attach globally to 'm' alias
            window.m = window.m || {};
            window.m[cls.name] = () => cls(this);
        }

        if (cls.name[0].toUpperCase() === cls.name[0]) { // is CapFirst
            const conf = Object.assign(this.config[cls.name.toLowerCase()] || {}, { Type: cls.name }, cls.defaults, defaults);
            this.config[cls.name.toLowerCase()] = conf;

            // Global / core utility class getting registered
            if (type === 'core') {
                // TODO: Implement differently, like { fetchQ: utils.FetchQueue
                // } or something, since right now it doesn't even get cloned.
                const lowerName = cls.name[0].toLowerCase() + cls.name.slice(1);
                this[lowerName] = new cls(this);
                this.assets = this.assetManager;
            }
        }
        if (type === 'cparts') { // CParts get loaded from DOM
            this.registry.dom[cls.name.toLowerCase()] = cls;
            //this.config[cls.name.toLowerCase()].DefLoaders = [ 'DefinedAs', 'Src' ]; // daed
        }
        if (type === 'processors') {
            this.registry.processors[cls.name.toLowerCase()] = cls;
        }
    }

    loadFromDOM(elem, parentName = null, quietErrors = false) {
        const { mergeAttrs } = this.registry.utils;
        const isModulo = node => this.getNodeModuloType(node, quietErrors);
        const defArray = [];
        for (const node of Array.from(elem.children).filter(isModulo)) {
            const partTypeLC = this.getNodeModuloType(node); // Lowercase
            const def = mergeAttrs(node, this.config[partTypeLC]);
            defArray.push(def);
            if (partTypeLC in def && !def[partTypeLC]) {
                delete def[partTypeLC]; // Remove attribute name used as type
            }
            def.Content = node.tagName === 'SCRIPT' ? node.textContent : node.innerHTML;
            def.DefinedAs = def.DefinedAs || null; // defaults to: Name, Type
            def.DefName = def.Name || null; // -name only, null otherwise
            def.Parent = def.Parent || parentName;
        }
        this.repeatProcessors(defArray, 'DefLoaders', [ 'DefinedAs', 'Src' ]);
        return defArray;
    }

    preprocessAndDefine() {
        this.fetchQueue.wait(() => {
            this.repeatProcessors(null, 'DefBuilders', [ ], () => {
                this.repeatProcessors(null, 'DefFinalizers', [ ]);
            });
        });
    }

    loadString(text, parentName = null) {
        const tmp_Cmp = new this.registry.cparts.Component({}, {}, this);
        tmp_Cmp.dataPropLoad = tmp_Cmp.dataPropMount; // XXX
        this.reconciler = new this.registry.engines.Reconciler(this, {
            directives: { 'modulo.dataPropLoad': tmp_Cmp }, // TODO: Change to "this", + resolve to conf stuff
            directiveShortcuts: [ [ /:$/, 'modulo.dataProp' ] ],
        });
        const div = this.reconciler.loadString(text, {});
        const result = this.loadFromDOM(div, parentName);
        return result;
    }

    repeatProcessors(confs, field, defaults, cb) {
        let changed = true; // Run at least once
        while (changed) {
            this.assert(this._configSteps++ < 90000, 'Config steps: 90000+');
            changed = false;
            for (const conf of confs || Object.values(this.definitions)) {
                const processors = conf[field] || defaults;
                //changed = changed || this.applyProcessors(conf, processors);
                const result = this.applyProcessors(conf, processors);
                if (result === 'wait') { // TODO: Test or document, or delete
                    changed = false;
                    break;
                }
                changed = changed || result;
            }
        }
        const repeat = () => this.repeatProcessors(confs, field, defaults, cb);
        if (Object.keys(this.fetchQueue ? this.fetchQueue.queue : {}).length === 0) { // TODO: Remove ?: after core object refactor
            if (cb) {
                cb(); // Synchronous path
            }
        } else {
            this.fetchQueue.enqueueAll(repeat);
        }
    }

    getNodeModuloType(node, quietErrors = false) {
        const { tagName, nodeType, textContent } = node;
        const err = msg => quietErrors || console.error('Modulo Load:', msg);
        if (nodeType !== 1) { // Text nodes, comment nodes, etc
            if (nodeType === 3 && textContent && textContent.trim()) {
                err(`Unexpected text found near definitions: ${textContent}`);
            }
            return null;
        }

        let cPartName = tagName.toLowerCase();
        if (cPartName in { cpart: 1, script: 1, template: 1, style: 1 }) {
            for (const attrUnknownCase of node.getAttributeNames()) {
                const attr = attrUnknownCase.toLowerCase();
                if (attr in this.registry.dom && !node.getAttribute(attr)) {
                    cPartName = attr; // Is a CPart, but has empty string value
                }
                break; // Always exit, since we are only looking at first iter
            }
        }
        if (!(cPartName in this.registry.dom)) {
            if (cPartName === 'testsuite') { /* XXX HACK */ return null;}
            err(`${ cPartName }. CParts: ${ Object.keys(this.registry.dom) }`);
            return null;
        }
        return cPartName;
    }

    applyProcessors(conf, processors) {
        for (const name of processors) {
            const [ attrName, aliasedName ] = name.split('|');
            if (attrName in conf) {
                const value = conf[attrName];
                delete conf[attrName];
                const funcName = (aliasedName || attrName).toLowerCase();
                const result = this.registry.processors[funcName](this, conf, value);
                return result === true ? 'wait' : true;
            }
        }
        return false;
    }

    assert(value, ...info) {
        if (!value) {
            console.error(...info);
            throw new Error(`Modulo Error: "${Array.from(info).join(' ')}"`);
        }
    }
}

// TODO: Move to conf
Modulo.INVALID_WORDS = new Set((`
    break case catch class const continue debugger default delete do else enum
    export extends finally for if implements import in instanceof interface new
    null package private protected public return static super switch throw try
    typeof var let void  while with await async true false
`).split(/\s+/ig));

// Create a new modulo instance to be the global default instance
window.modulo = (new Modulo(null, [
    'cparts', 'dom', 'utils', 'core', 'engines', 'commands', 'templateFilters',
    'templateTags', 'processors', 'elements',
]));//.pushGlobal();

if (typeof modulo === "undefined" || modulo.id !== window.modulo.id) {
    var modulo = window.modulo; // TODO: RM (Hack for VirtualWindow)
}

modulo.register('processor', function src (modulo, def, value) {
    const { getParentDefPath } = modulo.registry.utils;
    def.Source = (new URL(value, getParentDefPath(modulo, def))).href;
    modulo.fetchQueue.fetch(def.Source).then(text => {
        def.Content = (text || '') + (def.Content || '');
    });
});

modulo.register('processor', function content (modulo, conf, value) {
    modulo.loadString(value, conf.DefinitionName);
});

modulo.register('processor', function definedAs (modulo, def, value) {
    def.Name = value ? def[value] : (def.Name || def.Type.toLowerCase());
    const parentPrefix = def.Parent ? def.Parent + '_' : '';
    def.DefinitionName = parentPrefix + def.Name;
    // Search for the next free Name by suffixing numbers
    while (def.DefinitionName in modulo.definitions) {
        const match = /([0-9]+)$/.exec(def.Name);
        const number = match ? match[0] : '';
        def.Name = def.Name.replace(number, '') + ((number * 1) + 1);
        def.DefinitionName = parentPrefix + def.Name;
    }
    modulo.definitions[def.DefinitionName] = def; // store definition
    const parentConf = modulo.definitions[def.Parent];
    if (parentConf) {
        parentConf.ChildrenNames = parentConf.ChildrenNames || [];
        parentConf.ChildrenNames.push(def.DefinitionName);
    }
});

modulo.register('processor', function customElement (modulo, def, value) {
    if (!def.ChildrenNames || def.ChildrenNames.length === 0) {
        console.warn('Empty ChildrenNames specified:', def.DefinitionName);
        return;
    }
    //if (def.namespace === 'modulo') { console.log("AWHAT modulo"); }
    //if (!def.namespace || def.namespace === 'modulo') { def.namespace = 'x'; }
    /*
    let s = '';
    for (const child of def.ChildrenNames.map(n => modulo.definitions[n])) {
        const cpName = def.RenderObj || def.Name;
        s += `        this.cparts.${ cpName } = `;
        s += `new modulo.registry.cparts.${ child.Type }(modulo, `;
        s += `modulo.defs['${ child.DefinitionName }'], this);\n`;
        s += `        this.cparts.${ cpName }.def = `
        s += `modulo.defs['${ child.DefinitionName }'];\n`;
    }
    */
    def.namespace = def.namespace || 'x';
    def.name = def.name || def.DefName || def.Name;
    def.TagName = `${ def.namespace }-${ def.name }`.toLowerCase();
    def.MainRequire = def.DefinitionName;
    const className =  `${ def.namespace }_${ def.name }`;
    def.Code = `
        const def = modulo.definitions['${ def.DefinitionName }'];
        class ${ className } extends ${ value } {
            constructor() {
                super();
                modulo.registry.utils.initElement(modulo, def, this);
            }
            connectedCallback() {
                window.setTimeout(() => this.parsedCallback(), 0);
            }
            parsedCallback() {
                modulo.registry.utils.mountElement(modulo, def, this);
            }
        }
        modulo.registry.utils.initClass(modulo, def, ${ className });
        window.customElements.define(def.TagName, ${ className });
        return ${ className };
    `;
});

modulo.register('util', function initElement (modulo, def, elem) {
    elem.modulo = modulo;
    elem.isMounted = false;
    elem.isModulo = true;
    elem.originalHTML = null;
    elem.originalChildren = [];
    elem.cparts = {};
});

modulo.register('util', function makeStore (modulo, def) {
    const isLower = key => key[0].toLowerCase() === key[0];
    const data = modulo.registry.utils.keyFilter(def, isLower);
    const newStore = { boundElements: {}, subscribers: [] };
    newStore.data = JSON.parse(JSON.stringify(data));
    return newStore;
});

modulo.register('util', function initClass (modulo, def, cls) {
    const initRenderObj = { elementClass: cls };
    for (const defName of def.ChildrenNames) {
        const cpartDef = modulo.definitions[defName];
        const cpartCls = modulo.registry.cparts[cpartDef.Type];
        if (cpartCls.factoryCallback) {
            const result = cpartCls.factoryCallback(initRenderObj, cpartDef, modulo);
            initRenderObj[cpartDef.Name] = result;
        }
    }
    cls.prototype.initRenderObj = initRenderObj;
    // Alias a method from the component class (TODO rm at some point)
    cls.prototype.rerender = function (original = null) {
        this.cparts.component.rerender(original);
    };
    cls.prototype.getCurrentRenderObj = function () {
        return this.cparts.component.getCurrentRenderObj();
    };
    modulo.register('element', cls);
});

modulo.register('util', function mountElement (modulo, def, elem) {
    let original = elem;
    if (elem.hasAttribute('modulo-original-html')) {
        original = modulo.registry.utils.makeDiv(elem.getAttribute('modulo-original-html'));
    }

    ////////
    // (legacy CPart setup -v)
    const allNames = [ def.DefinitionName ].concat(def.ChildrenNames);
    const { cparts } = elem.modulo.registry;
    const isLower = key => key[0].toLowerCase() === key[0];
    for (const def of allNames.map(name => modulo.definitions[name])) {
        const instance = new cparts[def.Type](elem.modulo, def, elem);
        instance.element = elem;
        instance.modulo = elem.modulo;
        instance.conf = def;
        instance.attrs = elem.modulo.registry.utils.keyFilter(def, isLower);
        instance.id = ++window._moduloID;
        elem.cparts[def.RenderObj || def.Name] = instance;
    }
    /*
    for (const instance of Object.values(elem.cparts)) {
        instance.element = elem;
        instance.modulo = elem.modulo;
        instance.conf = def;
        instance.attrs = elem.modulo.registry.utils.keyFilter(def, isLower);
        elem.cparts[def.RenderObj || def.Name] = instance;
    }
    */
    ////////

    ////////
    // First rerender
    elem.cparts.component.lifecycle([ 'initialized' ]);
    elem.rerender(original); // render and re-mount it's own childNodes
    // TODO - Needs refactor, should do elem somewhere else:
    if (elem.hasAttribute('modulo-original-html')) {
        const { reconciler } = elem.cparts.component;
        reconciler.patch = reconciler.applyPatch; // Apply patches immediately
        reconciler.patchAndDescendants(elem, 'Mount');
        reconciler.patch = reconciler.pushPatch;
    }
    elem.isMounted = true;
});

modulo.register('processor', function mainRequire (modulo, conf, value) {
    modulo.assets.mainRequire(value);
});

/*
modulo.config.reconciler = {
    directiveShortcuts: [ [ /^@/, 'component.event' ],
                          [ /:$/, 'component.dataProp' ] ],
    directives: [ 'component.event', 'component.dataProp' ],
};
*/

modulo.config.component = {
    mode: 'regular',
    rerender: 'event',
    engine: 'Reconciler', // TODO: 'Engine':, depends on Instbuilders
    // namespace: 'x',
    CustomElement: 'window.HTMLElement',
    DefinedAs: 'name',
    RenderObj: 'component', // Make features available as "renderObj.component" 
    // Children: 'cparts', // How we can implement Parentage: Object.keys((get('modulo.registry.' + value))// cparts))
    DefLoaders: [ 'DefinedAs', 'Src', 'Content' ],
    DefBuilders: [ 'CustomElement', 'Code' ],
    DefFinalizers: [ 'MainRequire' ],
    Directives: [ 'slotLoad', 'eventMount', 'eventUnmount', 'dataPropMount', 'dataPropUnmount' ],
    //InstBuilders: [ 'CreateChildren' ],
};

modulo.register('cpart', class Component {
    rerender(original = null) {
        if (original) {
            if (this.element.originalHTML === null) {
                this.element.originalHTML = original.innerHTML;
            }
            this.element.originalChildren = Array.from(
                original.hasChildNodes() ? original.childNodes : []);
        }
        this.lifecycle([ 'prepare', 'render', 'reconcile', 'update' ]);
    }

    getCurrentRenderObj() {
        return (this.element.eventRenderObj || this.element.renderObj || this.element.initRenderObj);
    }

    lifecycle(lifecycleNames, rObj={}) {
        const renderObj = Object.assign({}, rObj, this.getCurrentRenderObj());
        this.element.renderObj = renderObj;
        for (const lifecycleName of lifecycleNames) {
            const methodName = lifecycleName + 'Callback';
            for (const [ name, obj ] of Object.entries(this.element.cparts)) {
                if (!(methodName in obj)) {
                    continue; // Skip if obj has not registered callback
                }
                const result = obj[methodName].call(obj, renderObj);
                if (result) {
                    renderObj[obj.conf.RenderObj || obj.conf.Name] = result;
                }
            }
        }
        //this.element.renderObj = null; // ?rendering is over, set to null
    }

    scriptTagLoad({ el }) {
        const newScript = el.ownerDocument.createElement('script');
        newScript.src = el.src; // TODO: Possibly copy other attrs?
        el.remove(); // delete old element
        this.element.ownerDocument.head.append(newScript);
    }

    initializedCallback(renderObj) {
        const opts = { directiveShortcuts: [], directives: [] };
        for (const cPart of Object.values(this.element.cparts)) {
            const def = (cPart.def || cPart.conf);
            for (const method of def.Directives || []) {
                const dirName = (def.RenderObj || def.Name) + '.' + method;
                opts.directives[dirName] = cPart;
            }
        }
        const addHead = ({ el }) => this.element.ownerDocument.head.append(el);
        if (this.attrs.mode === 'shadow') {
            this.element.attachShadow({ mode: 'open' });
        } else { // TODO: Refactor logic here
            opts.directives.slot = this;
            this.slotTagLoad = this.slotLoad.bind(this); // TODO switch to only slotTagLoad
            if (this.attrs.mode === 'vanish-into-document') {
                opts.directives.script = this;
                for (const headTag of [ 'link', 'title', 'meta' ]) {
                    opts.directives[headTag] = this;
                    this[headTag + 'TagLoad'] = addHead;
                }
            }
        }
        this.reconciler = new this.modulo.registry.engines.Reconciler(this, opts);
    }

    prepareCallback() {
        const { originalHTML } = this.element;
        return { originalHTML, innerHTML: null, patches: null, id: this.id };
    }

    reconcileCallback(renderObj) {
        let { innerHTML, patches, root } = renderObj.component;
        this.mode = this.attrs.mode || 'regular';
        if (innerHTML !== null) {
            if (this.mode === 'regular' || this.mode === 'vanish') {
                root = this.element; // default, use element as root
            } else if (this.mode === 'shadow') {
                root = this.element.shadowRoot;
            } else if (this.mode === 'vanish-into-document') {
                root = this.element.ownerDocument.body; // render into body
            } else {
                this.modulo.assert(this.mode === 'custom-root', 'Invalid mode');
            }
            patches = this.reconciler.reconcile(root, innerHTML || '', this.localNameMap);// rm last arg
        }
        return { patches, innerHTML }; // TODO remove innerHTML from here
    }

    updateCallback(renderObj) {
        const { patches, innerHTML } = renderObj.component;
        if (patches) {
            this.reconciler.applyPatches(patches);
        }

        if (!this.element.isMounted && (this.mode === 'vanish' ||
                                        this.mode === 'vanish-into-document')) {
            // First time initialized, and is one of the vanish modes
            this.element.replaceWith(...this.element.childNodes); // Replace self
        }
    }

    handleEvent(func, payload, ev) {
        this.lifecycle([ 'event' ]);
        const { value } = (ev.target || {}); // Get value if is <INPUT>, etc
        func.call(null, payload === undefined ? value : payload, ev);
        this.lifecycle([ 'eventCleanup' ]); // todo: should this go below rerender()?
        if (this.attrs.rerender !== 'manual') {
            this.element.rerender(); // always rerender after events
        }
    }

    slotLoad({ el, value }) {
        let chosenSlot = value || el.getAttribute('name') || null;
        const getSlot = c => c.getAttribute ? (c.getAttribute('slot') || null) : null;
        let childs = this.element.originalChildren;
        childs = childs.filter(child => getSlot(child) === chosenSlot);
        if (!el.moduloSlotHasLoaded) { // clear innerHTML if this is first load
            el.innerHTML = '';
            el.moduloSlotHasLoaded = true;
        }
        el.append(...childs);
    }

    eventMount({ el, value, attrName, rawName }) {
        // Note: attrName becomes "event name"
        // TODO: Make it @click.payload, and then have this see if '.' exists
        // in attrName and attach as payload if so
        const { resolveDataProp } = this.modulo.registry.utils;
        const get = (key, key2) => resolveDataProp(key, el, key2 && get(key2));
        const func = get(attrName);
        this.modulo.assert(func, `No function found for ${rawName} ${value}`);
        if (!el.moduloEvents) {
            el.moduloEvents = {};
        }
        const listen = ev => {
            ev.preventDefault();
            const payload = get(attrName + '.payload', 'payload');
            const currentFunction = resolveDataProp(attrName, el);
            this.handleEvent(currentFunction, payload, ev);
        };
        el.moduloEvents[attrName] = listen;
        el.addEventListener(attrName, listen);
    }

    eventUnmount({ el, attrName }) {
        el.removeEventListener(attrName, el.moduloEvents[attrName]);
        // Modulo.assert(el.moduloEvents[attrName], 'Invalid unmount');
        delete el.moduloEvents[attrName];
    }

    dataPropMount({ el, value, attrName, rawName }) { // element, 
        const { get, set } = modulo.registry.utils;
        // Resolve the given value and attach to dataProps
        if (!el.dataProps) {
            el.dataProps = {};
            el.dataPropsAttributeNames = {};
        }
        const isVar = /^[a-z]/i.test(value) && !Modulo.INVALID_WORDS.has(value);
        const renderObj = isVar ? this.element.getCurrentRenderObj() : {};
        let val = isVar ? get(renderObj, value) : JSON.parse(value);
        /* XXX */ if (attrName === 'click' && !val) { val = ()=> console.log('XXX ERROR: (DEBUGGING Wrong Script Tag) click is undefined', renderObj); }
        //modulo.assert(val !== undefined, 'Error: Cannot assign value "undefined" to dataProp')
        set(el.dataProps, attrName, val); // set according to path given
        el.dataPropsAttributeNames[rawName] = attrName;
        ///* XXX */ if (attrName === 'click') { console.log('XXX click', el, value, val); }
    }

    dataPropUnmount({ el, attrName, rawName }) {
        if (!el.dataProps) { console.log('Modulo ERROR: Could not Unmount', attrName, rawName, el); }
        if (el.dataProps) {
            delete el.dataProps[attrName];
            delete el.dataPropsAttributeNames[rawName];
        }
    }
});

modulo.register('cpart', class Modulo { }, {
    DefLoaders: [ 'Src', 'Content' ],
});

modulo.register('cpart', class Library { }, {
    SetAttrs: 'config.component',
    // DefinedAs: 'namespace', // TODO: Write tests for Library, the add this
    DefLoaders: [ 'DefinedAs', 'Src', 'Content', 'SetAttrs' ],
});

modulo.register('util', function keyFilter (obj, func) {
    const keys = func.call ? Object.keys(obj).filter(func) : func;
    return Object.fromEntries(keys.map(key => [ key, obj[key] ]));
});

modulo.register('util', function deepClone (obj, modulo) {
    if (obj === null || typeof obj !== 'object' || (obj.exec && obj.test)) {
        return obj;
    }
    const { constructor } = obj;
    if (constructor.moduloClone) {
        // Use a custom modulo-specific cloning function
        return constructor.moduloClone(modulo, obj);
    }
    const clone = new constructor();
    const { deepClone } = modulo.registry.utils;
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key], modulo);
        }
    }
    return clone;
});

modulo.register('util', function resolveDataProp (key, elem, defaultVal) {
    if (elem.dataProps && key in elem.dataProps) {
        return elem.dataProps[key];
    }
    return elem.hasAttribute(key) ? elem.getAttribute(key) : defaultVal;
});

modulo.register('util', function cleanWord (text) {
    // todo: should merge with stripWord ? See if "strip" functionality is enough
    return (text + '').replace(/[^a-zA-Z0-9$_\.]/g, '') || '';
});

modulo.register('util', function stripWord (text) {
    return text.replace(/^[^a-zA-Z0-9$_\.]/, '')
               .replace(/[^a-zA-Z0-9$_\.]$/, '');
});

modulo.register('util', function mergeAttrs (elem, defaults) {
    // TODO: Write unit tests for this
    const camelcase = s => s.replace(/-([a-z])/g, g => g[1].toUpperCase());
    const obj = Object.assign({}, defaults);
    const dataPropNames = elem.dataPropsAttributeNames || false;
    for (const name of elem.getAttributeNames()) {
        const dataPropKey = dataPropNames && dataPropNames[name];
        if (dataPropKey) {
            obj[camelcase(dataPropKey)] = elem.dataProps[dataPropKey];
        } else {
            obj[camelcase(name)] = elem.getAttribute(name);
        }
    }
    return obj;
});

modulo.register('util', function hash (str) {
    // Simple, insecure, "hashCode()" implementation. Returns base32 hash
    let h = 0;
    for (let i = 0; i < str.length; i++) {
        //h = ((h << 5 - h) + str.charCodeAt(i)) | 0;
        h = Math.imul(31, h) + str.charCodeAt(i) | 0;
    }
    const hash8 = ('---------' + (h || 0).toString(32)).slice(-8);
    return hash8.replace(/-/g, 'x'); // Pad with 'x'
});

modulo.register('util', function makeDiv(html) {
    /* TODO: Have an options for doing <script  / etc preprocessing here:
      <state -> <script type="modulo/state"
      <\s*(state|props|template)([\s>]) -> <script type="modulo/\1"\2
      </(state|props|template)> -> </script>*/
    const div = window.document.createElement('div');
    div.innerHTML = html;
    return div;
});

modulo.register('util', function normalize(html) {
    // Normalize space to ' ' & trim around tags
    return html.replace(/\s+/g, ' ').replace(/(^|>)\s*(<|$)/g, '$1$2').trim();
});

modulo.register('util', function saveFileAs(filename, text) {
    const element = window.document.createElement('a');
    const enc = window.encodeURIComponent(text);
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + enc);
    element.setAttribute('download', filename);
    window.document.body.appendChild(element);
    element.click();
    window.document.body.removeChild(element);
    return `./${filename}`; // by default, return local path
});

modulo.register('util', function get(obj, key) {
    if (key in obj) { // Shortcut for common case
        return obj[key];
    }
    return (key + '').split('.').reduce((o, name) => o[name], obj);
});

modulo.register('util', function set(obj, keyPath, val, ctx = null) {
    const index = keyPath.lastIndexOf('.') + 1; // 0 if not found
    const key = keyPath.slice(index);
    const path = keyPath.slice(0, index - 1); // exclude .
    const dataObj = index ? modulo.registry.utils.get(obj, path) : obj;
    dataObj[key] = val;// typeof val === 'function' ? val.bind(ctx) : val;
});

modulo.register('util', function getParentDefPath(modulo, def) {
    const { getParentDefPath } = modulo.registry.utils; // Use to recurse
    const pDef = def.Parent ? modulo.definitions[def.Parent] : null;
    const url = String(window.location).split('?')[0]; // Remove ? and #
    return pDef ? pDef.Source || getParentDefPath(modulo, pDef) : url;
});

modulo.register('util', function prefixAllSelectors(namespace, name, text='') {
    // TODO: Redo prefixAllSelectors to instead behave more like DataType,
    // basically using "?" auto determines based on Component mode + TagName,
    // allowing users to override if they want to intentionally silo their CSS
    // some other way
    // NOTE - has old tests that can be resurrected
    const fullName = `${namespace}-${name}`;
    let content = text.replace(/\*\/.*?\*\//ig, ''); // strip comments

    // To prefix the selectors, we loop through them, with this RegExp that
    // looks for { chars
    content = content.replace(/([^\r\n,{}]+)(,(?=[^}]*{)|\s*{)/gi, selector => {
        selector = selector.trim();
        if (selector.startsWith('@') || selector.startsWith(fullName)
              || selector.startsWith('from') || selector.startsWith('to')) {
            // TODO: Make a regexp to check if matches other keyframe
            // stuff, 90% etc
            // Skip, is @media or @keyframes, or already prefixed
            return selector;
        }

        // Upgrade the ":host" pseudo-element to be the full name (since
        // this is not a Shadow DOM style-sheet)
        selector = selector.replace(new RegExp(/:host(\([^)]*\))?/, 'g'), hostClause => {
            // TODO: this needs more thorough testing
            const notBare = (hostClause && hostClause !== ':host');
            return fullName + (notBare ? `:is(${hostClause})` : '');
        });

        // If it is not prefixed at this point, then be sure to prefix
        if (!selector.startsWith(fullName)) {
            selector = `${fullName} ${selector}`;
        }
        return selector;
    });
    return content;
});

modulo.register('core', class AssetManager {
    constructor (modulo) {
        this.modulo = modulo;
        this.stylesheets = {};
        this.cssAssetsArray = [];
        this.modules = {};
        this.moduleSources = {};
        this.nameToHash = {};
        this.mainRequires = []; // List of globally invoked modules
    }

    mainRequire(moduleName) {
        this.mainRequires.push(moduleName);
        this.require(moduleName);
    }

    require(moduleName) {
        this.modulo.assert(moduleName in this.nameToHash,
            `${ moduleName } not in ${ Object.keys(this.nameToHash).join(', ') }`);
        const hash = this.nameToHash[moduleName];
        this.modulo.assert(hash in this.modules,
            `${ moduleName } / ${ hash } not in ${ Object.keys(this.modules).join(', ') }`);
        return this.modules[hash].call(window, this.modulo);
    }

    wrapDefine(hash, name, code, prefix = 'window.modulo.assets') {
        const assignee = `${ prefix }.modules["${ hash }"]`;
        return `${ assignee } = function ${ name } (modulo) {\n${ code }\n};\n`;
    }

    define(name, code) {
        const hash = this.modulo.registry.utils.hash(code);
        this.modulo.assert(!(name in this.nameToHash), `Duplicate: ${ name }`);
        this.nameToHash[name] = hash;
        if (!(hash in this.modules)) {
            this.moduleSources[hash] = code;
            const jsText = this.wrapDefine(hash, name, code);
            this.modulo.assets = this;// TODO Should investigate why needed
            this.modulo.pushGlobal();
            this.appendToHead('script', '"use strict";' + jsText);
            this.modulo.popGlobal();
        }
        return () => this.modules[hash].call(window, modulo); // TODO: Rm this, and also rm the extra () in Templater
    }

    buildJavaScript() {
        const prefix = `window.moduloBuild = window.moduloBuild || { modules: {} };\n`;
        return prefix + this.buildModuleDefs() + this.buildConfigDef();
    }

    buildConfigDef() {
        const defs = JSON.stringify(this.modulo.definitions, null, 1);
        return `window.moduloBuild.definitions = ${ defs };\n`;
    }

    buildModuleDefs() {
        let jsText = '';
        const pre = 'window.moduloBuild';
        for (const name of Object.keys(this.nameToHash).sort()) {
            const hash = this.nameToHash[name]; // Alphabetic by name, not hash
            if (hash in this.moduleSources) {
                const source = this.moduleSources[hash];
                jsText += this.wrapDefine(hash, name, source, pre);
                delete this.moduleSources[hash];
            }
        }
        const namesString = JSON.stringify(this.nameToHash, null, 1);
        jsText += pre + '.nameToHash = ' + namesString + ';\n';
        modulo.assert(Object.keys(this.moduleSources).length === 0, 'Unused mod keys');
        return jsText.length > 40 ? jsText : ''; // <40 chars means no-op
    }

    buildMain() {
        const p = 'window.moduloBuild && modulo.start(window.moduloBuild);\n';
        const asRequireInvocation = s => `modulo.assets.require("${ s }");`;
        return p + this.mainRequires.map(asRequireInvocation).join('\n');
    }

    bundleAssets(callback) {
        const { fetchBundleData } = this.modulo.registry.utils;
        fetchBundleData(this.modulo, bundleData => {
            //const results = this.cssAssetsArray;
            const results = { js: [], css: this.cssAssetsArray };
            results.js.push(this.modulo.assets.buildJavaScript());
            for (const bundle of bundleData) { // Loop through bundle data
                results[bundle.type].push(bundle.content);
            }
            callback(results.js.join('\n'), results.css.join('\n'));
        });
    }

    registerStylesheet(text) {
        const hash = this.modulo.registry.utils.hash(text);
        if (!(hash in this.stylesheets)) {
            this.stylesheets[hash] = true;
            this.cssAssetsArray.push(text);
            this.appendToHead('style', text);
        }
    }

    appendToHead(tagName, codeStr) {
        const doc = window.document;
        const elem = doc.createElement(tagName);
        elem.setAttribute('modulo-asset', 'y'); // Mark as an "asset"
        if (doc.head === null) {
            console.log('Modulo WARNING: Head not ready.');
            setTimeout(() => doc.head.append(elem), 0);
        } else {
            doc.head.append(elem);
        }
        elem.textContent = codeStr; // Blocking, causes eval
    }
});

modulo.register('core', class FetchQueue {
    constructor(modulo) {
        this.modulo = modulo;
        this.queue = {};
        this.data = {};
        this.waitCallbacks = [];
    }

    fetch(src) {
        const label = 'testlabel'; // XXX rm label concept
        //if (src in this.data) { // Already found, resolve immediately
        //    const then = resolve => resolve(this.data[src], label, src);
        //    return { then, catch: () => {} }; // Return synchronous Then-able
        //}
        //return new Promise((resolve, reject) => {
        //});
        return { then : (resolve, reject) => {
            if (src in this.data) { // Already found, resolve immediately
                resolve(this.data[src], label, src);
            } else if (!(src in this.queue)) { // First time, make queue
                this.queue[src] = [ resolve ];
                // TODO: Think about if we want to keep cache:no-store
                window.fetch(src, { cache: 'no-store' })
                    .then(response => response.text())
                    .then(text => this.receiveData(text, label, src))
                    .catch(reject);
            } else {
                this.queue[src].push(resolve); // add to end of src queue
            }
        }};
    }

    receiveData(text, label, src) {
        this.data[src] = text; // load data
        const queue = this.queue[src];
        delete this.queue[src]; // delete queue
        queue.forEach(func => func(text, label, src));
        this.checkWait();
    }

    enqueueAll(callback) {
        const allQueues = Array.from(Object.values(this.queue));
        if (allQueues.length === 0) {
            return callback();
        }
        let callbackCount = 0;
        for (const queue of allQueues) {
            queue.push(() => {
                callbackCount++;
                if (callbackCount >= allQueues.length) {
                    //console.log(Array.from(Object.values(this.queue)).length);
                    callback();
                }
            });
        }
    }

    wait(callback) {
        // NOTE: There is a bug with this vs enqueueAll, specifically if we are
        // already in a wait callback, it can end up triggering the next one
        // immediately
        //console.log({ wait: Object.keys(this.queue).length === 0 }, Object.keys(this.queue));
        this.waitCallbacks.push(callback); // add to end of queue
        this.checkWait(); // attempt to consume wait queue
    }

    checkWait() {
        if (Object.keys(this.queue).length === 0) {
            while (this.waitCallbacks.length > 0) {
                this.waitCallbacks.shift()(); // clear while invoking
            }
        }
    }
});


modulo.register('cpart', class Props {
    initializedCallback(renderObj) {
        const props = {};
        const { resolveDataProp } = modulo.registry.utils;
        for (const [ propName, def ] of Object.entries(this.attrs)) {
            props[propName] = resolveDataProp(propName, this.element, def);
            // TODO: Implement type-checked, and required
        }
        return props;
    }

    prepareCallback(renderObj) {
        /* TODO: Remove after observedAttributes is implemented, e.g.:
          static factoryCallback({ attrs }, { componentClass }, renderObj) {
              //componentClass.observedAttributes = Object.keys(attrs);
          }
        */
        return this.initializedCallback(renderObj);
    }
});

modulo.register('processor', function prefixCSS (modulo, def, value) {
    const { namespace, mode, Name } = modulo.definitions[def.Parent] || {};
    if (mode === 'regular') {
        value = modulo.registry.utils.prefixAllSelectors(namespace, Name, value);
    }
    if (mode !== 'shadow') {
        modulo.assets.registerStylesheet(value);
    }
});

modulo.register('cpart', class Style {
    initializedCallback(renderObj) {
        const { component, style } = renderObj;
        if (component && component.attrs && component.attrs.mode === 'shadow') { // TODO Finish
            const style = window.document.createElement('style');
            style.setAttribute('modulo-ignore', 'true');
            style.textContent = style.content;// `<style modulo-ignore>${style.content}</style>`;
            this.element.shadowRoot.append(style);
        }
    }
}, {
    DefFinalizers: [ 'Content|PrefixCSS' ]
});

modulo.register('processor', function templatePrebuild (modulo, def, value) {
    if (!def.Content) {
        console.error('No Template Content specified:', def.DefinitionName, JSON.stringify(def));
        return;
    }
    const engine = def.engine || 'Templater';
    const instance = new modulo.registry.engines[engine](modulo, def);
    def.Hash = instance.Hash;
    //console.log('Template code:', def.Content);
    delete def.Content;
    delete def.TemplatePrebuild;
});

modulo.register('cpart', class Template {
    initializedCallback() {
        const engine = this.conf.engine || 'Templater';
        this.templater = new this.modulo.registry.engines[engine](this.modulo, this.conf);
        const render = this.templater.render.bind(this.templater);
        return { render }; // Expose render to include, renderas etc
    }
    renderCallback(renderObj) {
        if (!renderObj.component)renderObj.component={};// XXX fix
        renderObj.component.innerHTML = this.templater.render(renderObj);
    }
}, {
    TemplatePrebuild: "yes",
    DefFinalizers: [ 'TemplatePrebuild' ]
});

modulo.register('processor', function contentCSV (modulo, def, value) {
    const js = JSON.stringify((def.Content || '').split('\n').map(line => line.split(',')));
    def.Code = 'return ' + js;
});

modulo.register('processor', function contentJS (modulo, def, value) {
    const tmpFunc = new Function('return (' + (def.Content || 'null') + ');');
    def.Code = 'return ' + JSON.stringify(tmpFunc()) + ';'; // Evaluate
});

modulo.register('processor', function contentJSON (modulo, def, value) {
    def.Code = 'return ' + JSON.stringify(JSON.parse(def.Content || '{}')) + ';';
});

modulo.register('processor', function contentTXT (modulo, def, value) {
    def.Code = 'return ' + JSON.stringify(def.Content);
});

modulo.register('processor', function dataType (modulo, def, value) {
    if (value === '?') { // '?' means determine based on extension
        const ext = def.Src && def.Src.match(/(?<=\.)[a-z]+$/i);
        value = ext ? ext[0] : 'json';
    }
    def['Content' + value.toUpperCase()] = value;
});

modulo.register('processor', function code (modulo, def, value) {
    if (def.DefinitionName in modulo.assets.nameToHash) {
        console.error("ERROR: Duped def:", def.DefinitionName);
        return;
    }
    modulo.assets.define(def.DefinitionName, value);
});

modulo.register('processor', function setAttrs (modulo, def, value) {
    for (const [ key, val ] of Object.entries(def)) {
        if (/^[a-z]/.test(key) && (value + key).includes('.')) { // Set anything with dots
            modulo.registry.utils.set(modulo, (value + '.' + key), val);
        }
    }
});

modulo.register('processor', function requireData (modulo, def, value) {
    def.data = modulo.assets.require(def[value]);
});

modulo.register('cpart', class StaticData {
    static factoryCallback(renderObj, def, modulo) {
        return def.data;
    }
    prepareCallback() { // XXX remove when fac gets to be default
        return this.conf.data;
    }
}, {
    DataType: '?', // Default behavior is to guess based on Src ext
    RequireData: 'DefinitionName',
    DefLoaders: [ 'DefinedAs', 'DataType', 'Src' ],
    DefBuilders: [ 'ContentCSV', 'ContentTXT', 'ContentJSON', 'ContentJS' ],
    DefFinalizers: [ 'Code', 'RequireData' ],
});

modulo.register('cpart', class Configuration { }, {
    SetAttrs: 'config',
    DefLoaders: [ 'DefinedAs', 'SetAttrs', 'Src' ],
    DefBuilders: [ 'Content|Code', 'DefinitionName|MainRequire' ],
});

modulo.register('processor', function scriptAutoExport (modulo, def, value) {
    const { getAutoExportNames } = modulo.registry.utils;
    if (def.lifecycle && def.lifecycle !== 'initialized') {
        value = `function ${ def.lifecycle }Callback (renderObj) {${ value }}`;
    }
    const isDirRegEx = /(Unmount|Mount)$/;
    def.Directives = getAutoExportNames(value).filter(s => s.match(isDirRegEx));
    const { ChildrenNames } = modulo.definitions[def.Parent] || { };
    const sibNames = (ChildrenNames || []).map(n => modulo.definitions[n].Name);
    sibNames.push('component', 'element', 'cparts'); // Add in extras
    const varNames = sibNames.filter(name => value.includes(name));
    // Build def.Code to wrap the user-provided code and export local vars
    def.Code = `var script = { exports: {} }; `;
    def.Code += varNames.length ? `var ${ varNames.join(', ') };` : '';
    def.Code += '\n' + value + '\nreturn {';
    for (const s of getAutoExportNames(value)) {
        def.Code += `"${s}": typeof ${s} !== "undefined" ? ${s} : undefined, `;
    }
    def.Code += `setLocalVariables: function(o) {`
    def.Code += varNames.map(name => `${ name }=o.${ name }`).join('; ');
    def.Code += `}, exports: script.exports }\n`
});

modulo.register('cpart', class Script {
    static factoryCallback(renderObj, def, modulo) {
        //modulo.assert(results || !def.Parent, 'Invalid script return');
        const hash = modulo.assets.nameToHash[def.DefinitionName];
        const func = () => modulo.assets.modules[hash].call(window, modulo);
        if (def.lifecycle === 'initialized') {
            return { initializedCallback: func }; // Attach as callback
        }
        return func(); // Otherwise, should run in static context (e.g. now)
    }

    initializedCallback(renderObj) {
        // Create all lifecycle callbacks, wrapping around the inner script
        const script = renderObj[this.conf.Name];
        this.eventCallback = (rObj) => { // Create eventCallback to set inner
            const vars = { element: this.element, cparts: this.element.cparts };
            const setLocal = script.setLocalVariables || (() => {});
            setLocal(Object.assign(vars, rObj)); // Set inner vars (or no-op)
        };

        if (script.initializedCallback) { // If defined, trigger inner init
            this.eventCallback(renderObj); // Prep before (used by lc=false)
            Object.assign(script, script.initializedCallback(renderObj));
            this.eventCallback(renderObj); // Prep again (used by lc=initialize)
        }

        const isCallback = /(Mount|Unmount|Callback)$/;
        for (const cbName of Object.keys(script)) {
            if (cbName === 'initializedCallback' || !cbName.match(isCallback)) {
                continue; // Skip over initialized (already handled) and non-CBs
            }
            this[cbName] = arg => { // Arg: Either renderObj or directive obj
                const renderObj = this.element.getCurrentRenderObj();
                const script = renderObj[this.conf.Name]; // Get new render obj
                this.eventCallback(renderObj); // Prep before lifecycle method
                Object.assign(script, script[cbName](arg) || {});
            };
        }
    }
}, {
    lifecycle: null,
    DefBuilders: [ 'Content|ScriptAutoExport', 'Code' ],
});

modulo.register('cpart', class State {
    static factoryCallback(renderObj, def, modulo) {
        if (def.Store) {
            const store = modulo.registry.utils.makeStore(modulo, def);
            if (!(def.Store in modulo.stores)) {
                modulo.stores[def.Store] = store;
            } else {
                Object.assign(modulo.stores[def.Store].data, store.data);
            }
        }
    }

    initializedCallback(renderObj) {
        if (!this.def && this.conf) { this.def = this.conf; } // XXX rm
        const store = this.def.Store ? this.modulo.stores[this.def.Store]
                : this.modulo.registry.utils.makeStore(this.modulo, this.def);
        store.subscribers.push(Object.assign(this, store));
        return store.data; // TODO: Possibly, push ALL sibling CParts with stateChangedCallback
    }

    bindMount({ el, attrName, value }) {
        const name = attrName || el.getAttribute('name');
        const val = modulo.registry.utils.get(this.data, name);
        this.modulo.assert(val !== undefined, `state.bind "${name}" undefined`);
        const isText = el.tagName === 'TEXTAREA' || el.type === 'text';
        const evName = value ? value : (isText ? 'keyup' : 'change');
        if (!(name in this.boundElements)) {
            this.boundElements[name] = [];
        }
        // Bind the "listen" event to propagate to all, and trigger initial vals
        const listen = () => this.propagate(name, el.value, el);
        this.boundElements[name].push([ el, evName, listen ]);
        el.addEventListener(evName, listen); // todo: make optional, e.g. to support cparts?
        this.propagate(name, val, this); // trigger initial assignment(s)
    }

    bindUnmount({ el, attrName }) {
        const name = attrName || el.getAttribute('name');
        if (!(name in this.boundElements)) { // XXX HACK
            return console.log('Modulo ERROR: Could not unbind', name);
        }
        const remainingBound = [];
        for (const row of this.boundElements[name]) {
            if (row[0] === el) {
                row[0].removeEventListener(row[1], row[2]);
            } else {
                remainingBound.push(row);
            }
        }
        this.boundElements[name] = remainingBound;
    }

    stateChangedCallback(name, value, el) {
        this.modulo.registry.utils.set(this.data, name, value);
        if (!this.def.Only || this.def.Only.includes(name)) { // TODO: Test & document
            this.element.rerender();
        }
    }

    eventCallback() {
        this._oldData = Object.assign({}, this.data);
    }

    propagate(name, val, originalEl = null) {
        const elems = (this.boundElements[name] || []).map(row => row[0]);
        for (const el of this.subscribers.concat(elems)) {
            if (originalEl && el === originalEl) {
                continue; // don't propagate to self
            }
            if (el.stateChangedCallback) {
                el.stateChangedCallback(name, val, originalEl);
            } else if (el.type === 'checkbox') {
                el.checked = !!val; // ensure is bool
            } else {
                el.value = val;
            }
        }
    }

    eventCleanupCallback() {
        for (const name of Object.keys(this.data)) {
            this.modulo.assert(name in this._oldData, `There is no "state.${name}"`);
            if (this.data[name] !== this._oldData[name]) {
                this.propagate(name, this.data[name], this);
            }
        }
        this._oldData = null;
    }
}, { Directives: [ 'bindMount', 'bindUnmount' ], Store: null });


/* Implementation of Modulo Templating Language */
modulo.register('engine', class Templater {
    constructor(modulo, def) {
        this.modulo = modulo;
        this.setup(def.Content, def);
    }

    setup(text, def) {
        Object.assign(this, this.modulo.config.templater, def);
        this.filters = Object.assign({}, this.modulo.registry.templateFilters, this.filters);
        this.tags = Object.assign({}, this.modulo.registry.templateTags, this.tags);
        if (this.Hash) {
            this.renderFunc = this.modulo.assets.require(this.DefinitionName);
        } else {
            this.compiledCode = this.compile(text);
            const unclosed = this.stack.map(({ close }) => close).join(', ');
            this.modulo.assert(!unclosed, `Unclosed tags: ${ unclosed }`);

            this.compiledCode = `return function (CTX, G) { ${ this.compiledCode } };`;
            const { hash } = this.modulo.registry.utils;
            this.Hash = 'T' + hash(this.compiledCode);
            if (this.DefinitionName in this.modulo.assets.nameToHash) { // TODO RM
                console.error("ERROR: Duped template:", def.DefinitionName);
                this.renderFunc = () => '';
                return;
            }
            this.renderFunc = this.modulo.assets.define(this.DefinitionName, this.compiledCode)();
        }
    }

    static moduloClone(modulo, other) {
        // Possible idea: Return a serializable array as args for new()
        return new this('', other);
    }

    tokenizeText(text) {
        // Join all modeTokens with | (OR in regex).
        // Replace space with wildcard capture.
        const re = '(' + this.modeTokens.join('|(').replace(/ +/g, ')(.+?)');
        return text.split(RegExp(re)).filter(token => token !== undefined);
    }

    compile(text) {
        const { normalize } = this.modulo.registry.utils;
        this.stack = []; // Template tag stack
        this.output = 'var OUT=[];\n'; // Variable used to accumulate code
        let mode = 'text'; // Start in text mode
        for (const token of this.tokenizeText(text)) {
            if (mode) { // if in a "mode" (text or token), then call mode func
                const result = this.modes[mode](token, this, this.stack);
                if (result) { // Mode generated text output, add to code
                    const comment = JSON.stringify(normalize(token).trim());
                    this.output += `  ${result} // ${ comment }\n`;
                }
            }
            // FSM for mode: ('text' -> null) (null -> token) (* -> 'text')
            mode = (mode === 'text') ? null : (mode ? 'text' : token);
        }
        this.output += '\nreturn OUT.join("");'
        return this.output;
    }

    render(renderObj) {
        return this.renderFunc(Object.assign({ renderObj }, renderObj), this);
    }

    parseExpr(text) {
        // TODO: Store a list of variables / paths, so there can be warnings or
        // errors when variables are unspecified
        // TODO: Support this-style-variable being turned to thisStyleVariable
        const filters = text.split('|');
        let results = this.parseVal(filters.shift()); // Get left-most val
        for (const [ fName, arg ] of filters.map(s => s.trim().split(':'))) {
            const argList = arg ? ',' + this.parseVal(arg) : '';
            results = `G.filters["${fName}"](${results}${argList})`;
        }
        return results;
    }

    parseCondExpr(string) {
        // This RegExp splits around the tokens, with spaces added
        const regExpText = ` (${this.opTokens.split(',').join('|')}) `;
        return string.split(RegExp(regExpText));
    }

    parseVal(string) {
        // Parses string literals, de-escaping as needed, numbers, and context
        // variables
        const { cleanWord } = this.modulo.registry.utils;
        const s = string.trim();
        if (s.match(/^('.*'|".*")$/)) { // String literal
            return JSON.stringify(s.substr(1, s.length - 2));
        }
        return s.match(/^\d+$/) ? s : `CTX.${cleanWord(s)}`
    }

    escapeText(text) {
        if (text && text.safe) {
            return text;
        }
        return (text + '').replace(/&/g, '&amp;')
            .replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/'/g, '&#x27;').replace(/"/g, '&quot;');
    }
}, {
    modeTokens: ['{% %}', '{{ }}', '{# #}'],
    opTokens: '==,>,<,>=,<=,!=,not in,is not,is,in,not,gt,lt',
    opAliases: {
        '==': 'X === Y',
        'is': 'X === Y',
        'gt': 'X > Y',
        'lt': 'X < Y',
        'is not': 'X !== Y',
        'not': '!(Y)',
        'in': '(Y).includes ? (Y).includes(X) : (X in Y)',
        'not in': '!((Y).includes ? (Y).includes(X) : (X in Y))',
    },
});

// TODO: Consider patterns like this to avoid excess reapplication of
// filters:
// (x = X, y = Y).includes ? y.includes(x) : (x in y)
modulo.config.templater.modes = {
    '{%': (text, tmplt, stack) => {
        const tTag = text.trim().split(' ')[0];
        const tagFunc = tmplt.tags[tTag];
        if (stack.length && tTag === stack[stack.length - 1].close) {
            return stack.pop().end; // Closing tag, return it's end code
        } else if (!tagFunc) { // Undefined template tag
            throw new Error(`Unknown template tag "${tTag}": ${text}`);
        } // Normal opening tag
        const result = tagFunc(text.slice(tTag.length + 1), tmplt);
        if (result.end) { // Not self-closing, push to stack
            stack.push({ close: `end${ tTag }`, ...result });
        }
        return result.start || result;
    },
    '{#': (text, tmplt) => false, // falsy values are ignored
    '{{': (text, tmplt) => `OUT.push(G.escapeText(${tmplt.parseExpr(text)}));`,
    text: (text, tmplt) => text && `OUT.push(${JSON.stringify(text)});`,
};

modulo.config.templater.filters = (function () {
    const { get } = modulo.registry.utils;
    const safe = s => Object.assign(new String(s), { safe: true });
    const filters = {
        add: (s, arg) => s + arg,
        allow: (s, arg) => arg.split(',').includes(s) ? s : '',
        camelcase: s => s.replace(/-([a-z])/g, g => g[1].toUpperCase()),
        capfirst: s => s.charAt(0).toUpperCase() + s.slice(1),
        concat: (s, arg) => s.concat ? s.concat(arg) : s + arg,
        combine: (s, arg) => s.concat ? s.concat(arg) : Object.assign({}, s, arg),
        default: (s, arg) => s || arg,
        divisibleby: (s, arg) => ((s * 1) % (arg * 1)) === 0,
        dividedinto: (s, arg) => Math.ceil((s * 1) / (arg * 1)),
        escapejs: s => JSON.stringify(String(s)).replace(/(^"|"$)/g, ''),
        first: s => Array.from(s)[0],
        join: (s, arg) => (s || []).join(arg === undefined ? ", " : arg),
        json: (s, arg) => JSON.stringify(s, null, arg || undefined),
        last: s => s[s.length - 1],
        length: s => s.length !== undefined ? s.length : Object.keys(s).length,
        lower: s => s.toLowerCase(),
        multiply: (s, arg) => (s * 1) * (arg * 1),
        number: (s) => Number(s),
        pluralize: (s, arg) => (arg.split(',')[(s === 1) * 1]) || '',
        skipfirst: (s, arg) => Array.from(s).slice(arg || 1),
        subtract: (s, arg) => s - arg,
        truncate: (s, arg) => ((s && s.length > arg*1) ? (s.substr(0, arg-1) + '…') : s),
        type: s => s === null ? 'null' : (Array.isArray(s) ? 'array' : typeof s),
        renderas: (rCtx, template) => safe(template.render(rCtx)),
        reversed: s => Array.from(s).reverse(),
        upper: s => s.toUpperCase(),
        yesno: (s, arg) => `${ arg || 'yes,no' },,`.split(',')[s ? 0 : s === null ? 2 : 1],
    };
    const { values, keys, entries } = Object;
    const extra = { get, safe, values, keys, entries };
    return Object.assign(filters, extra);
})();

modulo.config.templater.tags = {
    'debugger': () => 'debugger;',
    'if': (text, tmplt) => {
        // Limit to 3 (L/O/R)
        const [ lHand, op, rHand ] = tmplt.parseCondExpr(text);
        const condStructure = !op ? 'X' : tmplt.opAliases[op] || `X ${op} Y`;
        const condition = condStructure.replace(/([XY])/g,
            (k, m) => tmplt.parseExpr(m === 'X' ? lHand : rHand));
        const start = `if (${condition}) {`;
        return {start, end: '}'};
    },
    'else': () => '} else {',
    'elif': (s, tmplt) => '} else ' + tmplt.tags['if'](s, tmplt).start,
    'comment': () => ({ start: "/*", end: "*/"}),
    'include': (text) => `OUT.push(CTX.${ text.trim() }.render(CTX));`,
    'for': (text, tmplt) => {
        // Make variable name be based on nested-ness of tag stack
        const { cleanWord } = modulo.registry.utils;
        const arrName = 'ARR' + tmplt.stack.length;
        const [ varExp, arrExp ] = text.split(' in ');
        let start = `var ${arrName}=${tmplt.parseExpr(arrExp)};`;
        // TODO: Upgrade to of (after good testing), since probably no need to
        // support for..in
        start += `for (var KEY in ${arrName}) {`;
        const [keyVar, valVar] = varExp.split(',').map(cleanWord);
        if (valVar) {
            start += `CTX.${keyVar}=KEY;`;
        }
        start += `CTX.${valVar ? valVar : varExp}=${arrName}[KEY];`;
        return {start, end: '}'};
    },
    'empty': (text, {stack}) => {
        // Make variable name be based on nested-ness of tag stack
        const varName = 'G.FORLOOP_NOT_EMPTY' + stack.length;
        const oldEndCode = stack.pop().end; // get rid of dangling for
        const start = `${varName}=true; ${oldEndCode} if (!${varName}) {`;
        const end = `}${varName} = false;`;
        return {start, end, close: 'endfor'};
    },
};

modulo.register('engine', class DOMCursor {
    constructor(parentNode, parentRival) {
        this.initialize(parentNode, parentRival);
        this.instanceStack = [];
    }

    initialize(parentNode, parentRival) {
        this.parentNode = parentNode;
        this.nextChild = parentNode.firstChild;
        this.nextRival = parentRival.firstChild;
        this.keyedChildren = {};
        this.keyedRivals = {};
        this.keyedChildrenArr = null;
        this.keyedRivalsArr = null;
    }

    saveToStack() {
        // TODO: Once we finalize this class, write "_.pick" helper
        const { nextChild, nextRival, keyedChildren, keyedRivals,
                parentNode, keyedChildrenArr, keyedRivalsArr } = this;
        const instance = { nextChild, nextRival, keyedChildren, keyedRivals,
                parentNode, keyedChildrenArr, keyedRivalsArr };
        this.instanceStack.push(instance);
    }

    loadFromStack() {
        const stack = this.instanceStack;
        return stack.length > 0 && Object.assign(this, stack.pop());
    }

    hasNext() {
        if (this.nextChild || this.nextRival) {
            return true; // Is pointing at another node
        }

        // Convert objects into arrays so we can pop
        if (!this.keyedChildrenArr) {
            this.keyedChildrenArr = Object.values(this.keyedChildren);
        }
        if (!this.keyedRivalsArr) {
            this.keyedRivalsArr = Object.values(this.keyedRivals);
        }

        if (this.keyedRivalsArr.length || this.keyedChildrenArr.length) {
            return true; // We have queued up nodes from keyed values
        }

        return this.loadFromStack() && this.hasNext();
    }

    next() {
        let child = this.nextChild;
        let rival = this.nextRival;
        if (!child && !rival) { // reached the end
            if (!this.keyedRivalsArr) {
                return [null, null];
            }
            // There were excess keyed rivals OR children, pop()
            return this.keyedRivalsArr.length ?
                  [ null, this.keyedRivalsArr.pop() ] :
                  [ this.keyedChildrenArr.pop(), null ];
        }

        // Handle keys
        this.nextChild = child ? child.nextSibling : null;
        this.nextRival = rival ? rival.nextSibling : null;

        let matchedRival = this.getMatchedNode(child, this.keyedChildren, this.keyedRivals);
        let matchedChild = this.getMatchedNode(rival, this.keyedRivals, this.keyedChildren);
        // TODO refactor this
        if (matchedRival === false) {
            // Child has a key, but does not match rival, so SKIP on child
            child = this.nextChild;
            this.nextChild = child ? child.nextSibling : null;
        } else if (matchedChild === false) {
            // Rival has a key, but does not match child, so SKIP on rival
            rival = this.nextRival;
            this.nextRival = rival ? rival.nextSibling : null;
        }
        const keyWasFound = matchedRival !== null || matchedChild !== null;
        const matchFound = matchedChild !== child && keyWasFound;
        if (matchFound && matchedChild) {
            // Rival matches, but not with child. Swap in child.
            this.nextChild = child;
            child = matchedChild;
        }

        if (matchFound && matchedRival) {
            // Child matches, but not with rival. Swap in rival.
            this.modulo.assert(matchedRival !== rival, 'Dupe!'); // (We know this due to ordering)
            this.nextRival = rival;
            rival = matchedRival;
        }

        return [ child, rival ];
    }

    getMatchedNode(elem, keyedElems, keyedOthers) {
        const key = elem && elem.getAttribute && elem.getAttribute('key');
        if (!key) {
            return null;
        }
        if (key in keyedOthers) {
            const matched = keyedOthers[key];
            delete keyedOthers[key];
            return matched;
        } else {
            if (key in keyedElems) {
                console.error('MODULO WARNING: Duplicate key:', key);
            }
            keyedElems[key] = elem;
            return false;
        }
    }
});

modulo.config.reconciler = {
    directiveShortcuts: [ [ /^@/, 'component.event' ],
                          [ /:$/, 'component.dataProp' ] ],
};
modulo.register('engine', class Reconciler {
    constructor(modulo, def) {
        this.modulo = modulo;
        this.constructor_old(def);
    }
    constructor_old(opts) {
        opts = opts || {};
        this.shouldNotDescend = !!opts.doNotDescend;
        this.directives = opts.directives || {};
        this.tagTransforms = opts.tagTransforms;
        this.directiveShortcuts = opts.directiveShortcuts || [];
        if (this.directiveShortcuts.length === 0) { // XXX horrible HACK
            this.directiveShortcuts = modulo.config.reconciler.directiveShortcuts; // TODO global modulo
        }
        this.patch = this.pushPatch;
        this.patches = [];
    }

    parseDirectives(rawName, directiveShortcuts) { //, foundDirectives) {
        if (/^[a-z0-9-]$/i.test(rawName)) {
            return null; // if alpha-only, stop right away
            // TODO: If we ever support key= as a shortcut, this will break
        }

        // "Expand" shortcuts into their full versions
        let name = rawName;
        for (const [regexp, directive] of directiveShortcuts) {
            if (rawName.match(regexp)) {
                name = `[${directive}]` + name.replace(regexp, '');
            }
        }
        if (!name.startsWith('[')) {
            return null; // There are no directives, regular attribute, skip
        }

        // There are directives... time to resolve them
        const { cleanWord, stripWord } = modulo.registry.utils; // TODO global modulo
        const arr = [];
        const attrName = stripWord((name.match(/\][^\]]+$/) || [ '' ])[0]);
        for (const directiveName of name.split(']').map(cleanWord)) {
            // Skip the bare name itself, and filter for valid directives
            if (directiveName !== attrName) {// && directiveName in directives) {
                arr.push({ attrName, rawName, directiveName, name })
            }
        }
        return arr;
    }

    loadString(rivalHTML, tagTransforms) {
        this.patches = [];
        const rival = modulo.registry.utils.makeDiv(rivalHTML);
        const transforms = Object.assign({}, this.tagTransforms, tagTransforms);
        this.applyLoadDirectives(rival, transforms);
        return rival;
    }

    reconcile(node, rival, tagTransforms) {
        // TODO: should normalize <!DOCTYPE html>
        if (typeof rival === 'string') {
            rival = this.loadString(rival, tagTransforms);
        }
        this.reconcileChildren(node, rival);
        this.cleanRecDirectiveMarks(node);
        return this.patches;
    }

    applyLoadDirectives(elem, tagTransforms) {
        this.patch = this.applyPatch; // Apply patches immediately
        for (const node of elem.querySelectorAll('*')) {
            // legacy -v, TODO rm
            const newTag = tagTransforms[node.tagName.toLowerCase()];
            //console.log('this is tagTransforms', tagTransforms);
            if (newTag) {
                modulo.registry.utils.transformTag(node, newTag);
            }
            ///////

            const lowerName = node.tagName.toLowerCase();
            if (lowerName in this.directives) {
                this.patchDirectives(node, `[${lowerName}]`, 'TagLoad');
            }

            for (const rawName of node.getAttributeNames()) {
                // Apply load-time directive patches
                this.patchDirectives(node, rawName, 'Load');
            }
        }
        this.markRecDirectives(elem); // TODO rm
        this.patch = this.pushPatch;
    }

    markRecDirectives(elem) {
        // TODO remove this after we reimplement [component.ignore]
        // Mark all children of modulo-ignore with mm-ignore
        for (const node of elem.querySelectorAll('[modulo-ignore] *')) {
            // TODO: Very important: also mark to ignore children that are
            // custom!
            node.setAttribute('mm-ignore', 'mm-ignore');
        }

        // TODO: hacky / leaky solution to attach like this
        //for (const rivalChild of elem.querySelectorAll('*')) {
        //    rivalChild.moduloDirectiveContext = this.directives;
        //}
    }

    cleanRecDirectiveMarks(elem) {
        // Remove all mm-ignores
        for (const node of elem.querySelectorAll('[mm-ignore]')) {
            node.removeAttribute('mm-ignore');
        }
    }

    applyPatches(patches) {
        patches.forEach(patch => this.applyPatch.apply(this, patch));
    }

    reconcileChildren(childParent, rivalParent) {
        // Nonstandard nomenclature: "The rival" is the node we wish to match
        const cursor = new modulo.registry.engines.DOMCursor(childParent, rivalParent);
        while (cursor.hasNext()) {
            const [ child, rival ] = cursor.next();
            const needReplace = child && rival && (
                child.nodeType !== rival.nodeType ||
                child.nodeName !== rival.nodeName
            ); // Does this node to be swapped out? Swap if exist but mismatched

            if ((child && !rival) || needReplace) { // we have more rival, delete child
                this.patchAndDescendants(child, 'Unmount');
                this.patch(cursor.parentNode, 'removeChild', child);
            }

            if (needReplace) { // do swap with insertBefore
                this.patch(cursor.parentNode, 'insertBefore', rival, child.nextSibling);
                this.patchAndDescendants(rival, 'Mount');
            }

            if (!child && rival) { // we have less than rival, take rival
                this.patch(cursor.parentNode, 'appendChild', rival);
                this.patchAndDescendants(rival, 'Mount');
            }

            if (child && rival && !needReplace) {
                // Both exist and are of same type, let's reconcile nodes
                if (child.nodeType !== 1) { // text or comment node
                    if (child.nodeValue !== rival.nodeValue) { // update
                        this.patch(child, 'node-value', rival.nodeValue);
                    }
                } else if (!child.isEqualNode(rival)) { // sync if not equal
                    this.reconcileAttributes(child, rival);
                    if (rival.hasAttribute('modulo-ignore')) {
                        // console.log('Skipping ignored node');
                    } else if (child.isModulo) { // is a Modulo component
                        this.patch(child, 'rerender', rival);
                    } else if (!this.shouldNotDescend) {
                        cursor.saveToStack();
                        cursor.initialize(child, rival);
                    }
                }
            }
        }
    }

    pushPatch(node, method, arg, arg2 = null) {
        this.patches.push([ node, method, arg, arg2 ]);
    }

    applyPatch(node, method, arg, arg2) { // take that, rule of 3!
        //if (!node || !node[method]) { console.error('NO NODE:', node, method, arg, arg2) } // XXX
        if (method === 'node-value') {
            node.nodeValue = arg;
        } else if (method === 'insertBefore') {
            node.insertBefore(arg, arg2); // Needs 2 arguments
        } else if (method === 'attr-append') { // Append string to existing
            node.setAttribute(arg, (node.getAttribute(arg) || '') + arg2); // TODO: DEAD CODE
        } else if (method.startsWith('directive-')) {
            // TODO: Possibly, remove 'directive-' prefix, unnecessary
            method = method.substr('directive-'.length);
            node[method].call(node, arg); // invoke directive method
        } else {
            node[method].call(node, arg); // invoke method
        }
    }

    patchDirectives(el, rawName, suffix, copyFromEl = null) {
        const foundDirectives = this.parseDirectives(rawName, this.directiveShortcuts);
        if (!foundDirectives || foundDirectives.length === 0) {
            return;
        }

        const value = (copyFromEl || el).getAttribute(rawName); // Get value
        for (const directive of foundDirectives) {
            const dName = directive.directiveName; // e.g. "state.bind", "link"
            const fullName = dName + suffix; // e.g. "state.bindMount"

            // Hacky: Check if this elem has a different moduloDirectiveContext than expected
            //const directives = (copyFromEl || el).moduloDirectiveContext || this.directives;
            //if (el.moduloDirectiveContext) {
            //    console.log('el.moduloDirectiveContext', el.moduloDirectiveContext);
            //}
            const { directives } = this;

            const thisContext = directives[dName] || directives[fullName];
            if (thisContext) { // If a directive matches...
                const methodName = fullName.split('.')[1] || fullName;
                Object.assign(directive, { value, el });
                this.patch(thisContext, 'directive-' + methodName, directive);
            }
        }
    }

    reconcileAttributes(node, rival) {
        const myAttrs = new Set(node ? node.getAttributeNames() : []);
        const rivalAttributes = new Set(rival.getAttributeNames());

        // Check for new and changed attributes
        for (const rawName of rivalAttributes) {
            const attr = rival.getAttributeNode(rawName);
            if (myAttrs.has(rawName) && node.getAttribute(rawName) === attr.value) {
                continue; // Already matches, on to next
            }

            if (myAttrs.has(rawName)) { // If exists, trigger Unmount first
                this.patchDirectives(node, rawName, 'Unmount');
            }
            // Set attribute node, and then Mount based on rival value
            this.patch(node, 'setAttributeNode', attr.cloneNode(true));
            this.patchDirectives(node, rawName, 'Mount', rival);
        }

        // Check for old attributes that were removed
        for (const rawName of myAttrs) {
            if (!rivalAttributes.has(rawName)) {
                this.patchDirectives(node, rawName, 'Unmount');
                this.patch(node, 'removeAttribute', rawName);
            }
        }
    }

    patchAndDescendants(parentNode, actionSuffix) {
        if (parentNode.nodeType !== 1) { // cannot have descendants
            return;
        }
        let nodes = [ parentNode ]; // also, patch self (but last)
        if (!this.shouldNotDescend) {
            nodes = Array.from(parentNode.querySelectorAll('*')).concat(nodes);
        }
        for (let rival of nodes) { // loop through nodes to patch
            if (rival.hasAttribute('mm-ignore')) {
                // Skip any marked to ignore
                continue;
            }

            for (const rawName of rival.getAttributeNames()) {
                // Loop through each attribute patching foundDirectives as necessary
                this.patchDirectives(rival, rawName, actionSuffix);
            }
        }
    }
});

modulo.register('util', function getAutoExportNames(contents) {
    // TODO: Change exports/Directives/etc to def processor to better expose
    const regexpG = /(function|class)\s+(\w+)/g;
    const regexp2 = /(function|class)\s+(\w+)/; // hack, refactor
    return (contents.match(regexpG) || []).map(s => s.match(regexp2)[2])
        .filter(s => s && !Modulo.INVALID_WORDS.has(s));
});

modulo.register('util', function fetchBundleData(modulo, callback) {
    const query = 'script[src],link[rel=stylesheet]';
    const data = [];
    const elems = Array.from(window.document.querySelectorAll(query));
    for (const elem of elems) {
        const dataItem = {
            src: elem.src || elem.href,
            type: elem.tagName === 'SCRIPT' ? 'js' : 'css',
            content: null,
        };
        elem.remove();
        // TODO: Add support for inline script tags..?
        data.push(dataItem);
        modulo.fetchQueue.fetch(dataItem.src).then(text => {
            delete modulo.fetchQueue.data[dataItem.src]; // clear cached data
            dataItem.content = text;
        });
    }
    modulo.fetchQueue.enqueueAll(() => callback(data));
});

modulo.register('util', function getBuiltHTML(modulo, opts = {}) {
    // Scan document for modulo elements, attaching modulo-original-html=""
    // as needed, and clearing link / script tags that have been bundled
    const bundledTags = { script: 1, link: 1, style: 1 }; // TODO: Move to conf?
    for (const elem of window.document.querySelectorAll('*')) {
        if (elem.tagName.toLowerCase() in bundledTags) {
            elem.remove();
        }
        /*
            // TODO: As we are bundling together, create a src/href/etc collection
            // to the compare against instead?
            // TODO: Maybe remove bundle logic here, since we remove when bundling?
        if (elem.hasAttribute('modulo-asset')) {
            elem.remove(); // TODO: Maybe remove bundle logic here, since we remove when bundling?
        }
        */
        if (elem.isModulo && elem.originalHTML !== elem.innerHTML) {
            elem.setAttribute('modulo-original-html', elem.originalHTML);
        }
    }
    let head = '<head>' + window.document.head.innerHTML;
    let body = '<body>' + window.document.body.innerHTML;
    head += `<link rel="stylesheet" href="${ opts.cssFilePath }" /></head>`;
    body += `<script src="${ opts.jsFilePath }"></script>`;
    body += `<script>${ opts.jsInlineText }</script></body>`;
    return '<!DOCTYPE HTML><html>' + head + body + '</html>';
});

modulo.register('command', function build (modulo, opts = {}) {
    const { saveFileAs, getBuiltHTML, hash } = modulo.registry.utils;
    modulo.assets.bundleAssets((js, css) => {
        opts.jsInlineText = modulo.assets.buildMain();
        opts.jsFilePath = saveFileAs(`modulo-build-${ hash(js) }.js`, js);
        opts.cssFilePath = saveFileAs(`modulo-build-${ hash(css) }.css`, css);
        const htmlFN = window.location.pathname.split('/').pop() || 'index.html';
        opts.htmlFilePath = saveFileAs(htmlFN, getBuiltHTML(modulo, opts));
        window.setTimeout(() => {
            // TODO: Move this "refresh" into a generic utility
            window.document.body.innerHTML = `<h1><a href="?mod-cmd=build">&#10227;
                build</a>: ${ opts.htmlFilePath }</h1>`;
            if (opts && opts.callback) {
                opts.callback();
            }
        }, 0);
    });
});

if (typeof document !== 'undefined' && !window.moduloBuild) {
    window.document.addEventListener('DOMContentLoaded', () => modulo.fetchQueue.wait(() => {
        const cmd = new URLSearchParams(window.location.search).get('mod-cmd');
        if (cmd || window.moduloBuild) { // Command / already built: Run & exit
            return cmd && modulo.registry.commands[cmd](modulo);
        } // Else: Display "COMMANDS:" menu in console
        const commandNames = Object.keys(modulo.registry.commands);
        const href = 'window.location.href += ';
        const font = 'font-size: 28px; padding: 0 8px 0 8px; border: 2px solid black;';
        const commandGetters = commandNames.map(cmd =>
            ('get ' + cmd + ' () {' + href + '"?mod-cmd=' + cmd + '";}'));
        const clsCode = 'class COMMANDS {' + commandGetters.join('\n') + '}';
        new Function(`console.log('%c%', '${ font }', new (${ clsCode }))`)();
    }));
}

if (typeof document !== 'undefined' && document.head) { // Browser environ
    modulo.start(window.moduloBuild);
} else if (typeof exports !== 'undefined') { // Node.js / silo'ed script
    exports = { Modulo, modulo };
}
