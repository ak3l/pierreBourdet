import React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import Button from '@material-ui/core/Button'
import translations from '../translations';
import Header from '../components/Header';
import './App.css';

const App = () => {
    const [locale, changeLocale] = React.useState('fr');

    return (
        <IntlProvider locale={locale} messages={translations[locale]}>
            <Button size="small" variant="contained" onClick={() => changeLocale('fr')}>FR</Button>
            <Button size="small" variant="contained" onClick={() => changeLocale('en')}>EN</Button>
            <FormattedMessage id="test.welcome" />
            <div className="App">
                <Header />
            </div>
        </IntlProvider>
    );
};

export default App;
