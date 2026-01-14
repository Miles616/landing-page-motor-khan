
"use client";

import { useState } from "react";
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

export default function ChatWidget({ isOpen, onClose }: ChatWidgetProps) {
  const [msg, setMsg] = useState("");
  const [reply, setReply] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!msg.trim()) return;

    setLoading(true);
    setError(null);
    setReply(null);

    try {
      const data = await sendChat(msg);
      // The webhook might return a string directly instead of JSON
      if (typeof data === 'string') {
        setReply(data);
      } else if (data.reply) {
        setReply(data.reply);
      } else {
        // Handle cases where the reply is in a different format or missing
        const responseText = JSON.stringify(data);
        setReply(`Received an unexpected response: ${responseText}`);
      }
    } catch (err) {
      setError("Sorry, I couldn't get a response. Please try again.");
    } finally {
      setLoading(false);
      setMsg("");
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
            <CardContent className="pr-2 pt-4">
            <div className="h-48 overflow-y-auto pr-4 text-sm text-muted-foreground space-y-3">
                <div className="p-3 bg-muted rounded-lg max-w-max">
                    <p>Hello! How can I help you today? Feel free to ask about our services, booking, or workshop hours.</p>
                </div>
                {reply && (
                    <div className="p-3 bg-primary text-primary-foreground rounded-lg max-w-max ml-auto">
                        <p>{reply}</p>
                    </div>
                )}
                {loading && (
                    <div className="flex items-center gap-2 p-3">
                        <Loader className="w-4 h-4 animate-spin" />
                        <span>Typing...</span>
                    </div>
                )}
                {error && <p className="p-3 bg-destructive/20 text-destructive-foreground rounded-lg">{error}</p>}
            </div>
            </CardContent>
            <CardFooter className="pt-4 border-t border-white/10">
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
