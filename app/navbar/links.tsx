import { ReactElement } from 'react'
import { Person, Create, GitHub, LinkedIn } from '@mui/icons-material'

interface Items {
  title: string;
  href: string;
  icon: ReactElement;
}

export const internalLinks: Items[] = [
  {
    title: 'About',
    href: '/',
    icon: <Person />
  },
  {
    title: 'Blog',
    href: '/blog',
    icon: <Create />
  }
]

export const externalLinks: Items[] = [
  {
    title: 'GitHub',
    href: 'https://github.com/anprivitera',
    icon: <GitHub />
  },
  {
    title: 'LinkedIn',
    href: 'https://linkedin.com/in/andreaprivitera',
    icon: <LinkedIn />
  }
]
