


import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Group7 from './components/Group7';
import AiNativeSection from './components/AiNativeSection';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />

      {/* Spacer for absolute navbar */}
      <div className="h-[120px] lg:h-[96px]" />

      <Hero />
      <Group7 />
      <AiNativeSection />
    </main>
  );
}
