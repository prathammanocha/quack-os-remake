import React from 'react';
import { useWindow } from '../../contexts/WindowContext';

// Assuming you have your resume PDF imported or hosted somewhere
import resumePDF from '/resume.pdf';

export default function Resume() {
  const { setInitialSize } = useWindow();

  // Set the initial size of the window
  React.useEffect(() => {
    setInitialSize({
      width: 600, // Adjust the width as per your preference
      height: 800, // Adjust the height as per your preference
    });
  }, [setInitialSize]);

  return (
    <div className="flex h-full w-full items-center justify-center">
      {/* Embed the PDF document */}
      <embed src={resumePDF} type="application/pdf" width="100%" height="100%" />
    </div>
  );
}
