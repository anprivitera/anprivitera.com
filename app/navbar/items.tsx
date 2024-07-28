import { JSX } from 'react'
import { Button, IconButton, ListItemIcon, ListItemText, MenuItem } from '@mui/material'
import Link from 'next/link'

export function menuItems (
  array: { title: string, href: string, icon: JSX.Element }[],
  commonSxProps: object,
  currentPath: string | null,
  handleClose: () => void
) {
  return array.map(({ title, href, icon }) => (
    <MenuItem
      key={title}
      href={href}
      component={Link}
      sx={{ ...commonSxProps }}
      onClick={handleClose}
      disabled={currentPath === href}
    >
      <ListItemIcon sx={{ color: 'inherit' }}>
        {icon}
      </ListItemIcon>
      <ListItemText primary={title} sx={{ color: 'inherit' }} />
    </MenuItem>
  ))
}

export function appBarItems (
  array: {
  title: string, href: string, icon: JSX.Element,
}[],
  iconOnly: boolean,
  currentPath: string | null,
  commonSxProps: object
) {
  const commonProps = {
    component: Link,
    sx: { ...commonSxProps },
  }
  return array.map(({ title, href, icon }) => (
    iconOnly ? (
      <IconButton key={title} href={href} {...commonProps}>
        {icon}
      </IconButton>
    ) : (
      <Button key={title}
        href={href}
        {...commonProps}
        disabled={currentPath === href}
      >
        {icon}{title}
      </Button>
    )
  ))
}
