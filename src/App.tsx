import React from 'react';
import { Menu, X, Github, Pi } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Auth from './pages/Auth';
import { Link as ScrollLink } from 'react-scroll';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [text, setText] = React.useState('');
  const fullText = "Take tests, get your scores, analyze your performance, and get dream IITs.";
  
  React.useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 50); // Adjust speed by changing this value (milliseconds)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={
          <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100">
            {/* Header */}
            <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
              <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Pi className="h-8 w-8 text-blue-600" strokeWidth={2.5} />
                    <span className="text-gray-900 font-semibold text-xl tracking-tight">PrepGenius</span>
                  </div>

                  {/* Desktop Menu */}
                  <div className="hidden md:flex items-center space-x-8">
                    <ScrollLink
                      to="home"
                      smooth={true}
                      duration={500}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium tracking-wide cursor-pointer"
                    >
                      Home
                    </ScrollLink>
                    <ScrollLink
                      to="about"
                      smooth={true}
                      duration={500}
                      offset={-100}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium tracking-wide cursor-pointer"
                    >
                      About
                    </ScrollLink>
                    <ScrollLink
                      to="contact"
                      smooth={true}
                      duration={500}
                      offset={-100}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium tracking-wide cursor-pointer"
                    >
                      Contact
                    </ScrollLink>
                    <Link 
                      to="/auth" 
                      className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors duration-200 font-medium tracking-wide shadow-sm hover:shadow-md"
                    >
                      Sign In
                    </Link>
                  </div>

                  {/* Mobile Menu Button */}
                  <button 
                    className="md:hidden text-gray-600"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                  </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                  <div className="md:hidden pt-4 pb-3">
                    <div className="flex flex-col space-y-4">
                      <ScrollLink
                        to="home"
                        smooth={true}
                        duration={500}
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium tracking-wide cursor-pointer"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Home
                      </ScrollLink>
                      <ScrollLink
                        to="about"
                        smooth={true}
                        duration={500}
                        offset={-100}
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium tracking-wide cursor-pointer"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        About
                      </ScrollLink>
                      <ScrollLink
                        to="contact"
                        smooth={true}
                        duration={500}
                        offset={-100}
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium tracking-wide cursor-pointer"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Contact
                      </ScrollLink>
                      <Link 
                        to="/auth" 
                        className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors duration-200 font-medium tracking-wide inline-block text-center shadow-sm hover:shadow-md"
                      >
                        Sign In
                      </Link>
                    </div>
                  </div>
                )}
              </nav>
            </header>

            {/* Hero Section */}
            <main className="relative">
              <div id="home" className="container mx-auto px-4 pt-32 pb-24 min-h-screen flex flex-col items-center justify-center text-center">
                <span className="text-blue-600 font-semibold text-lg mb-4 tracking-wider uppercase">Welcome to the PrepGenius</span>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
                  Ace the game of
                  <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"> JEE</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl font-normal leading-relaxed tracking-wide">
                  {text}
                  <span className="animate-blink">|</span>
                </p>
                <Link 
                  to="/auth"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 tracking-wide"
                >
                  Get Started Today
                </Link>
              </div>

              {/* About Section */}
              <section id="about" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      Why Choose PrepGenius?
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      We're dedicated to helping students achieve their dreams of getting into top IITs through personalized learning and comprehensive test preparation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="p-6 bg-blue-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Learning</h3>
                      <p className="text-gray-600">
                        Adaptive learning technology that adjusts to your pace and learning style for maximum efficiency.
                      </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="p-6 bg-blue-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Practice Tests</h3>
                      <p className="text-gray-600">
                        Comprehensive test series designed to mirror the actual JEE pattern and difficulty level.
                      </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="p-6 bg-blue-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Analytics</h3>
                      <p className="text-gray-600">
                        Detailed analysis of your performance with personalized insights and improvement suggestions.
                      </p>
                    </div>
                  </div>

                  {/* Stats Section */}
                  <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
                      <div className="text-gray-600">Active Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                      <div className="text-gray-600">Practice Tests</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                      <div className="text-gray-600">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                      <div className="text-gray-600">Expert Support</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section id="contact" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      Get in Touch
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      Have questions? We're here to help you achieve your goals. Reach out to us anytime.
                    </p>
                  </div>

                  <div className="max-w-4xl mx-auto">
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                          placeholder="Enter your name"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                          placeholder="Enter your email"
                        />
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                          placeholder="Enter subject"
                        />
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-700">
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={6}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                          placeholder="Enter your message"
                        ></textarea>
                      </div>

                      <div className="md:col-span-2">
                        <button
                          type="submit"
                          className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transform transition-all duration-200 hover:scale-[1.02]"
                        >
                          Send Message
                        </button>
                      </div>
                    </form>

                    {/* Contact Information */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <h3 className="font-semibold text-gray-900">Phone</h3>
                        <p className="text-gray-600 mt-1">+91 (123) 456-7890</p>
                      </div>

                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <h3 className="font-semibold text-gray-900">Email</h3>
                        <p className="text-gray-600 mt-1">contact@prepgenius.com</p>
                      </div>

                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <h3 className="font-semibold text-gray-900">Location</h3>
                        <p className="text-gray-600 mt-1">Mumbai, Maharashtra, India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;