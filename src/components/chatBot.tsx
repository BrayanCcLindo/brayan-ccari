import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Message } from "../types/type";

export default function Chatbot() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm your portfolio chatbot. How can I assist you today?",
      isUser: false,
      options: [
        {
          text: "Tell me about your projects",
          action: () => navigateTo("/my-projects")
        },
        {
          text: "Tell me about your experience",
          action: () => handleOptionClick("experience")
        },
        {
          text: "How can I contact you?",
          action: () => handleOptionClick("contact")
        }
      ]
    }
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      setInput("");
      setTimeout(() => {
        const botReply = getBotReply(input);
        setMessages(prev => [...prev, botReply]);
      }, 500);
    }
  };

  const handleOptionClick = (option: string) => {
    setMessages(prev => [...prev, { text: option, isUser: true }]);
    setTimeout(() => {
      const botReply = getBotReply(option);
      setMessages(prev => [...prev, botReply]);
    }, 500);
  };

  const getBotReply = (userInput: string): Message => {
    const lowerInput = userInput.toLowerCase();
    if (lowerInput.includes("experience")) {
      return {
        text: "Great! I'd love to tell you more about my experience and projects. Here are some options:",
        isUser: false,
        options: [
          {
            text: "Check out my About Me page",
            action: () => navigateTo("/about-me")
          },
          {
            text: "See my Projects",
            action: () => navigateTo("/my-projects")
          },
          {
            text: "Download my CV",
            action: handleDownloadCV
          }
        ]
      };
    } else if (lowerInput.includes("contact") || lowerInput.includes("hire")) {
      return {
        text: "I'm always open to new opportunities! Here's how you can reach me:",
        isUser: false,
        options: [
          {
            text: "Email me",
            action: () =>
              (window.location.href = "mailto:brayancclindo@gmail.com")
          },
          {
            text: "LinkedIn Profile",
            action: () =>
              window.open("https://www.linkedin.com/in/brayan-ccari/", "_blank")
          },
          { text: "View Contact Page", action: () => navigateTo("/contact") }
        ]
      };
    } else {
      return {
        text: "I'm sorry, I didn't quite understand that. Could you please choose one of these options?",
        isUser: false,
        options: [
          { text: "Projects", action: () => handleOptionClick("projects") },
          { text: "Skills", action: () => handleOptionClick("skills") },
          { text: "Contact", action: () => handleOptionClick("contact") }
        ]
      };
    }
  };

  const navigateTo = (path: string) => {
    window.scrollTo(0, 0);
    navigate(`${path}`);
    setIsOpen(false);
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/files/CV.pdf";
    link.download = "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed bottom-4 left-4">
      <button
        className="flex items-center justify-center p-4 text-[#fff] transition-colors duration-200 rounded-full shadow-lg bg-purple"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {isOpen && (
        <div className="absolute left-0 flex flex-col bg-gray-300 border border-gray-600 rounded-lg shadow-xl bottom-16 w-80 h-96 animate-in slide-in-from-bottom-16">
          <div className="p-4 border-b border-gray-600">
            <h2 className="text-lg font-semibold text-black">Chatbot</h2>
          </div>
          <div className="flex-grow p-4 overflow-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  message.isUser ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`inline-block p-2 rounded-lg ${
                    message.isUser
                      ? "bg-purple text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {message.text}
                </span>
                {message.options && (
                  <div className="mt-2 space-y-2">
                    {message.options.map((option, optionIndex) => (
                      <button
                        key={optionIndex}
                        onClick={option.action}
                        className="block w-full p-2 text-left text-gray-200 transition-colors duration-200 bg-white rounded hover:bg-gray-600"
                      >
                        {option.text}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSend();
            }}
            className="flex p-4 border-t border-gray-600"
          >
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              className="flex-grow px-3 py-2 bg-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple placeholder:text-gray-200"
            />
            <button
              type="submit"
              className="px-4 py-2 text-[#fff] transition-colors duration-200 bg-purple rounded-r-md"
              aria-label="Send message"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
