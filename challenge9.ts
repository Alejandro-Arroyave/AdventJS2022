function countTime(leds: Array<number>) {
  const ledsOff = leds.join('').repeat(2).split('1').map(leds => leds.length);
  return Math.max(...ledsOff) * 7
}
