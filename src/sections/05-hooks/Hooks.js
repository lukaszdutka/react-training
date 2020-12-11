import React from 'react';
import Wrapper from "../common-components/Wrapper";
import Header from "./Header";
import Route from "./routing/Route";
import Accordion from "./Accordion";
import Search from "./Search";
import DropdownHolder from "./DropdownHolder";
import Translate from "./Translate";
import Link from "./routing/Link";

const items = [
  {
    title: 'Why have a philosophy of life?',
    content: 'Without a cohesive philosophy of life, we risk missing the opportunity to flourish as human beings. Everyone can be a philosopher. Human beings are rational, thinking, reasoning creatures. But people are distracted through fulfilling basic needs and the usual temptations that daily confront us.'
  },
  {
    title: 'Is Stoicism something I have to believe in, or commit my life to?',
    content: 'Although the historical sources sometimes emphasize the importance of dedicating one\'s life to philosophy, in practice many find benefit in doing no more than reading Stoic writing as inspirational material, particularly Marcus Aurelius\'s Meditations and Epictetus\'s Enchirideon. (In both cases, they are easly misinterpreted without further study, but this may actually be helpful in letting the reader dig out a meaning that can be incorporated into their existing approach to life.)'
  },
  {
    title: 'What is Stoicism, considered as a philosophy of life in modern times?',
    content: 'Stoicism is a philosophy of life, a practical guide to applying wisdom to your daily choices, focused on living life as a thriving rational being, characterized by excellence in judgement and the fulfilled happiness that is to the mind what robust healthy fitness is to the body. Stoics believe that, just as physical pain is caused by illness and injury to the body, human distress is caused (at least in part, and according to orthodox Stoicism, entirely) by mistaken judgments and incorrect beliefs, particularly about good and bad. To completely correct these judgements and correct these beliefs is a difficult task, perhaps effectively impossible, but Stoic study, practice, and exercises aim at least to improve those of the Stoics who practice them.'
  }
]
const source = {
  text: 'r/Stoicism',
  link: 'https://www.reddit.com/r/Stoicism/wiki/faq'
}

const Hooks = () => {

  return (
    <Wrapper>
      <Header/>
      <Route path="/">
        <Accordion items={items} source={source}/>
      </Route>
      <Route path="/search">
        <Search/>
      </Route>
      <Route path="/dropdown">
        <DropdownHolder/>
      </Route>
      <Route path="/translate">
        <Translate/>
      </Route>
    </Wrapper>
  )
}

export default Hooks;