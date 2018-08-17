import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container, Dropdown, Image, Menu, Icon,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import logo from './Ferrari Logo.png';
import './style.css';

const options = [
  { key: 'en', text: 'ENGLISH', value: 'english' },
  { key: 'zh', text: '中文', value: '中文' },
];

class MenuBar extends Component {
  render() {
    const { name, switchLanguage } = this.props;
    const onChange = (event, data) => {
      const result = options.filter(obj => obj.value === data.value);
      switchLanguage(result[0].key);
    };

    return (
      <div>
        <Menu fixed="top" inverted>
          <Container>
            <Menu.Item as={Link} to="/" header>
              <Image size="mini" src={logo} className="MenuBar-logo" />
              {name}
            </Menu.Item>

            <Menu.Item as={Link} to="/" position="right">
              <Icon name="user" />
              <FormattedMessage id="app.components.MenuBar.aboutMe" />
            </Menu.Item>
            <Menu.Item as={Link} to="/education">
              <Icon name="graduation" />
              <FormattedMessage id="app.components.MenuBar.education" />
            </Menu.Item>
            <Menu.Item as={Link} to="/places">
              <Icon name="map marker alternate" />
              <FormattedMessage id="app.components.MenuBar.places" />
            </Menu.Item>

            <Dropdown item defaultValue="english" onChange={onChange} options={options} />
          </Container>
        </Menu>
      </div>
    );
  }
}

MenuBar.propTypes = {
  name: PropTypes.string,
  switchLanguage: PropTypes.func,
};

export default MenuBar;
