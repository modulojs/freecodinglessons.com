window.moduloBuild = window.moduloBuild || { modules: {} };
window.moduloBuild.modules["x1rohfh0"] = function SlideWrapper (modulo) {

        const def = modulo.definitions['SlideWrapper'];
        class x_SlideWrapper extends window.HTMLElement {
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
        modulo.registry.utils.initClass(modulo, def, x_SlideWrapper);
        window.customElements.define(def.TagName, x_SlideWrapper);
        return x_SlideWrapper;
    
};
window.moduloBuild.modules["x1lmhce8"] = function SlideWrapper_script (modulo) {
var script = { exports: {} }; 

            function prepareCallback () {
                // TODO: Switch to using GetParams
                const urlParams = new URLSearchParams(window.location.search);
                let title;
                let path;
                if (urlParams.has('title')) {
                    title = urlParams.get('title');
                }
                if (urlParams.has('path')) {
                    path = urlParams.get('path');
                }
                return { title, path };
            }
        
return {"prepareCallback": typeof prepareCallback !== "undefined" ? prepareCallback : undefined, setLocalVariables: function(o) {}, exports: script.exports }

};
window.moduloBuild.modules["xxjctm2t"] = function SlideWrapper_template (modulo) {
return function (CTX, G) { var OUT=[];
  OUT.push("\n            <x-landingpage title=\""); // "<x-landingpage title=\""
  OUT.push(G.escapeText(CTX.script.title)); // "script.title"
  OUT.push(" - Slides\" cls=\"slides\">\n                <x-markdown slideshow:=\"true\" src=\""); // "- Slides\" cls=\"slides\"><x-markdown slideshow:=\"true\" src=\""
  OUT.push(G.escapeText(CTX.script.path)); // "script.path"
  OUT.push("\"></x-markdown>\n            </x-landingpage>\n        "); // "\"></x-markdown></x-landingpage>"

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
window.moduloBuild.modules["xx21950t"] = function library1_Markdown_script (modulo) {
var script = { exports: {} }; var props, state, component, element;

        const { moduloMarkdown } = modulo.registry.utils;
        function prepareCallback() {
            if (props.src && state.source === null) {
                modulo.fetchQueue.fetch(props.src).then(text => {
                    state.source = text;
                    element.rerender();
                });
            }
        }

        function renderCallback() {
            if (state.source !== null) {
                const opts = {};
                if (props.slideshow) {
                    opts.slideshow = true;
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
window.moduloBuild.modules["x1ro2kun"] = function library1_SlideShow_template (modulo) {
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
  OUT.push("\n                    <div class=\"slide\">"); // "<div class=\"slide\">"
  OUT.push(G.escapeText(G.filters["safe"](CTX.slide.html))); // "slide.html|safe"
  OUT.push(" </div>\n                "); // "</div>"
  } // "endfor"
  OUT.push("\n            </div>\n        </div>\n    "); // "</div></div>"

return OUT.join(""); };
};
window.moduloBuild.modules["xxa7ngth"] = function library1_configuration (modulo) {
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self).snarkdown=n()}(this,function(){var e={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function n(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function r(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}return function t(o,a){var c,s,l,g,u,p=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,f=[],i="",d=a||{},m=0;function h(n){var r=e[n[1]||""],t=f[f.length-1]==n;return r?r[1]?(t?f.pop():f.push(n),r[0|t]):r[0]:n}function $(){for(var e="";f.length;)e+=h(f[f.length-1]);return e}for(o=o.replace(/^\[(.+?)\]:\s*(.+)$/gm,function(e,n,r){return d[n.toLowerCase()]=r,""}).replace(/^\n+|\n+$/g,"");l=p.exec(o);)s=o.substring(m,l.index),m=p.lastIndex,c=l[0],s.match(/[^\\](\\\\)*\\$/)||((u=l[3]||l[4])?c='<pre class="code '+(l[4]?"poetry":l[2].toLowerCase())+'"><code'+(l[2]?' class="language-'+l[2].toLowerCase()+'"':"")+">"+n(r(u).replace(/^\n+|\n+$/g,""))+"</code></pre>":(u=l[6])?(u.match(/\./)&&(l[5]=l[5].replace(/^\d+/gm,"")),g=t(n(l[5].replace(/^\s*[>*+.-]/gm,""))),">"==u?u="blockquote":(u=u.match(/\./)?"ol":"ul",g=g.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),c="<"+u+">"+g+"</"+u+">"):l[8]?c='<img src="'+r(l[8])+'" alt="'+r(l[7])+'">':l[10]?(i=i.replace("<a>",'<a href="'+r(l[11]||d[s.toLowerCase()])+'">'),c=$()+"</a>"):l[9]?c="<a>":l[12]||l[14]?c="<"+(u="h"+(l[14]?l[14].length:l[13]>"="?1:2))+">"+t(l[12]||l[15],d)+"</"+u+">":l[16]?c="<code>"+r(l[16])+"</code>":(l[17]||l[1])&&(c=h(l[17]||"--"))),i+=s,i+=c;return(i+o.substring(m)+$()).replace(/^\n+|\n+$/g,"")}});
//# sourceMappingURL=snarkdown.umd.js.map

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

    function moduloMarkdown(source, options = defaultOptions) {
        // Unescape
        source = source.replace(/&gt;/gi, '>').replace(/&lt;/gi, '<');
        let html = snarkdown(source);
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
        return html;
    }

    modulo.register('util', snarkdown);
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
window.moduloBuild.modules["x1tgiqpf"] = function library_LessonNav (modulo) {

        const def = modulo.definitions['library_LessonNav'];
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
window.moduloBuild.modules["x1vg98gd"] = function library_LessonNav_script (modulo) {
var script = { exports: {} }; var props, style, element;

const currentYear = (new Date()).getFullYear();

// TODO: Possibly auto generate?
const navigation = [
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
        title: "Overview",
        file: "foundations/overview.html",
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


// TODO: Maybe later have this get "switched on" when you sign in or something?
const extraNav = [
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

function getNav() {
    return navigation;
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
        currentYear,
        navigation,
        hash,
    };
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



return {"getNav": typeof getNav !== "undefined" ? getNav : undefined, "isVisible": typeof isVisible !== "undefined" ? isVisible : undefined, "prepareCallback": typeof prepareCallback !== "undefined" ? prepareCallback : undefined, "updateCallback": typeof updateCallback !== "undefined" ? updateCallback : undefined, setLocalVariables: function(o) {props=o.props; style=o.style; element=o.element}, exports: script.exports }

};
window.moduloBuild.modules["xx5gt8ch"] = function library_LessonNav_template (modulo) {
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
  /* // "comment"
  OUT.push("\n                        "); // ""
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
  */ // "endcomment"
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
  OUT.push("\n    </ul>\n</nav>\n\n"); // "</ul></nav>"

return OUT.join(""); };
};
window.moduloBuild.modules["x1ktrkoj"] = function library_LessonPage (modulo) {

        const def = modulo.definitions['library_LessonPage'];
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
window.moduloBuild.modules["x1ggnf8l"] = function library_LessonPage_script (modulo) {
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
    }
    let foundNavItem = {};
    for (const navItem of navigation) {
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
window.moduloBuild.modules["x11rbo2j"] = function library_LessonPage_staticdata (modulo) {
return {"files":["/home/michaelb/projects/freecodinglessons/src/foundations/.git","/home/michaelb/projects/freecodinglessons/src/foundations/.gitignore","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act1/challenge1.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act1/challenge2.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act1/challenge3.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act1/challenge4.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act1/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act2/challenge1.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act2/challenge2.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act2/challenge3.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act2/challenge4.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act2/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act3/challenge1.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act3/challenge2.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act3/challenge3.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act3/challenge4.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act3/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act4/challenge1.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act4/challenge2.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act4/challenge3.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act4/challenge4.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act4/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/slides/part_1_terminology.md","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/solutions/solution1.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/solutions/solution2.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/solutions/solution3.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.1/solutions/solution4.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act1/challenge1.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act1/challenge2.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act1/challenge3.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act1/challenge4.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act1/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act2/challenge1.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act2/challenge2.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act2/challenge3.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act2/challenge4.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act2/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act3/challenge1.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act3/challenge2.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act3/challenge3.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act3/challenge4.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act3/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act4/challenge1.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act4/challenge2.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act4/challenge3.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act4/challenge4.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act4/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/solutions/solution1.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/solutions/solution2.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/solutions/solution3.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.2/solutions/solution4.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project1/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project2/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project2/project_steps.md","/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project3/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/1.3/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.3/solutions/project_1.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.3/solutions/project_2.html","/home/michaelb/projects/freecodinglessons/src/foundations/1.3/solutions/project_3.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act1/challenge1.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act1/challenge2.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act1/challenge3.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act1/challenge4.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act1/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/babbage.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/ch2/babbage.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/ch2/ch1/babbage.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/ch2/ch1/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/ch2/ch1/lovelace.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/ch2/ch1/turing.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/ch2/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/ch2/lovelace.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/ch2/turing.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/lovelace.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/turing.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/babbage.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/ch1/babbage.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/ch1/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/ch1/lovelace.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/ch1/turing.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/lovelace.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/turing.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch3/babbage.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch3/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch3/lovelace.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch3/turing.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act3/ch1/art.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act3/ch1/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act3/ch1/photos.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act3/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/old_index.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols1/solution1.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols1/solution2.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols1/solution3.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols1/solution4.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol1/babbage.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol1/ch2/babbage.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol1/ch2/ch1/babbage.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol1/ch2/ch1/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol1/ch2/ch1/lovelace.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol1/ch2/ch1/turing.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol1/ch2/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol1/ch2/lovelace.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol1/ch2/turing.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol1/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol1/lovelace.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol1/turing.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol2/babbage.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol2/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol2/lovelace.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol2/turing.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.2/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/2.3/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/challenge_1.html","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/challenge_1_styles.css","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/challenge_2.html","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/challenge_2_styles.css","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/challenge_3.html","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/challenge_3_styles.css","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/instructions.md","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols1/challenge_1_styles.css","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols1/challenge_2_styles.css","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols1/challenge_3_styles.css","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols1/solution_1.html","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols1/solution_2.html","/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols1/solution_3.html","/home/michaelb/projects/freecodinglessons/src/foundations/3.2/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/3.3/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/4.1/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/4.2/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/4.3/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/LICENSE","/home/michaelb/projects/freecodinglessons/src/foundations/README.md","/home/michaelb/projects/freecodinglessons/src/foundations/index.html","/home/michaelb/projects/freecodinglessons/src/foundations/overview.html","/home/michaelb/projects/freecodinglessons/src/foundations/overview.md"]};
};
window.moduloBuild.modules["xxk1t3ek"] = function library_LessonPage_template (modulo) {
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
  OUT.push("</h2>\n        <figure>\n            <img src=\"/__screenshot"); // "</h2><figure><img src=\"/__screenshot"
  OUT.push(G.escapeText(CTX.act.solutionPath)); // "act.solutionPath"
  OUT.push(".png\" />\n            <a href=\""); // ".png\" /><a href=\""
  OUT.push(G.escapeText(CTX.act.solutionPath)); // "act.solutionPath"
  OUT.push("\">View "); // "\">View"
  OUT.push(G.escapeText(CTX.act.title)); // "act.title"
  OUT.push(" Solution</a>\n        </figure>\n        <aside>\n            <div class=\"slide-card\">\n                <div class=\"slide-preview\">\n                    <x-Markdown \n                        slideshow:=true\n                        firstslide:=true\n                        src=\""); // "Solution</a></figure><aside><div class=\"slide-card\"><div class=\"slide-preview\"><x-Markdown slideshow:=true firstslide:=true src=\""
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
  OUT.push(" code files (GitHub) &raquo;</a>\n                </li>\n            </ul>\n        </aside>\n\n        "); // "code files (GitHub) &raquo;</a></li></ul></aside>"
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
window.moduloBuild.modules["xxl6tge8"] = function library_Page_template (modulo) {
return function (CTX, G) { var OUT=[];
  OUT.push("<head>\n    <title>"); // "<head><title>"
  OUT.push(G.escapeText(CTX.props.title)); // "props.title"
  OUT.push("</title>\n    <meta charset=\"utf8\" />\n    <link rel=\"stylesheet\" href=\"/static/css/site.css\" />\n</head>\n<body>\n    <div class=\"Page-container\">\n        <x-LessonNav navselected=\""); // "</title><meta charset=\"utf8\" /><link rel=\"stylesheet\" href=\"/static/css/site.css\" /></head><body><div class=\"Page-container\"><x-LessonNav navselected=\""
  OUT.push(G.escapeText(CTX.props.navselected)); // "props.navselected"
  OUT.push("\" subnav:=\""); // "\" subnav:=\""
  OUT.push(G.escapeText(G.filters["json"](CTX.props.subnav))); // "props.subnav|json"
  OUT.push("\"></x-LessonNav>\n\n        <main class=\"Page-mainContent\">\n            <slot></slot>\n        </main>\n        <nav class=\"Page-toolbar\">\n            <abbr class=\"Page-earlyAccess\" title=\"We haven't finished this new course yet, but we're opening it up to get early feedback! \">Early Access</abbr>\n            <!-- \n                Later, we'll put sign-in, etc. here\n                - Full feature ideas:\n                - Modulo editor mini? (E.g. share some code with modulo editor)\n                - Signs in to modulo.page (or whatever)\n                - Take notes / highlight page on any URL\n                - Quiz results, etc\n            -->\n        </nav>\n    </div>\n\n    <footer class=\"Page-footer\">\n        &copy; "); // "\"></x-LessonNav><main class=\"Page-mainContent\"><slot></slot></main><nav class=\"Page-toolbar\"><abbr class=\"Page-earlyAccess\" title=\"We haven't finished this new course yet, but we're opening it up to get early feedback! \">Early Access</abbr><!-- Later, we'll put sign-in, etc. here - Full feature ideas: - Modulo editor mini? (E.g. share some code with modulo editor) - Signs in to modulo.page (or whatever) - Take notes / highlight page on any URL - Quiz results, etc --></nav></div><footer class=\"Page-footer\"> &copy;"
  OUT.push(G.escapeText(CTX.script.currentYear)); // "script.currentYear"
  OUT.push(" Michael Bethencourt\n        %\n        <a href=\"https://modulojs.org/\" title=\"Made with Modulo.js\">\n            A Modulo.js Course\n        </a>\n        %\n        <a href=\"https://kickstartcoding.com/\" title=\"Hosted by Kickstart Coding\">\n            In-person sessions by Kickstart Coding\n        </a>\n    </footer>\n</body>\n"); // "Michael Bethencourt % <a href=\"https://modulojs.org/\" title=\"Made with Modulo.js\"> A Modulo.js Course </a> % <a href=\"https://kickstartcoding.com/\" title=\"Hosted by Kickstart Coding\"> In-person sessions by Kickstart Coding </a></footer></body>"

return OUT.join(""); };
};
window.moduloBuild.nameToHash = {
 "library1_configuration": "xxa7ngth",
 "SlideWrapper": "x1rohfh0",
 "SlideWrapper_script": "x1lmhce8",
 "library_Page": "x1833ghl",
 "library_LessonPage": "x1ktrkoj",
 "library_LessonNav": "x1tgiqpf",
 "library_LandingPage": "x18q8cua",
 "library_Page_script": "x1g0b0et",
 "library_LessonPage_script": "x1ggnf8l",
 "library_LessonNav_script": "x1vg98gd",
 "library_LandingPage_script": "x1g0b0et",
 "library1_Markdown": "x18768n2",
 "library1_SlideShow": "x12ecn35",
 "library1_Slide": "xxb3ajao",
 "library1_Markdown_script": "xx21950t",
 "library1_SlideShow_script": "xxn0hhmv",
 "SlideWrapper_template": "xxjctm2t",
 "library_Page_template": "xxl6tge8",
 "library_LessonPage_template": "xxk1t3ek",
 "library_LessonPage_staticdata": "x11rbo2j",
 "library_LessonNav_template": "xx5gt8ch",
 "library_LandingPage_template": "x15i1qub",
 "library1_SlideShow_template": "x1ro2kun"
};
window.moduloBuild.definitions = {
 "SlideWrapper": {
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
  "name": "SlideWrapper",
  "DefName": null,
  "Parent": null,
  "Name": "SlideWrapper",
  "DefinitionName": "SlideWrapper",
  "ChildrenNames": [
   "SlideWrapper_template",
   "SlideWrapper_script"
  ],
  "namespace": "x",
  "TagName": "x-slidewrapper"
 },
 "SlideWrapper_template": {
  "Type": "Template",
  "DefFinalizers": [
   "TemplatePrebuild"
  ],
  "DefName": null,
  "Parent": "SlideWrapper",
  "Name": "template",
  "DefinitionName": "SlideWrapper_template",
  "Hash": "Txxjctm2t"
 },
 "SlideWrapper_script": {
  "Type": "Script",
  "lifecycle": null,
  "DefBuilders": [
   "Content|ScriptAutoExport",
   "Code"
  ],
  "DefName": null,
  "Parent": "SlideWrapper",
  "Name": "script",
  "DefinitionName": "SlideWrapper_script",
  "Directives": []
 },
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
   "library_LessonPage",
   "library_LessonNav",
   "library_LandingPage"
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
   "library1_Slide"
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
 "library_LessonPage": {
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
  "Parent": "library",
  "Name": "LessonPage",
  "DefinitionName": "library_LessonPage",
  "ChildrenNames": [
   "library_LessonPage_props",
   "library_LessonPage_template",
   "library_LessonPage_staticdata",
   "library_LessonPage_script",
   "library_LessonPage_style"
  ],
  "TagName": "x-lessonpage"
 },
 "library_LessonNav": {
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
  "Parent": "library",
  "Name": "LessonNav",
  "DefinitionName": "library_LessonNav",
  "ChildrenNames": [
   "library_LessonNav_props",
   "library_LessonNav_template",
   "library_LessonNav_script",
   "library_LessonNav_style"
  ],
  "TagName": "x-lessonnav"
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
  "Hash": "Txxl6tge8"
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
 "library_LessonPage_props": {
  "Type": "Props",
  "path": "",
  "Content": "",
  "DefName": null,
  "Parent": "library_LessonPage",
  "Name": "props",
  "DefinitionName": "library_LessonPage_props"
 },
 "library_LessonPage_template": {
  "Type": "Template",
  "DefFinalizers": [
   "TemplatePrebuild"
  ],
  "DefName": null,
  "Parent": "library_LessonPage",
  "Name": "template",
  "DefinitionName": "library_LessonPage_template",
  "Source": "http://127.0.0.1:6627/static/libraries/layout/LessonPage.html",
  "Hash": "Txxk1t3ek"
 },
 "library_LessonPage_staticdata": {
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
  "Content": "{\"files\":[\"/home/michaelb/projects/freecodinglessons/src/foundations/.git\",\"/home/michaelb/projects/freecodinglessons/src/foundations/.gitignore\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act1/challenge1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act1/challenge2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act1/challenge3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act1/challenge4.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act1/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act2/challenge1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act2/challenge2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act2/challenge3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act2/challenge4.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act2/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act3/challenge1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act3/challenge2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act3/challenge3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act3/challenge4.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act3/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act4/challenge1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act4/challenge2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act4/challenge3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act4/challenge4.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/activities/act4/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/slides/part_1_terminology.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/solutions/solution1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/solutions/solution2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/solutions/solution3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.1/solutions/solution4.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act1/challenge1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act1/challenge2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act1/challenge3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act1/challenge4.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act1/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act2/challenge1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act2/challenge2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act2/challenge3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act2/challenge4.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act2/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act3/challenge1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act3/challenge2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act3/challenge3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act3/challenge4.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act3/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act4/challenge1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act4/challenge2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act4/challenge3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act4/challenge4.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/activities/act4/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/solutions/solution1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/solutions/solution2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/solutions/solution3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.2/solutions/solution4.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project1/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project2/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project2/project_steps.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project3/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.3/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.3/solutions/project_1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.3/solutions/project_2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/1.3/solutions/project_3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act1/challenge1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act1/challenge2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act1/challenge3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act1/challenge4.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act1/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/babbage.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/ch2/babbage.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/ch2/ch1/babbage.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/ch2/ch1/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/ch2/ch1/lovelace.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/ch2/ch1/turing.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/ch2/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/ch2/lovelace.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/ch2/turing.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/lovelace.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/turing.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/babbage.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/ch1/babbage.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/ch1/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/ch1/lovelace.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/ch1/turing.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/lovelace.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/turing.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch3/babbage.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch3/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch3/lovelace.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch3/turing.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act3/ch1/art.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act3/ch1/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act3/ch1/photos.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act3/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/old_index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols1/solution1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols1/solution2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols1/solution3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols1/solution4.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol1/babbage.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol1/ch2/babbage.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol1/ch2/ch1/babbage.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol1/ch2/ch1/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol1/ch2/ch1/lovelace.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol1/ch2/ch1/turing.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol1/ch2/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol1/ch2/lovelace.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol1/ch2/turing.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol1/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol1/lovelace.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol1/turing.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol2/babbage.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol2/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol2/lovelace.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol2/turing.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.2/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/2.3/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/challenge_1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/challenge_1_styles.css\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/challenge_2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/challenge_2_styles.css\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/challenge_3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/challenge_3_styles.css\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/instructions.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols1/challenge_1_styles.css\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols1/challenge_2_styles.css\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols1/challenge_3_styles.css\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols1/solution_1.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols1/solution_2.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols1/solution_3.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.2/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/3.3/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/4.1/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/4.2/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/4.3/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/LICENSE\",\"/home/michaelb/projects/freecodinglessons/src/foundations/README.md\",\"/home/michaelb/projects/freecodinglessons/src/foundations/index.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/overview.html\",\"/home/michaelb/projects/freecodinglessons/src/foundations/overview.md\"]}",
  "DefName": null,
  "Parent": "library_LessonPage",
  "Name": "staticdata",
  "DefinitionName": "library_LessonPage_staticdata",
  "Source": "http://127.0.0.1:6627/__dirlist/foundations.json",
  "data": {
   "files": [
    "/home/michaelb/projects/freecodinglessons/src/foundations/.git",
    "/home/michaelb/projects/freecodinglessons/src/foundations/.gitignore",
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
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project1/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project2/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project2/project_steps.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.3/activities/project3/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.3/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.3/solutions/project_1.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.3/solutions/project_2.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/1.3/solutions/project_3.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act1/challenge1.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act1/challenge2.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act1/challenge3.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act1/challenge4.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act1/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/babbage.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/ch2/babbage.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/ch2/ch1/babbage.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/ch2/ch1/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/ch2/ch1/lovelace.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/ch2/ch1/turing.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/ch2/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/ch2/lovelace.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/ch2/turing.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/lovelace.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch1/turing.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/babbage.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/ch1/babbage.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/ch1/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/ch1/lovelace.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/ch1/turing.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/lovelace.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch2/turing.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch3/babbage.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch3/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch3/lovelace.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/ch3/turing.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act2/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act3/ch1/art.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act3/ch1/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act3/ch1/photos.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/activities/act3/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/old_index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols1/solution1.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols1/solution2.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols1/solution3.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols1/solution4.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol1/babbage.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol1/ch2/babbage.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol1/ch2/ch1/babbage.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol1/ch2/ch1/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol1/ch2/ch1/lovelace.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol1/ch2/ch1/turing.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol1/ch2/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol1/ch2/lovelace.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol1/ch2/turing.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol1/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol1/lovelace.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol1/turing.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol2/babbage.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol2/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol2/lovelace.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.1/solutions/sols2/sol2/turing.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.2/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/2.3/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/challenge_1.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/challenge_1_styles.css",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/challenge_2.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/challenge_2_styles.css",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/challenge_3.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/challenge_3_styles.css",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/activities/act1/instructions.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols1/challenge_1_styles.css",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols1/challenge_2_styles.css",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols1/challenge_3_styles.css",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols1/solution_1.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols1/solution_2.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.1/solutions/sols1/solution_3.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.2/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/3.3/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/4.1/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/4.2/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/4.3/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/LICENSE",
    "/home/michaelb/projects/freecodinglessons/src/foundations/README.md",
    "/home/michaelb/projects/freecodinglessons/src/foundations/index.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/overview.html",
    "/home/michaelb/projects/freecodinglessons/src/foundations/overview.md"
   ]
  }
 },
 "library_LessonPage_script": {
  "Type": "Script",
  "lifecycle": null,
  "DefBuilders": [
   "Content|ScriptAutoExport",
   "Code"
  ],
  "DefName": null,
  "Parent": "library_LessonPage",
  "Name": "script",
  "DefinitionName": "library_LessonPage_script",
  "Source": "http://127.0.0.1:6627/static/libraries/layout/LessonPage.js",
  "Directives": []
 },
 "library_LessonPage_style": {
  "Type": "Style",
  "DefFinalizers": [
   "Content|PrefixCSS"
  ],
  "DefName": null,
  "Parent": "library_LessonPage",
  "Name": "style",
  "DefinitionName": "library_LessonPage_style",
  "Source": "http://127.0.0.1:6627/static/libraries/layout/LessonPage.css"
 },
 "library_LessonNav_props": {
  "Type": "Props",
  "navselected": "",
  "subnav": "",
  "Content": "",
  "DefName": null,
  "Parent": "library_LessonNav",
  "Name": "props",
  "DefinitionName": "library_LessonNav_props"
 },
 "library_LessonNav_template": {
  "Type": "Template",
  "DefFinalizers": [
   "TemplatePrebuild"
  ],
  "DefName": null,
  "Parent": "library_LessonNav",
  "Name": "template",
  "DefinitionName": "library_LessonNav_template",
  "Source": "http://127.0.0.1:6627/static/libraries/layout/LessonNav.html",
  "Hash": "Txx5gt8ch"
 },
 "library_LessonNav_script": {
  "Type": "Script",
  "lifecycle": null,
  "DefBuilders": [
   "Content|ScriptAutoExport",
   "Code"
  ],
  "DefName": null,
  "Parent": "library_LessonNav",
  "Name": "script",
  "DefinitionName": "library_LessonNav_script",
  "Source": "http://127.0.0.1:6627/static/libraries/layout/LessonNav.js",
  "Directives": []
 },
 "library_LessonNav_style": {
  "Type": "Style",
  "DefFinalizers": [
   "Content|PrefixCSS"
  ],
  "DefName": null,
  "Parent": "library_LessonNav",
  "Name": "style",
  "DefinitionName": "library_LessonNav_style",
  "Source": "http://127.0.0.1:6627/static/libraries/layout/LessonNav.css"
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
  "Source": "https://unpkg.com/snarkdown"
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
 "library1_Markdown_props": {
  "Type": "Props",
  "slideshow": "",
  "firstslide": "",
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
  "Hash": "Tx1ro2kun"
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
  "DefinitionName": "library1_SlideShow_style"
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
