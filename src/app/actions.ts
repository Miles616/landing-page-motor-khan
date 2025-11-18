'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { ContactEmailTemplate } from '@/emails/contact-template';
import { ThankYouEmailTemplate } from '@/emails/thank-you-template';

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
    // Send email to admin
    const adminEmail = await resend.emails.send({
      from: 'Motor Khan <noreply@updates.motorkhan.com>',
      to: ['motorkhandelhi@gmail.com'],
      subject: `New Message from ${name} via Website`,
      react: ContactEmailTemplate({ name, phone, email, message })
    });

    if (adminEmail.error) {
        return { success: false, error: adminEmail.error.message };
    }

    // Send thank you email to client
    const clientEmail = await resend.emails.send({
        from: 'Motor Khan <noreply@updates.motorkhan.com>',
        to: [email],
        subject: `Thank You for Contacting Motor Khan!`,
        react: ThankYouEmailTemplate({ name })
    });

    if (clientEmail.error) {
        // We don't want to show an error to the user if the thank you email fails
        // but we should log it.
        console.error('Failed to send thank you email:', clientEmail.error.message);
    }


    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Something went wrong.' };
  }
}
