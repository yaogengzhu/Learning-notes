 export type Route = {
  name: string;
  key: string;
  breadcrumb?: boolean;
  children?: Route[];
};

/**
 *  一般路由结构
 */

const routes: Route[] = [
  {
    name: 'menu.dashboard',
    key: 'dashboard',
    children: [
      {
        name: 'menu.dashboard.workplace',
        key: 'dashboard/workplace',
      },
      {
        name: 'menu.dashboard.monitor',
        key: 'dashboard/monitor',
      },
    ],
  },
  {
    name: 'menu.visualization',
    key: 'visualization',
    children: [
      {
        name: 'menu.visualization.dataAnalysis',
        key: 'visualization/data-analysis',
      },
    ],
  },
]


const getName = (path: string, routes: Route[]): any => {
  return routes.find((item: Route) => {
    const itemPath = `${item.key}`
    if (path === itemPath) {
      return item.name
    } else if (item.children) {
      return getName(path, item.children)
    }
  })
}