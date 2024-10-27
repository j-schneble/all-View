export type Action = {
    name: string
    shortcut?: string[]
    keywords?: string
    href?: string
    section: 'Navigation'
    icon?: React.ReactNode
    subtitle?: string
    perform?: () => void
  }

  export const Navigation: Action[] = [
    {
      name: 'Dashboard',
      keywords: 'dashboard',
      href: '/dashboard',
      section: 'Navigation',
    },
    {
      name: 'Products ',
      keywords: 'products',
      href: '/products',
      section: 'Navigation',
    },
    {
      name: 'Users ',
      keywords: 'users',
      href: '/users',
      section: 'Navigation',
    },
    {
        name: 'Inventory ',
        keywords: 'inventory',
        href: '/inventory',
        section: 'Navigation',
      },
    {
        name: 'Expenses ',
        keywords: 'expenses',
        href: '/expenses',
        section: 'Navigation',
      },
  ];
