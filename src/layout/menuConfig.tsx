import {
  Component,
  MailWarning,
  Package,
  PackageCheck,
  UserCheck,
  Users
} from 'lucide-react'

export interface Menu {
  id: number
  name: string
  slug: string
  childPaths?: Array<string>
  subMenu?: Array<Menu>
  icon: JSX.Element
  patchChildren?: Array<string>
}

export const menuConfig: Menu[] = [
  {
    id: 1,
    name: 'QL khách hàng',
    slug: '/customers',
    icon: <Users />,
    subMenu: [
      {
        id: 11,
        name: 'Khách hàng',
        slug: '/customers',
        icon: <UserCheck />,
        patchChildren: [`/customers/:id`]
      },
      {
        id: 12,
        name: 'Apps',
        slug: '/apps',
        icon: <PackageCheck />,
        patchChildren: [`/app/create/:id`, `/app/create`, `/apps/:id`]
      }
    ],
    patchChildren: [`/apps/`, `/customers/:id`, `/app/create/:id`, `/app/create`, `/apps/:id`]
  },
  {
    id: 2,
    name: 'Quản lý gói',
    slug: '/packages',
    icon: <Package />,
    patchChildren: [`/packages/:id`]
  },
  {
    id: 3,
    name: 'Cài đặt thông tin giấy tờ',
    slug: '/system-setting',
    icon: <Component />
  },
  {
    id: 4,
    name: 'Cài đặt tài khoản',
    slug: '/account-setting',
    icon: <UserCheck />
  },
  {
    id: 5,
    name: 'Quản lý users',
    slug: '/users',
    icon: <MailWarning />,
    patchChildren: [`/users/:id`]
  }
]

export const mathRouteConfig = [{ path: "/customers/:id" }, { path: "/packages/:id" }, { path: "/app/create/:id" }, { path: "/apps/:id" }, { path: "/users/:id" }]
export const routerBlockedWithOperator = ['/system-setting', '/users']