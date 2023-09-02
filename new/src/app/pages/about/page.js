import React from 'react'

const about = () => {
  return (
    <div>
    <h1 className="text-4xl text-white-800 text-center md:text-center font-bold mb-4 ">
       About 
        </h1>
    <div className="container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-40">
      <div className="grid justify-center items-center order-1 col-span-1">
        <img
          className="lg:h-80 md:h-64 h-40 rounded-full"
          src="https://picsum.photos/id/110/400/400"
          alt=""
        />
      </div>
      <div className="mt-8 md:mt-0 lg:justify-end col-span-2">
        <h1 className="text-4xl text-white-800 text-center md:text-left font-bold mb-4">
         Hub
        </h1>
        <p className="text-2xl text-whitw-600 text-center md:text-left font-bold mb-4">
          Web Developer
        </p>
        <p className="text-xl text-white-800 text-center md:text-left">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        
      </div>
    </div>
  </div>
  )
}

export default about
