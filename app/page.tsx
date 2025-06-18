"use client";

import React, { useState, useEffect } from "react";
import { slides, programs, testimonials, events } from "./utils";
import { Clock, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

type CounterProps = {
  start: number;
  end: number;
  suffix?: string;
  speed?: number;
  pause?: number;
};

const Counter = ({ start, end, suffix = '', speed = 50, pause = 4000 }: CounterProps) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    let timeout: NodeJS.Timeout | null = null;

    const startCounting = () => {
      interval = setInterval(() => {
        setCount((prev: number) => {
          if (prev >= end) {
            clearInterval(interval!);
            timeout = setTimeout(() => {
              setCount(start); 
              startCounting(); 
            }, pause);
            return prev;
          }
          return prev + 1;
        });
      }, speed);
    };

    startCounting();

    return () => {
      if (interval) clearInterval(interval);
      if (timeout) clearTimeout(timeout);
    };
  }, [start, end, speed, pause]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen">
      <section className="relative h-[93vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-blue-900 opacity-60"></div>
            </div>
          </div>
        ))}
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in delay-300">
              {slides[currentSlide].subtitle}
            </p>
            <div className="space-x-4 animate-fade-in delay-600">
              <Link href="/admissions">
                <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
                  Apply Now
                </button>
              </Link>
              <Link href="/about">
                <button className="cursor-pointer border border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group hover:transform hover:scale-105 transition-all">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                <Counter start={200} end={220} suffix="+" />
              </div>
              <div className="text-gray-600 text-2xl">Students</div>
            </div>
            <div className="group hover:transform hover:scale-105 transition-all">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                <Counter start={10} end={30} suffix="+" />
              </div>
              <div className="text-gray-600 text-2xl">Teachers</div>
            </div>
            <div className="group hover:transform hover:scale-105 transition-all">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                4+
              </div>
              <div className="text-gray-600 text-2xl">Years</div>
            </div>
            <div className="group hover:transform hover:scale-105 transition-all">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                <Counter start={80} end={98} suffix="%" />
              </div>
              <div className="text-gray-600 text-2xl">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Programs
            </h2>
            <p className="text-xl text-gray-600 text-2xl">
              Comprehensive education for all age groups
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">
                    {program.name}
                  </h3>
                  <p className="text-gray-500 mb-4">{program.age}</p>
                  <p className="text-gray-700">{program.description}</p>
                  <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Parents Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-4 italic text-blue-600">
                  &quot;{testimonial.text}&quot;
                </p>
                <div>
                  <div className="font-semibold text-black">
                    {testimonial.name}
                  </div>
                  <div className="text-blue-200">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all"
              >
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  {event.date}
                </div>
                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                <div className="flex items-center text-gray-600 text-2xl">
                  <Clock className="w-4 h-4 mr-2" />
                  {event.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
