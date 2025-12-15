import joinPath from "@/utils/joinPath.ts";

interface RouteConfig {
  id: string
  path: string
  view?: string
  children?: RouteConfig[]
}

const getPathsPage = (routes: RouteConfig[]): Record<string, string> => {
  const map: Record<string, string> = {}

  const traverse = (list: RouteConfig[], parentPath = ''): void => {
    for (const {id, path, children} of list) {
      const fullPath = joinPath(parentPath, path)
      map[id] = fullPath

      if (children?.length) traverse(children, fullPath);
    }
  }

  traverse(routes);
  return map;
}

export default getPathsPage;
