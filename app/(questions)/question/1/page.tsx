import FlipNav from '@/components/navbar'

export default function Home() {
  return (
    <>
    <FlipNav />
      <div className="bg-white h-[100vh] flex items-center text-black gap-2 flex-col pt-10" >
        <h1 className="font-bold text-[3rem]">
          Question #1:
        </h1>
        <p className="font-semibold text-[1rem] italic">"Describe how you solved a challenge that one of your previous teams faced.
How did you determine your solution was successful?"</p>
        <p className='pt-10 w-[50%]'>
        At UserTesting, I faced a challenge with a potential client during the pre-sales process. The client was evaluating our tool against competitors, looking for specific capabilities which our competitors offered, but ours did not, at least not out-of-the-box.
<br/><br/>
The pre-sales team identified this as a key opportunity for a tailored demonstration of our tool's flexibility and the additional value we could provide. As one of the technical experts on the team, I was tasked with addressing two main issues: the integration of third-party SDK data and real-time customization of our site interactivity features.
<br/><br/>
Despite the absence of having these functionalities out of the gate, our API could still be utilized to meet the requirements of the client with just a little bit of JavaScript knowledge. To demonstrate this, I developed a demo using Next.js and within four days, I had a custom implementation that integrated third-party SDK data and allowed on-the-fly customizations. This rapid development was crucial in showing not just the capability, but also the agility of our product.
<br/><br/>
Measures of Success:
<br/><br/>
• The customer stated that the demo was exactly what they were looking for and were impressed with our quick turn around time/customizability.
<br/><br/>
• Since this customer was pre-sales, my solution played a key role in the customer's decision to move forward with our product.
<br/><br/>
This experience taught me the importance of understanding customer's needs and how to effectively communicate the value of a solution.
        </p>
      </div>
      
    </>
  )
}
