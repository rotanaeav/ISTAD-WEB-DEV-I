export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-950 via-indigo-950 to-purple-950 text-white overflow-hidden">
        {/* Animated  */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,110,120,0.3),transparent_40%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.3),transparent_40%)]"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Us</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Building innovative solutions that help businesses grow and succeed
          </p>
        </div>

        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60H1440V0C1440 0 1080 60 720 60C360 60 0 0 0 0V60Z" fill="rgb(248, 250, 252)" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 -mt-8">

        {/* Contact Information - Animations */}
        <section className="py-12">
          <div className="text-center mb-12">
            <div className="inline-block mb-3">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">GET IN TOUCH</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900">
              Contact Information
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are available to assist you. Please reach out through any of the following channels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {/* Address Card -Animations */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-white rounded-xl p-5 shadow-xl border border-blue-100 group-hover:shadow-2xl group-hover:border-blue-300 transition-all duration-500 transform group-hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-3 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                    <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                  </svg>
                </div>
                <h3 className="font-black text-gray-900 mb-2">Address</h3>
                <p className="text-sm text-gray-600">
                  123 Business Street<br />
                  Phnom Penh, Cambodia
                </p>
              </div>
            </div>

            {/* Phone Card - Animations */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-green-500 to-emerald-700 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-white rounded-xl p-5 shadow-xl border border-emerald-100 group-hover:shadow-2xl group-hover:border-emerald-300 transition-all duration-500 transform group-hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-700 rounded-xl flex items-center justify-center mb-3 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M6.62 10.79a15.464 15.464 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.29 21 3 13.71 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
                  </svg>
                </div>
                <h3 className="font-black text-gray-900 mb-2">Phone</h3>
                <p className="text-sm text-gray-600">
                  +855 12 345 678<br />
                  +855 88 47 44 869
                </p>
              </div>
            </div>

            {/* Email Card - With Animations */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-purple-500 to-indigo-700 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-white rounded-xl p-5 shadow-xl border border-purple-100 group-hover:shadow-2xl group-hover:border-purple-300 transition-all duration-500 transform group-hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-700 rounded-xl flex items-center justify-center mb-3 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <h3 className="font-black text-gray-900 mb-2">Email</h3>
                <p className="text-sm text-gray-600">
                  nanamot206@gmail.com<br />
                  support@company.com
                </p>
              </div>
            </div>

            {/* Hours Card - Animations */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-pink-500 to-rose-700 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-white rounded-xl p-5 shadow-xl border border-orange-100 group-hover:shadow-2xl group-hover:border-orange-300 transition-all duration-500 transform group-hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-700 rounded-xl flex items-center justify-center mb-3 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                    <path d="M12 1a11 11 0 1011 11A11.013 11.013 0 0012 1zm0 20a9 9 0 119-9 9.01 9.01 0 01-9 9z" />
                    <path d="M13 7h-2v6l5 3 1-1.6-4-2.4V7z" />
                  </svg>
                </div>
                <h3 className="font-black text-gray-900 mb-2">Hours</h3>
                <p className="text-sm text-gray-600">
                  Mon-Fri: 8AM-6PM<br />
                  Sat: 9AM-3PM
                </p>
              </div>
            </div>
          </div>

          {/* Social Media - Animations */}
          <div className="text-center">
            <h3 className="font-black text-xl text-gray-900 mb-6">Connect With Us</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {/* Facebook - Animation */}
              <a href="#" className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-black text-sm shadow-2xl transform group-hover:scale-110 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  <div className="relative z-10 flex items-center gap-2">
                    <span className="w-5 h-5 inline-block">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png"
                        alt="Facebook"
                        className="w-full h-full rounded-full shadow-lg"
                      />
                    </span>
                    <span>Facebook</span>
                  </div>
                </div>
              </a>

              {/* Telegram - Your Original Animation */}
              <a href="#" className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-700 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-700 text-white rounded-lg font-black text-sm shadow-2xl transform group-hover:scale-110 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-800 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  <div className="relative z-10 flex items-center gap-2">
                    <span className="w-5 h-5 inline-block">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
                        alt="Telegram"
                        className="w-full h-full rounded-full shadow-lg"
                      />
                    </span>
                    <span>Telegram</span>
                  </div>
                </div>
              </a>

              {/* GitHub - Your Original Animation */}
              <a href="#" className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative px-6 py-3 bg-gradient-to-r from-gray-800 to-black text-white rounded-lg font-black text-sm shadow-2xl transform group-hover:scale-110 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  <div className="relative z-10 flex items-center gap-2">
                    <span className="w-5 h-5 inline-block rounded-full shadow-lg overflow-hidden">
                      <img
                        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                        alt="GitHub"
                        className="w-full h-full object-cover"
                      />
                    </span>
                    <span>GitHub</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Platform Information - Compact with  Animations */}
        <section className="py-12">
          <div className="relative bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.1),transparent_50%)]"></div>

            <div className="relative grid lg:grid-cols-5">
              {/* Left Content */}
              <div className="lg:col-span-3 p-6 lg:p-8">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold">OUR PLATFORM</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900">
                  Our Platform
                </h2>

                <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                  <p className="font-light">
                    Our organization operates a comprehensive digital platform designed to provide
                    innovative solutions and services to businesses worldwide.
                  </p>

                  <p className="font-light">
                    The platform delivers cutting-edge tools and resources that enable companies
                    to enhance their operations, verify product authenticity, and access real-time
                    business insights.
                  </p>

                  <p className="font-light">
                    We combine advanced technology with deep industry expertise to create solutions
                    that drive measurable results and sustainable growth for our clients.
                  </p>
                </div>

                {/* Stats - With  Animations */}
                <div className="grid grid-cols-3 gap-3 mt-8">
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative text-center p-4 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg shadow-2xl text-white transform group-hover:scale-105 transition-all">
                      <div className="text-xl font-black mb-1">500+</div>
                      <div className="text-xs font-bold opacity-90">Active Clients</div>
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-green-700 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative text-center p-4 bg-gradient-to-br from-emerald-500 to-green-700 rounded-lg shadow-2xl text-white transform group-hover:scale-105 transition-all">
                      <div className="text-xl font-black mb-1">98%</div>
                      <div className="text-xs font-bold opacity-90">Satisfaction</div>
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-700 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative text-center p-4 bg-gradient-to-br from-purple-500 to-indigo-700 rounded-lg shadow-2xl text-white transform group-hover:scale-105 transition-all">
                      <div className="text-xl font-black mb-1">24/7</div>
                      <div className="text-xs font-bold opacity-90">Support</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - With  Animations */}
              <div className="lg:col-span-2 bg-gradient-to-br from-gray-950 via-blue-950 to-purple-950 p-6 lg:p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.3),transparent_70%)]"></div>
                <div className="relative">
                  <h3 className="text-xl font-black mb-6">Core Principles</h3>

                  <div className="space-y-4">
                    <div className="group bg-white/5 backdrop-blur-xl border-2 border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-white/30 transition-all duration-500 transform hover:translate-x-2">
                      <h4 className="font-black mb-2">Mission</h4>
                      <p className="text-white/80 text-sm">
                        To empower businesses through innovative technology solutions.
                      </p>
                    </div>

                    <div className="group bg-white/5 backdrop-blur-xl border-2 border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-white/30 transition-all duration-500 transform hover:translate-x-2">
                      <h4 className="font-black mb-2">Vision</h4>
                      <p className="text-white/80 text-sm">
                        To be the leading platform for digital transformation.
                      </p>
                    </div>

                    <div className="group bg-white/5 backdrop-blur-xl border-2 border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-white/30 transition-all duration-500 transform hover:translate-x-2">
                      <h4 className="font-black mb-2">Values</h4>
                      <div className="text-white/80 text-sm space-y-1">
                        <p>• Integrity & Transparency</p>
                        <p>• Continuous Innovation</p>
                        <p>• Customer Excellence</p>
                        <p>• Sustainable Growth</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners - Compact with  Animations */}
        <section className="py-12">
          <div className="text-center mb-12">
            <div className="inline-block mb-3">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold">OUR NETWORK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900">
              Trusted Partners
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We collaborate with industry-leading organizations to deliver comprehensive solutions and exceptional value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'TechCorp Solutions', type: 'Technology Partner', desc: 'Leading provider of enterprise technology infrastructure and cloud computing solutions.', icon: '💻', gradient: 'from-blue-500 to-cyan-600' },
              { name: 'Global Consulting', type: 'Strategic Partner', desc: 'International consultancy specializing in business strategy and digital transformation.', icon: '📊', gradient: 'from-indigo-500 to-purple-600' },
              { name: 'CloudNet Services', type: 'Cloud Partner', desc: 'Premier cloud infrastructure provider offering scalable data management solutions.', icon: '☁️', gradient: 'from-cyan-500 to-blue-600' },
              { name: 'Digital Marketing Pro', type: 'Marketing Partner', desc: 'Full-service digital agency delivering innovative marketing and brand strategies.', icon: '📱', gradient: 'from-purple-500 to-pink-600' },
              { name: 'FinTech Solutions', type: 'Financial Partner', desc: 'Advanced payment processing platform with comprehensive security protocols.', icon: '💰', gradient: 'from-green-500 to-emerald-600' },
              { name: 'EduTech Academy', type: 'Training Partner', desc: 'Professional development organization providing certification and training programs.', icon: '🎓', gradient: 'from-orange-500 to-red-600' }
            ].map((partner, idx) => (
              <div key={idx} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${partner.gradient} rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                <div className="relative bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl hover:border-gray-300 transition-all duration-500 overflow-hidden transform group-hover:-translate-y-2">
                  <div className="p-5">
                    <div className={`w-10 h-10 bg-gradient-to-br ${partner.gradient} rounded-lg flex items-center justify-center text-lg mb-3 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                      {partner.icon}
                    </div>
                    <h3 className="font-black text-gray-900 mb-1">{partner.name}</h3>
                    <p className={`font-bold text-xs mb-2 bg-gradient-to-r ${partner.gradient} bg-clip-text text-transparent`}>
                      {partner.type}
                    </p>
                    <p className="text-gray-600 text-sm">{partner.desc}</p>
                  </div>
                  <div className={`h-1 bg-gradient-to-r ${partner.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA - With  Animations */}
          <div className="mt-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-xl blur opacity-30"></div>
            <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_50%)]"></div>
              <div className="relative p-8 text-center text-white">
                <h3 className="text-xl font-black mb-4">Interested in Partnership?</h3>
                <p className="text-blue-100 mb-6 max-w-md mx-auto text-sm font-light">
                  We welcome collaboration opportunities with organizations that share our values and commitment to excellence.
                </p>
                <a href="/contact" className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-black text-sm rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <span>Contact Us for Partnership</span>
                  <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}