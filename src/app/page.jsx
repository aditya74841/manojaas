"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  CircleCheck,
  Clock3,
  Leaf,
  Menu,
  PackageCheck,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Store,
  X,
} from "lucide-react";

const WHATSAPP_NUMBER = "919876543210";

const blends = [
  {
    id: "royal-gold",
    name: "Manojaas Royal Gold Blend",
    shortName: "Royal Gold Blend",
    tagline: "Rich Aroma & Golden Liquor",
    strength: 5,
    aroma: 5,
    description:
      "Crafted from the finest upper Assam CTC granules for a bold, full-bodied cup of chai with an unforgettable aroma.",
    prices: { "250g": 140, "500g": 270, "1kg": 520 },
    note: "The everyday classic",
    tone: "gold",
  },
  {
    id: "masala-elaichi",
    name: "Manojaas Kadak Masala & Elaichi",
    shortName: "Kadak Masala & Elaichi",
    tagline: "The Authentic Tapri & Ghar Wali Feeling",
    strength: 5,
    aroma: 4.5,
    description:
      "A robust everyday blend infused with natural crushed green cardamom and warm Indian spices for instant freshness.",
    prices: { "250g": 160, "500g": 300 },
    note: "A little spice, a lot of comfort",
    tone: "spice",
  },
];

const features = [
  {
    icon: Leaf,
    title: "Handpicked garden leaves",
    description:
      "A carefully chosen Assam CTC blend, selected for the bold cup Indian chai deserves.",
  },
  {
    icon: Sparkles,
    title: "Kadak swad, rich color",
    description:
      "A full-bodied brew with a beautiful golden-brown liquor — more satisfying cups from every spoon.",
  },
  {
    icon: ShieldCheck,
    title: "Nothing artificial",
    description:
      "No artificial colours or preservatives. Just honest chai, made for everyday moments.",
  },
  {
    icon: PackageCheck,
    title: "Freshness, sealed in",
    description:
      "Thoughtfully packed to help protect the aroma from the first cup to the last.",
  },
];

const brewingSteps = [
  {
    number: "01",
    title: "Boil water & milk",
    description: "Bring your preferred mix of water and milk to a gentle boil.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Add 1 tsp Manojaas",
    description: "Add one teaspoon of chaipatti for every cup you are making.",
    icon: Leaf,
  },
  {
    number: "03",
    title: "Simmer for 3 minutes",
    description: "Let the tea simmer until it reaches that rich golden colour.",
    icon: Clock3,
  },
  {
    number: "04",
    title: "Strain & enjoy",
    description: "Pour into your favourite cup and enjoy it while it is warm.",
    icon: Check,
  },
];

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#why-manojaas", label: "Why Manojaas" },
  { href: "#blends", label: "Our Blends" },
  { href: "#brewing-guide", label: "Brewing Guide" },
  { href: "#bulk-inquiry", label: "Bulk Inquiry" },
];

function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function WhatsAppLink({ message, children, className, ...props }) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}

