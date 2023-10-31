import FlipNav from '../components/navbar'
export default function Home() {
  return (
    <>
    <FlipNav />
      <div className="bg-white h-[100vh] flex items-center text-black gap-2 flex-col pt-10" >
        <h1 className="font-bold text-[3rem]">
          Vercel Take Home Assessment
        </h1>
        <h3>By John Sandoval</h3>
        <p className="font-semibold text-[1rem]">Navigate through the pages using the navbar above.</p>
      </div>
    </>
  )
}
