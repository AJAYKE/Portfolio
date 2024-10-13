import Hero from '@/components/Hero';
import { ScrollProvider } from '@/components/Providers/ScrollProvider';
import Works from '@/components/Work/Works';

export default function Page() {
  return (
    <ScrollProvider>
      <Hero />
      <Works />
      {/* <Contact /> */}
    </ScrollProvider>
  );
}
