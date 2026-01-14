
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X, Loader } from "lucide-react";
import { sendChat } from "@/lib/chat";
import { Button } from "./button";
import { Input } from "./input";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "./card";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
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
      setReply(data.reply);
    } catch (err) {
      setError("Sorry, I couldn't get a response. Please try again.");
    } finally {
      setLoading(false);
      setMsg("");
    }
  }

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Button
                onClick={toggleOpen}
                className="rounded-full w-16 h-16 bg-primary hover:bg-primary/90 shadow-lg"
                aria-label="Open chat"
              >
                <MessageCircle className="h-8 w-8 text-primary-foreground" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Card className="w-80 md:w-96 shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-bold">Motor Khan Assistant</CardTitle>
                <Button variant="ghost" size="icon" onClick={toggleOpen} className="h-8 w-8">
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close chat</span>
                </Button>
              </CardHeader>
              <CardContent className="pr-2">
                <div className="h-48 overflow-y-auto pr-4 text-sm text-muted-foreground space-y-2">
                    <p className="p-2 bg-muted rounded-lg">Ask me about services, booking, or our workshop hours!</p>
                    {reply && <p className="p-2 bg-muted rounded-lg">{reply}</p>}
                    {loading && (
                        <div className="flex items-center gap-2 p-2">
                            <Loader className="w-4 h-4 animate-spin" />
                            <span>Typing...</span>
                        </div>
                    )}
                    {error && <p className="p-2 bg-destructive/20 text-destructive-foreground rounded-lg">{error}</p>}
                </div>
              </CardContent>
              <CardFooter>
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
        )}
      </AnimatePresence>
    </>
  );
}
