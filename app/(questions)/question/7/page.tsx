import FlipNav from '@/components/navbar'

export default function Home() {
  return (
    <>
      <FlipNav />
      <section className="bg-white h-screen flex items-center text-black gap-2 flex-col pt-10">
        <h1 className="font-bold text-3xl">
          Question #7:
        </h1>
        <p className="font-semibold text-lg italic">
          "How could we improve or alter this familiarization exercise?"
        </p>
        <div className="pt-10 w-full md:w-1/2">
          <p>
          Overall, I thought that this process did a great job demonstrating both the technical and customer social aspects of the Customer Success Engineering position! Although, there a few suggestions I have to enhance the effectiveness:
<br/><br/>
•	Introduce a real-world scenario, such as a code snippet, for the candidate to analyze along with a demo email that came in from the customer. This provides practical insights into how the candidate thinks with more realistic scenarios. 
<br/>
•	Have candidates include a readme.md file to document their thought process for each step. This could help Vercel better understand their thought process.
<br/>
•	Once done, I believe there should be a time for candid feedback on the assessment - this would help with transparency and help the candidate prepare for other positions/get closure.
<br/><br/>I hope that these suggestions will help Vercel make better candidate decisions based on real-world scenarios that capture the candidates true skillset.

</p>
        </div>
      </section>
    </>
  )
}