function RatingMeter({ label, value }) {
  const percentage = (value / 5) * 100;

  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-ink/65">{label}</span>
        <span className="font-semibold text-forest">
          {value.toFixed(value % 1 ? 1 : 0)}
          <span className="font-normal text-ink/45"> / 5</span>
        </span>
      </div>
      <div
        className="h-2 overflow-hidden rounded-full bg-[#e9e1d5]"
        role="meter"
        aria-label={`${label} rating`}
        aria-valuemin={0}
        aria-valuemax={5}
        aria-valuenow={value}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-700"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

function BlendCard({ blend, index }) {
  const [selectedSize, setSelectedSize] = useState(Object.keys(blend.prices)[0]);
  const price = blend.prices[selectedSize];
  const packSizes = Object.keys(blend.prices);
  const message = `Hi Manojaas! I'd like to order ${blend.name} (${selectedSize}). Please share availability and delivery details.`;

  return (
    <article
      className={`blend-card overflow-hidden rounded-[2rem] border border-ink/10 bg-white shadow-[0_24px_70px_-45px_rgba(27,67,50,0.5)] ${
        index === 1 ? "md:mt-16" : ""
      }`}
    >
      <div className="blend-image relative min-h-[250px] overflow-hidden">
        <Image
          src="/images/tea-bg.png"
          alt="Fresh loose Assam tea leaves"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        <div
          className={`absolute inset-0 ${
            blend.tone === "gold"
              ? "bg-gradient-to-tr from-[#542f10]/75 via-[#a36b27]/15 to-[#f7d58b]/20"
              : "bg-gradient-to-tr from-[#3e1e11]/80 via-[#8a4926]/25 to-[#d7a162]/25"
          }`}
        />
        <div className="absolute inset-0 flex flex-col justify-between p-6 text-white sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <span className="rounded-full border border-white/30 bg-black/15 px-4 py-2 text-xs font-medium tracking-[0.12em] backdrop-blur-md">
              {blend.note}
            </span>
            <span className="grid size-11 place-items-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md">
              <Leaf size={19} aria-hidden="true" />
            </span>
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#ffdf9a]">
              Manojaas Signature Tea
            </p>
            <h3 className="max-w-sm font-serif text-3xl leading-tight sm:text-4xl">
              {blend.shortName}
            </h3>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <p className="mb-2 text-sm font-semibold text-amber-700">{blend.tagline}</p>
        <p className="min-h-[72px] text-sm leading-7 text-ink/65">
          {blend.description}
        </p>

        <div className="my-7 grid gap-5 sm:grid-cols-2">
          <RatingMeter label="Kadak strength" value={blend.strength} />
          <RatingMeter label="Tea aroma" value={blend.aroma} />
        </div>

        <div className="border-t border-ink/10 pt-6">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink/50">
                Choose your pack
              </p>
              <div className="flex gap-2" aria-label={`${blend.shortName} pack size`}>
                {packSizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    aria-pressed={selectedSize === size}
                    onClick={() => setSelectedSize(size)}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                      selectedSize === size
                        ? "border-forest bg-forest text-white"
                        : "border-ink/15 text-ink/70 hover:border-forest hover:text-forest"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-ink/50">Indicative price</p>
              <p className="font-serif text-3xl text-forest">
                ₹{price}
              </p>
            </div>
          </div>
          <p className="mb-5 text-xs leading-5 text-ink/45">
            Sample pricing for demonstration. Final price and availability are confirmed on WhatsApp.
          </p>
          <WhatsAppLink
            message={message}
            className="button-primary flex w-full items-center justify-center gap-2"
            aria-label={`Buy ${blend.name}, ${selectedSize}, on WhatsApp`}
          >
            <ShoppingBag size={17} aria-hidden="true" />
            Buy on WhatsApp
            <ArrowRight size={17} aria-hidden="true" />
          </WhatsAppLink>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [inquiry, setInquiry] = useState({
    name: "",
    phone: "",
    businessType: "Retail",
    city: "",
  });
  const [inquiryLink, setInquiryLink] = useState("");

  function updateInquiry(event) {
    const { name, value } = event.target;
    setInquiry((current) => ({ ...current, [name]: value }));
  }

  function submitInquiry(event) {
    event.preventDefault();
    const message = [
      "Hi Manojaas! I'm interested in a bulk supply inquiry.",
      `Name: ${inquiry.name.trim()}`,
      `Phone: ${inquiry.phone.trim()}`,
      `Business type: ${inquiry.businessType}`,
      `City: ${inquiry.city.trim()}`,
    ].join("\n");
    const link = whatsappUrl(message);
    setInquiryLink(link);
    window.open(link, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/95 backdrop-blur-xl">
        <nav
          className="page-wrap flex h-[76px] items-center justify-between"
          aria-label="Main navigation"
        >
          <a href="#home" className="brand-lockup" aria-label="Manojaas home">
            <span className="brand-mark">
              <Leaf size={22} strokeWidth={1.8} aria-hidden="true" />
            </span>
            <span>
              <span className="block font-serif text-[25px] leading-none text-forest">
                Manojaas
              </span>
              <span className="mt-1 hidden text-[9px] font-semibold uppercase tracking-[0.21em] text-ink/50 sm:block">
                Har Subah Ki Kadak Shuruat
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>

          <WhatsAppLink
            message="Hi Manojaas! I'd love to know more about your chaipatti."
            className="button-primary hidden items-center gap-2 !px-5 !py-3 lg:flex"
          >
            <span>Order on WhatsApp</span>
            <ArrowRight size={16} aria-hidden="true" />
          </WhatsAppLink>

          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-ink/15 text-forest lg:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>
        {menuOpen && (
          <div className="border-t border-ink/10 bg-cream px-5 pb-5 pt-3 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-ink/10 py-3 text-sm font-medium text-ink/75"
                >
                  {link.label}
                </a>
              ))}
              <WhatsAppLink
                message="Hi Manojaas! I'd love to know more about your chaipatti."
                className="button-primary mt-4 flex items-center justify-center gap-2"
              >
                Order on WhatsApp <ArrowRight size={16} aria-hidden="true" />
              </WhatsAppLink>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="hero-section scroll-mt-24">
          <div className="page-wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow-pill">
                <span className="size-2 rounded-full bg-amber-600" />
                100% Garden Fresh Assam CTC Tea
              </div>
              <h1 className="mt-7 max-w-[680px] font-serif text-[clamp(3.2rem,7vw,6.1rem)] leading-[0.99] tracking-[-0.045em] text-forest">
                Experience the real taste of{" "}
                <span className="text-amber-700">kadak Indian chai.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-ink/65">
                Manojaas brings pure, aromatic and strong chaipatti from the
                gardens to your cup. A little ritual, a lot of comfort — just
                the way chai should be.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#blends" className="button-primary">
                  Explore our 2 signature blends
                  <ArrowDown size={17} aria-hidden="true" />
                </a>
                <WhatsAppLink
                  message="Hi Manojaas! I'd like to order a sample of your signature chai blends."
                  className="button-secondary"
                >
                  Order a sample
                  <ArrowRight size={17} aria-hidden="true" />
                </WhatsAppLink>
              </div>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink/55">
                <span className="inline-flex items-center gap-2">
                  <CircleCheck size={17} className="text-forest" aria-hidden="true" />
                  Honest ingredients
                </span>
                <span className="inline-flex items-center gap-2">
                  <CircleCheck size={17} className="text-forest" aria-hidden="true" />
                  Made for Indian chai
                </span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-photo relative">
                <Image
                  src="/images/tea-bg.png"
                  alt="A bowl of fresh, dark Assam tea leaves"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 48vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b2117]/55 via-transparent to-[#1b2117]/5" />
                <div className="absolute bottom-7 left-7 right-7 text-white sm:bottom-9 sm:left-9">
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f5d69c]">
                    From our gardens to your home
                  </span>
                  <p className="mt-3 max-w-sm font-serif text-3xl leading-tight sm:text-4xl">
                    Good chai makes room for good conversations.
                  </p>
                </div>
              </div>
              <div className="trust-card trust-card-top">
                <span className="trust-icon"><Leaf size={18} /></span>
                <span><strong>100%</strong><small>Natural goodness</small></span>
              </div>
              <div className="trust-card trust-card-bottom">
                <span className="trust-icon trust-icon-gold"><Star size={18} /></span>
                <span><strong>Strong liquor</strong><small>Rich aroma · 5/5</small></span>
              </div>
              <div className="hero-stamp" aria-hidden="true">
                <span>Made for</span>
                <strong>Chai<br />Lovers</strong>
                <Leaf size={18} />
              </div>
            </div>
          </div>
          <div className="hero-bottom-note page-wrap">
            <span>Blended for your everyday ritual</span>
            <span className="hero-note-line" />
            <span>Rooted in the love of Indian chai</span>
          </div>
        </section>

        <section id="why-manojaas" className="section-pad scroll-mt-24 bg-sand">
          <div className="page-wrap">
            <div className="section-heading mx-auto max-w-2xl text-center">
              <p className="section-kicker">The Manojaas promise</p>
              <h2 className="section-title">
                Chai that feels like <em>coming home.</em>
              </h2>
              <p className="section-description">
                Simple goodness, a memorable aroma, and that satisfying kadak
                first sip — every detail is chosen with your daily cup in mind.
              </p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {features.map(({ icon: Icon, title, description }, index) => (
                <article className="feature-card" key={title}>
                  <span className={`feature-icon ${index % 2 ? "feature-icon-alt" : ""}`}>
                    <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <span className="mb-4 block text-xs font-semibold tracking-[0.15em] text-amber-700">
                    0{index + 1}
                  </span>
                  <h3 className="font-serif text-[23px] leading-tight text-forest">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-ink/60">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="blends" className="section-pad scroll-mt-24 bg-cream">
          <div className="page-wrap">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="section-kicker">Meet your new everyday favourites</p>
                <h2 className="section-title">
                  Two blends. <em>One perfect cup.</em>
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-ink/60">
                Pick your mood, choose your pack, and let the kettle do the rest.
                Prices shown are sample estimates.
              </p>
            </div>
            <div className="mt-10 grid items-start gap-6 lg:grid-cols-2 lg:gap-8">
              {blends.map((blend, index) => (
                <BlendCard key={blend.id} blend={blend} index={index} />
              ))}
            </div>
            <div className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-ink/50">
              <ShieldCheck size={15} aria-hidden="true" />
              Ask us about freshness, availability and delivery before ordering.
            </div>
          </div>
        </section>

        <section id="brewing-guide" className="section-pad scroll-mt-24 bg-forest text-white">
          <div className="page-wrap">
            <div className="section-heading mx-auto max-w-2xl text-center">
              <p className="section-kicker !text-[#e7b66b]">A little ritual, perfected</p>
              <h2 className="section-title !text-cream">
                The perfect cup, <em>in four steps.</em>
              </h2>
              <p className="section-description !text-white/65">
                Make a cup that is rich, warming and just the right kind of kadak.
              </p>
            </div>
            <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="brew-line" aria-hidden="true" />
              {brewingSteps.map(({ number, title, description, icon: Icon }) => (
                <article key={number} className="brew-step">
                  <span className="brew-step-icon">
                    <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <span className="mt-6 block text-xs font-semibold tracking-[0.2em] text-[#e7b66b]">
                    STEP {number}
                  </span>
                  <h3 className="mt-2 font-serif text-2xl text-cream">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">{description}</p>
                </article>
              ))}
            </div>
            <div className="mt-12 text-center">
              <a
                href="#blends"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#f4d293] transition hover:text-white"
              >
                Find your perfect blend <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="section-pad bg-[#f7f0e5]">
          <div className="page-wrap story-grid">
            <div className="story-image-wrap">
              <div className="story-image relative">
                <Image
                  src="/images/tea-bg.png"
                  alt="Tea leaves selected for a comforting cup of chai"
                  fill
                  sizes="(max-width: 768px) 90vw, 44vw"
                  className="object-cover"
                />
              </div>
              <div className="story-note">
                <Leaf size={20} aria-hidden="true" />
                <span>Rooted in chai.<br /><strong>Made with care.</strong></span>
              </div>
            </div>
            <div className="story-copy">
              <p className="section-kicker">A little about us</p>
              <h2 className="section-title">
                Some things are better <em>shared over chai.</em>
              </h2>
              <p className="mt-6 text-base leading-8 text-ink/65">
                Manojaas began with a simple love: the comfort of a freshly
                brewed cup of Indian chai. We believe a good cup is never just
                tea — it is the pause before the day begins, the welcome after
                a long one, and the reason conversations linger.
              </p>
              <p className="mt-4 text-base leading-8 text-ink/65">
                That is why we are bringing together bold Assam CTC tea and
                familiar Indian flavours with care and honesty. No fuss, no
                shortcuts — just chaipatti made for the way we love our chai.
              </p>
              <a href="#bulk-inquiry" className="story-link">
                Let’s talk chai <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section id="bulk-inquiry" className="section-pad scroll-mt-24 bg-cream">
          <div className="page-wrap">
            <div className="bulk-panel">
              <div className="bulk-copy">
                <span className="bulk-icon"><Store size={23} aria-hidden="true" /></span>
                <p className="section-kicker !text-[#f4d293]">For businesses & chai makers</p>
                <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl">
                  Let’s make more <em className="text-[#f4d293]">chai moments.</em>
                </h2>
                <p className="mt-5 max-w-lg text-base leading-7 text-white/70">
                  A kirana store, café, tea stall or distributor? Tell us a little
                  about your business and we’ll get back to you on WhatsApp.
                </p>
                <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-white/75">
                  <span className="inline-flex items-center gap-2"><Check size={16} className="text-[#f4d293]" />Flexible pack options</span>
                  <span className="inline-flex items-center gap-2"><Check size={16} className="text-[#f4d293]" />Personal support</span>
                </div>
              </div>

              <div className="inquiry-card">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl text-forest">Start an inquiry</h3>
                    <p className="mt-1 text-sm text-ink/55">We’ll connect with you on WhatsApp.</p>
                  </div>
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-sand text-forest">
                    <ArrowRight size={18} aria-hidden="true" />
                  </span>
                </div>
                <form onSubmit={submitInquiry} className="space-y-4">
                  <label className="form-label">
                    Your name
                    <input
                      name="name"
                      value={inquiry.name}
                      onChange={updateInquiry}
                      placeholder="e.g. Rohan Sharma"
                      autoComplete="name"
                      required
                      className="form-input"
                    />
                  </label>
                  <label className="form-label">
                    Phone number
                    <input
                      name="phone"
                      type="tel"
                      value={inquiry.phone}
                      onChange={updateInquiry}
                      placeholder="+91 98765 43210"
                      autoComplete="tel"
                      inputMode="tel"
                      pattern="[+0-9() -]{8,20}"
                      title="Enter a valid phone number."
                      required
                      className="form-input"
                    />
                  </label>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="form-label">
                      Business type
                      <span className="select-wrap">
                        <select
                          name="businessType"
                          value={inquiry.businessType}
                          onChange={updateInquiry}
                          className="form-input appearance-none"
                        >
                          <option>Retail</option>
                          <option>Cafe</option>
                          <option>Distributor</option>
                        </select>
                        <ChevronDown size={16} aria-hidden="true" />
                      </span>
                    </label>
                    <label className="form-label">
                      City
                      <input
                        name="city"
                        value={inquiry.city}
                        onChange={updateInquiry}
                        placeholder="Your city"
                        autoComplete="address-level2"
                        required
                        className="form-input"
                      />
                    </label>
                  </div>
                  <button type="submit" className="button-primary w-full">
                    Send inquiry on WhatsApp
                    <ArrowRight size={17} aria-hidden="true" />
                  </button>
                  {inquiryLink && (
                    <p role="status" className="rounded-xl bg-[#edf4eb] px-4 py-3 text-sm leading-6 text-forest">
                      Your inquiry is ready. If WhatsApp did not open,{" "}
                      <a
                        href={inquiryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold underline underline-offset-2"
                      >
                        continue to WhatsApp
                      </a>
                      .
                    </p>
                  )}
                  <p className="text-center text-xs leading-5 text-ink/45">
                    This form opens WhatsApp with your details. It does not submit
                    information to a website database.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#17392c] text-white">
        <div className="page-wrap grid gap-10 py-12 md:grid-cols-[1.4fr_0.8fr_1fr] md:py-16">
          <div>
            <a href="#home" className="brand-lockup">
              <span className="brand-mark !border-white/20 !bg-white/10 !text-[#f4d293]">
                <Leaf size={22} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <span>
                <span className="block font-serif text-[25px] leading-none text-white">
                  Manojaas
                </span>
                <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.21em] text-white/50">
                  Har Subah Ki Kadak Shuruat
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/60">
              A bold, aromatic cup of chaipatti, made for the moments that bring
              us together.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-2 text-xs text-white/65">
              <ShieldCheck size={15} className="text-[#f4d293]" aria-hidden="true" />
              FSSAI details: to be updated
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#f4d293]">
              Explore
            </h2>
            <div className="flex flex-col items-start gap-3">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="footer-link">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#f4d293]">
              Say hello
            </h2>
            <p className="text-sm leading-6 text-white/65">Indore, India</p>
            <a href="tel:+919876543210" className="footer-link mt-2 block">
              +91 98765 43210
            </a>
            <a href="mailto:hello@manojaas.example" className="footer-link mt-2 block">
              hello@manojaas.example
            </a>
            <WhatsAppLink
              message="Hi Manojaas! I'd like to get in touch."
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#f4d293] hover:text-white"
            >
              Chat on WhatsApp <ArrowRight size={15} aria-hidden="true" />
            </WhatsAppLink>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="page-wrap flex flex-col justify-between gap-2 py-5 text-xs text-white/45 sm:flex-row">
            <span>© {new Date().getFullYear()} Manojaas. All rights reserved.</span>
            <span>Har Subah Ki Kadak Shuruat.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
