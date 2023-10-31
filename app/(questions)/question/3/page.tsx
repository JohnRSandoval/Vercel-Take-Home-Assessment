import FlipNav from '@/components/navbar'

export default function Home() {
  return (
    <>
    <FlipNav />
      <div className="bg-white h-[100vh] flex items-center text-black gap-2 flex-col pt-10" >
        <h1 className="font-bold text-[3rem]">
          Question #3:
        </h1>
        <p className="font-semibold text-[1rem] italic">"A customer has reached out asking, “When should I choose to use Edge
Functions, Serverless Functions, or Edge Middleware with Vercel?” Write a reply to the customer."</p>
        <p className='pt-10 w-[50%]'>
        Hi there,
        <br/><br/>
We hope your doing well! Thank you for reaching out about when to use Edge Functions, Serverless Functions, or Edge Middleware on Vercel.
<br/><br/>
We understand that it can be tricky to choose the right function, so here's a simplified breakdown:
<br/><br/>
Choose <b>Edge Functions</b> when speed is key. They run close to where your users are, making everything faster. They're perfect for customizing content on the spot, conducting A/B tests, or managing log-ins.
<br/><br/>
If you'd prefer not to deal with server upkeep, <b>Serverless Functions</b> are your go-to. They effortlessly scale with your app and take care of APIs, databases, etc. and can easily grow with your app's traffic.
<br/><br/>
Use <b>Edge Middleware</b> for smart traffic control. It helps change requests on the fly, like redirecting or rewriting URLs, before they hit your server.
<br/><br/>
In summary, if your priority is reducing latency and personalizing content delivery, you'll want to use Edge Functions. For backend tasks like APIs without server maintenance, Serverless Functions will serve you well. And for traffic control at the network edge, Edge Middleware is the way to go!
<br/><br/>
We hope this helps! If you have any other questions or need further assistance, feel free to reply back here and we'd be happy to help!
<br/><br/>
Best,<br/>
John Sandoval
        </p>
      </div>
      
    </>
  )
}
