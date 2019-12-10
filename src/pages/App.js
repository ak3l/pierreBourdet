import React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { Header, Entry, Section } from '../components';
import translations from '../translations';
import img from '../img';

const App = () => {
    const [locale, changeLocale] = React.useState('fr');
    const french = locale === 'fr';

    return (
        <IntlProvider locale={locale} messages={translations[locale]}>
            <div className="float-right float-sm-left">
                {french ? (
                    <button className="btn" onClick={() => changeLocale('en')}>
                        <img className="img-thumbnail" alt="french" src={img.flag.uk} />
                    </button>
                ) : (
                    <button className="btn" onClick={() => changeLocale('fr')}>
                        <img className="img-thumbnail" alt="french" src={img.flag.french} />
                    </button>
                )}
            </div>
            <Header />
            <Section title={<FormattedMessage id="experiences.title" />}>
                <Entry
                    date="Août 2019 - Décembre 2019"
                    img={img.company.hn}
                    title="Responsable d'application (BNP Paribas)"
                    location="Montreuil, France"
                    line1="Suivi de production"
                />
            </Section>
            <Section title={<FormattedMessage id="education.title" />}>
                <Entry
                    date="Été 2019"
                    img={img.company.opcr}
                    title="Formation de développeur web (OpenClassroom)"
                    line1="HTML/CSS"
                    line2="Javascript"
                    line3="PHP"
                    />
                <Entry
                    date="Juin-Juillet 2015"
                    img={img.company.hn}
                    title="Formation Mainframe/COBOL (HN Institut)"
                    line1="JCL"
                />
            </Section>
        </IntlProvider>
    );
};

export default App;
