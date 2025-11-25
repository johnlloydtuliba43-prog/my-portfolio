"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message too short"),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1000));
    alert("Message sent successfully! (Demo)");
    console.log(data);
    reset();
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Get In Touch</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-10 rounded-2xl shadow-xl space-y-6">
          <div>
            <input {...register("name")} placeholder="Your Name" className="w-full px-5 py-4 border rounded-lg focus:outline-none focus:border-blue-500" />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <input {...register("email")} type="email" placeholder="your@email.com" className="w-full px-5 py-4 border rounded-lg focus:outline-none focus:border-blue-500" />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <textarea {...register("message")} rows={6} placeholder="Your message..." className="w-full px-5 py-4 border rounded-lg focus:outline-none focus:border-blue-500" />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-bold hover:opacity-90 transition disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}