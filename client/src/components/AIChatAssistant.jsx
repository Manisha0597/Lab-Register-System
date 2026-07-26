import { useState } from "react";
import { FaRobot, FaPaperPlane, FaUser } from "react-icons/fa";
import { getAIResponse } from "../utils/chatEngine";
import "./AIChatAssistant.css";

function AIChatAssistant({ samples }) {

    const [question, setQuestion] = useState("");

    const [messages, setMessages] = useState([
        {
            sender: "AI",
            text: "Hello! I'm your AI Laboratory Assistant. Ask me about pending samples, completed samples, delayed samples, or technician workload."
        }
    ]);

    function sendMessage() {

        if (!question.trim()) return;

        const userMessage = {
            sender: "You",
            text: question
        };

        const aiMessage = {
            sender: "AI",
            text: getAIResponse(question, samples)
        };

        setMessages(prev => [...prev, userMessage, aiMessage]);

        setQuestion("");

    }

    function handleKeyPress(e) {

        if (e.key === "Enter") {

            sendMessage();

        }

    }

    return (

        <div className="chat-container">

            <h2>

                <FaRobot />

                AI Laboratory Assistant

            </h2>

            <div className="chat-box">

                {

                    messages.map((msg, index) => (

                        <div
                            key={index}
                            className={
                                msg.sender === "AI"
                                    ? "ai-message"
                                    : "user-message"
                            }
                        >

                            <strong>

                                {msg.sender === "AI"
                                    ? <><FaRobot /> AI</>
                                    : <><FaUser /> You</>
                                }

                            </strong>

                            <p>{msg.text}</p>

                        </div>

                    ))

                }

            </div>

            <div className="chat-input">

                <input

                    type="text"

                    placeholder="Ask the AI..."

                    value={question}

                    onChange={(e) => setQuestion(e.target.value)}

                    onKeyDown={handleKeyPress}

                />

                <button onClick={sendMessage}>

                    <FaPaperPlane />

                </button>

            </div>

        </div>

    );

}

export default AIChatAssistant;