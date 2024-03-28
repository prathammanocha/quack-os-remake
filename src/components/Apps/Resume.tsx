import { useEffect } from "react";
import { useWindow } from "../../contexts/WindowContext";

export default function Resume() {
  const { setInitialSize } = useWindow();

  useEffect(() => {
    setInitialSize({
      width: 800, // Adjust the width as per your preference or requirements
      height: 600, // Adjust the height as per your preference or requirements
    });
  }, []);

  // Assuming the resume PDF is placed in the public folder and named 'resume.pdf'
  const resumePDF = `${process.env.PUBLIC_URL}/resume.pdf`;

  return (
    <div className="flex h-full w-full items-center justify-center p-2">
      <iframe
        src={resumePDF}
        title="Resume"
        width="100%"
        height="100%"
        style={{ border: "none" }} // Removes the border around the iframe
      ></iframe>
    </div>
  );
}
