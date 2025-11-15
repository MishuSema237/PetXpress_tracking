import React, { useEffect } from 'react';

// TypeScript declarations for Smartsupp API
declare global {
  interface Window {
    smartsupp?: any;
    _smartsupp?: {
      key: string;
    };
  }
}

const LiveChat: React.FC = () => {
  useEffect(() => {
    // Initialize Smartsupp configuration (matching the provided script)
    const _smartsupp = (window as any)._smartsupp || {};
    _smartsupp.key = 'a46f035b1a284c61e2ad30c67c10aead2367eae3';
    (window as any)._smartsupp = _smartsupp;

    // Check if Smartsupp script is already loaded
    const existingScript = document.querySelector('script[src*="smartsuppchat.com"]');
    if (existingScript) {
      return; // Already loaded, skip
    }

    // Check if smartsupp is already initialized
    if (window.smartsupp) {
      return;
    }

    // Initialize smartsupp function (matching the provided script pattern)
    const smartsuppInit = function() {
      const o = (window as any).smartsupp = function() {
        (o as any)._.push(arguments);
      };
      (o as any)._ = [];
      return o;
    };

    window.smartsupp = window.smartsupp || smartsuppInit();

    // Load Smartsupp script (matching the provided script)
    const d = document;
    const s = d.getElementsByTagName('script')[0];
    const c = d.createElement('script');
    c.type = 'text/javascript';
    c.charset = 'utf-8';
    c.async = true;
    c.src = 'https://www.smartsuppchat.com/loader.js?';
    
    if (s && s.parentNode) {
      s.parentNode.insertBefore(c, s);
    } else {
      document.head.appendChild(c);
    }

    // Cleanup function
    return () => {
      const existingScript = document.querySelector('script[src*="smartsuppchat.com"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  // Return null since we're using Smartsupp's built-in widget
  return (
    <>
      {null}
      <noscript>
        Powered by <a href="https://www.smartsupp.com" target="_blank" rel="noopener noreferrer">Smartsupp</a>
      </noscript>
    </>
  );
};

export default LiveChat;
