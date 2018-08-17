import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';

import defaultPicture from './Default.jpg';
import nanjing from './Nanjing.jpg';
import philadelphia from './Philadelphia.jpg';
import austin from './Austin.jpg';
import losAngeles from './Los Angeles.jpg';

const keys = ['name', 'meta', 'description', 'extra'];

const formatMessage = (cities) => {
  const result = [];
  cities.map((city, i) => {
    const obj = {};
    keys.map((key) => {
      obj[key] = (
        <FormattedMessage id={`app.containers.PlacesPage.city${i + 1}.${key}`} />
      );
      return 0;
    });
    obj.image = city.image;
    result.push(obj);
    return 0;
  });
  return result;
};

const cityObjects = [
  {
    // name: 'Nanjing',
    image: nanjing,
    // meta: 'Jiangsu, China',
    // description: 'My Hometown.',
    // extra: 'Gamma+ World City',
  },
  {
    // name: 'Philadelphia',
    image: philadelphia,
    // meta: 'Pennsylvania, United States',
    // description: 'Drexel University.',
    // extra: 'Beta World City',
  },
  {
    // name: 'Austin',
    image: austin,
    // meta: 'Texas, United States',
    // description: 'UT Austin.',
    // extra: 'Gamma World City',
  },
  {
    // name: 'Los Angeles',
    image: losAngeles,
    // meta: 'California, United States',
    // description: 'USC.',
    // extra: 'Alpha World City',
  },
  {
    // name: 'Next City',
    image: defaultPicture,
    // meta: '??, ??',
    // description: 'To be continued.',
    // extra: '?? World City',
  },
];

class PlacesPage extends Component {
  render() {
    return (
      <div>
        <Card.Group itemsPerRow={3}>
          {formatMessage(cityObjects).map((city, i) => (
            <Card key={i.toString()}>
              <Image src={city.image} />
              <Card.Content>
                <Card.Header>
                  {city.name}
                </Card.Header>
                <Card.Meta>
                  {city.meta}
                </Card.Meta>
                <Card.Description>
                  {city.description}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                {city.extra}
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </div>
    );
  }
}

export default PlacesPage;
