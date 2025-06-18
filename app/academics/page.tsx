import React from 'react'
import { programs } from '../utils'
import Image from 'next/image'

const AcademicsPage = () => {
  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="School background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-40" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Academic Programs</h1>
          <p className="text-xl">Comprehensive curriculum designed for holistic development</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">{program.name} School</h3>
                <p className="text-gray-600 mb-4">Age Group: {program.age}</p>
                <p className="text-gray-700 mb-6">{program.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Key Subjects:</h4>
                  <ul className="text-sm text-gray-600">
                    <li>• Mathematics & Sciences</li>
                    <li>• Languages & Literature</li>
                    <li>• Social Studies</li>
                    <li>• Arts & Creative Expression</li>
                    <li>• Physical Education</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Academic Excellence</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Approach</h3>
              <p className="text-gray-700 mb-4">
                We employ modern teaching methodologies that combine traditional academic rigor with innovative approaches to learning. Our curriculum is designed to develop critical thinking, creativity, and problem-solving skills.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Project-based learning</li>
                <li>• Technology integration</li>
                <li>• Collaborative learning environments</li>
                <li>• Individual attention and support</li>
                <li>• Regular assessment and feedback</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Achievements</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-600">
                  <div className="font-semibold">98% Pass Rate</div>
                  <div className="text-sm text-gray-600">in national examinations</div>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-600">
                  <div className="font-semibold">Top 10 Schools</div>
                  <div className="text-sm text-gray-600">in the state ranking</div>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-600">
                  <div className="font-semibold">Multiple Awards</div>
                  <div className="text-sm text-gray-600">in science and arts competitions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AcademicsPage