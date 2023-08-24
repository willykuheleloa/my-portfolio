import React from "react";
import { Card } from "react-bootstrap";

const AboutMe: React.FC = () => {
  return (
    <Card className="about-card">
      <h1 className="center-text">Hi, I'm William! 👋🏽 </h1>
      <ul className="about-list">
        <li>
          Born in Omaha, Nebraska, at 4 months relocated and raised in San
          Diego, CA ☀️
        </li>
        <li>First line of code written: Age 8, for Myspace. 😂</li>
        <li>Pursuing B.S in Computer Science @ National University 🧑🏽‍🎓</li>
        <li>
          Stationed in Goldsboro, NC, North Pole, AK, and Riyadh, Saudi Arabia
        </li>
        <li>I love to camp/fish/hike ⛺ 🎣 🥾 </li>
        <li>I like coffee - git push coffee me please. ☕</li>
        <li>Expecting Father come January 2024! 👶🏽</li>
        <li>
          Currently working on an innovative web application named "Recipe
          Whiz". This app harnesses the power of AI to generate comprehensive
          and personalized meal plans based on individual dietary restrictions
          and needs.
        </li>
      </ul>
    </Card>
  );
};

export default AboutMe;
