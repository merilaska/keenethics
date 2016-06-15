import React from 'react';

export default class ListNavigator extends React.Component {
  render() {
    return (
        <ul class="list-navigation nav">
    <li class="list-navigation--item">
      <a href="#header" class="list-navigation--link">1</a>
      <div class="list-navigation--tip">
        <span class="list-navigation--text">Ethical development of keen web-apps.</span>
      </div>
    </li>
    <li class="list-navigation--item">
      <a href="#slide-1" class="list-navigation--link">2</a>
      <div class="list-navigation--tip">
        <span class="list-navigation--text">What if you have a keen idea?</span>
      </div>
    </li>
    <li class="list-navigation--item">
      <a href="#slide-2" class="list-navigation--link">3</a>
      <div class="list-navigation--tip">
        <span class="list-navigation--text">Then we have a keen approach.</span>
      </div>
    </li>
    <li class="list-navigation--item">
      <a href="#slide-3" class="list-navigation--link">4</a>
      <div class="list-navigation--tip">
        <span class="list-navigation--text">Our works.</span>
      </div>
    </li>
    <li class="list-navigation--item">
      <a href="#slide-4" class="list-navigation--link">5</a>
      <div class="list-navigation--tip">
        <span class="list-navigation--text">Our keen team.</span>
      </div>
    </li>
    <li class="list-navigation--item">
      <a href="#slide-5" class="list-navigation--link">6</a>
      <div class="list-navigation--tip">
        <span class="list-navigation--text">Our partners.</span>
      </div>
    </li>
    <li class="list-navigation--item">
      <a href="#slide-6" class="list-navigation--link">7</a>
      <div class="list-navigation--tip">
        <span class="list-navigation--text">Contact us.</span>
      </div>
    </li>
  </ul>
    );
  }
}

