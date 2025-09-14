import React from "react";
// import { Play } from "lucide-react";
import Image from "next/image";

const GalleryPage = () => {
  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0">
          <Image
            src="/images/IMG_2215.png"
            alt="School background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-40" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl">
            Capturing moments of learning, growth, and achievement
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: "/images/4D628A35-FEA2-4793-9985-FA7ABBE510C5.jpg",
                title: "Graduation Ceremony",
              },
              {
                src: "/images/4D628A35-FEA2-4793-9985-FA7ABBE510C5.jpg",
                title: "Science Fair",
              },
              {
                src: "/images/C2417C70-B57A-4029-9751-435CA389EFE8.jpg",
                title: "School Building",
              },
              {
                src: "/images/D3D3761B-AA73-4589-945A-20B7813A5DF1.jpg",
                title: "Art Class",
              },
              {
                src: "/images/IMG_0868.jpg",
                title: "Sports Day",
              },
              {
                src: "/images/IMG_0870.jpg",
                title: "Music Performance",
              },
              {
                src: "/images/IMG_0891.jpg",
                title: "Library Study",
              },
              {
                src: "/images/IMG_0893.jpg",
                title: "Chemistry Lab",
              },
              {
                src: "/images/IMG_0870.jpg",
                title: "Group Study",
              },
              {
                src: "/images/IMG_0924.jpg",
                title: "Outdoor Activities",
              },
              {
                src: "/images/IMG_0929.jpg",
                title: "Classroom Learning",
              },
              {
                src: "/images/IMG_2211.png",
                title: "Community Service",
              },
              {
                src: "/images/IMG_2212.png",
                title: "Outdoor Activities",
              },
              {
                src: "/images/IMG_2213.png",
                title: "Classroom Learning",
              },
              {
                src: "/images/IMG_2214.png",
                title: "Community Service",
              },
              {
                src: "/images/IMG_2215.png",
                title: "Outdoor Activities",
              },
            ].map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">School Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Annual Cultural Festival
              </h3>
              <p className="text-gray-600 mb-4">
                Our students showcase their talents in music, dance, drama, and
                art. A celebration of creativity and cultural diversity.
              </p>
              <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <Play className="w-12 h-12 text-gray-400" />
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Inter-House Sports Competition
              </h3>
              <p className="text-gray-600 mb-4">
                Students compete in various sports events, promoting teamwork,
                sportsmanship, and healthy competition.
              </p>
              <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <Play className="w-12 h-12 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default GalleryPage;
