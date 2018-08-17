import React, { Component } from 'react';
import {
  Button, Segment, Grid, Header, Image, List, Container, Icon,
} from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';

// import './style.css';
import ut from './UT.jpg';
import usc from './USC.jpg';

const utHighlights = [
  '5 No.1 Graduate programs in the nation (Source: U.S. News & World Report)',
  '49 Top 10 Graduate programs in the nation (Source: U.S. News & World Report)',
  'No.32 Best Global Universities (Source: ARWU)',
  'Founded in 1883',
];
const uscHighlights = [
  'No.15 College Ranking (Source: WSJ/Times)',
  'No.21 National Universities (Source: U.S. News & World Report)',
  'No.54 Best Global Universities (Source: ARWU)',
  'Founded in 1880',
];

const formatMessage = (highlights, name) => {
  const result = [];
  highlights.map((highlight, i) => {
    result.push((
      <Header size="medium">
        <span>
          <Icon name="star" />
          <FormattedMessage id={`app.containers.EducationPage.${name}.highlight${i + 1}`} />
        </span>
      </Header>

    ));
    return 0;
  });
  return result;
};

// console.log(formatMessage(uscHighlights, 'usc'));

const schoolObjects = [
  {
    name: (<FormattedMessage id="app.containers.EducationPage.ut.name" />),
    highlights: formatMessage(utHighlights, 'ut'),
    image: ut,
    website: 'https://www.utexas.edu/',
    color: '#579D42',
    colorTemp: 'orange',
  },
  {
    name: (<FormattedMessage id="app.containers.EducationPage.usc.name" />),
    highlights: formatMessage(uscHighlights, 'usc'),
    image: usc,
    website: 'https://www.usc.edu/',
    color: '#990000',
    colorTemp: 'red',
  },
];

class EducationPage extends Component {
  render() {
    return (
      <div>
        {schoolObjects.map((school, i) => (
          <Segment raised color={school.colorTemp} style={{ padding: '4em 0em' }} key={i.toString()}>
            <Grid container stackable verticalAlign="middle">
              <Grid.Row>
                <Grid.Column width={9}>
                  <Header size="huge">
                    {school.name}
                  </Header>
                  <Grid>
                    <Grid.Column floated="right" width={15}>
                      <Container textAlign="left">
                        <List animated as="ul">
                          {school.highlights.map((highlight, j) => (
                            <List.Item key={j.toString()}>
                              {highlight}
                            </List.Item>
                          ))}
                        </List>
                      </Container>
                    </Grid.Column>
                  </Grid>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Image bordered rounded size="large" src={school.image} />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Button size="huge" color={school.colorTemp} href={school.website} target="_blank">
                    <FormattedMessage id="app.containers.EducationPage.website" />
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        ))}
      </div>
    );
  }
}

export default EducationPage;
