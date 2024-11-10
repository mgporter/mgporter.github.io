export function executeWhenIdle(callback: () => void, delay: number = 0) {
  requestAnimationFrame(() => {
    setTimeout(() => {
      callback();
    }, delay)
  })
}