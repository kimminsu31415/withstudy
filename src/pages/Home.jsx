// App.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

//https://www.setpoint.io/

function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <Testimonials />
        <Resources />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="bg-darkestGreen absolute left-0 right-0 top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto flex items-center justify-between px-6 py-5">
        <a href="/" className="max-w-[120px]">
          {/* 로고 이미지 혹은 SVG */}
          <img src="/logo.svg" alt="Logo" className="h-auto w-full" />
        </a>
        <nav className="md:flex hidden space-x-6 text-sm font-medium text-white">
          <a href="/platform" className="transition hover:opacity-80">
            Technology
          </a>
          <a href="/customers" className="transition hover:opacity-80">
            Customers
          </a>
          <a href="/resources" className="transition hover:opacity-80">
            Resources
          </a>
          <a
            href="https://new.example.com"
            className="transition hover:opacity-80"
          >
            What's New
          </a>
        </nav>
        <div className="md:block hidden">
          <a
            href="/contact"
            className="rounded bg-blue-500 px-4 py-2 font-semibold text-white transition hover:bg-orange-600"
          >
            Speak with us
          </a>
        </div>
        {/* 모바일 메뉴 버튼 */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  const navigate = useNavigate();
  const handleTest4Page = () => {
    navigate("/test4");
  };
  return (
    <section className="bg-darkestGreen mt-20 py-16 text-white">
      <div className="container mx-auto text-center">
        <h1 className="mb-4 text-4xl font-bold">
          The operating system for capital markets.
        </h1>
        <p className="mx-auto mb-6 max-w-xl text-lg">
          Setpoint embeds with borrowers and lenders to enhance debt facility
          management.
        </p>

        <button
          onClick={handleTest4Page}
          className="rounded bg-orange-500 px-6 py-3 font-semibold text-white transition duration-200 hover:bg-orange-600"
        >
          Test4
        </button>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-darkGreen py-16 text-white">
      <div className="container mx-auto">
        <h2 className="mb-8 text-center text-3xl font-bold">
          What our clients say
        </h2>
        <div className="space-y-8">
          {/* Testimonial 카드 예시 */}
          <div className="bg-darkestGreen mx-auto max-w-3xl rounded-lg p-8 shadow-lg">
            <blockquote className="text-xl italic leading-relaxed">
              "Setpoint offers quality capital markets operators with high data
              standards adept at configuring technology and services to meet
              individual facility needs. Their tech‐enabled processes translate
              to faster fundings and ongoing compliance."
            </blockquote>
            <p className="mt-4 text-center font-bold">
              Tier 1 Institutional Bank
            </p>
          </div>
          {/* 추가 카드들을 필요에 따라 삽입 */}
        </div>
      </div>
    </section>
  );
}

function Resources() {
  return (
    <section className="text-darkGreen bg-white py-16">
      <div className="container mx-auto">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Resources from Setpoint
        </h2>
        <div className="md:grid-cols-2 grid gap-8">
          {/* Resource 카드 예시 */}
          <div className="overflow-hidden rounded-xl border">
            <div className="aspect-[486/360] w-full bg-gray-100">
              <img
                src="/path/to/resource-image.jpg"
                alt="Resource"
                className="h-full w-full object-cover transition-opacity duration-200 hover:opacity-80"
              />
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-xl font-semibold">Resource Title</h3>
              <p className="mb-4 text-sm text-gray-600">
                Short description of the resource.
              </p>
              <a
                href="/resource-link"
                className="font-bold text-orange-500 hover:underline"
              >
                Read more
              </a>
            </div>
          </div>
          {/* 추가 리소스 카드들 */}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-taupe text-darkGreen py-12">
      <div className="md:grid-cols-3 container mx-auto grid grid-cols-1 gap-8">
        <div>
          <img src="/SP-Logo.svg" alt="Setpoint Logo" className="w-48" />
          <p className="mt-4 text-sm">© 2025 Setpoint. All rights reserved.</p>
        </div>
        <div>
          <h4 className="mb-4 text-lg font-bold">Solutions</h4>
          <ul className="space-y-2">
            <li>
              <a href="/platform" className="transition hover:opacity-75">
                Technology
              </a>
            </li>
            {/* 추가 링크 */}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-lg font-bold">Company</h4>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="transition hover:opacity-75">
                About
              </a>
            </li>
            <li>
              <a href="/careers" className="transition hover:opacity-75">
                Careers
              </a>
            </li>
            <li>
              <a href="/contact" className="transition hover:opacity-75">
                Contact
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="transition hover:opacity-75">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Home;
