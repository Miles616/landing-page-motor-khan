'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { ContactEmailTemplate } from '@/emails/contact-template';

const resend = new Resend(process.env.RESEND_API_KEY);

const formSchema = z.object({
  name: z.string(),
  phone: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function sendContactMessage(values: z.infer<typeof formSchema>) {
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    return { success: false, error: 'Invalid fields.' };
  }

  const { name, phone, email, message } = validatedFields.data;

  try {
    const data = await resend.emails.send({
      from: 'Motor Khan <noreply@updates.motorkhan.com>',
      to: ['info@motorkhan.com'], // The recipient
      subject: `New Message from ${name} via Website`,
      react: ContactEmailTemplate({ name, phone, email, message })
    });

    if (data.error) {
        return { success: false, error: data.error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Something went wrong.' };
  }
}
