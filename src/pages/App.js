import React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import Header from '../components/Header';
import Line from '../components/Line';
import Section from '../components/Section';
import translations from '../translations';

const App = () => {
    const [locale, changeLocale] = React.useState('fr');

    return (
        <IntlProvider locale={locale} messages={translations[locale]}>
            <Header/>
            <div className="mb-2 p-1">
                <button onClick={() => changeLocale('fr')}>FR</button>
                <button onClick={() => changeLocale('en')}>EN</button>
            </div>
            <FormattedMessage id="test.welcome" />
            <Section title={<FormattedMessage id="todo" />}>
                <Line />
                <Line />
            </Section>
        </IntlProvider>
    );
};

export default App;
