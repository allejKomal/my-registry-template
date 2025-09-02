import React, { useEffect } from 'react';

const ScrollBar: React.FC = () => {
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
      body {
        --sb-track-color: var(--primary);
        --sb-thumb-color: var(--primary-foreground);
        --sb-size: 2px;
      }

      body::-webkit-scrollbar {
        width: var(--sb-size);
      }

      body::-webkit-scrollbar-track {
        background: var(--sb-track-color);
        border-radius: 5px;
      }

      body::-webkit-scrollbar-thumb {
        background: var(--sb-thumb-color);
        border-radius: 5px;
      }

      @supports not selector(::-webkit-scrollbar) {
        body {
          scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);
        }
      }
    `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return null;
};

export default ScrollBar;
