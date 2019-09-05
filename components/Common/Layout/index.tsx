import {
  PhotoCamera as CameraIcon,
  Translate as TranslateIcon
} from '@material-ui/icons'
import {
  CssBaseline,
  IconButton,
  Menu,
  MenuItem,
  Typography
} from '@material-ui/core'

import AppBar from '@material-ui/core/AppBar'
import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import { WithTranslation } from 'next-i18next'
import { makeStyles } from '@material-ui/core/styles'
import { router } from '@Lib/router'
import { withTranslation } from '@App/server/i18n'

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}))

export default withTranslation('common')(
  (props: React.PropsWithChildren<WithTranslation>) => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)

    function handleMenu(event: React.MouseEvent<HTMLButtonElement>) {
      setAnchorEl(event.currentTarget as any)
    }

    async function handleClose(e: React.MouseEvent<HTMLLIElement>) {
      const lang = e.currentTarget.dataset.lang
      await props.i18n.changeLanguage(lang || 'en')
      router.pushRoute('accounts', {
        lng: lang
      })
      setAnchorEl(null)
    }

    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position='relative'>
          <Toolbar>
            <CameraIcon className={classes.icon} />
            <Typography variant='h5' className={classes.title}>
              Sec BackEnd
            </Typography>
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
          </Toolbar>
        </AppBar>
        {props.children}
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant='h6' align='center' gutterBottom>
            Footer
          </Typography>
          <Typography
            variant='subtitle1'
            align='center'
            color='textSecondary'
            component='p'
          >
            Something here to give the footer a purpose!
          </Typography>
        </footer>
        {/* End footer */}
      </React.Fragment>
    )
  }
)
