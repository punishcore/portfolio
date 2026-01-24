import ImageCard from "@/app/components/ImageCard";
import profile from "@/app/assets/profile.jpeg"

export default function Home() {
  const DataImage = {
    img: profile,
    alt: 'profile',
    height: 100,
    width: 600
  }

  return (
    <>
      <div className="h-full px-6 md:px-16 lg:px-30">
        <section className="flex flex-col lg:flex-row lg:space-x-10 gap-8 lg:gap-0 w-full min-h-screen py-10 lg:py-0">
          <div className="flex justify-center lg:justify-end items-center w-full">
            <div>
              <ImageCard imagedatas={DataImage} />
            </div>
          </div>
          <div className="flex justify-center lg:justify-start items-center w-full text-center lg:text-left">
            <div>
              <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold">
                Arkadani Fathir Fahrezi
              </h1>
              <p className="text-base md:text-lg lg:text-xl mt-4 dark:text-neutral-300 text-neutral-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit autem eaque tempora pariatur in quas nam explicabo. Ipsa, amet ipsum. Pariatur cumque soluta quidem aspernatur ipsam nisi eveniet beatae sint.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
