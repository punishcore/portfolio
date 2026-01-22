import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen text-white px-6 md:px-16 lg:px-30 py-10 pb-20 md:pb-10">
      <section className="max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Contact Me</h1>
        <p className="text-neutral-400 text-base md:text-lg mb-8">
          Feel free to reach out to me for any inquiries or collaborations.
        </p>

        <div className="space-y-4 mb-10">
          <div className="flex items-center gap-4">
            <Mail size={20} className="text-neutral-500" />
            <span>email@example.com</span>
          </div>
          <div className="flex items-center gap-4">
            <Phone size={20} className="text-neutral-500" />
            <span>+62 xxx xxxx xxxx</span>
          </div>
          <div className="flex items-center gap-4">
            <MapPin size={20} className="text-neutral-500" />
            <span>Indonesia</span>
          </div>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-md focus:outline-none focus:border-neutral-600"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-md focus:outline-none focus:border-neutral-600"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-md focus:outline-none focus:border-neutral-600 resize-none"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-neutral-200 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
