
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useTransition, useState } from "react";
import { Send } from 'lucide-react';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { HoverBorderGradient } from "./hover-border-gradient";
import { Card, CardContent } from "./card";
import { sendContactMessage } from "@/app/actions";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setError("");
    setSuccess("");

    startTransition(() => {
        sendContactMessage(values)
            .then((data) => {
                if (data.error) {
                    setError(data.error);
                    toast({
                        variant: "destructive",
                        title: "Oops! Something went wrong.",
                        description: data.error,
                    });
                }
                if (data.success) {
                    setSuccess("Message sent successfully!");
                    toast({
                        title: "Message Sent!",
                        description: "Thanks for reaching out. We'll be in touch soon.",
                    });
                    form.reset();
                }
            })
            .catch(() => {
                const errorMessage = "Something went wrong. Please try again.";
                setError(errorMessage);
                toast({
                    variant: "destructive",
                    title: "Oops! Something went wrong.",
                    description: errorMessage,
                });
            });
    });
  }

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormControl>
                        <Input placeholder="Your Name" {...field} disabled={isPending} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                    <FormItem>
                    <FormControl>
                        <Input placeholder="Your Phone Number" type="tel" {...field} disabled={isPending} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Your Email Address" type="email" {...field} disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us how we can help"
                      className="resize-none"
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <HoverBorderGradient
                as="button"
                type="submit"
                containerClassName="rounded-full w-full"
                className="bg-white text-black dark:bg-white dark:text-black flex items-center justify-center w-full"
                disabled={isPending}
            >
                <div className="flex items-center gap-2">
                    {isPending ? "Sending..." : "Send Message"}
                    {!isPending && <Send className="h-4 w-4" />}
                </div>
            </HoverBorderGradient>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
