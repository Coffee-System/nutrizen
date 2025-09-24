import { Button } from '@nutrizen/ui';

export default function Home() {
  return (
    <main className="overflow-hidden bg-s1">
      {/* Header */}
      <header className="fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 lg:py-4">
        <div className="container flex h-14 items-center">
          <a className="flex-1 cursor-pointer z-2 lg:hidden">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-p1 rounded-lg flex items-center justify-center">
                <span className="text-s1 font-bold text-lg">N</span>
              </div>
              <span className="text-p4 font-bold text-xl">NutriZen</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              <a
                href="#philosophy"
                className="text-p4 hover:text-p1 transition-colors duration-300 uppercase font-medium"
              >
                Philosophy
              </a>
              <div className="w-1.5 h-1.5 rounded-full bg-p2"></div>

              <div className="flex items-center space-x-2">
                <div className="w-16 h-16 bg-p1 rounded-2xl flex items-center justify-center">
                  <span className="text-s1 font-bold text-2xl">N</span>
                </div>
                <span className="text-p4 font-bold text-2xl">NutriZen</span>
              </div>

              <div className="w-1.5 h-1.5 rounded-full bg-p2"></div>
              <a
                href="#community"
                className="text-p4 hover:text-p1 transition-colors duration-300 uppercase font-medium"
              >
                Community
              </a>
            </div>
          </nav>

          <div className="hidden lg:flex flex-1 justify-end">
            <Button variant="secondary">
              <a
                href="https://discord.gg/nutrizen"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Discord
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption">The app that will save your diet!</div>
            <h1 className="mb-6 text-6xl font-bold text-p4 uppercase max-lg:mb-7 max-lg:text-5xl max-md:mb-4 max-md:text-4xl leading-tight">
              NutriZen
            </h1>
            <p className="max-w-440 mb-14 text-lg leading-relaxed max-md:mb-10 text-p5">
              A free application with all the necessary features to help you in
              your process, whether it&apos;s weight loss or muscle gain 💪.
            </p>
            <Button variant="primary">Download Now</Button>
          </div>

          <div className="absolute -top-32 left-[calc(50%-340px)] w-1230 pointer-events-none max-lg:left-[calc(50%-280px)] max-lg:w-[1160px] max-md:bottom-[-590px] max-md:left-[calc(50%-390px)] max-md:top-auto">
            <div className="w-full h-96 bg-gradient-to-br from-p1/20 to-p2/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-32 max-lg:py-24 max-md:py-16">
        <div className="container">
          <div className="text-center mb-20">
            <div className="caption text-center mb-5">Our Pillars</div>
            <h2 className="text-4xl font-bold text-p4 mb-7 max-md:text-3xl">
              Built on Strong Values
            </h2>
            <p className="text-lg text-p5 max-w-2xl mx-auto">
              NutriZen is more than just an app - it&apos;s a commitment to
              transparency, accessibility, and community-driven innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-p1 to-p2 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-s1 text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold text-p4 mb-3">
                Open Source
              </h3>
              <p className="text-p5">
                Completely open source, transparent and built by the community
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-p3 to-p2 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-s1 text-2xl">💸</span>
              </div>
              <h3 className="text-xl font-semibold text-p4 mb-3">100% Free</h3>
              <p className="text-p5">
                No hidden costs, no premium features. Always free for everyone
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-p2 to-p1 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-s1 text-2xl">🚫</span>
              </div>
              <h3 className="text-xl font-semibold text-p4 mb-3">Ad-Free</h3>
              <p className="text-p5">
                Focus on your health without distractions. No ads, ever
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-p1 to-p3 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-s1 text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-p4 mb-3">Community</h3>
              <p className="text-p5">
                Built by users, for users. Your voice shapes our direction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 max-lg:py-24 max-md:py-16 g7">
        <div className="container">
          <div className="text-center mb-20">
            <div className="caption text-center mb-5">What We Offer</div>
            <h2 className="text-4xl font-bold text-p4 mb-7 max-md:text-3xl">
              Everything You Need for Success
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="caption mb-6">Easy to Use</div>
              <h3 className="text-3xl font-bold text-p4 mb-6">
                Perfect for those seeking practicality!
              </h3>
              <p className="text-lg text-p5 mb-8 leading-relaxed">
                With constant updates, NutriZen is always evolving to improve
                the user experience, innovating the way to diet.
              </p>
              <Button variant="primary">Watch Demo</Button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-p1/10 to-p2/10 rounded-3xl flex items-center justify-center">
                <span className="text-6xl">📱</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="w-full h-96 bg-gradient-to-br from-p3/10 to-p1/10 rounded-3xl flex items-center justify-center">
                <span className="text-6xl">🌐</span>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="caption mb-6">Open Source Community</div>
              <h3 className="text-3xl font-bold text-p4 mb-6">
                Come be part of the community
              </h3>
              <p className="text-lg text-p5 mb-8 leading-relaxed">
                NutriZen was developed with the collaboration of countless
                people to offer the best possible experience to users. Come join
                us and make your contribution.
              </p>
              <Button variant="primary">
                <a
                  href="https://github.com/Coffee-System/nutrizen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Documentation
                </a>
              </Button>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="mt-20 pt-16 border-t border-s3/20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-s2 rounded-2xl flex items-center justify-center border-2 border-s3 hover:border-s4 transition-colors">
                  <span className="text-2xl">🤖</span>
                </div>
                <h4 className="text-sm font-semibold text-p4 uppercase tracking-wider">
                  AI Integration
                </h4>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-s2 rounded-2xl flex items-center justify-center border-2 border-s3 hover:border-s4 transition-colors">
                  <span className="text-2xl">🏆</span>
                </div>
                <h4 className="text-sm font-semibold text-p4 uppercase tracking-wider">
                  Daily Achievements
                </h4>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-s2 rounded-2xl flex items-center justify-center border-2 border-s3 hover:border-s4 transition-colors">
                  <span className="text-2xl">✨</span>
                </div>
                <h4 className="text-sm font-semibold text-p4 uppercase tracking-wider">
                  Magical Diet Experience
                </h4>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-s2 rounded-2xl flex items-center justify-center border-2 border-s3 hover:border-s4 transition-colors">
                  <span className="text-2xl">📊</span>
                </div>
                <h4 className="text-sm font-semibold text-p4 uppercase tracking-wider">
                  Progress Tracking
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-32 max-lg:py-24 max-md:py-16">
        <div className="container">
          <div className="text-center mb-20">
            <div className="caption text-center mb-5">Join Us</div>
            <h2 className="text-4xl font-bold text-p4 mb-7 max-md:text-3xl">
              Be Part of Something Amazing
            </h2>
            <p className="text-lg text-p5 max-w-2xl mx-auto">
              NutriZen is built by passionate developers and health enthusiasts.
              Join our community and help shape the future of nutrition
              technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-s2/50 border border-s3/30 rounded-3xl p-8 text-center hover:border-s4/50 transition-colors group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-p1 to-p2 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-s1 text-2xl">💬</span>
              </div>
              <h3 className="text-2xl font-bold text-p4 mb-4">
                Discord Community
              </h3>
              <p className="text-p5 mb-6 leading-relaxed">
                Connect with other users, get support, share your journey, and
                stay updated with the latest news and features.
              </p>
              <Button variant="primary">
                <a
                  href="https://discord.gg/nutrizen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Discord
                </a>
              </Button>
            </div>

            <div className="bg-s2/50 border border-s3/30 rounded-3xl p-8 text-center hover:border-s4/50 transition-colors group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-p3 to-p1 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-s1 text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-p4 mb-4">
                Contribute on GitHub
              </h3>
              <p className="text-p5 mb-6 leading-relaxed">
                Help us build the best nutrition app ever. Contribute code,
                report issues, suggest features, or improve documentation.
              </p>
              <Button variant="secondary">
                <a
                  href="https://github.com/Coffee-System/nutrizen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="inline-block bg-s2/50 border border-s3/30 rounded-3xl p-12 max-w-2xl">
              <h3 className="text-3xl font-bold text-p4 mb-6">
                Ready to Transform Your Diet?
              </h3>
              <p className="text-lg text-p5 mb-8">
                Join thousands of users who are already improving their health
                with NutriZen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary">Download App</Button>
                <Button variant="secondary">
                  <a
                    href="https://discord.gg/nutrizen"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Community
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-s3/20">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="text-p5 text-sm">
                Copyright © 2024 Coffee System
              </span>
            </div>

            <div className="flex items-center space-x-8 mb-4 md:mb-0">
              <a
                href="/privacy"
                className="text-p5 hover:text-p1 transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-p5 hover:text-p1 transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="https://discord.gg/nutrizen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-s2 border border-s3/30 rounded-full flex items-center justify-center hover:border-s4 transition-colors"
              >
                <span className="text-p1">💬</span>
              </a>
              <a
                href="https://github.com/Coffee-System/nutrizen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-s2 border border-s3/30 rounded-full flex items-center justify-center hover:border-s4 transition-colors"
              >
                <span className="text-p1">🚀</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
