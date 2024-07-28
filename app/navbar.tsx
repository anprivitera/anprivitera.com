'use client'

import { useState, JSX, MouseEvent, useEffect } from 'react'
import {
  AppBar, Box, Divider, IconButton, Toolbar, Typography, Button, MenuItem,
  Menu, ListItemIcon, ListItemText,
} from '@mui/material'
import {
  Menu as MenuIcon, Person, Create, GitHub, LinkedIn, RssFeed
} from '@mui/icons-material'
import Link from 'next/link'

const commonSxProps = { color: '#284178', ':hover': { color: '#AF5D63' } }

const navItems = [
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
const socialItems = [
  {
    title: 'GitHub',
    href: 'https://github.com/anprivitera',
    icon: <GitHub />
  },
  {
    title: 'LinkedIn',
    href: 'https://linkedin.com/in/andreaprivitera',
    icon: <LinkedIn />
  },
  {
    title: 'RSS Feed',
    href: '/feed.xml',
    icon: <RssFeed />
  },
]

function menuItems (
  array: { title: string, href: string, icon: JSX.Element }[]
) {
  return array.map(({ title, href, icon }) => (
    <MenuItem
      key={title}
      href={href}
      component={Link}
      sx={{ ...commonSxProps }}
    >
      <ListItemIcon sx={{ color: 'inherit' }}>
        {icon}
      </ListItemIcon>
      <ListItemText primary={title} sx={{ color: 'inherit' }} />
    </MenuItem>
  ))
}

function appBarItems (
  array: { title: string, href: string, icon: JSX.Element }[], iconOnly: boolean
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
      <Button key={title} href={href} {...commonProps}>
        {icon}{title}
      </Button>
    )
  ))
}

export default function DrawerAppBar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    const handleResize = () => handleClose()
    window.addEventListener('resize', handleResize)
    return () =>  window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <AppBar
      component="nav"
      position="static"
      color="transparent"
      sx={{ boxShadow: 'none' }}
    >
      <Toolbar sx={{ color: '#284178', p: 0 }}>
        <Typography
          variant="h6"
          component="a"
          href="/"
          sx={{ flexGrow: 1, ...commonSxProps }}
        >
          Andrea Privitera
        </Typography>
        <IconButton
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{ display: { sm: 'none' }, ...commonSxProps }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          sx={{ display: { xs: 'block', sm: 'none' } }}
        >
          {menuItems(navItems)}
          <Divider />
          {menuItems(socialItems)}
        </Menu>
        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
          {appBarItems(navItems, false)}
          <Divider orientation="vertical" flexItem />
          {appBarItems(socialItems, true)}
        </Box>
      </Toolbar>
    </AppBar>
  )
}
