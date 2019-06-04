import React, { useState, useEffect, useRef } from 'react';
import useAbortableFetch  from 'use-abortable-fetch';
import Toggle from './Toggle';
// import Counter from './Counter';

import { useTitleInput } from './hooks';

const App = () => {
  const [name, setName] = useTitleInput('');
  const ref = useRef();

  const { data, loading } = useAbortableFetch('https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes');

  if (!data) return null;

  return (
    <div className="main-wrapper" ref={ref}>
      <h1 onClick={() => ref.current.classList.add('new-fake-class')}>
        Level Up Dishes
      </h1>
      <Toggle />
      {/* <Counter /> */}
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <button>Submit</button>
      </form>
      {data.map((dish, i) => (
      <article key={i} className="dish-card dish-card--withImage">
        <h3>{dish.name}</h3>
        <p>{dish.desc}</p>
        <div className="ingredients">
          {dish.ingredients.map((ingredient, i) => (
            <span key={i}>{ingredient}</span>
          ))}
        </div>
      </article>
      ))}
    </div>
  );
};

export default App;
