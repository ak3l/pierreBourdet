import React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import Header from '../components/Header';
import Line from '../components/Line';
import Section from '../components/Section';
import translations from '../translations';
import frenchFlag from '../img/french.jpg'
import ukFlag from '../img/uk.jpg'

const App = () => {
    const [locale, changeLocale] = React.useState('fr');
    const french = locale === 'fr'

    return (
        <IntlProvider locale={locale} messages={translations[locale]}>
            <div className="float-left">
                {french ? (
                    <button className="btn" onClick={() => changeLocale('en')}>
                        <img className="img-thumbnail" alt="french" src={ukFlag} />
                    </button>
                    ) : (
                    <button className="btn" onClick={() => changeLocale('fr')}>
                        <img className="img-thumbnail" alt="french" src={frenchFlag} />
                    </button>
                )}
            </div>
            <Header/>
            <FormattedMessage id="test" />
            <Section title={<FormattedMessage  id="test" />}>
                <Line />
                <Line />
            </Section>
        </IntlProvider>
    );
};

export default App;
