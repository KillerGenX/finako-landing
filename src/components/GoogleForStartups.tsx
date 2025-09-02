import Image from "next/image";

const GoogleForStartups: React.FC = () => {
  return (
    <section id="google-for-startups" className="py-4 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-slate-600 tracking-wider">
            Didukung Oleh
          </h2>
          <div className="mt-2 flex justify-center">
            <div className="relative h-24 w-96">
              <Image
                src="/images/google-for-startups.webp"
                alt="Google for Startups Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleForStartups;
