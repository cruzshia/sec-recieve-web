import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import I18nHoc from '@Components/Common/I18nHoc'
import Layout from '@Components/Common/Layout'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { WithTranslation } from 'next-i18next'

interface Prop extends WithTranslation {
  namespacesRequired: Array<string>
}
interface AlumComponent<Prop> extends React.FunctionComponent<Prop> {
  getInitialProps?: () => Promise<{
    namespacesRequired: Array<string>
  }>
}

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 1)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  }
}))

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const Album = I18nHoc()(function(props: Prop) {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Layout>
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth='sm'>
              <Typography
                component='h1'
                variant='h2'
                align='center'
                color='textPrimary'
                gutterBottom
              >
                {props.t('common.title')}
              </Typography>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth='md'>
            {/* End hero unit */}
            <Grid container spacing={4}>
              {cards.map(card => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image='https://source.unsplash.com/random'
                      title='Image title'
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant='h5' component='h2'>
                        Heading
                      </Typography>
                      <Typography>
                        This is a media card. You can use this section to
                        describe the content.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size='small' color='primary'>
                        View
                      </Button>
                      <Button size='small' color='primary'>
                        Share
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
      </Layout>
    </React.Fragment>
  )
}) as AlumComponent<Prop>

Album.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

export default Album
