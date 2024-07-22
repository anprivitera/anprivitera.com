'use client'

import { useState, JSX } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import PersonIcon from '@mui/icons-material/Person'
import CreateIcon from '@mui/icons-material/Create'
import Link from 'next/link'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const navItems = [
  {
    title: 'About',
    href: '/',
    icon: <PersonIcon />
  },
  {
    title: 'Blog',
    href: '/blog',
    icon: <CreateIcon />
  }
]
const socialItems = [
  {
    title: 'GitHub',
    href: 'https://github.com/anprivitera',
    icon: <GitHubIcon />
  },
  {
    title: 'LinkedIn',
    href: 'https://linkedin.com/in/andreaprivitera',
    icon: <LinkedInIcon />
  },
]

function drawerItems (
  array: { title: string, href: string, icon: JSX.Element }[]
) {
  return array.map(({ title, href, icon }) => (
    <ListItem key={title} disablePadding>
      <ListItemButton
        href={href}
        component={Link}
        sx={{ textAlign: 'center' }}
      >
        {icon}
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  ))
}

function appBarItems (
  array: { title: string, href: string, icon: JSX.Element }[], iconOnly: boolean
) {
  const commonProps = {
    component: Link,
    sx: { color: 'inherit' },
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

export default function DrawerAppBar(props: { window?: () => Window }) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {drawerItems(navItems)}
        <Divider />
        {drawerItems(socialItems)}
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        component="nav"
        position="static"
        sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}
      >
        <Toolbar sx={{ color: 'black' }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { sm: 'block' } }}
          >
            Andrea Privitera
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {appBarItems(navItems, false)}
            <Divider orientation="vertical" flexItem />
            {appBarItems(socialItems, true)}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  )
}
