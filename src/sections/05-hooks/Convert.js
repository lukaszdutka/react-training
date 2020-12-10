import React, {useEffect, useState} from 'react';
import * as axios from "axios";
import constants from "../../constants";

const Convert = ({text, language}) => {
  const [translated, setTranslated] = useState('')
  const [debouncedText, setDebouncedText] = useState(text)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedText(text)
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [text])

  useEffect(() => {
    axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
      params: {
        key: constants.google_translate.key,
        q: debouncedText,
        target: language.value,
        format: 'text'
      }
    })
      .then(r => setTranslated(r.data.data.translations[0].translatedText))
  }, [language, debouncedText]);

  return <div>
    <h1 className="ui header">{translated}</h1>
  </div>
}

export default Convert;