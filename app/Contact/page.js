"use client"
import React from 'react'

const page = () => {
  return (
    <div className="min-h-0 pt-24 pb-10">
        <section className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contact Us</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-white/80 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
          <form action="#" className="space-y-6">
              <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-white/90">Your email</label>
                  <input type="email" id="email" className="bg-gray-700/90 border-2 border-blue-700/60 text-white text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400" placeholder="name@shortnerr.com" required />
              </div>
              <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white/90">Subject</label>
                  <input type="text" id="subject" className="block p-3 w-full text-sm text-white bg-gray-700/90 rounded-lg border-2 border-blue-700/60 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Let us know how we can help you" required />
              </div>
              <div className="sm:col-span-2">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-white/90">Your message</label>
                  <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-white bg-gray-700/90 rounded-lg border-2 border-blue-700/60 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a comment..."></textarea>
              </div>
              <button onClick={() => alert("Working on it. Thanks for letting us know ❤️...")} type="button" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-400">Send message</button>
          </form>
        </section>
    </div>
  )
}

export default page