export function useFadeInMultiplier(frame: number, duration: number, delay: number) {
  return Math.min(1, frame / (duration * delay));
}