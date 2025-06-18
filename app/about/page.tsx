import React from "react";
import { Award, Users, BookOpen, Shield } from "lucide-react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2022&q=80"
            alt="School background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-40" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">
            About Our School
          </h1>
          <p className="text-xl max-w-2xl animate-fade-in delay-100">
            Committed to excellence in education since 1998
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-6">
                At Mountain Heights College, we are committed to raising
                a generation of disciplined, intellectually empowered, and morally grounded individuals.
                Though a balanced blend of academic rigor, character development, and value-based education,
                we shape our students into confident leaders and responsible citizens, prepared to thrive in a fast changing world.
              </p>
              <p className="text-lg md:text-xl text-gray-700">
                We believe true education goes beyond textbooks and exams. It cultivates self-control, curiosity, and integrity. We are not just teaching students; we are building legacies.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                alt="School building"
                width={800}
                height={600}
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center pt-14">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="School building"
                width={800}
                height={600}
                className="w-full h-80 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-6">
                To become a national beacon of excellence --- a school known for producing highly disciplined scholars with exceptional academic results and unshakable moral standards. Our vision is to grow into a model educational ecosystem that nurtures not only bright minds, but also responsible citizens and visionary leaders.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600 md:text-lg font-semibold">
                Striving for the highest standards in all we do
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600 md:text-lg font-semibold">
                Building strong relationships and partnerships
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600 md:text-lg font-semibold">
                Embracing new ideas and technologies
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600 md:text-lg font-semibold">
                Acting with honesty and moral principles
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
