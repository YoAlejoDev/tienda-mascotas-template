import { useEffect, useState } from 'react'
import { CONST } from './constants/consts'
import { match } from 'path-to-regexp'

type Route = {
  path: string;
  component: React.ComponentType<{ routeParams: unknown }>;
};

export function Router({
  routes = [],
  defaultComponent: DefaultComponent = () => <h1>404</h1>,
}: {
  routes: Route[];
  defaultComponent?: React.ComponentType<{ routeParams: unknown }>;
}) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(CONST.NAVIGATION_EVENT, onLocationChange);
    window.addEventListener(CONST.POPSTATE_EVENT, onLocationChange);

    return () => {
      window.removeEventListener(CONST.NAVIGATION_EVENT, onLocationChange);
      window.addEventListener(CONST.POPSTATE_EVENT, onLocationChange);
    };
  }, []);

  let routeParams = {};

  const Page = routes.find(({ path }) => {
    if (path === currentPath) return true;

    const matcherURL = match(path, { decode: decodeURIComponent });
    const matched = matcherURL(currentPath);
    if (!matched) return false;

    routeParams = matched.params;
    return true;
  })?.component;

  return Page ? <Page routeParams={routeParams} /> : <DefaultComponent routeParams={routeParams} />;
}