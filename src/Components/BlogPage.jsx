"use client";

export default function BlogPage() {
  const posts = [
    {
      image: "/blog.jpg",
      category: "Finance",
      title: "The Top 5 Strategies to Choose the Perfect Pricing",
      author: "Author Name",
      date: "Nov 2024",
    },
    {
      image: "/blog.jpg",
      category: "Investment",
      title: "How to Structure a Profitable Investment Plan",
      author: "Author Name",
      date: "Nov 2024",
    },
    {
      image: "/blog.jpg",
      category: "Advisory",
      title: "Key M&A Trends to Watch This Year",
      author: "Author Name",
      date: "Nov 2024",
    },
    {
      image: "/blog.jpg",
      category: "Banking",
      title: "Understanding Capital Markets in 2024",
      author: "Author Name",
      date: "Nov 2024",
    },
    {
      image: "/blog.jpg",
      category: "Strategy",
      title: "Growth Planning for Emerging Businesses",
      author: "Author Name",
      date: "Nov 2024",
    },
    {
      image: "/blog.jpg",
      category: "Private Equity",
      title: "Private Credit: Opportunities & Risks",
      author: "Author Name",
      date: "Nov 2024",
    },
    {
      image: "/blog.jpg",
      category: "Real Estate",
      title: "Real Estate Financing Explained",
      author: "Author Name",
      date: "Nov 2024",
    },
    {
      image: "/blog.jpg",
      category: "Corporate",
      title: "Corporate Structuring Simplified",
      author: "Author Name",
      date: "Nov 2024",
    },
    {
      image: "/blog.jpg",
      category: "Deals",
      title: "Deal Execution Best Practices",
      author: "Author Name",
      date: "Nov 2024",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4">
      
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Our Latest Insights
        </h1>
        <p className="text-gray-500 mt-4">
          Explore expert perspectives and strategies from our team.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          
          {posts.map((post, i) => (
            <div
              key={i}
              className="w-[318px] h-[405px] bg-white rounded-3xl border border-gray-200 shadow-sm p-5 flex flex-col hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              {/* Image */}
              <img
                src={post.image}
                alt="blog"
                className="w-full h-[180px] object-cover rounded-2xl"
              />

              {/* Category */}
              <div className="mt-4">
                <span className="inline-block px-4 py-1 text-sm rounded-lg border border-[#A290F7] text-[#A290F7]">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-4 text-[18px] font-semibold text-gray-800 leading-snug">
                {post.title}
              </h3>

              <div className="flex-grow"></div>

              {/* Footer */}
              <div className="flex items-center justify-between mt-2">
                <span className="text-[13px] text-grey font-medium hover:text-black transition">
                  Continue Reading →
                </span>

                <div className="flex items-center gap-5">
                  <div className="w-7 h-7 rounded-full bg-[#3866F6] flex items-center justify-center text-white font-semibold">
                    {post.author.charAt(0)}
                  </div>
                  <div className="text-sm text-gray-500">
                    <p className="font-medium text-gray-700">
                      {post.author}
                    </p>
                    <p>{post.date}</p>
                  </div>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
