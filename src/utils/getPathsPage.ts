interface RouteConfig {
  id: string
  path: string
  view?: string
  children?: RouteConfig[]
}

const getPathsPage = (routes: RouteConfig[]): Record<string, string> => {
  const map: Record<string, string> = {}

  function traverse(routeList: RouteConfig[]) {
    for (const {id, path, children} of routeList) {
      if (id && path) map[id] = path;
      if (children) traverse(children);
    }
  }

  traverse(routes);
  return map;
}
export default getPathsPage;
