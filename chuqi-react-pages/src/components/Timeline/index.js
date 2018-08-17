import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Card, Label, Icon, Divider,
} from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';

import './style.css';

class Timeline extends Component {
  render() {
    const {
      direction, icon, title, time, description, tags, color = 'grey',
    } = this.props;
    const textAlign = direction === 'left' ? 'right' : 'left';
    const card = (
      <Card fluid raised color={color}>
        <Card.Content>
          <Label pointing={textAlign} attached="top" style={{ marginLeft: '0' }}>
            <FormattedMessage id={time} />
          </Label>
          <Card.Header>
            <FormattedMessage id={title} />
          </Card.Header>
          <Card.Description>
            <FormattedMessage id={description} />
          </Card.Description>
          <Divider />
          <Label.Group color={color}>
            {tags.map((tag, i) => (
              <Label key={i.toString()}>
                <FormattedMessage id={tag} />
              </Label>
            ))}
          </Label.Group>
        </Card.Content>
      </Card>
    );

    const left = direction === 'left' ? card : '';
    const right = direction === 'right' ? card : '';

    return (
      <div>
        <div className="Timeline-line" />
        <Grid>
          <Grid.Row>
            <Grid.Column width={2} />
            <Grid.Column width={5}>
              {left}
            </Grid.Column>
            <Grid.Column width={2}>
              <Icon name={icon} size="big" color={color} inverted circular style={{ margin: 'auto', boxShadow: '0 0 0 0.1em grey inset' }} />
            </Grid.Column>
            <Grid.Column width={5}>
              {right}
            </Grid.Column>
            <Grid.Column width={2} />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

Timeline.propTypes = {
  direction: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  time: PropTypes.element,
  description: PropTypes.string,
  color: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default Timeline;
