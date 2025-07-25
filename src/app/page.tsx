import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gray-50 min-h-[80vh] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  No Excuses.
                  <span className="block text-black">Just Results.</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-lg">
                  Motivational athletic wear for those who refuse to quit. When others make excuses, you make progress. 
                  Wear your dedication, fuel your grind, and show the world what relentless looks like.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/shop" className="btn-primary text-center">
                    Shop Collection
                  </Link>
                  <Link href="/about" className="btn-outline text-center">
                    Learn More
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white aspect-square rounded-2xl shadow-lg overflow-hidden">
                  <Image
                    src="/teefront2.jpeg"
                    alt="CluelessFitness NO DAYS OFF T-Shirt"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why CluelessFitness Drives Results?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We create more than clothes - we fuel mindsets. Every piece is designed to remind you that average is not an option.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">💪</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Mental Toughness</h3>
                <p className="text-gray-600">
                  Gear that reminds you that comfort zones are where dreams go to die. Push harder, go further.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">🔥</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Relentless Quality</h3>
                <p className="text-gray-600">
                  Premium materials built to withstand your toughest workouts. No compromise, just excellence.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">No Days Off</h3>
                <p className="text-gray-600">
                  Fast delivery because your goals can't wait. When you're ready to work, we're ready to deliver.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Product Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Product
              </h2>
              <p className="text-xl text-gray-600">
                Fuel your motivation every day
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="bg-white aspect-square rounded-2xl shadow-lg overflow-hidden">
                    <Image
                      src="/teefront2.jpeg"
                      alt="CluelessFitness NO DAYS OFF T-Shirt"
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    NO DAYS OFF
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    The ultimate motivational statement for those who never quit. This premium tee embodies the relentless spirit of pushing boundaries and crushing goals. When everyone else rests, you grind. When others make excuses, you make progress. Wear your dedication with pride.
                  </p>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-black">£24.99</span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/shop/no-days-off" className="btn-primary text-center">
                      View Product
                    </Link>
                    <Link href="/shop" className="btn-outline text-center">
                      Browse All
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Stop Making Excuses?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the movement of relentless individuals who choose progress over comfort. 
              Every champion was once someone who refused to give up.
            </p>
            <Link href="/shop" className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Shop Now
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
