import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import { IntlProvider } from 'react-intl';
import { Container } from 'semantic-ui-react';
import './App.css';

import MenuBar from './components/MenuBar';
import Footer from './components/Footer';

import Home from './containers/HomePage';
import Education from './containers/EducationPage';
import Places from './containers/PlacesPage';

import messagesEn from './translations/en.json';
import messagesZh from './translations/zh.json';

const messages = {
  en: messagesEn,
  zh: messagesZh,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.switchLanguage = this.switchLanguage.bind(this);
    this.state = {
      language: 'en',
      name: 'Chuqi',
      // email: 'michaelsch118@gmail.com',
    };
  }

  switchLanguage(selectedLanguage) {
    this.setState({ language: selectedLanguage });
  }

  render() {
    const { name, language } = this.state;
    return (
      <IntlProvider locale="en" messages={messages[language]}>
        <Router>
          <ScrollContext>
            <div className="App">
              <MenuBar name={name} switchLanguage={this.switchLanguage} />
              <Container>
                <Route exact path="/" component={Home} />
                <Route path="/education" component={Education} />
                <Route path="/places" component={Places} />
              </Container>
              <Footer />
            </div>
          </ScrollContext>
        </Router>
      </IntlProvider>
    );
  }
}

export default App;
