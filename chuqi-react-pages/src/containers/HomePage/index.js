import React, { Component } from 'react';
// import { Icon, Card, Grid } from 'semantic-ui-react';
// import { FormattedMessage } from 'react-intl';
import camelCase from 'lodash/camelCase';

import Timeline from '../../components/Timeline';

import './style.css';

const eventObjects = [
  {
    title: 'Birth',
    // time: 'Jan 1994',
    icon: 'user plus',
    orientation: 'right',
    color: 'purple',
    tags: ['Baby', 'Family'],
  },
  {
    title: 'Elementary School',
    // time: 'June 2006',
    icon: 'write',
    orientation: 'left',
    color: 'yellow',
    tags: ['Kid', 'Fun'],
  },
  {
    title: 'High School',
    // time: 'June 2012',
    icon: 'graduation',
    orientation: 'right',
    color: 'blue',
    tags: ['High School', 'Fun', 'Graduation'],
  },
  {
    title: 'First Car',
    // time: 'Sep 2015',
    icon: 'car',
    orientation: 'left',
    color: 'black',
    tags: ['Car', 'Ford', 'Fun'],
  },
  {
    title: 'College',
    // time: 'Dec 2016',
    icon: 'graduation',
    orientation: 'right',
    color: 'orange',
    tags: ['UT', 'University', 'Graduation'],
  },
  {
    title: 'Graduate School',
    // time: 'Aug 2018',
    icon: 'graduation',
    orientation: 'left',
    color: 'red',
    tags: ['USC', 'University', 'Graduation'],
  },
];

class HomePage extends Component {
  render() {
    return (
      <div>
        {eventObjects.map((event, i) => {
          const id = `app.containers.HomePage.event.${camelCase(event.title)}`;
          const getTagIds = (tags) => {
            const result = [];
            tags.map((tag) => {
              result.push(`app.containers.HomePage.tag.${camelCase(tag)}`);
              return 0;
            });
            return result;
          };
          return (
            <Timeline
              direction={event.orientation}
              icon={event.icon}
              title={`${id}.title`}
              time={`${id}.time`}
              description={`${id}.description`}
              color={event.color}
              tags={getTagIds(event.tags)}
              key={i.toString()}
            />
          );
        })}
      </div>
    );
  }
}

export default HomePage;
