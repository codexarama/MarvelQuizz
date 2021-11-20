import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="banner-container">
      <h1>
        <Link to="/">Marvel Quizz</Link>
      </h1>
    </header>
  );
}
