import * as React from 'react';
import './style.css';
import { useState } from 'react';

function Header(props) {
  return (
    <header>
      <h1>
        <a href="/header">{props.title}</a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const list = [];
  for (let i = 0; i < props.topics.length; i++) {
    let elem = props.topics[i];
    list.push(
      <li>
        <a href={'#' + elem.id}>{elem.title}</a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{list}</ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </article>
  );
}

export default function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  let content = null;
  const topics = [
    { id: 1, title: 'html', body: 'html ...' },
    { id: 1, title: 'css', body: 'css ...' },
    { id: 1, title: 'javascript', body: 'javascript ...' },
  ];
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello WEB"></Article>;
  } else if (mode === 'READ') {
    content = <Article title="Read" body="Hello READ"></Article>;
  }

  return (
    <div>
      <Header title="WEB"></Header>
      <Nav topics={topics}></Nav>
      {content}
    </div>
  );
}
