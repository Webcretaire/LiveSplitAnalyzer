<template>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewBox="-20 -20 240 240">
      <defs>
        <linearGradient id="redyel" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#ff0000"/>   
            <stop offset="100%" stop-color="#ffff00"/>   
        </linearGradient>
        <linearGradient id="yelgre" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#ffff00"/>   
            <stop offset="100%" stop-color="#00ff00"/>   
        </linearGradient>
        <linearGradient id="grecya" gradientUnits="objectBoundingBox" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#00ff00"/>   
            <stop offset="100%" stop-color="#00ffff"/>   
        </linearGradient>
        <linearGradient id="cyablu" gradientUnits="objectBoundingBox" x1="1" y1="1" x2="0" y2="0">
            <stop offset="0%" stop-color="#00ffff"/>   
            <stop offset="100%" stop-color="#0000ff"/>   
        </linearGradient>
        <linearGradient id="blumag" gradientUnits="objectBoundingBox" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stop-color="#0000ff"/>   
            <stop offset="100%" stop-color="#ff00ff"/>   
        </linearGradient>
        <linearGradient id="magred" gradientUnits="objectBoundingBox" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stop-color="#ff00ff"/>   
            <stop offset="100%" stop-color="#ff0000"/>   
        </linearGradient>
      </defs>
    
      <g fill="none" stroke-width="30" transform="translate(100,100)">
        <path d="M 0,-100 A 100,100 0 0,1 86.6,-50" stroke="url(#redyel)"/>
        <path d="M 86.6,-50 A 100,100 0 0,1 86.6,50" stroke="url(#yelgre)"/>
        <path d="M 86.6,50 A 100,100 0 0,1 0,100" stroke="url(#grecya)"/>
        <path d="M 0,100 A 100,100 0 0,1 -86.6,50" stroke="url(#cyablu)"/>
        <path d="M -86.6,50 A 100,100 0 0,1 -86.6,-50" stroke="url(#blumag)"/>
        <path d="M -86.6,-50 A 100,100 0 0,1 0,-100" stroke="url(#magred)"/>
      </g>
    </svg>
</template>

<script>
export default {
  name: "hue-circle-svg"
};
</script>

<style>
</style>