import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/pages/liveChat.css'
const LiveChat = () => {
  useEffect(() => {
    // Inject the LiveChat script dynamically
    const script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.src = 'https://cdn.livechatinc.com/tracking.js';
    document.head.appendChild(script);

    // Initialize LiveChat settings
    window.__lc = window.__lc || {};
    window.__lc.license = 18965733;
    window.__lc.integration_name = 'manual_onboarding';
    window.__lc.product_name = 'livechat';

    return () => {
      // Cleanup the script when the component unmounts
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="livechat-container">
      <h1>Live Chat Support</h1>
      <p>Need assistance? Start a live chat with us using the chat widget below.</p>
      <noscript>
        <NavLink
          href="https://www.livechat.com/chat-with/18965733/"
          rel="nofollow"
          target="_blank"
        >
          Chat with us
        </NavLink>
        , powered by{' '}
        <NavLink
          href="https://www.livechat.com/?welcome"
          rel="noopener nofollow"
          target="_blank"
        >
          LiveChat
        </NavLink>
      </noscript>
    </div>
  );
};

export default LiveChat;
