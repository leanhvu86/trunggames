import { useEffect, useState } from 'react';
import { IntlProvider, createIntl } from 'react-intl';
import { useSelector } from 'react-redux';

const loadLocaleData = (locale) => {
  switch (locale) {
    case 'en':
      return import('../utils/locales/en.json');
    case 'vi':
      return import('../utils/locales/vi.json');
    default:
      return import('../utils/locales/en.json');
  }
};

const LocalesProvider = ({ children }) => {
  const store = useSelector((store) => store);
  const lang = store.language ?? 'en';
  const [messages, setMessages] = useState();

  useEffect(() => {
    loadLocaleData(lang).then((res) => setMessages(res.default));
  }, [lang]);

  return (
    <>
      {messages && (
        <IntlProvider locale={lang || 'en'} messages={messages}>
          <>{children}</>
        </IntlProvider>
      )}
    </>
  );
};

export default LocalesProvider;

