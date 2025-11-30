export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">

      {/* Ultra Premium Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-950 via-indigo-950 to-purple-950 text-white overflow-hidden">
        {/* Animated Background Layers */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.3),transparent_40%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.3),transparent_40%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.2),transparent_60%)]"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 py-28">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-bold shadow-lg">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            </div>
            <h1 className="text-7xl md:text-8xl font-black mb-8 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-100">
              About Us
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100 leading-relaxed font-light max-w-4xl mx-auto">
              Discover our commitment to excellence, innovation, and trusted partnerships in delivering world-class solutions.
            </p>
          </div>
        </div>

        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 100H1440V0C1440 0 1080 100 720 100C360 100 0 0 0 0V100Z" fill="rgb(248, 250, 252)" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 -mt-16">

        {/* Contact Information - Ultra Premium Cards */}
        <section className="py-24">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">GET IN TOUCH</span>
            </div>
            <h2 className="text-6xl font-black text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900">
              Contact Information
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are available to assist you. Please reach out through any of the following channels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

            {/* Address Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-blue-100 group-hover:shadow-2xl group-hover:border-blue-300 transition-all duration-500 transform group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  📍
                </div>
                <h3 className="font-black text-2xl text-gray-900 mb-3">Address</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  123 Business Street<br />
                  Phnom Penh, Cambodia
                </p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-green-500 to-emerald-700 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-emerald-100 group-hover:shadow-2xl group-hover:border-emerald-300 transition-all duration-500 transform group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-700 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  📞
                </div>
                <h3 className="font-black text-2xl text-gray-900 mb-3">Phone</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  +855 12 345 678<br />
                  +855 88 47 44 869
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-purple-500 to-indigo-700 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-purple-100 group-hover:shadow-2xl group-hover:border-purple-300 transition-all duration-500 transform group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-700 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  ✉️
                </div>
                <h3 className="font-black text-2xl text-gray-900 mb-3">Email</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  nanamot206@gmail.com<br />
                  support@company.com
                </p>
              </div>
            </div>

            {/* Hours Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-pink-500 to-rose-700 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-orange-100 group-hover:shadow-2xl group-hover:border-orange-300 transition-all duration-500 transform group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-pink-700 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  🕐
                </div>
                <h3 className="font-black text-2xl text-gray-900 mb-3">Hours</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Mon-Fri: 8AM-6PM<br />
                  Sat: 9AM-3PM
                </p>
              </div>
            </div>
          </div>

          {/* Social Media - Ultra Premium */}
          <div className="mt-20 text-center">
            <h3 className="font-black text-4xl text-gray-900 mb-10">Connect With Us</h3>
            <div className="flex flex-wrap justify-center gap-6">

              {/* Facebook */}
              <a href="#" className="group relative">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>

                {/* Button */}
                <div className="relative px-12 py-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl font-black text-lg shadow-2xl transform group-hover:scale-110 transition-all duration-300 overflow-hidden">

                  {/* Hover Animation Layer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>

                  {/* Content with Facebook Icon */}
                  <div className="relative z-10 flex items-center gap-3">
                    <span className="w-10 h-10 inline-block">
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


              {/* Telegram */}
              <a href="#" className="group relative">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-700 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>

                {/* Button */}
                <div className="relative px-12 py-6 bg-gradient-to-r from-sky-500 to-blue-700 text-white rounded-2xl font-black text-lg shadow-2xl transform group-hover:scale-110 transition-all duration-300 overflow-hidden">

                  {/* Hover Animation Layer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-800 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>

                  {/* Content with Telegram Icon */}
                  <div className="relative z-10 flex items-center gap-3">
                    <span className="w-10 h-10 inline-block">
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
{/* GitHub */}
<a href="#" className="group relative">
  {/* Background Glow */}
  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>

  {/* Button */}
  <div className="relative px-12 py-6 bg-gradient-to-r from-gray-800 to-black text-white rounded-2xl font-black text-lg shadow-2xl transform group-hover:scale-110 transition-all duration-300 overflow-hidden">
    
    {/* Hover Animation Layer */}
    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
    
    {/* Content with GitHub Icon */}
    <div className="relative z-10 flex items-center gap-4">
      <span className="w-10 h-10 inline-block rounded-full shadow-lg overflow-hidden">
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

        {/* Platform Information - Ultimate Design */}
        <section className="py-24">
          <div className="relative bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.1),transparent_50%)]"></div>

            <div className="relative grid lg:grid-cols-5">

              {/* Left Content */}
              <div className="lg:col-span-3 p-12 lg:p-16">
                <div className="mb-6">
                  <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-bold">OUR PLATFORM</span>
                </div>
                <h2 className="text-6xl font-black mb-10 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900">
                  Our Platform
                </h2>

                <div className="space-y-6 text-gray-700 text-xl leading-relaxed">
                  <p className="font-light">
                    Our organization operates a comprehensive digital platform designed to provide
                    innovative solutions and services to businesses worldwide. We specialize in
                    product verification, business intelligence, and technology consulting.
                  </p>

                  <p className="font-light">
                    The platform delivers cutting-edge tools and resources that enable companies
                    to enhance their operations, verify product authenticity, and access real-time
                    business insights. Our commitment to excellence ensures reliable, secure, and
                    user-friendly experiences.
                  </p>

                  <p className="font-light">
                    We combine advanced technology with deep industry expertise to create solutions
                    that drive measurable results and sustainable growth for our clients.
                  </p>
                </div>

                {/* Premium Stats */}
                <div className="grid grid-cols-3 gap-6 mt-12">
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative text-center p-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-2xl text-white transform group-hover:scale-105 transition-all">
                      <div className="text-5xl font-black mb-2">500+</div>
                      <div className="text-sm font-bold opacity-90">Active Clients</div>
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-green-700 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative text-center p-8 bg-gradient-to-br from-emerald-500 to-green-700 rounded-2xl shadow-2xl text-white transform group-hover:scale-105 transition-all">
                      <div className="text-5xl font-black mb-2">98%</div>
                      <div className="text-sm font-bold opacity-90">Satisfaction</div>
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-700 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative text-center p-8 bg-gradient-to-br from-purple-500 to-indigo-700 rounded-2xl shadow-2xl text-white transform group-hover:scale-105 transition-all">
                      <div className="text-5xl font-black mb-2">24/7</div>
                      <div className="text-sm font-bold opacity-90">Support</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Core Principles Dark */}
              <div className="lg:col-span-2 bg-gradient-to-br from-gray-950 via-blue-950 to-purple-950 p-12 lg:p-16 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.3),transparent_70%)]"></div>
                <div className="relative">
                  <h3 className="text-4xl font-black mb-12">Core Principles</h3>

                  <div className="space-y-6">
                    <div className="group bg-white/5 backdrop-blur-xl border-2 border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/30 transition-all duration-500 transform hover:translate-x-3">
                      <div className="text-5xl mb-4">🎯</div>
                      <h4 className="font-black text-2xl mb-4">Mission</h4>
                      <p className="text-white/80 leading-relaxed text-lg">
                        To empower businesses through innovative technology solutions, delivering
                        exceptional value and fostering partnerships.
                      </p>
                    </div>

                    <div className="group bg-white/5 backdrop-blur-xl border-2 border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/30 transition-all duration-500 transform hover:translate-x-3">
                      <div className="text-5xl mb-4">     </div>
                      <h4 className="font-black text-2xl mb-4">Vision</h4>
                      <p className="text-white/80 leading-relaxed text-lg">
                        To be the leading platform for digital transformation, setting new standards
                        in quality and reliability.
                      </p>
                    </div>

                    <div className="group bg-white/5 backdrop-blur-xl border-2 border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/30 transition-all duration-500 transform hover:translate-x-3">
                      <div className="text-5xl mb-4">         </div>
                      <h4 className="font-black text-2xl mb-4">Values</h4>
                      <div className="text-white/80 leading-relaxed space-y-2">
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

        {/* Partners - Ultimate Card Design */}
        <section className="py-24 pb-32">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold">OUR NETWORK</span>
            </div>
            <h2 className="text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900">
              Trusted Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We collaborate with industry-leading organizations to deliver comprehensive solutions and exceptional value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { name: 'TechCorp Solutions', type: 'Technology Partner', desc: 'Leading provider of enterprise technology infrastructure and cloud computing solutions.', icon: '💻', gradient: 'from-blue-500 to-cyan-600' },
              { name: 'Global Consulting', type: 'Strategic Partner', desc: 'International consultancy specializing in business strategy and digital transformation.', icon: '📊', gradient: 'from-indigo-500 to-purple-600' },
              { name: 'CloudNet Services', type: 'Cloud Partner', desc: 'Premier cloud infrastructure provider offering scalable data management solutions.', icon: '☁️', gradient: 'from-cyan-500 to-blue-600' },
              { name: 'Digital Marketing Pro', type: 'Marketing Partner', desc: 'Full-service digital agency delivering innovative marketing and brand strategies.', icon: '📱', gradient: 'from-purple-500 to-pink-600' },
              { name: 'FinTech Solutions', type: 'Financial Partner', desc: 'Advanced payment processing platform with comprehensive security protocols.', icon: '💰', gradient: 'from-green-500 to-emerald-600' },
              { name: 'EduTech Academy', type: 'Training Partner', desc: 'Professional development organization providing certification and training programs.', icon: '🎓', gradient: 'from-orange-500 to-red-600' }
            ].map((partner, idx) => (
              <div key={idx} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${partner.gradient} rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                <div className="relative bg-white rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl hover:border-gray-300 transition-all duration-500 overflow-hidden transform group-hover:-translate-y-3">
                  <div className="p-10">
                    <div className={`w-24 h-24 bg-gradient-to-br ${partner.gradient} rounded-3xl flex items-center justify-center text-5xl mb-6 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                      {partner.icon}
                    </div>
                    <h3 className="font-black text-3xl text-gray-900 mb-3">{partner.name}</h3>
                    <p className={`font-bold text-sm mb-4 bg-gradient-to-r ${partner.gradient} bg-clip-text text-transparent`}>
                      {partner.type}
                    </p>
                    <p className="text-gray-600 leading-relaxed text-lg">{partner.desc}</p>
                  </div>
                  <div className={`h-2 bg-gradient-to-r ${partner.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Ultimate CTA */}
          <div className="mt-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-3xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_50%)]"></div>
              <div className="relative p-20 text-center text-white">
                <h3 className="text-5xl font-black mb-8">Interested in Partnership?</h3>
                <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                  We welcome collaboration opportunities with organizations that share our values and commitment to excellence.
                </p>
                <a href="/contact" className="group inline-flex items-center gap-4 px-14 py-6 bg-white text-blue-600 font-black text-xl rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <span>Contact Us for Partnership</span>
                  <span className="text-3xl group-hover:translate-x-2 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}