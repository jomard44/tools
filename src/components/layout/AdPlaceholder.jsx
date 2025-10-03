import { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function AdPlaceholder({ position, className = '' }) {
  useEffect(() => {
    try {
      // Ensure we're not in development mode where ads might cause errors
      if (process.env.NODE_ENV === 'production') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error('Error initializing ad:', err);
    }
  }, []);

  if (process.env.NODE_ENV !== 'production') {
    return (
      <div className={`ad-placeholder ${className} bg-gray-100 border-2 border-dashed border-gray-300 p-4 text-center text-gray-500`}>
        Ad Placeholder ({position})
      </div>
    );
  }

  return (
    <div className={`ad-container ${className}`}>
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-9587370950538764"
           data-ad-slot="5695311938"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>
  );
}

AdPlaceholder.propTypes = {
  position: PropTypes.oneOf(['header', 'sidebar', 'bottom']).isRequired,
  className: PropTypes.string
};
