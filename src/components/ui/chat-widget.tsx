
"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Send, X, Loader } from "lucide-react";
import { sendChat } from "@/lib/chat";
import { Button } from "./button";
import { Input } from "./input";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "./card";

interface ChatWidgetProps {
    isOpen: boolean;
    onClose: () => void;
}

type Message = {
    sender: 'user' | 'bot';
    text: string;
};

export default function ChatWidget({ isOpen, onClose }: ChatWidgetProps) {
  const [msg, setMsg] = useState("");
  const [conversation, setConversation] = useState<Message[]>([
    { sender: 'bot', text: "Hello! How can I help you today?" }
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversation, loading]);


  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!msg.trim()) return;

    const userMessage: Message = { sender: 'user', text: msg };
    setConversation(prev => [...prev, userMessage]);
    setMsg("");
    setLoading(true);
    setError(null);

    try {
      const data = await sendChat(msg);
      let botReply = "";
      if (typeof data === 'string') {
        botReply = data;
      } else if (data.reply) {
        botReply = data.reply;
      } else {
        const responseText = JSON.stringify(data);
        botReply = `Received an unexpected response: ${responseText}`;
      }
      const botMessage: Message = { sender: 'bot', text: botReply };
      setConversation(prev => [...prev, botMessage]);
    } catch (err) {
      setError("Sorry, I couldn't get a response. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed bottom-24 right-6 z-40"
    >
        <Card className="w-80 md:w-96 shadow-xl border border-white/10">
            <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-white/10">
            <CardTitle className="text-lg font-bold">Motor Khan Bot</CardTitle>
            <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
                <X className="h-5 w-5" />
                <span className="sr-only">Close chat</span>
            </Button>
            </CardHeader>
            <CardContent className="p-0">
            <div className="h-64 overflow-y-auto p-4 text-sm text-muted-foreground space-y-3">
                {conversation.map((message, index) => (
                    <div
                        key={index}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`p-3 rounded-lg max-w-xs ${
                                message.sender === 'bot'
                                    ? 'bg-muted'
                                    : 'bg-primary text-primary-foreground'
                            }`}
                        >
                            <p>{message.text}</p>
                        </div>
                    </div>
                ))}
                {loading && (
                    <div className="flex items-center gap-2 p-3">
                        <Loader className="w-4 h-4 animate-spin" />
                        <span>Typing...</span>
                    </div>
                )}
                 <div ref={messagesEndRef} />
                {error && <p className="p-3 bg-destructive/20 text-destructive-foreground rounded-lg">{error}</p>}
            </div>
            </CardContent>
            <CardFooter className="p-2 border-t border-white/10">
            <form onSubmit={handleSend} className="flex gap-2 w-full">
                <Input
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="Type your question..."
                className="flex-1"
                disabled={loading}
                />
                <Button type="submit" disabled={loading || !msg.trim()}>
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
                </Button>
            </form>
            </CardFooter>
        </Card>
    </motion.div>
  );
}
