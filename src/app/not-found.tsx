import Link from "next/link";

export default function NotFound() {
  return (
    <div className="layout-container flex h-full grow flex-col">
      <div className="flex flex-1 justify-center py-5 px-4 sm:px-10 md:px-20 lg:px-40">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1 items-center justify-center min-h-[50vh]">
          {/* Added 404 Number */}
          <h1 className="text-[#4cf676] text-6xl md:text-8xl font-black leading-tight text-center">
            404
          </h1>
          <h1 className="text-white tracking-light text-3xl md:text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-2">
            Page Not Found
          </h1>
          <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4 text-center max-w-lg">
            The page you are looking for does not exist. Please check the URL or
            return to the homepage.
          </p>
          <div className="flex px-4 py-3 justify-center">
            <Link
              href="/"
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#4cf676] text-[#102315] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-80 transition-opacity"
            >
              <span className="truncate">Go to Homepage</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
