import { AccountBalance, PhotoCamera as CameraIcon } from '@material-ui/icons'
import { CssBaseline, IconButton, Typography } from '@material-ui/core'

import AppBar from '@material-ui/core/AppBar'
import LangMenu from './LangMenu'
import { Link } from '@App/lib/router'
import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import { WithTranslation } from 'next-i18next'
import { makeStyles } from '@material-ui/core/styles'
import { withTranslation } from '@App/server/i18n'

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
    color: '#fff'
  },
  title: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  loginText: {
    textDecoration: 'none',
    marginLeft: theme.spacing(1)
  }
}))

function Copyright() {
  return (
    <Typography
      component='span'
      variant='body2'
      color='textSecondary'
      align='center'
    >
      Copyright ©
      <a color='inherit' href='https://material-ui.com/'>
        Sec Receive
      </a>{' '}
      {new Date().getFullYear()}.
    </Typography>
  )
}

export default withTranslation('common')(
  ({ i18n, t, children }: React.PropsWithChildren<WithTranslation>) => {
    const classes = useStyles()

    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position='relative'>
          <Toolbar>
            <CameraIcon className={classes.icon} />
            <Typography variant='h5' className={classes.title}>
              {t('title')}
            </Typography>
            <LangMenu i18n={i18n} />
            <Link route='accounts'>
              <IconButton
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                color='inherit'
              >
                <AccountBalance />
              </IconButton>
            </Link>
            <Link route='index'>
              <a className={`link ${classes.loginText}`}>
                <Typography variant='h6'>{t('login')}</Typography>
              </a>
            </Link>
          </Toolbar>
        </AppBar>
        {children}
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant='h6' align='center' gutterBottom>
            1 Sec company
          </Typography>
          <Typography
            variant='subtitle1'
            align='center'
            color='textSecondary'
            component='p'
          >
            <Copyright />
          </Typography>
        </footer>
        {/* End footer */}
      </React.Fragment>
    )
  }
)
