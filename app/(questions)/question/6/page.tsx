import FlipNav from '@/components/navbar'

export default function Home() {
  return (
    <>
      <FlipNav />
      <section className="bg-white h-screen flex items-center text-black gap-2 flex-col pt-10">
        <h1 className="font-bold text-3xl">
          Question #6:
        </h1>
        <p className="font-semibold text-lg italic">
          "A customer is creating a site and would like their project not to be indexed by
search engines. Please write a reply to the customer."
        </p>
        <div className="pt-10 w-full md:w-1/2">
          <p>
          Hello,
<br/><br/>
We appreciate you getting in touch with us regarding your site's visibility on search engines - we're here to help!
<br/><br/>
To accomplish this, we can utilize the file named 'robots.txt'. Here's a straightforward guide on how to do this:
<br/><br/>
• In your project's main directory, please create a file titled robots.txt.
<br/><br/>
• Populate this file with the following two lines:<br/><br/>
</p>
          <pre><code>
{`User-agent: *
Disallow: /`}
          </code></pre>
          <br/><br/>
          <p>
          This tells all search engines to refrain from indexing your site. Keep in mind, that this is a request, not an enforcement. Some search engines may not comply.
          <br/><br/>
For an added layer, you can use meta tags if you're employing Next.js or similar. Insert this line into the 'head' of your HTML:<br/><br/>
          </p>
          <pre><code>
{`<meta name="robots" content="noindex, nofollow"> /`}
          </code></pre>
          <p>
          This method is generally respected and adhered to by search engines.
          <br/><br/>
Please update your project with these changes, and upon your next deployment, they will be active.
<br/><br/>
We hope this helps! If you need more detailed guidance or have other concerns, please do not hesitate to reach out.
<br/><br/>
Best,<br/>
John Sandoval
          </p>
        </div>
      </section>
    </>
  )
}
