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


