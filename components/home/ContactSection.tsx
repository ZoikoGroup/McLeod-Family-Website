import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    title: <>Send an enquiry</>,
    body: (
      <>
        Tell the Office who you are and what
        <br className="lg:hidden" /> the matter concerns.
        <br className="hidden lg:block" /> No attachments on
        <br className="lg:hidden" /> first contact.
      </>
    ),
  },
  {
    title: (
      <>
        Receive a reply from an official
        <br className="lg:hidden" /> domain
      </>
    ),
    body: (
      <>
        Check the sender against the canonical
        <br className="lg:hidden" /> domain before
        <br className="hidden lg:block" /> responding.
      </>
    ),
  },
  {
    title: <>Move to a secure channel</>,
    body: (
      <>
        Confidential, financial or identity
        <br className="lg:hidden" /> information is
        <br className="hidden lg:block" /> exchanged only once a
        <br className="lg:hidden" /> secure channel is established.
      </>
    ),
  },
];

const labelClass = "block text-[14px] font-medium leading-[19px] text-dune";
const controlClass =
  "block w-full rounded-[2px] border border-[#8c857a] bg-[#fbf9f4] font-sans text-[16px] text-dune outline-none focus-visible:border-timber-green focus-visible:ring-1 focus-visible:ring-timber-green";
const inputClass = `${controlClass} h-[48px] min-h-[48px] px-[18px]`;

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mt-[144px] w-full bg-spring-wood font-sans lg:mt-[83px]"
    >
      <div className="mx-auto w-full max-w-[1282px] px-6 flow-root lg:grid lg:grid-cols-12 lg:gap-x-6 lg:px-16">
        <div className="flex w-full flex-col items-start gap-[19px] lg:col-span-5 lg:-mb-[2.63px] lg:max-w-[466px] lg:self-start">
          <p className="w-full pb-[0.59px] text-[12px] font-semibold uppercase leading-[15.6px] tracking-[1.44px] text-kumera">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="w-full font-serif text-[34px] font-normal leading-[38px] tracking-[-0.34px] text-dune lg:pb-[0.8px] lg:text-[48px] lg:leading-[52.8px] lg:tracking-[-0.48px]"
          >
            Institutional enquiries.
          </h2>
          <p className="w-full max-w-[484.7px] pt-[12.99px] text-[18px] leading-[29.7px] text-dune lg:pt-[12.18px] lg:leading-[30px]">
            For legal, banking, corporate,
            <br className="lg:hidden" /> governance or
            <br className="hidden lg:block" /> administrative matters,
            <br className="lg:hidden" /> contact the Office through an
            <br className="hidden lg:block" /> official
            <br className="lg:hidden" /> channel.
          </p>
          <ol
            aria-label="How contact works"
            className="w-full pb-[29px] pt-[21px]"
          >
            {steps.map((step, i) => (
              <li
                key={i}
                className={`flex w-full items-start gap-4 border-t border-swirl pb-[20.5px] pt-5 ${
                  i === steps.length - 1 ? "border-b" : ""
                }`}
              >
                <span
                  aria-hidden="true"
                  className="w-[48px] shrink-0 font-serif text-[26px] leading-[26px] text-kumera"
                >
                  {i + 1}
                </span>
                <div className="flex min-w-px flex-1 flex-col gap-1">
                  <h3 className="text-[16px] font-semibold leading-[19px] text-dune">
                    {step.title}
                  </h3>
                  <p className="text-[15px] leading-[24px] text-dune">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <figure className="relative h-[280px] w-full overflow-hidden bg-timber-green">
            <Image
              src="/images/home/contact-office-team-desktop.webp"
              alt="Colleagues working together at a desk in an office"
              width={932}
              height={622}
              sizes="466px"
              className="absolute inset-0 hidden size-full max-w-none object-cover lg:block"
            />
            <Image
              src="/images/home/contact-misty-jetty-mobile.webp"
              alt="A wooden jetty reaching into still, misty water"
              width={1000}
              height={563}
              sizes="500px"
              className="absolute left-[-22.77%] top-0 h-full w-[145.55%] max-w-none lg:hidden"
            />
          </figure>
        </div>

        <div className="-mt-[1.66px] -mb-[2.4px] w-full pt-12 lg:mb-0 lg:mt-0 lg:col-span-6 lg:col-start-7 lg:self-start lg:pt-0">
          <form
            method="post"
            action="#"
            className="flex w-full flex-col gap-8 border border-swirl bg-[#fbf9f4] p-10"
          >
            <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:gap-x-5 lg:gap-y-[19.19px]">
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className={labelClass}>
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-organization" className={labelClass}>
                  Organization
                </label>
                <input
                  id="contact-organization"
                  name="organization"
                  type="text"
                  autoComplete="organization"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-email" className={labelClass}>
                  Work email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-[7.99px] lg:gap-2">
                <label htmlFor="contact-category" className={labelClass}>
                  Enquiry category
                </label>
                <select
                  id="contact-category"
                  name="category"
                  required
                  defaultValue=""
                  className={`${controlClass} min-h-[48px] appearance-none py-[12.5px] pl-[18px] pr-[30px] leading-[19px]`}
                >
                  <option value="" disabled>
                    Choose a category
                  </option>
                  <option value="banking">Banking and custody</option>
                  <option value="legal">Legal and corporate</option>
                  <option value="registry">Registries and public bodies</option>
                  <option value="governance">Governance and administration</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="relative h-[230.72px] lg:col-span-2 lg:h-[211.88px]">
                <label
                  htmlFor="contact-message"
                  className={`${labelClass} absolute inset-x-0 top-0 whitespace-nowrap`}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  aria-describedby="contact-message-note"
                  className={`${controlClass} absolute inset-x-0 top-[26.19px] h-[140px] resize-none p-[14px]`}
                />
                <p
                  id="contact-message-note"
                  className="absolute inset-x-0 top-[173.04px] whitespace-nowrap pb-[0.7px] text-[13px] leading-[18.85px] text-[#6b675f]"
                >
                  Please do not include confidential,
                  <br className="lg:hidden" /> financial or identity information. File
                  <br className="lg:hidden" /> upload
                  <br className="hidden lg:block" /> is not available on first contact.
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-4 lg:flex-row lg:flex-wrap lg:items-center lg:justify-between">
              <button
                type="submit"
                className="flex min-h-[52px] min-w-[152px] items-center justify-center whitespace-nowrap rounded-[2px] border border-timber-green bg-timber-green px-7 py-4 text-[15px] font-medium leading-[18px] text-spring-wood"
              >
                Send enquiry
              </button>
              <Link
                href="/verification"
                className="whitespace-nowrap text-[14px] leading-[16px] text-kumera underline decoration-solid"
              >
                Verify a Communication
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
