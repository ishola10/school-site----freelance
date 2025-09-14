import React from 'react'
import { Play } from 'lucide-react';
import { facilities } from '../utils';
import Image from 'next/image';

const FacilitiesPage = () => {
  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0">
          <Image
            src="/images/IMG_0868.jpg"
            alt="School background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-40" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Our Facilities</h1>
          <p className="text-xl">Modern infrastructure supporting comprehensive education</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-2">
                <facility.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{facility.name}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Virtual Tour</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative rounded-xl overflow-hidden shadow-xl group">
                <Image 
                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2032&q=80" 
                    alt="Classroom" 
                    width={800} 
                    height={600} 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="w-16 h-16 text-white" />
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">Classrooms</h3>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl group">
                <Image 
                    src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2048&q=80" 
                    alt="Library" 
                    width={800} 
                    height={600} 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="w-16 h-16 text-white" />
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">Library</h3>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl group">
                <Image 
                    src="https://images.unsplash.com/photo-1581726690015-c9861c318b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                    alt="Science Lab" 
                    width={800} 
                    height={600} 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="w-16 h-16 text-white" />
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">Science Lab</h3>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl group">
                <Image 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                    alt="Sports Complex" 
                    width={800} 
                    height={600} 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="w-16 h-16 text-white" />
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">Sports Complex</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FacilitiesPage