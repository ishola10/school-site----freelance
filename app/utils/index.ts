import { 
  Users,
  BookOpen,
  GraduationCap,
  Building,
  Globe,
  Shield
} from 'lucide-react';


export const routes = [
    { name: "Home", route: "/" },
  { name: "About", route: "/about" },
  { name: "Academics", route: "/academics" },
  { name: "Admissions", route: "/admissions" },
  // { name: "Facilities", route: "/facilities" },
  { name: "Gallery", route: "/gallery" },
  { name: "Contact", route: "/contact" }
]

export const slides = [
    {
      image: "/images/IMG_2211.png",
      title: "Excellence in Education",
      subtitle: "Building Tomorrow's Leaders Today"
    },
    {
      image: "/images/IMG_0921.jpg",
      title: "Modern Learning Environment",
      subtitle: "State-of-the-art facilities for holistic development"
    },
    {
      image: "/images/IMG_0870.jpg",
      title: "Nurturing Young Minds",
      subtitle: "Where every child's potential is realized"
    }
  ];

  export  const programs = [
    { name: 'Nursery', age: '2-4 years', description: 'Foundation learning with play-based activities' },
    { name: 'Primary', age: '5-11 years', description: 'Core subjects with creative exploration' },
    { name: 'Secondary', age: '12-17 years', description: 'Advanced curriculum preparing for higher education' }
  ];

 export const facilities = [
    { icon: BookOpen, name: 'Modern Library', description: 'Well-stocked library with digital resources' },
    { icon: Users, name: 'Science Labs', description: 'Fully equipped laboratories for practical learning' },
    { icon: Building, name: 'Sports Complex', description: 'Indoor and outdoor sports facilities' },
    { icon: Globe, name: 'Computer Lab', description: 'Latest technology for digital literacy' },
    { icon: Shield, name: 'Medical Center', description: '24/7 healthcare support for students' },
    { icon: GraduationCap, name: 'Auditorium', description: 'Modern venue for events and presentations' }
  ];

 export const testimonials = [
    { name: 'Mrs. Sarah Johnson', role: 'Parent', text: 'The school has provided excellent education for my children. The teachers are dedicated and caring.' },
    { name: 'Dr. Michael Brown', role: 'Alumni Parent', text: 'Outstanding academic programs and extracurricular activities. Highly recommended!' },
    { name: 'Ms. Jennifer Davis', role: 'Parent', text: 'My daughter loves going to school every day. The environment is nurturing and supportive.' }
  ];

 export const events = [
    { date: '15 Jul', title: 'Science Fair 2025', time: '9:00 AM' },
    { date: '22 Jul', title: 'Sports Day', time: '8:00 AM' },
    { date: '05 Aug', title: 'Cultural Festival', time: '10:00 AM' },
    { date: '12 Aug', title: 'Parent-Teacher Conference', time: '2:00 PM' }
  ];