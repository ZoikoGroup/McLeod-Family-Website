"use client";

import { useState, FormEvent } from "react";

export default function TellUsWhatConcernsYouSection() {
  const [category, setCategory] = useState("");
  const [channel, setChannel] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [acknowledgment, setAcknowledgment] = useState("Yes");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="tell-us-what-concerns-you"
      aria-label="Tell us what concerns you"
      className="w-full bg-[#f4f1ea] px-6 py-16 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Top Header & Intro */}
        <div className="border-t border-[#e5e0d5] pt-12 mb-12">
          <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[46px] text-[#23463a] mb-4">
            Tell us what concerns you
          </h2>
          <p className="font-serif text-[15px] leading-[23px] text-[#34322e]/85 max-w-[900px]">
            This form is for a brief description of a possible impersonation or
            suspicious communication. It does not authenticate a message,
            authorise an instruction or replace your own security, banking or
            emergency procedures.
          </p>
        </div>

        {/* Info Rows */}
        <div className="max-w-[1100px] divide-y divide-[#e5e0d5] border-b border-[#e5e0d5] mb-16">
          <div className="grid grid-cols-1 gap-3 py-6 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <h3 className="font-serif text-[18px] leading-[25px] text-[#23463a]">
                Immediate harm / safety
              </h3>
            </div>
            <div className="md:col-span-8">
              <p className="font-serif text-[15px] leading-[23px] text-[#34322e]/85">
                If you have already transferred funds, promptly contact your own
                bank or payment provider using an independently obtained
                official channel. This page is not an emergency service,
                law-enforcement service, or recovery guarantee.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 py-6 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <h3 className="font-serif text-[18px] leading-[25px] text-[#23463a]">
                Privacy reassurance
              </h3>
            </div>
            <div className="md:col-span-8">
              <p className="font-serif text-[15px] leading-[23px] text-[#34322e]/85">
                Only provide the minimum information requested. Do not enter
                passwords, security codes, payment-account details, identity
                documents, full message contents or confidential family/business
                records. The approved Privacy Notice explains how report
                information is processed when this service is operational.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 py-6 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <h3 className="font-serif text-[18px] leading-[25px] text-[#23463a]">
                If reporting is unavailable
              </h3>
            </div>
            <div className="md:col-span-8">
              <p className="font-serif text-[15px] leading-[23px] text-[#34322e]/85">
                Online incident reporting is not available through this website
                at present. Use the Verification Centre to check official
                information independently, and do not act on unverified requests
                for money or sensitive information. Do not send incident
                evidence through the general contact form.
              </p>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div
          id="reporting-form"
          className="bg-[#ebe6dc] border border-[#e5e0d5] p-6 sm:p-10 max-w-[1100px]"
        >
          {submitted ? (
            <div className="border-l-2 border-[#23463a] bg-[#f4f1ea] p-6">
              <h3 className="font-serif text-[20px] leading-[26px] text-[#23463a] mb-2">
                Report received
              </h3>
              <p className="font-serif text-[15px] leading-[23px] text-[#34322e]/85 mb-4">
                Thank you for submitting a brief summary of your concern. Please
                continue to verify official information independently through
                the Verification Centre and do not act on unverified
                instructions.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setCategory("");
                  setChannel("");
                  setDescription("");
                  setEmail("");
                  setAcknowledgment("Yes");
                }}
                className="inline-flex min-h-[40px] items-center justify-center border border-[#23463a] bg-transparent px-4 py-2 font-serif text-[14px] text-[#23463a] transition-colors hover:bg-[#23463a] hover:text-[#f4f1ea]"
              >
                Submit another report
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Field 1 */}
              <div>
                <label
                  htmlFor="suspicious-category"
                  className="block font-serif text-[14px] leading-[20px] text-[#23463a] mb-1"
                >
                  What appears suspicious? (Required)
                </label>
                <span className="block font-serif text-[12px] text-[#34322e]/75 mb-2">
                  Select the category that best matches your concern.
                </span>
                <select
                  id="suspicious-category"
                  required
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-white border border-[#d8d2c4] px-4 py-3 font-serif text-[15px] text-[#34322e] focus:border-[#23463a] focus:outline-none"
                >
                  <option value="" disabled>
                    Select category...
                  </option>
                  <option value="impersonation">
                    Impersonation of McLeod Family Office or staff
                  </option>
                  <option value="lookalike-domain">
                    Lookalike website or domain
                  </option>
                  <option value="payment-change">
                    Unexpected payment or bank-detail change
                  </option>
                  <option value="solicitation">
                    Unsolicited investment or capital solicitation
                  </option>
                  <option value="other">Other suspicious communication</option>
                </select>
              </div>

              {/* Field 2 */}
              <div>
                <label
                  htmlFor="encounter-channel"
                  className="block font-serif text-[14px] leading-[20px] text-[#23463a] mb-2"
                >
                  Where did you encounter it? (Required)
                </label>
                <select
                  id="encounter-channel"
                  required
                  value={channel}
                  onChange={(e) => setChannel(e.target.value)}
                  className="w-full max-w-[600px] bg-white border border-[#d8d2c4] px-4 py-3 font-serif text-[15px] text-[#34322e] focus:border-[#23463a] focus:outline-none"
                >
                  <option value="" disabled>
                    Select channel...
                  </option>
                  <option value="email">Email</option>
                  <option value="website">Website or online portal</option>
                  <option value="phone-sms">
                    Phone call or SMS / text message
                  </option>
                  <option value="social-messaging">
                    Social media or messaging app
                  </option>
                  <option value="document-letter">
                    Letter or physical document
                  </option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Field 3 */}
              <div>
                <label
                  htmlFor="concern-description"
                  className="block font-serif text-[14px] leading-[20px] text-[#23463a] mb-1"
                >
                  Briefly describe the concern (Required)
                </label>
                <span className="block font-serif text-[12px] text-[#34322e]/75 mb-2">
                  Do not include passwords, codes, account details, identity
                  documents or complete message contents.
                </span>
                <textarea
                  id="concern-description"
                  required
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter brief description..."
                  className="w-full max-w-[600px] bg-white border border-[#d8d2c4] px-4 py-3 font-serif text-[15px] text-[#34322e] placeholder:text-[#34322e]/50 focus:border-[#23463a] focus:outline-none"
                />
              </div>

              {/* Field 4 */}
              <div>
                <label
                  htmlFor="followup-email"
                  className="block font-serif text-[14px] leading-[20px] text-[#23463a] mb-1"
                >
                  Email for follow-up (Optional)
                </label>
                <span className="block font-serif text-[12px] text-[#34322e]/75 mb-2">
                  Provide only if comfortable and safe to use.
                </span>
                <input
                  id="followup-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com"
                  className="w-full max-w-[600px] bg-white border border-[#d8d2c4] px-4 py-3 font-serif text-[15px] text-[#34322e] placeholder:text-[#34322e]/50 focus:border-[#23463a] focus:outline-none"
                />
              </div>

              {/* Field 5 */}
              <div>
                <label
                  htmlFor="data-acknowledgment"
                  className="block font-serif text-[14px] leading-[20px] text-[#23463a] mb-1"
                >
                  Acknowledgment (Required)
                </label>
                <span className="block font-serif text-[12px] text-[#34322e]/75 mb-2">
                  I understand that this form must not contain passwords,
                  security codes, payment credentials or confidential documents.
                </span>
                <select
                  id="data-acknowledgment"
                  required
                  value={acknowledgment}
                  onChange={(e) => setAcknowledgment(e.target.value)}
                  className="w-full max-w-[600px] bg-white border border-[#d8d2c4] px-4 py-3 font-serif text-[15px] text-[#34322e] focus:border-[#23463a] focus:outline-none"
                >
                  <option value="Yes">Yes</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="inline-flex min-h-[48px] cursor-pointer items-center justify-center bg-[#23463a] px-6 py-3 font-serif text-[15px] text-[#f4f1ea] transition-opacity hover:opacity-90"
                >
                  Submit report
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
