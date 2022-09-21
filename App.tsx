import * as React from 'react';
import './style.css';

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
    list.push(props.topics[i]);
  }
  return <nav></nav>;
}

function Article(props) {
  return (
    <article>
      <h2> {props.title}</h2>
      <p>{props.body}</p>
    </article>
  );
}

export default function App() {
  const topics = [
    { id: 1, title: 'html', body: 'html ...' },
    { id: 1, title: 'css', body: 'css ...' },
    { id: 1, title: 'javascript', body: 'javascript ...' },
  ];
  let content = 'Content Space';
  return (
    <div>
      <Header title="WEB"></Header>
      <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hello WEB"></Article>
      {content}
    </div>
  );
}
