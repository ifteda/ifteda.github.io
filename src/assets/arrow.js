import React from 'react';

const Arrow = ({width = "100%", height="auto", className}) => (
  <svg className={className} width={width} height={height} viewBox="0 0 80 46" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d)">
      <line x1="4.70711" y1="1.29289" x2="40.0624" y2="36.6482" stroke="#EBF8FF" stroke-width="2" stroke-linejoin="round"/>
      <path d="M39 36.3553L74.3553 1" stroke="#EBF8FF" stroke-width="2" stroke-linejoin="round"/>
    </g>
    <defs>
      <filter id="filter0_d" x="0" y="0.292892" width="79.0625" height="45.0624" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
      </filter>
    </defs>
  </svg>
)

export default Arrow;