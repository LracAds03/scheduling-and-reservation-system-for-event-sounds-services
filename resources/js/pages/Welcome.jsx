

export default function Welcome() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">🎧 Schedule Your Perfect Sound Experience</h1>
      <p className="text-lg text-gray-300 mb-6 text-center max-w-xl">
        Professional audio solutions for events of any size. 
        From intimate gatherings to massive concerts, we make your sound dreams reality.
      </p>
      <a
        href="/login"
        className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold"
      >
        Get Started Today
      </a> 
    </div>
  );
}