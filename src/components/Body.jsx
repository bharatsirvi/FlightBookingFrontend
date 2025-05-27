import ChatWindow from "./ChatWindow";

function Body() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-indigo-200 rounded-full opacity-10 animate-bounce delay-500"></div>
      </div>

      <div className="relative z-10 p-6 sm:p-8 lg:p-12">
        {/* Enhanced header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-2xl shadow-lg mb-6 transform hover:scale-105 transition-all duration-300">
            <span className="text-3xl">✈️</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            Flight Booking Analytics
          </h1>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover insights, compare prices, and find the perfect flights with our intelligent analytics platform
          </p>
        </div>

        {/* Main content container */}
        <div className="max-w-6xl mx-auto">
          <div className="relative group">
            {/* Glowing border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-sm"></div>
            
            {/* Main card */}
            <div className="relative bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl border border-white/20 overflow-hidden">
              {/* Header accent */}
              <div className="h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
              
              {/* Content area */}
              <div className="p-8 lg:p-12">
                {/* Status indicators */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600 font-medium">Live Analytics</span>
                    </div>
                    <div className="w-px h-4 bg-gray-300"></div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                      <span className="text-sm text-gray-600 font-medium">Real-time Data</span>
                    </div>
                  </div>
                  
                  <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Powered by AI</span>
                  </div>
                </div>

                {/* Chat window container */}
                <div className="transform hover:scale-[1.01] transition-transform duration-300">
                  <ChatWindow />
                </div>
              </div>

              {/* Bottom accent */}
              <div className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
            </div>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: "📊", title: "Smart Analytics", desc: "AI-powered insights" },
              { icon: "💰", title: "Best Prices", desc: "Real-time comparisons" },
              { icon: "⚡", title: "Instant Results", desc: "Lightning-fast search" }
            ].map((feature, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 hover:bg-white/80 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;