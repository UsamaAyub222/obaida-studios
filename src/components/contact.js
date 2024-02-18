import react from "react";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contactrect"></div>
        <h2>Hit me up. Let's chat!</h2>
        <a target="_blank" href="mailto:hi@obaidazeino.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              className="social-icon github light"
              d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"
            />
          </svg>
        </a>
      </div>
      <small>© 2023 Obaida Studios</small>
    </>
  );
};

export default Contact;
