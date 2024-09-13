import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <div className='bg-gray-100 py-10  '>
      <div className="mx-auto px-10 py-10 bg-white w-4/5  p-24 rounded-2xl shadow-xl ">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Blogging Website</h1>
        <p className="text-lg text-gray-600 mb-6">
          Explore interesting blogs and dive deep into topics I am passionate about.
        </p>
        <Link href="/blogs" className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
          
            Go to Blogs
        
        </Link>
      </section>

      {/* About the Website */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">About My Website</h2>
        <p className="text-lg text-gray-700">
          This website is a personal blog where I share my thoughts, ideas, and expertise on various topics. From technology to lifestyle, you’ll find a range of articles that reflect my passion and interests.
        </p>
      </section>

      {/* About My Career */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">About My Career</h2>
        <p className="text-lg text-gray-700">
          I am currently pursuing my career in the field of web development and software engineering. My focus is on building scalable web applications and exploring the latest technologies like Next.js, React, and more. This blog is a reflection of my journey in tech.
        </p>
      </section>

      {/* Image Gallery */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Blogging Image 1"
              width={500}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1448906654166-444d494666b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Blogging Image 2"
              width={500}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Blogging Image 3"
              width={500}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Home;
