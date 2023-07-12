import { LazyExoticComponent, lazy } from "react";
import noLazy from "../01-lazyload/pages/noLazy";

type JSXComponent = () => JSX.Element;

interface IRoute {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyPages1" */ "../01-lazyload/layout/LazyLayout"
    )
);

export const routes: IRoute[] = [
  {
    path: "/lazyload/*",
    to: "/lazyload/",
    Component: LazyLayout,
    name: "Lazy Layout - Dash",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: noLazy,
    name: "No Lazy",
  },
];
