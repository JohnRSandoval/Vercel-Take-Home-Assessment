import FlipNav from '@/components/navbar'

export default function Home() {
  return (
    <>
      <FlipNav />
      <section className="bg-white h-screen flex items-center text-black gap-2 flex-col pt-10">
        <h1 className="font-bold text-3xl">
          Question #5:
        </h1>
        <p className="font-semibold text-lg italic w-[70%]">
          "Imagine that the customer from Question 4 responds with the following email. “I’m so frustrated. I’ve been trying to make this work for hours and I just can’t figure it out. It must be a platform issue so why don't you just fix it for me instead of asking me questions.” Write a reply to the customer addressing the concerns raised."
        </p>
        <div className="pt-10 w-full md:w-1/2">
          <p>
          Greetings,
<br/><br/>
Thank you for taking the time to communicate the difficulties you have been encountering. First and foremost, I want to express my sincerest apologies for the process of redirecting your '/blog' pathway within your Vercel project not being as seamless as we aim for it to be.
<br/><br/>
Firstly, it may prove beneficial to re-evaluate certain aspects such as the precise format and syntax of your 'vercel.json' file - while simple, this can be easily overlooked and is a very common issue when redirecting urls. If you're able to send either a screenshot or the text from your 'vercel.json' file, I'd be happy to take a look on my end as well! Additionally, please double-check that the changes have been correctly deployed to the production environment as any changes made after/during deploying will not be reflected until the file is saved and redeployed.
<br/><br/>
Alternatively, if you're still unable to resolve this issue asynchronously, I'd be happy to schedule some time to hop on a Zoom call to help walk you through these steps and troubleshoot further! If you'd like to schedule some time to resolve this issue over Zoom, please reply with some dates/times that work best for you.
<br/><br/>
We hope this help and we look forward to your reply!
<br/><br/>
Best,<br/>
John Sandoval
</p>
        </div>
      </section>
    </>
  )
}
