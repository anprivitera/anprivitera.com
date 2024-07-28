'use client'

import { useState, MouseEvent, useEffect } from 'react'
import {
  Box, Divider, IconButton, Toolbar, Typography, Menu,
  AppBar
} from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import { usePathname } from 'next/navigation'
import { externalLinks, internalLinks } from './links'
import { appBarItems, menuItems } from './items'

export default function AppBarWithMenu() {
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

  const commonSxProps = { color: '#284178', ':hover': { color: '#AF5D63' } }

  const pathName = usePathname()
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
          {menuItems(internalLinks, commonSxProps, pathName, handleClose)}
          <Divider />
          {menuItems(externalLinks, commonSxProps, null, handleClose)}
        </Menu>
        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
          {appBarItems(internalLinks, false, pathName, commonSxProps)}
          <Divider orientation="vertical" flexItem />
          {appBarItems(externalLinks, true, null, commonSxProps)}
        </Box>
      </Toolbar>
    </AppBar>
  )
}
