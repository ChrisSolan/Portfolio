import chrispfp from './images/chrispfp.jfif'
function App() {
  return (
    <div className="App min-h-screen bg-[url('https://www.rammaheshwari.com/assets/svg/common-bg.svg')]">
      <div className="bg-gradient-to-b from-white/40 to-white/100 min-h-screen px-16 pt-12">
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />

        <div className="mx-8">
          <h5 className="font-calibre text-lg">HELLO, I'M</h5>
          <h1 className="font-calibre font-semibold w-[250px] h-[100px] text-[60px] mx-32">Christopher</h1> 
          <h2 className="text-[#ED2939] font-calibre mb-8 w-[767px] h-[29px] text-2xl mx-[500px]">WEB DEVELOPER</h2>
          <a href="https://docs.google.com/document/d/1n6YwyC_XvYdbbOKrq2oF0xEH5dTMFtwZSH29C7XkcvA/edit?usp=sharing" target="_blank" rel="noreferrer"> 
            <button className="rounded-full bg-[#ED2939] font-calibre h-[40px] w-[150px] text-white shadow-bottomRight mb-36 mt-4">MY RESUME!</button> 
          </a>
        </div>


        <h5 className="mt-4 mb-8 text-[26px] text-[#756c6c]">MY PROJECTS - </h5>
        <div className="flex space-x-56 ml-16">
          <div className="E-commerce Website p-8 h-[320px] w-[420px] space-y-6 bg-gradient-to-bl from-[#f89999] to-[#f6c0ba] shadow-bottomRight">
            <div className="flexContainer flex">
              <a href="https://ecommercewebapp-gbmr.onrender.com" target="_blank" rel="noreferrer" className="text-black underline mr-[150px]"> E-Commerce Website</a>
              <div className="animate-bounce">
                <a href="https://github.com/ChrisSolan/EcommerceWebApp" rel="noreferrer" target="_blank"><i class="devicon-github-original text-[30px]"/></a>
              </div>
            </div>
         
            <p>A shopping website where I dive into Typescript and PostgreSQL using Prisma as the ORM. Deployed via docker container on Render (long initial load time).</p>
            
            <div className="icons space-x-5">
              <i class="devicon-postgresql-plain text-[36px]"/>
              <i class="devicon-prisma-original text-[36px]"/>
              <i class="devicon-supabase-plain text-[36px]"/>
              <i class="devicon-react-original text-[36px]"/>
              <i class="devicon-typescript-plain text-[36px]"/>
              <i class="devicon-express-original text-[36px]"/>
              <i class="devicon-npm-original-wordmark text-[36px]"/>
            </div>
          </div>

          <div className="Calorie-Counter Website p-8 h-[320px] w-[420px] space-y-6 bg-gradient-to-bl from-[#f89999] to-[#f6c0ba] shadow-bottomLeft">
            <div className="flex">
              <a href="https://caloriecounter-mzff.onrender.com" target="_blank" rel="noreferrer" className="text-black underline mr-[200px]"> Calorie Counter</a>
              <div className="animate-bounce">
                <a href="https://github.com/ChrisSolan/CalorieCounter" rel="noreferrer" target="_blank"><i class="devicon-github-original text-[30px]"/></a>
              </div>
            </div>
            <p>A shopping website where I dive into Typescript and PostgreSQL using Prisma as the ORM. Deployed via docker container on Render (long initial load time).</p>
                
            <div className="icons space-x-5">
              <i class="devicon-mongodb-plain-wordmark text-[36px]"/>
              <i class="devicon-react-original text-[36px]"/>
              <i class="devicon-javascript-plain text-[36px]"/>
              <i class="devicon-express-original text-[36px]"/>
              <i class="devicon-npm-original-wordmark text-[36px]"/>
              <i class="devicon-tailwindcss-original text-[36px]"/>
            
            </div>
          </div>

        </div>

        <br/>

        <div className="w-[1600px] h-[300px] bg-gradient-to-r from-[#e8b595] to-[#b190ba] my-10 flex p-4 justify-center">
          <div className='space-y-4 flex flex-col'>
            <h2 className='text-[48px] font-semibold'>Christopher Solano</h2>
            <h6 className='text-[20px]'>chrissolanopoly@gmail.com</h6>
            <a href="https://github.com/ChrisSolan">
                <i class="devicon-github-original text-[30px]"/>
            </a>
            <a href="https://www.linkedin.com/in/christopher-solano-81674a251/">
                <i class="devicon-linkedin-plain text-[30px]"/>
            </a>
          </div>
          <img src={chrispfp} alt="Christopher Solano" className="h-[210px] w-[210px] rounded-full border-4 ml-36"/>
          
        </div>
      </div>

    </div>
  );
}

export default App;
