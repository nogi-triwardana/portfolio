import { useEffect } from 'react';

function useRippleEffect({ trigger }: { trigger: unknown }) {
  useEffect(() => {
    const handleRipple = (e: MouseEvent) => {
      // make sure target is a <button>
      const target = e.target as HTMLElement;

      const button = target.closest('button') || target.closest('a');
      if (!button) return;

      // create the ripple element
      const ripple = document.createElement('span');
      ripple.className = 'ripple';

      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      // append safely (React allows DOM mutation inside event handler)
      button.appendChild(ripple);

      // remove after animation
      setTimeout(() => {
        ripple.remove();
      }, 600);
    };

    // Add a single global listener to handle all buttons
    document.addEventListener('click', handleRipple);
  }, [trigger]);
}

export default useRippleEffect;
