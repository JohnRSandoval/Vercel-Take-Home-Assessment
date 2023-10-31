import FlipNav from '@/components/navbar'

export default function Home() {
  return (
    <>
    <FlipNav />
      <div className="bg-white h-[100vh] flex items-center text-black gap-2 flex-col pt-10" >
        <h1 className="font-bold text-[3rem]">
          Question #2:
        </h1>
        <p className="font-semibold text-[1rem] italic">"How would you compare Next.js with another framework? Feel free to compare
with a framework of your choice."</p>
        <h2 className='pt-10 font-bold text-[1.5rem]'>Next.JS vs Backbone.JS</h2>
        <p className='pt-10 w-[50%]'>
        Next.js is at the forefront of modern web frameworks. It brings tools like server-side rendering to speed up how quickly pages load and uses static site generation for better performance. These are key for SEO and creating smooth user experiences. The framework's design supports growth and efficient code organization.
<br/><br/>
Backbone.js, with its roots in earlier web development, offers simplicity. It gives developers the freedom to shape their app's structure. It's lighter on features but provides clarity and direct control. This means developers have to put in more work to match what Next.js does automatically.
<br/><br/>
Choosing between Next.js and Backbone.js depends on project needs. Next.js is ideal for complex apps that need to meet modern web demands. Backbone.js suits simpler apps or when developers want full control over the app's structure. The choice comes down to whether you want a complete set of built-in tools or a streamlined, basic framework.
        </p>
      </div>
      
    </>
  )
}
