export function observeElement(element: HTMLElement, callback: (el: IntersectionObserverEntry) => void) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      callback(entry)
    });
  }, {
    // Optional options for the observer
    threshold: 0.5, // Intersection ratio (0 to 1) - element is considered in view when 50% visible
    root: null, // Observe relative to viewport (default) or a specific element
  });

  observer.observe(element); // Start observing the element
}

export function toggleVisibility(entry: IntersectionObserverEntry) {
  if (entry.isIntersecting) {
    entry.target.classList.remove('opacity-0')
    entry.target.classList.add('slide-in-animation')
  }
  // else {
  //   entry.target.classList.remove('slide-in-animation')
  //   entry.target.classList.add('opacity-0')
  // }
}
