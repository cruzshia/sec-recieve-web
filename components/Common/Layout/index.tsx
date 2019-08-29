import AppBar from '@material-ui/core/AppBar'
import CameraIcon from '@material-ui/icons/PhotoCamera'
import CssBaseline from '@material-ui/core/CssBaseline'
import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}))

export default React.memo((props: React.PropsWithChildren<{}>) => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <CameraIcon className={classes.icon} />
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
})
