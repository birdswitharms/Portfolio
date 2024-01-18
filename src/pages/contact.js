import React from 'react';
import '../app/globals.css'
import Link from 'next/link'

const Contact = () => {
  return (
    <section className="flex min-h-screen justify-between p-24">
      <div className="flex-row w-96">
        <form>
          <div className="mb-4 ">
            <label><div className="mb-1">Name</div></label>
            <input className="w-full text-black pl-2 bg-gray-300 rounded" type="text" name="name" />
          </div>
          <div className="mb-4 w-full">
            <label><div className="mb-1">Email</div></label>
            <input className="w-full text-black pl-2 bg-gray-300 rounded" type="email" name="email" />
          </div>
          <div className="mb-4 w-full">
            <label><div className="mb-1">Message</div></label>
            <textarea className="w-full h-32 text-black pl-2 pr-2 bg-gray-300 rounded resize-none" name="message"></textarea>
          </div>
          <input className="hover:underline" type="submit" value="Submit &#8594;" />
        </form>
      </div>
    </section>
  )
}

export default Contact;