import React, { Component } from 'react';
import {
  Container, Divider, Grid, Header, Image, List, Segment,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import logo from './Texas Longhorn.png';

class Footer extends Component {
  render() {
    return (
      <div>
        <Segment inverted vertical style={{ margin: '40em 0em 0em', padding: '5em 0em' }}>
          <Container textAlign="center">
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={5}>
                  <Header inverted as="h4">
                    <FormattedMessage id="app.components.Footer.sitemap" />
                  </Header>
                  <List link inverted>
                    <List.Item as={Link} to="/education">
                      <FormattedMessage id="app.components.Footer.education" />
                    </List.Item>
                    <List.Item as={Link} to="/places">
                      <FormattedMessage id="app.components.Footer.places" />
                    </List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={5}>
                  <Header inverted as="h4" content="Unknown" />
                  <List link inverted>
                    <List.Item as="a">
                      Link One
                    </List.Item>
                    <List.Item as="a">
                      Link Two
                    </List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={6}>
                  <Header inverted as="h4" content="Footer Header" />
                  <p>
                    Extra space for a call to action.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Divider inverted section />
            <Image centered size="mini" src={logo} />
            <List horizontal inverted divided link>
              <List.Item as="a" href="#">
                Copyright © Chuqi 2018
              </List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default Footer;
