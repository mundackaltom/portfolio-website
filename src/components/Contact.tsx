'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-12 px-4 bg-gray-50 w-full">
      <div className="bg-white shadow-md py-8 px-6 md:px-16 lg:px-24">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Send Us a Message
          </h1>
          <p className="text-gray-600">
            Please fill in the form below to get in touch with us.
          </p>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="First name"
            className="border border-gray-300 rounded-md p-4 w-full"
          />
          <input
            type="text"
            placeholder="Last name"
            className="border border-gray-300 rounded-md p-4 w-full"
          />
          <input
            type="email"
            placeholder="Email address"
            className="border border-gray-300 rounded-md p-4 w-full"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border border-gray-300 rounded-md p-4 w-full"
          />
          <textarea
            placeholder="Message"
            className="border border-gray-300 rounded-md p-4 w-full md:col-span-2"
            rows={4}
          ></textarea>
          <div className="md:col-span-2 flex items-center">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-gray-600">
              I’ve read and agree with{' '}
              <a href="#" className="text-blue-500">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-blue-500">
                Privacy Policy
              </a>
            </label>
          </div>
          <button
            type="submit"
            className="md:col-span-2 bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}