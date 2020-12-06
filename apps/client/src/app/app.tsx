import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// import the environment variables which has the Rick & Morty API base url
import { environment } from '../environments/environment';
// import our Characters List component for the REST API
import CharactersListRest from './characters-list-rest/characters-list-rest';

const useStyles = makeStyles((theme: Theme) => ({
  toolbarContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexSpan: {
    flex: '1 1 auto',
  },
  toolbarLink: {
    color: 'white',
    textDecoration: 'none',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    '&:hover': {
      textDecoration: 'underline',
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: `${theme.spacing(8)}px`,
    padding: `${theme.spacing(1)}px`,
  },
}));

export const App = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar color="primary" position="fixed">
        <Toolbar>
          <Container maxWidth="lg" className={classes.toolbarContainer}>
            <Typography variant="h6" component="h6">
              CMW::UltimateCourses - NX, Storybook and MSW
            </Typography>
            <span className={classes.flexSpan} />
            <Link className={classes.toolbarLink} to="/rest">
              REST
            </Link>
            <Link className={classes.toolbarLink} to="/graphql">
              GRAPHQL
            </Link>
          </Container>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <Container>
          <Switch>
            <Route exact={true} path="/">
              <Redirect to="/rest" />
            </Route>
            <Route exact={true} path="/rest">
              <CharactersListRest url={`${environment.rickAndMortyRestApiBaseUrl}/character`} />
            </Route>
          </Switch>
        </Container>
      </main>
    </div>
  );
};

export default App;
