import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RxCross2 } from "react-icons/rx";

const ContactModal = ({ isOpen, setIsOpen }) => {
  const handleClose = (e) => {
    if (e.target.id === "modal-backdrop") {
      setIsOpen(false);
    }
  };
  if (isOpen) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  if (isOpen) {
    const messenger = document.querySelector("df-messenger");
    if (messenger) {
      messenger.remove(); 
    }
  } else {
    if (!document.querySelector("df-messenger")) {
      const messenger = document.createElement("df-messenger");
      messenger.setAttribute("intent", "WELCOME");
      messenger.setAttribute("chat-title", "Your_Bot Name");
      messenger.setAttribute("agent-id", "Replace it with your agent-id");
      messenger.setAttribute("language-code", "en");
      document.body.appendChild(messenger); 
    }
  }
  const notify = () =>
    toast.success("Message Sent Successfully", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const errorNotify = () => {
    toast.error("Something Went Wrong! Try Again Later", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const form = useRef();

  const sendEmail = (e) => {
    console.log(import.meta.env.VITE_TEMPLATE_ID);
    e.preventDefault();
 
   // console.log(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, import.meta.env.VITE_PUBLIC_ID);
    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_ID,
      })
      .then(
        () => {
          notify();
        },
        (error) => {
          errorNotify();
          console.log("FAILED...", error.text);
        }
      );
  };
  const letters = "Get in touch".split("");
  return (
    <div>
      {isOpen && (
        <section
          id="modal-backdrop"
          onClick={handleClose}
          className="fixed inset-0 bg-darkGrey bg-opacity-80 backdrop-blur-md flex items-center justify-center z-50"
        >
          <div className="max-w-6xl mx-auto p-4 md:p-16 xl:p-20 relative">
            <span
              onClick={() => setIsOpen(false)}
              className="absolute right-3 text-3xl text-[#880ED4] cursor-pointer"
            >
              <RxCross2 />
            </span>
            <div className="lg:w-2/3 space-y-5 text-center mx-auto ">
              <h1 className="text-white uppercase tracking-widest text-4xl font font-extrabold">
              {letters.map((letter, index) => (
                <span
                    key={index}
                    className="text-4xl text-white cursor-pointer duration-500 lg:text-5xl 2xl:text-6xl hover:scale-y-110 hover:text-[#880ED4] hover:scale-x-110"
                >
                    {letter}
                </span>
            ))}
              </h1>
              <div className="h-0.5 bg-[#880ED4] w-14 mx-auto"></div>
              <p className="text-gray-400 text-base leading-6">
                We thrive when coming up with innocative ideas but also
                understand that a smart concept should be supported with
                measurable results
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">
              <div>
                <address>
                  <div className="mb-6">
                    <h2 className="text-base font-medium mb-2 text-white">
                      Email:
                    </h2>
                    <p className="text-gray-400 text-sm font-medium leading-5">
                      banerjeedibs@gmail.com
                    </p>
                  </div>
                  <div className="mb-6">
                    <h2 className="text-base font-medium mb-2 text-white">
                      WhatsApp
                    </h2>
                    <p className="text-gray-400 text-sm font-medium leading-5">
                      +91 9051484336
                    </p>
                  </div>
                  <div className="mb-6">
                    <h2 className="text-base font-medium mb-2 text-white">
                      Location:
                    </h2>
                    <p className="text-gray-400 text-sm font-medium leading-5">
                      West Bengal
                    </p>
                  </div>
                </address>
              </div>
              <div className="lg:col-span-2">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <label htmlFor="user_name" className="sr-only">
                        Name
                      </label>
                      <input
                        type="text"
                        name="user_name"
                        id="name"
                        className="form-input"
                        placeholder="Enter your name"
                      />
                      <label htmlFor="user_email" className="sr-only">
                        Enter your email
                      </label>
                      <input
                        type="email"
                        name="user_email"
                        id="email"
                        className="form-input"
                        placeholder="Enter your email"
                      />
                    </div>
                    <label htmlFor="user_subject" className="sr-only">
                      Name
                    </label>
                    <input
                      type="text"
                      name="user_subject"
                      id="name"
                      className="form-input"
                      placeholder="Enter your subject"
                    />
                    <textarea
                      name="message"
                      id="comments"
                      className="form-input"
                      placeholder="Enter your message"
                      rows="3"
                    ></textarea>
                    <div className="text-right">
                      <input
                        type="submit"
                        id="submit"
                        name="send"
                        className="inline-block px-5 py-2.5 rounded text-sm cursor-pointer select-none outline-none transition-all duration-500 focus:outline-none focus:ring-0 focus:ring-offset-0 hover:translate-y-1.5 bg-[#880ED4] text-white"
                        value="Send Message"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
      <ToastContainer />
    </div>
  );
};

export default ContactModal;
