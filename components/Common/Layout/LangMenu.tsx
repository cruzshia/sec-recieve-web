import { IconButton, Menu, MenuItem } from '@material-ui/core'

import React from 'react'
import { Translate as TranslateIcon } from '@material-ui/icons'
import i18next from 'i18next'
import { router } from '@App/lib/router'

interface Props {
  i18n: i18next.i18n
}

export default function({ i18n }: Props) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  function handleMenu(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget as any)
  }

  async function handleClose(e: React.MouseEvent<HTMLLIElement>) {
    const lang = e.currentTarget.dataset.lang
    await i18n.changeLanguage(lang || 'en')
    let route = router.route.replace('/', '')
    router.replaceRoute(route === '' ? 'index' : route, {
      ...router.query,
      lng: lang
    })
    setAnchorEl(null)
  }

  return (
    <div>
      <IconButton
        aria-label='account of current user'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={handleMenu}
        color='inherit'
      >
        <TranslateIcon />
      </IconButton>
      <Menu
        id='menu-appbar'
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem data-lang='en' onClick={handleClose}>
          En
        </MenuItem>
        <MenuItem data-lang='zh-TW' onClick={handleClose}>
          中文
        </MenuItem>
      </Menu>
    </div>
  )
}
