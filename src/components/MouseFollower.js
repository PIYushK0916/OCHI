import React, { useEffect } from 'react';
import Shery from 'sheryjs'; // Import SheryJS

const MouseFollower = () => {
  useEffect(() => {
    // Initialize SheryJS mouse follower
    Shery.mouseFollower({
      skew: true,
      ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
      duration: 1,
    });

    // Clean up on component unmount
    return () => {
      // No direct cleanup needed for SheryJS mouseFollower
    };
  }, []);

  return (
    <div className="mouse-follower">
      {/* Optional content inside the follower */}
    </div>
  );
};

export default MouseFollower;
