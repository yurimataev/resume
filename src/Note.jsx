import React from 'react';

function Note() {
  return (
    <div className="note">
      <p>This resume has some cool (and totally over-the-top) behind-the-scene features. It is written with React and SCSS, and comes with a complete test suite that uses Jest, Enzyme and ESLint. It is deployed to this web address with a CI/CD pipeline built using GitHub Actions.</p>
      <p>
        <a href="http://github.com/yurimataev/resume">View Source Code</a>
      </p>
    </div>
  );
}

export default Note;
