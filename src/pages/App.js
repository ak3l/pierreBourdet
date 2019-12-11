import React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { Header, Entry, Section, Line } from '../components';
import translations from '../translations';
import img from '../img';

const App = () => {
    const [locale, changeLocale] = React.useState('fr');
    return (
        <IntlProvider locale={locale} messages={translations[locale]}>
            <div className="float-right float-sm-left">
                <button className="btn p-0" onClick={() => changeLocale('fr')}>
                    <img className="rounded" alt="french" src={img.flag.french} height="25" width="25" />
                </button>
                <button className="btn p-0" onClick={() => changeLocale('en')}>
                    <img className="rounded" alt="french" src={img.flag.uk} height="25" width="25"/>
                </button>
            </div>
            <Header />

            <Section title={<FormattedMessage id="experiences.title" />}>
                <Entry
                    date={<FormattedMessage id="experiences.bnp.date" />}
                    img={img.company.hn}
                    title={<FormattedMessage id="experiences.bnp.title" />}
                    location="Montreuil, France">
                    <Line description={<FormattedMessage id="experiences.bnp.line1" />} />
                    <Line description={<FormattedMessage id="experiences.bnp.line2" />} />
                    <Line description={<FormattedMessage id="experiences.bnp.line3" />} />
                </Entry>
                <Entry
                    date={<FormattedMessage id="experiences.nxs.date" />}
                    img={img.company.hn}
                    title={<FormattedMessage id="experiences.nxs.title" />}
                    location="Charenton-le-Pont, France">
                    <Line description={<FormattedMessage id="experiences.nxs.line1" />} />
                    <Line description={<FormattedMessage id="experiences.nxs.line2" />} />
                    <Line description={<FormattedMessage id="experiences.nxs.line3" />} />
                </Entry>
                <Entry
                    date={<FormattedMessage id="experiences.pcs.date" />}
                    img={img.company.hn}
                    title={<FormattedMessage id="experiences.pcs.title" />}
                    location="Charenton-le-Pont, France">
                    <Line description={<FormattedMessage id="experiences.pcs.line1" />} />
                    <Line description={<FormattedMessage id="experiences.pcs.line2" />} />
                    <Line description={<FormattedMessage id="experiences.pcs.line3" />} />
                </Entry>
            </Section>

            <Section title={<FormattedMessage id="education.title" />}>
                <Entry
                    date={<FormattedMessage id="education.opcr.date" />}
                    img={img.company.opcr}
                    title={<FormattedMessage id="education.opcr.title" />}>
                    <Line description={<FormattedMessage id="education.opcr.line1" />} />
                </Entry>
                <Entry
                    date={<FormattedMessage id="education.hni.date" />}
                    img={img.company.hn}
                    location="Paris XII, France"
                    title={<FormattedMessage id="education.hni.title" />}>
                    <Line description={<FormattedMessage id="education.hni.line1" />} />
                </Entry>
                <Entry
                    date={<FormattedMessage id="education.n7.date" />}
                    img={img.company.n7}
                    location="Toulouse, France"
                    title={<FormattedMessage id="education.n7.title" />}>
                    <Line description={<FormattedMessage id="education.n7.line1" />} />
                </Entry>
            </Section>

            <Section title={<FormattedMessage id="skills.title" />}>
                <div className="container">
                    <div className="row border-bottom mb-2">
                        <div className="col-sm-4 col-5 d-flex align-items-center">
                            <div className="h6">{<FormattedMessage id="skills.programming.title"/>}</div>
                        </div>
                        <div className="col-sm-8 col-7 border-left pr-0">
                            <ul className="list-unstyled">
                                <li className="font-weight-bold">
                                    {<FormattedMessage id="skills.programming.languages"/>}
                                </li>
                                <ul className="list-unstyled pl-3 border-left">
                                    <li>
                                        <img alt="html5" src={img.logo.html5} height="20" width="20"/> HTML5 /
                                        <img alt="cs33" src={img.logo.css3} height="20" width="20"/>CSS3
                                    </li>
                                    <li>
                                        <img alt="js" src={img.logo.javascript} height="20" width="20"/> JavaScript
                                    </li>
                                    <li>
                                        <img alt="php" src={img.logo.php} height="20" width="20"/> PHP /
                                        <img alt="sql" src={img.logo.sql} height="20" width="20"/> SQL
                                    </li>
                                </ul>
                                <li className="font-weight-bold">Framework</li>
                                <ul className="list-unstyled pl-3 border-left" >
                                    <li>
                                        <img alt="boostrap" src={img.logo.bootstrap} height="20" width="20"/> Bootstrap 4
                                    </li>
                                    <li>
                                        <img alt="react" src={img.logo.react} height="20" width="20"/> React.js
                                    </li>
                                    <li>
                                        <img alt="symfony" src={img.logo.symfony} height="20" width="20"/> Symfony 4
                                    </li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                    <div className="row border-bottom mb-2">
                        <div className="col-sm-4 col-5 d-flex align-items-center">
                            <div className="h6">{<FormattedMessage id="skills.misc"/>}</div>
                        </div>
                        <div className="col-sm-8 col-7 border-left pr-0">
                            <ul className="list-unstyled pl-3">
                                <li>
                                    <img alt="git" src={img.logo.git} height="20" width="20"/> Git
                                </li>
                                <li>
                                    <img alt="windows" src={img.logo.windows} height="20" width="20"/> Windows
                                </li>
                                <li>
                                    <img alt="office" src={img.logo.suiteoffice} height="20" width="20"/> Microsoft Office
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 col-5 d-flex align-items-center">
                            <div className="h6">{<FormattedMessage id="skills.languages.title"/>}</div>
                        </div>
                        <div className="col-sm-8 col-7 border-left pr-0">
                            <ul className="list-unstyled pl-3">
                                <li>
                                    <img alt="spain"
                                         src={img.flag.french}
                                         height="20"
                                         width="20" /> {<FormattedMessage id="skills.languages.french" />}
                                </li>
                                <li>
                                    <img alt="spain"
                                         src={img.flag.uk}
                                         height="20"
                                         width="20" /> {<FormattedMessage id="skills.languages.english" />}
                                </li>
                                <li>
                                    <img alt="spain"
                                         src={img.flag.spain}
                                         height="20"
                                         width="20" /> {<FormattedMessage id="skills.languages.spanish" />}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>
        </IntlProvider>
    );
};

export default App;
