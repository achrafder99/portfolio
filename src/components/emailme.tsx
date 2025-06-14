'use client'

import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const EmailMe = () => {
    const [form, setForm] = useState({
        email: '',
        message: '',
    })
    const [success, setSuccess] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

        console.log("form", form)

        emailjs.send(serviceID, templateID, form, publicKey)
            .then(() => {
                setForm({ email: '', message: '' })
                setSuccess(true)
                setTimeout(() => setSuccess(false), 3000)
            })
            .catch((error) => {
                console.error('EmailJS error:', error)
            })
    }

    return (
        <div className="text-sm flex flex-col items-center justify-center mt-8 transition-colors duration-300">
            <div className="w-full max-w-4xl bg-white dark:bg-[#1A1A1A] rounded-xl p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="sm:text-xl dark:text-[#ccc] font-bold mb-4">Email Me</h2>
                </div>

                <form
                    id="emailForm"
                    onSubmit={handleSubmit}
                    className="flex flex-col space-y-6"
                >
                    <label className="block">
                        <span className="text-gray-700 dark:text-gray-300">Email</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="you@example.com"
                            className="mt-1 border block outline-none w-full rounded-md p-4 dark:border-gray-600 bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-gray-100"
                        />
                    </label>

                    <label className="block">
                        <span className="text-gray-700 dark:text-gray-300">Message</span>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            placeholder="Write your message here..."
                            rows={8}
                            className="mt-1 block outline-none w-full border p-4 rounded-md dark:border-gray-600 bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-gray-100 resize-none"
                        />
                    </label>

                    <button
                        type="submit"
                        className="px-4 py-2 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
                    >
                        Send
                    </button>

                    {success && (
                        <p className="text-green-600 dark:text-green-400 font-semibold mt-2">
                            Message sent successfully!
                        </p>
                    )}
                </form>
            </div>
        </div>
    )
}

export default EmailMe
