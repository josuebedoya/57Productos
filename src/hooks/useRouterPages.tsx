import {Route} from "react-router-dom";
import type {ReactNode} from "react";
import ViewComponent from "@/modules/page/pages/index.tsx";
import joinPath from "@/utils/joinPath.ts";

type AppRoute = {
  path?: string;
  view?: string;
  children?: AppRoute[];
};

function renderRoutes(routes: AppRoute[], parentPath = ""): ReactNode {
  return routes.map(({path = "", view, children}: AppRoute, i: number) =>
    (view ? (
      <Route
        key={i}
        path={joinPath(parentPath, path)}
        element={<ViewComponent modulePath={view}/>}
      >
        {children && renderRoutes(children, joinPath(parentPath, path))}
      </Route>
    ) : null)
  );
}

export default renderRoutes;
