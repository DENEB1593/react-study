/* @jsx createElement */
import { createDOM, createElement, render } from './react';

const vdom = <p>
  <h1>React 만들기</h1>
  <ul>
    <li style="color:red;">첫번째 아이템</li>
    <li style="color:blue;">두번째 아이템</li>
    <li style="color:green;">새번째 아이템</li>
  </ul>
</p>;


render(vdom, document.querySelector('#root'));
