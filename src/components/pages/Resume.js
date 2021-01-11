import React from 'react';
// import Nav from '../layout/Nav';

const Resume = () => {
  return (
    <div>
      <div className="scroll-lock">
        <div className="resume-frame">
          <iframe
            title="ream-resume"
            style={{ width: '100%', maxWidth: '750px', height: '100%' }}
            src="https://docs.google.com/document/d/e/2PACX-1vR20qfLDgjkuo5eyg-mN8FqO_TrIokBzs6b-s37W0746UNiJVrA48ppoQJwJfunit6PF_pWbx3i2oNj/pub?embedded=true"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Resume;
