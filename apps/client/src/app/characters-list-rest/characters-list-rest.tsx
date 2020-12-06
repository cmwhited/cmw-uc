import React, { useState, useEffect } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Skeleton from '@material-ui/lab/Skeleton';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';

// import our shared Character model from the `libs/models`
import { Character, RestResponse } from '@cmw-uc/models';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
  },
  charTitle: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  charStatus: {
    marginLeft: `${theme.spacing(2)}px`,
  },
  charInfoTitle: {
    fontWeight: theme.typography.fontWeightBold,
  },
  charInfo: {
    fontWeight: theme.typography.fontWeightRegular,
    marginLeft: `${theme.spacing(1)}px`,
  },
}));

const CharactersListError: React.FC<{ errorMsg: string }> = ({ errorMsg }) => (
  <Alert severity="error" variant="filled">
    <AlertTitle>Rick & Morty REST API Character List Error</AlertTitle>
    <span>{errorMsg}</span>
  </Alert>
);

const CharacterListLoading = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" component="h3">
        <Skeleton />
      </Typography>
      <Skeleton variant="rect" width="100%" height={450} />
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="60%" />
    </div>
  );
};

const CharacterList: React.FC<{ characters: Character[] }> = ({ characters }) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {characters.map((char: Character) => (
        <ListItem key={char.id}>
          <ListItemAvatar>
            <Avatar alt={char.name} src={char.image} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant="subtitle1" className={classes.charTitle}>
                <span>{char.name}</span>
                <Typography variant="body2" className={classes.charStatus}>
                  {char.status}
                </Typography>
              </Typography>
            }
            secondary={
              <Typography variant="body1">
                <span className={classes.charInfoTitle}>Character info:</span>
                <span className={classes.charInfo}>{char.gender},</span>
                <span className={classes.charInfo}>{char.species},</span>
                <span className={classes.charInfo}>{char.origin.name},</span>
                <span className={classes.charInfo}>{char.location.name}</span>
              </Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export interface CharactersListRestProps {
  url: string;
}

const CharactersListRest: React.FC<CharactersListRestProps> = ({ url }) => {
  const classes = useStyles();
  const [loadingCharactersList, setLoadingCharactersList] = useState(false);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [charactersListError, setCharactersListError] = useState<Error | null>(null);

  // hit the Rick & Morty REST API and update the state
  useEffect(() => {
    setLoadingCharactersList(true);
    const retrieveCharactersList = async () => {
      try {
        const response: Response = await fetch(url, {
          headers: {
            Accept: 'applications/json',
            'Content-Type': 'applications/json',
          },
        });
        if (response.status !== 200) {
          setCharactersListError(new Error('Did not successfully retrieve Rick & Morty Characters list'));
        } else {
          // get the response data as a RestResponse instance
          const data: RestResponse = await response.json();
          if (data == null) {
            setCharactersListError(new Error('Did not successfully retrieve Rick & Morty Characters list'));
          } else {
            setCharacters(data.results);
          }
        }
      } catch (error) {
        setCharactersListError(error);
      } finally {
        setLoadingCharactersList(false);
      }
    };

    retrieveCharactersList();
  }, [url]);

  return (
    <section className={classes.root}>
      <Card>
        <CardHeader title="Rick & Morty REST API Characters List" />
        <CardContent>
          {loadingCharactersList ? <CharacterListLoading /> : null}
          {charactersListError != null ? <CharactersListError errorMsg={charactersListError.message} /> : null}
          {!loadingCharactersList && charactersListError == null ? <CharacterList characters={characters} /> : null}
        </CardContent>
      </Card>
    </section>
  );
};

export default CharactersListRest;
