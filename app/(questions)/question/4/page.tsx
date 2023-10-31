import FlipNav from '@/components/navbar'

export default function Home() {
  return (
    <>
      <FlipNav />
      <section className="bg-white h-full flex items-center text-black gap-2 flex-col pt-10">
        <h1 className="font-bold text-3xl">
          Question #4:
        </h1>
        <p className="font-semibold text-lg italic">
          "A customer has a project on Vercel and they want to redirect the /blog path to
          another website. Write a reply to the customer."
        </p>
        <div className="pt-10 w-full md:w-1/2">
          <p>
          Hi there,
          <br /><br />
Thank you for reaching out! I'd be happy to help you redirect the '/blog' path in your Vercel project. Please follow these steps to achieve your goal:
<br /><br />
• Open your project's vercel.json file. This file is usually in the main folder of your project. <br />
• Check if there's a part named redirects. If it's not there, you'll need to add it.<br />
• In the redirects section, put in a new part that says where you want to send people when they go to /blog on your site.<br />
• You'll also need to define if the redirect is just temporary or permanent . Use true for always and false for temporary.<br /><br />
Here's an example of how your 'vercel.json' file could look:<br /><br />
</p>
          <pre><code>
{`{
  "redirects": [
    {
      "source": "/blog",
      "destination": "https://www.example.com/new-blog",
      "permanent": true
    }
  ]
}`}
          </code></pre>
          <p>
            <br /><br />
            In the example above, all traffic to 'yoursite.com/blog' will be transferred to 'www.example.com/new-blog'.
            <br /><br />
            Remember to swap "https://www.example.com/new-blog" with the actual URL you desire for your visitors' redirection.
            <br /><br />
            Once you've saved the updated 'vercel.json' file, proceed with deploying your project.
            <br /><br />
            If you encounter any issues or require further clarification on the process, please don't hesitate to reach out. We are committed to supporting you and ensuring the seamless performance of your project.
            <br /><br />
            Warm regards,
            <br />
            John Sandoval
          </p>
        </div>
      </section>
    </>
  )
}
