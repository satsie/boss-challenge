'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { asset } from './asset';

const pageVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay,
    },
  }),
};

const TestimonialVideos = () => {
  const [activeVideo, setActiveVideo] = React.useState(null);
  const [showAll, setShowAll] = React.useState(false);

  const testimonials = [
    {
      id: 'beulah',
      name: 'Beulah',
      role: 'FROST',
      fundedBy: 'Vora & Second',
      vimeoId: '1147095147',
      thumbnail: '/img/boss-alum/beulah.jpg',
      quote: "This is the best program for jumpstarting your career in bitcoin open source",
    },
    {
      id: 'spacebear',
      name: 'Spacebear',
      role: 'PayJoin',
      fundedBy: 'Spiral',
      vimeoId: '1147090718',
      thumbnail: '/img/boss-alum/spacebear.png',
      quote: "BOSS challenge is hard, but fun and deeply rewarding",
    },
    {
      id: 'rob',
      name: 'Rob',
      role: 'BDK & Kyoto',
      fundedBy: '2140',
      vimeoId: '1147091055',
      thumbnail: '/img/boss-alum/rob.jpg',
      quote: "It allowed me to do a fun and rigorous course to transition my skills into bitcoin open source",
    },
    {
      id: 'david',
      name: 'David',
      role: 'Bitcoin Core',
      fundedBy: 'Localhost Research',
      vimeoId: '1147094819',
      thumbnail: '/img/boss-alum/david.jpg',
      quote: "It changed the trajectory of my career and now I get to work on awesome problems",
    },
    {
      id: 'rita',
      name: 'Rita',
      role: 'LDK Node',
      fundedBy: '₿trust',
      vimeoId: '1147090091',
      thumbnail: '/img/boss-alum/rita.jpg',
      quote: "The BOSS challenge really helped me think deeply about bitcoin",
    },
    {
      id: 'chuks',
      name: 'Chuks',
      role: 'LDK Node',
      fundedBy: '₿trust',
      vimeoId: '1147095372',
      thumbnail: '/img/boss-alum/chuks.jpg',
      quote: "BOSS program was really intense and fast paced... it really changed my life",
    },
    {
      id: 'janb84',
      name: 'Janb84',
      role: '₿OSS',
      fundedBy: 'OpenSats',
      vimeoId: '1147095655',
      thumbnail: '/img/boss-alum/janb.png',
      quote: "BOSS challenge was interesting and super challenging, it changed my life",
    },
    {
      id: 'macgyver',
      name: 'Macgyver',
      role: 'Silent Payments',
      fundedBy: 'Maelstrom & OpenSats',
      vimeoId: '1147095893',
      thumbnail: '/img/boss-alum/macgyver.png',
      quote: "The program was engaging... it changed my perspective and my life",
    },
    {
      id: 'marco',
      name: 'Marco',
      role: 'Bitcoin Core',
      fundedBy: 'Brink',
      vimeoId: '1147096953',
      thumbnail: '/img/boss-alum/marco.jpg',
      quote: "It's tough to get into open source on your own and this program was a good guide",
    },
    {
      id: 'martin',
      name: 'Martin',
      role: 'LDK',
      fundedBy: 'Spiral',
      vimeoId: '1147096902',
      thumbnail: '/img/boss-alum/martin.png',
      quote: "BOSS challenge was really motivating and challenging, it really changed my life",
    },
    {
      id: 'zealsham',
      name: 'Zealsham',
      role: 'PayJoin',
      fundedBy: '₿trust',
      vimeoId: '1147097189',
      thumbnail: '/img/boss-alum/zealsham.jpg',
      quote: "The program equipped me with the knowledge to work on bitcoin full time",
    },
    {
      id: 'rkrux',
      name: 'Rkrux',
      role: 'Bitcoin Core',
      fundedBy: 'Maelstrom',
      vimeoId: '1147097390',
      thumbnail: '/img/boss-alum/rkrux.jpg',
      quote: "Successfully completing the BOSS challenge changed my life",
    },
    {
      id: 'elnosh',
      name: 'Elnosh',
      role: 'LDK',
      fundedBy: 'OpenSats & Chaincode',
      vimeoId: '1147287190',
      thumbnail: '/img/boss-alum/elnosh.jpg',
      quote: "It truly changed my life, now I get to have the best job in the world",
    },
    {
      id: 'ram',
      name: 'Ram',
      role: 'Bitcoin Core',
      fundedBy: 'ANNOUNCED SOON',
      vimeoId: '1147927069',
      thumbnail: '/img/boss-alum/ram.jpg',
      quote: "It forced me to engage deeply with bitcoin fundamentals",
    },
    {
      id: 'sangbida',
      name: 'Sangbida',
      role: 'Core Lightning',
      fundedBy: 'Blockstream',
      vimeoId: '1147783903',
      thumbnail: '/img/boss-alum/sangbida.jpg',
      quote: "The BOSS challenge was enlightening, testing and inspiring",
    },
  ];

  const openVideo = (testimonial) => {
    setActiveVideo(testimonial);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  const remainingCount = testimonials.length;

  // close video on escape key
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeVideo();
    };
    if (activeVideo) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [activeVideo]);

  return (
    <>
      {/* Testimonials */}
      <div className="relative">
        <div 
          className={`overflow-hidden transition-all duration-500 ease-out ${
            showAll ? 'max-h-[5000px]' : 'max-h-[680px] sm:max-h-[720px] lg:max-h-[480px]'
          }`}
        >
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial, idx) => (
          <motion.div
            key={testimonial.id}
            className="group relative cursor-pointer"
            onClick={() => openVideo(testimonial)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            whileHover={{ y: -4 }}
          >
            <div className="notch notch-border overflow-hidden border border-boss-bg/15 [--notch-line:rgb(var(--boss-bg)/0.15)] group-hover:border-boss-bg/40 group-hover:[--notch-line:rgb(var(--boss-bg)/0.4)] transition-colors duration-300 h-full flex flex-col">
              
              <div className="relative aspect-video overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-boss-bg">
                  {testimonial.thumbnail ? (
                    <Image
                      src={asset(testimonial.thumbnail)}
                      alt={testimonial.name}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-4xl font-semibold text-boss-line">{testimonial.name[0]}</span>
                    </div>
                  )}
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-boss-bg/90 via-boss-bg/30 to-transparent" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="notch notch-sm relative w-12 h-12 md:w-14 md:h-14 bg-boss-bg/80 text-boss-text group-hover:bg-boss-accent group-hover:text-boss-on-accent flex items-center justify-center transition-colors duration-300">
                      <svg className="w-5 h-5 md:w-6 md:h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              <div className="p-4 relative flex flex-col flex-1">
                {/* Quote */}
                {testimonial.quote && (
                  <p className="text-boss-bg/70 text-xs italic mb-3 line-clamp-2">
                    "{testimonial.quote}"
                  </p>
                )}
                
                {/* Person info */}
                <div className="flex items-center gap-3 mt-auto">
                  <div className="notch notch-sm relative w-8 h-8 overflow-hidden flex-shrink-0 bg-boss-bg/15">
                    {testimonial.thumbnail ? (
                      <Image
                        src={asset(testimonial.thumbnail)}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-xs font-semibold text-boss-bg/70">{testimonial.name[0]}</span>
                      </div>
                    )}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-boss-bg font-semibold text-sm truncate">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs truncate">
                      {testimonial.fundedBy && <span className="text-boss-bg/70 font-medium">{testimonial.fundedBy}</span>}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
          </div>
        </div>

        {!showAll && (
          <div 
            className="absolute bottom-0 left-0 right-0 h-52 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, rgb(var(--boss-text)) 0%, rgb(var(--boss-text)) 20%, rgb(var(--boss-text) / 0.9) 50%, rgb(var(--boss-text) / 0) 100%)'
            }}
          />
        )}

        <div className={`flex justify-center ${showAll ? 'mt-8' : '-mt-8 relative z-10'}`}>
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="notch notch-border group inline-flex items-center gap-3 px-8 py-4 bg-boss-text text-boss-bg font-semibold border border-boss-bg/15 [--notch-line:rgb(var(--boss-bg)/0.15)] hover:border-boss-bg/40 hover:[--notch-line:rgb(var(--boss-bg)/0.4)] transition-colors duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>{showAll ? 'Show Less' : `View All ${testimonials.length} Stories`}</span>
            <motion.svg
              className="w-5 h-5 text-boss-bg/70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </motion.button>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-boss-bg/95 backdrop-blur-xl"
            onClick={closeVideo}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          
          <motion.div
            className="relative w-full max-w-5xl z-10"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 md:-top-14 md:-right-2 p-2 text-boss-muted hover:text-boss-text transition-colors group"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">Press ESC or click to close</span>
                <div className="notch notch-sm w-10 h-10 bg-boss-surface hover:bg-boss-line flex items-center justify-center transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
            </button>
            
            <div className="notch notch-lg relative aspect-video overflow-hidden bg-boss-bg">
              <iframe
                src={`https://player.vimeo.com/video/${activeVideo.vimeoId}?autoplay=1&title=0&byline=0&portrait=0&dnt=1`}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={`${activeVideo.name} testimonial`}
              />
            </div>
            
            <div className="mt-6">
              {/* Quote */}
              {activeVideo.quote && (
                <p className="text-boss-text text-lg italic mb-4">
                  "{activeVideo.quote}"
                </p>
              )}
              
              {/* Person info */}
              <div className="flex items-center gap-4">
                <div className="notch notch-sm relative w-12 h-12 overflow-hidden bg-boss-line">
                  {activeVideo.thumbnail ? (
                    <Image
                      src={asset(activeVideo.thumbnail)}
                      alt={activeVideo.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-lg font-semibold text-boss-muted">{activeVideo.name[0]}</span>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-boss-text text-lg font-bold">{activeVideo.name}</h3>
                  <p className="text-boss-muted text-sm">
                    {activeVideo.role}{activeVideo.fundedBy && <> · <span className="text-boss-code font-semibold">{activeVideo.fundedBy}</span></>}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

// Repeating topo map for section backgrounds — public/img/topo-tile.svg, from `npm run gen:topo`.
// Uniform (no fade) at roughly the hero map's density. The section needs `relative isolate`.
const TopoBackground = () => (
  <div
    aria-hidden="true"
    className="absolute inset-0 -z-10 opacity-[0.25] bg-repeat bg-top bg-[length:1632px_auto]"
    style={{ backgroundImage: `url(${asset('/img/topo-tile.svg')})` }}
  />
);

// Fades the topo map out under the hero text.
const heroTopoMask = {
  WebkitMaskImage: 'linear-gradient(90deg, rgba(0,0,0,.25) 0%, rgba(0,0,0,.25) 30%, #000 70%)',
  maskImage: 'linear-gradient(90deg, rgba(0,0,0,.25) 0%, rgba(0,0,0,.25) 30%, #000 70%)',
};

const Container = ({ className = '', children }) => (
  <div
    className={`mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 ${className}`}
  >
    {children}
  </div>
);

const SectionHeading = ({ eyebrow, title, align = 'left' }) => (
  <div
    className={`space-y-4 ${
      align === 'center' ? 'text-center' : 'text-left'
    }`}
  >
    {eyebrow && (
      <p className="text-xs md:text-sm font-medium uppercase tracking-[0.25em] text-boss-muted">
        {eyebrow}
      </p>
    )}
    <h2 className="text-2xl md:text-3xl lg:text-4xl lg:leading-snug font-semibold text-boss-text">
      {title}
    </h2>
  </div>
);

const FadeIn = ({ delay = 0, className = '', children }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-80px' }}
    variants={pageVariants}
    custom={delay}
  >
    {children}
  </motion.div>
);

const BossChallengeLanding = () => {
  const trackApplyClick = () => {
    if (typeof window !== 'undefined' && window.umami) {
      const referrer = document.referrer ? new URL(document.referrer).hostname : 'direct';
      window.umami.track(`apply_${referrer}`);
    }
  };

  return (
    <>
      <div className="bg-boss-bg text-boss-text relative">
        {/* Global grid pattern */}
        <div className="fixed z-0 inset-0 bg-[linear-gradient(rgb(var(--boss-line)/0.35)_1px,transparent_1px),linear-gradient(90deg,rgb(var(--boss-line)/0.35)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>
        
        <main className="relative z-1 pb-0 mb-0">
        {/* Navigation Header */}
        <motion.nav
          className="fixed top-0 left-0 right-0 z-50 bg-boss-bg border-b border-boss-line"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="flex items-center justify-between px-5 sm:px-12 py-5">
            {/* Logo */}
            <a href="#hero" className="font-ui font-extrabold text-lg md:text-xl leading-6 md:leading-6 whitespace-nowrap text-boss-text hover:text-boss-muted transition-colors">
              ₿OSS Challenge
            </a>

            {/* Navigation Links */}
            <div className="flex items-center gap-5 md:gap-8 text-sm md:text-base text-boss-muted">
              <a href="#about" className="hidden sm:inline hover:text-boss-text transition-colors">
                About
              </a>
              <a href="#alum" className="hidden sm:inline hover:text-boss-text transition-colors">
                Alum
              </a>
              <a href="#resources" className="hidden sm:inline hover:text-boss-text transition-colors">
                Resources
              </a>
              <Link href="/portfolioprojects" className="whitespace-nowrap hover:text-boss-text transition-colors">
                Portfolio Projects
              </Link>
              {/* <a
                href="https://job-boards.greenhouse.io/chaincodelabs/jobs/4055270009"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackApplyClick('nav')}
                className="notch notch-sm hidden sm:inline-flex items-center px-6 py-2.5 bg-boss-accent text-boss-on-accent font-display font-bold uppercase hover:bg-boss-accent-press transition-colors text-sm"
              >
                Apply
              </a> */}
            </div>
          </div>
        </motion.nav>

    {/* Hero Section — see docs/brand/new_hero/design_handoff_hero/README.md */}
    {/* Fills the first screen (min 680px on desktop); pt-16 clears the fixed nav so the text centers in the visible area. */}
    <section id="hero" className="relative overflow-hidden bg-boss-bg flex items-center pt-16 min-h-[100svh] min-[700px]:min-h-[max(680px,100svh)]">
      {/* Topographic background, generated by `npm run gen:topo`. Anchored top-right so the
          orange summit near the top of the map stays below the nav on wide screens. */}
      <div className="absolute inset-0 opacity-[0.55]" style={heroTopoMask} aria-hidden="true">
        <Image src={asset('/img/hero-topo.svg')} alt="" fill priority className="object-cover object-right-top" />
      </div>

      <div className="relative flex-1 flex flex-col gap-4 max-w-[1100px] mx-5 py-10 min-[700px]:ml-28 min-[700px]:mr-12">
        <p className="-mb-2 font-medium text-[length:clamp(14px,1.3vw,19px)] leading-none tracking-[0.16em] uppercase text-boss-muted">
          <a
            href="https://chaincode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-boss-muted/40 underline-offset-4 hover:text-boss-text hover:decoration-boss-text transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-boss-code focus-visible:outline-offset-[3px]"
          >
            Chaincode Labs
          </a>{' '}
          presents
        </p>
        {/* Logo from docs/brand/hero_logo.png, with its 16px transparent left edge trimmed so it aligns
            with the text; sized to the width the text headline had */}
        <h1 className="w-full max-w-[455px] min-[700px]:max-w-none min-[700px]:w-[clamp(455px,53vw,730px)]">
          <Image
            src={asset('/img/hero-logo.png')}
            alt="BOSS Challenge 2027"
            width={1812}
            height={864}
            priority
            className="w-full h-auto"
          />
        </h1>
        <p className="mt-[clamp(8px,1.5vw,24px)] font-ui font-medium text-[length:clamp(28px,3vw,46px)] leading-[1.12] text-boss-text">
          Start your career in bitcoin open source
        </p>
        <p className="text-[length:clamp(15px,1.4vw,20px)] leading-[1.6] text-boss-muted">
          An initiative for coders serious about contributing to bitcoin
          <br />
          January 11 - February 19
        </p>
        <a
          id="apply"
          href="https://docs.google.com/forms/d/e/1FAIpQLSew4DMO6OHLVVOgsyEog7cljOkjfBLC5mkBMyaz8abdtm_M1w/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackApplyClick('hero')}
          className="self-start mt-[22px] px-7 py-4 bg-boss-accent hover:bg-[#FFA436] active:bg-boss-accent-press text-boss-on-accent font-ui font-semibold text-[length:clamp(15px,1.3vw,19px)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-boss-code focus-visible:outline-offset-[3px]"
        >
          Join the waitlist
        </a>
      </div>
    </section>

    {/* Unified Gradient Background Wrapper for all sections after hero */}
    <div className="relative">
      
    {/* Program Overview Section */}
    <section id="about" className="py-24 md:py-32 lg:py-40 scroll-mt-20 relative overflow-hidden bg-boss-text text-boss-bg">
      
      <Container>
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <FadeIn delay={0.05}>
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-[length:min(72px,calc((100vw_-_40px)/5.2))] md:text-[96px] lg:text-[120px] leading-[0.95] font-bold text-boss-bg">
                ABOUT
              </h2>
            </div>
          </FadeIn>

          {/* Content and Image Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            {/* Left Column - Text Content */}
            <FadeIn delay={0.1}>
              <div className="space-y-8">
                
                {/* First paragraph with emphasis */}
                <div className="relative">
                  <p className="font-ui text-base md:text-lg text-boss-bg/70 leading-relaxed">
                    It's no secret that getting started in ₿OSS (Bitcoin Open Source Software) can be difficult. Sometimes it's not obvious where to begin, and other times it takes an extra nudge. No matter the situation, the <span className="font-semibold text-boss-bg">₿OSS Challenge is ready to tackle obstacles</span> like these by providing guidance and scaffolding for the journey.
                  </p>
                </div>

                {/* Divider */}
                <div className="w-16 h-1 bg-boss-accent"></div>

                {/* Second paragraph */}
                <div className="relative">
                  <p className="font-ui text-base md:text-lg text-boss-bg/70 leading-relaxed">
                    At the heart of the challenge is a set of <span className="font-semibold text-boss-bg">programming exercises and hands-on activities</span> spanning the course of a month. Once that month is complete, participants that are ready to continue the adventure have the opportunity to <span className="font-semibold text-boss-bg">extend the program for two additional months</span>.
                  </p>
                </div>

              </div>
            </FadeIn>

            {/* Right Column - Technical Diagram */}
            <FadeIn delay={0.12} className="hidden lg:block">
              <div className="notch notch-lg relative w-full h-full min-h-[400px] overflow-hidden">
                <Image
                  src={asset('/img/about.webp')}
                  alt="A dark hallway leading to a lit desk with a laptop at night"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>

          {/* Top Performers Card - Below Content and Image
          <FadeIn delay={0.15}>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#FFF9F0] to-[#FFF3E0] border border-[#FED136]/20 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(254,209,54,0.15)] transition-all duration-300">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start gap-5 md:gap-6">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[#FED136] to-[#FEC503] flex items-center justify-center shadow-md">
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-[#191919]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-[#191919] mb-2">
                      Top Performers Get Extra Support
                    </h3>
                    <p className="text-sm md:text-base text-[#191919]/80 leading-relaxed">
                      Top performers from month 1 may be offered <span className="font-semibold text-boss-bg">extra support and 1:1 mentorship</span> during months 2 and 3, with the goal of <span className="font-semibold text-boss-bg">securing full-time funding</span> in the ₿OSS ecosystem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn> */}
        </div>
      </Container>
    </section>


    {/* How It Works Section - Redesigned with Full-Width Image */}
    <section className="py-24 md:py-32 lg:py-40 relative isolate overflow-hidden bg-boss-bg">
      <TopoBackground />
      {/* Section Header - Contained */}
      <Container>
        <div className="max-w-7xl mx-auto">
          <FadeIn delay={0.05}>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-[length:min(72px,calc((100vw_-_40px)/5.2))] md:text-[96px] lg:text-[120px] leading-[0.95] font-bold text-boss-text mb-4">
                HOW IT WORKS
              </h2>
              <p className="text-lg md:text-xl text-boss-muted max-w-3xl mx-auto">
                A structured 3-month journey from learning to contributing
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>

      {/* Main Content: 3 Levels with alternating card/image layout */}
      <Container>
        <div className="max-w-7xl mx-auto space-y-8 lg:space-y-12">
          
          {/* Level 1: Month 1 Card on left, Image on right */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Month 1 Card */}
            <FadeIn delay={0.1}>
              <div className="notch notch-lg notch-border group lg:h-full lg:flex lg:flex-col lg:justify-end bg-boss-surface border border-boss-line p-6 hover:border-boss-muted hover:[--notch-line:rgb(var(--boss-muted))] transition-colors duration-300">
                {/* Month Badge */}
                <div className="notch notch-sm inline-flex items-center justify-center w-14 h-14 bg-boss-bg border border-boss-line mb-4">
                  <span className="font-display text-2xl font-bold text-boss-text">1</span>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-boss-text mb-2">
                  Month One
                </h3>
                
                {/* Subtitle */}
                <div className="flex items-center gap-2 mb-3 text-sm font-semibold uppercase tracking-wide text-boss-muted">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Foundation & Core Learning
                </div>

                {/* Description */}
                <p className="font-ui text-base text-boss-muted leading-relaxed">
                  {/* Chaincode curates each cohort, arranges curriculum, and provides ongoing support. Expect to prep for <strong className="text-boss-text font-semibold">minimum 10 hours per week</strong>. Taught and mentored by ₿OSS contributors with async chat discussions and support throughout. */}
                  Chaincode curates each cohort, arranges curriculum, and provides ongoing support throughout the program. You will be expected to prep for a  <strong className="text-boss-text font-semibold">minimum 10 hours per week</strong>. Outside of the first week, there are no scheduled calls. This program will be taught and mentored by ₿OSS contributors that have stood in your shoes. Throughout the week, there will be async chat discussions and support. If you are willing to do the work, we'll give you what you need to get to where you want to go.
                </p>
              </div>
            </FadeIn>

            {/* Image - Stage 1 */}
            <FadeIn delay={0.15}>
              <div className="notch notch-lg relative aspect-square w-full max-w-xl mx-auto lg:max-w-none lg:h-full overflow-hidden">
                <Image
                  src={asset('/img/stage1.webp')}
                  alt="Stage 1 - Foundation & Core Learning"
                  fill
                  className="object-cover object-[center_35%]"
                />
              </div>
            </FadeIn>
          </div>

          {/* Level 2: Image on left, Month 2-3 Card on right */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Image - Stage 2 */}
            <FadeIn delay={0.2} className="order-2 lg:order-1">
              <div className="notch notch-lg relative aspect-square w-full max-w-xl mx-auto lg:max-w-none lg:h-full overflow-hidden">
                <Image
                  src={asset('/img/stage2-square.webp')}
                  alt="Stage 2 - Advanced Programs & Partnerships"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>

            {/* Months 2-3 Card */}
            <FadeIn delay={0.25} className="order-1 lg:order-2">
              <div className="notch notch-lg notch-border group lg:h-full lg:flex lg:flex-col lg:justify-end bg-boss-surface border border-boss-line p-6 hover:border-boss-muted hover:[--notch-line:rgb(var(--boss-muted))] transition-colors duration-300">
                {/* Month Badge */}
                <div className="notch notch-sm inline-flex items-center justify-center w-14 h-14 bg-boss-bg border border-boss-line mb-4">
                  <span className="font-display text-lg font-bold text-boss-text">2-3</span>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-boss-text mb-2">
                  Months 2 & 3
                </h3>
                
                {/* Subtitle */}
                <div className="flex items-center gap-2 mb-3 text-sm font-semibold uppercase tracking-wide text-boss-muted">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Advanced Programs & Partnerships
                </div>

                {/* Description */}
                <p className="font-ui text-base text-boss-muted leading-relaxed">
                  You will have the opportunity to participate in a program with a partner organization. Chaincode will also run a seminar and provide a list of supplemental resources. Advanced participants may be selected for additional opportunities.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Level 3: Your Journey Card on left, Image on right */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Your Journey Card */}
            <FadeIn delay={0.3}>
              <div className="notch notch-lg notch-border group lg:h-full lg:flex lg:flex-col lg:justify-end bg-boss-surface border border-boss-line p-6 hover:border-boss-muted hover:[--notch-line:rgb(var(--boss-muted))] transition-colors duration-300">
                {/* Icon Badge — the section's one orange highlight */}
                <div className="notch notch-sm inline-flex items-center justify-center w-14 h-14 bg-boss-accent mb-4">
                  <svg className="w-7 h-7 text-boss-on-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-boss-text mb-2">
                  Your Journey
                </h3>
                
                {/* Subtitle */}
                <div className="flex items-center gap-2 mb-3 text-sm font-semibold uppercase tracking-wide text-boss-muted">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Beyond the Program
                </div>

                {/* Description */}
                <p className="font-ui text-base text-boss-muted leading-relaxed">
                  The journey to becoming a <strong className="text-boss-text font-semibold">full-time ₿OSS contributor</strong> is long, winding, and different for everybody. It is not a straight path. This challenge is not only designed to give you some supports along the way, but to foster the proactive, self-starter spirit that is required in open source. Join the challenge and see how far you can go!
                </p>
              </div>
            </FadeIn>

            {/* Image - Stage 3 */}
            <FadeIn delay={0.35}>
              <div className="notch notch-lg relative aspect-square w-full max-w-xl mx-auto lg:max-w-none lg:h-full overflow-hidden">
                <Image
                  src={asset('/img/stage3-square.webp')}
                  alt="Stage 3 - Your Journey"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>

        </div>
      </Container>

    </section>



    {/* Video Testimonials Section */}
    <section className="py-24 md:py-32 lg:py-40 scroll-mt-20 relative overflow-hidden bg-boss-text text-boss-bg">
      <Container>
        <div className="max-w-7xl mx-auto relative z-[1]">
          <FadeIn delay={0.05}>
            <div className="text-center mb-16 md:mb-20">

              <h2 className="text-[length:min(72px,calc((100vw_-_40px)/5.2))] md:text-[96px] lg:text-[120px] leading-[0.95] font-bold text-boss-bg mb-4">
                TESTIMONIALS
              </h2>
              <p className="text-lg md:text-xl text-boss-bg/70 max-w-2xl mx-auto">
              Hear from our alumni
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <TestimonialVideos />
          </FadeIn>
        </div>
      </Container>
    </section>

    {/* Unified Alumni Section */}
    <section id="alum" className="py-24 md:py-32 lg:py-40 scroll-mt-20 relative isolate overflow-hidden bg-boss-bg">
      <TopoBackground />
      <Container>
        <div className="max-w-7xl mx-auto relative z-[1]">
          {/* Main Section Heading */}
          <FadeIn delay={0.05}>
            <div className="text-center mb-20">
              <h2 className="text-[length:min(72px,calc((100vw_-_40px)/5.2))] md:text-[96px] lg:text-[120px] leading-[0.95] font-bold text-boss-text mb-4">
                ₿OSS ALUMNI
            </h2>
              <p className="text-lg md:text-xl text-boss-muted max-w-2xl mx-auto">
                Meet the talented developers who have completed the challenge and are now contributing to bitcoin open source projects
              </p>
            </div>
          </FadeIn>

          {/* Alumni Card Component */}
          {(() => {
            const AlumniCard = ({ alum }) => (
                <div
                  key={alum.name}
                  onClick={() => window.open(alum.github, '_blank')}
                  className="notch notch-lg notch-border group block border border-boss-line bg-boss-surface p-6 hover:border-boss-muted hover:[--notch-line:rgb(var(--boss-muted))] transition-colors cursor-pointer"
                >
                  <div className="flex flex-col items-center gap-4 text-center">
                    {/* Profile Image */}
                    <div className="notch relative w-32 h-32 overflow-hidden bg-boss-line">
                      <Image
                        src={asset(`/img/boss-alum/${alum.image}`)}
                        alt={alum.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Name and Info */}
                  <div className="space-y-2 w-full">
                      <div className="flex items-center justify-center gap-2">
                        <h3 className="text-lg font-bold text-boss-text">{alum.name}</h3>
                        
                      {/* Social Icons */}
                        <span 
                          className="text-boss-muted group-hover:text-boss-text transition-colors"
                          title="GitHub"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </span>
                        {alum.blog && (
                          <span 
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              window.open(alum.blog, '_blank');
                            }}
                            className="text-boss-muted hover:text-boss-text transition-colors cursor-pointer"
                            title="Blog"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-boss-muted leading-relaxed">
                      {(() => {
                        // Handle funding info
                        let fundingContent;
                        if (alum.name === 'Rob') {
                          fundingContent = (
                            <>
                              Funded by{' '}
                              <a href={alum.fundedByUrl} target="_blank" rel="noopener noreferrer" className="text-boss-code font-semibold hover:underline" onClick={(e) => e.stopPropagation()}>BDK Foundation</a>
                            {', '}
                              <a href={alum.fundedByUrl2} target="_blank" rel="noopener noreferrer" className="text-boss-code font-semibold hover:underline" onClick={(e) => e.stopPropagation()}>OpenSats</a>
                            {', and '}
                              <a href={alum.fundedByUrl3} target="_blank" rel="noopener noreferrer" className="text-boss-code font-semibold hover:underline" onClick={(e) => e.stopPropagation()}>2140</a>
                            </>
                          );
                        } else if (alum.name === 'David') {
                          fundingContent = (
                            <>
                              Funded by{' '}
                              <a href={alum.fundedByUrl} target="_blank" rel="noopener noreferrer" className="text-boss-code font-semibold hover:underline" onClick={(e) => e.stopPropagation()}>OpenSats</a>
                            {' and '}
                              <a href={alum.fundedByUrl2} target="_blank" rel="noopener noreferrer" className="text-boss-code font-semibold hover:underline" onClick={(e) => e.stopPropagation()}>localhost</a>
                            </>
                          );
                        } else if (alum.name === 'Elnosh') {
                          fundingContent = (
                            <>
                              Funded by{' '}
                              <a href={alum.fundedByUrl} target="_blank" rel="noopener noreferrer" className="text-boss-code font-semibold hover:underline" onClick={(e) => e.stopPropagation()}>OpenSats</a>
                              {' and '}
                              <a href={alum.fundedByUrl2} target="_blank" rel="noopener noreferrer" className="text-boss-code font-semibold hover:underline" onClick={(e) => e.stopPropagation()}>Chaincode</a>
                            </>
                          );
                        } else if (alum.name === 'Beulah') {
                          fundingContent = (
                            <>
                              Funded by{' '}
                              <a href={alum.fundedByUrl} target="_blank" rel="noopener noreferrer" className="text-boss-code font-semibold hover:underline" onClick={(e) => e.stopPropagation()}>Vora</a>
                              {' and '}
                              <a href={alum.fundedByUrl2} target="_blank" rel="noopener noreferrer" className="text-boss-code font-semibold hover:underline" onClick={(e) => e.stopPropagation()}>Second</a>
                            </>
                          );
                        } else if (alum.fundedByUrl) {
                          fundingContent = (
                            <>
                              Funded by{' '}
                              <a href={alum.fundedByUrl} target="_blank" rel="noopener noreferrer" className="text-boss-code font-semibold hover:underline" onClick={(e) => e.stopPropagation()}>{alum.fundedBy}</a>
                            </>
                          );
                        } else {
                          fundingContent = (
                            <>
                              Funded by <span className="text-boss-code font-semibold">{alum.fundedBy}</span>
                            </>
                          );
                        }

                        // Handle project info
                        let projectContent;
                        if (alum.name === 'Rob') {
                          projectContent = (
                            <>
                        {' to contribute to '}
                              <a href={alum.projectUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-boss-text hover:underline" onClick={(e) => e.stopPropagation()}>BDK</a>
                              {' and '}
                              <a href={alum.projectUrl2} target="_blank" rel="noopener noreferrer" className="font-semibold text-boss-text hover:underline" onClick={(e) => e.stopPropagation()}>kyoto</a>
                            </>
                          );
                        } else if (alum.name === 'Elnosh') {
                          projectContent = (
                            <>
                              {' to contribute to '}
                              <a href={alum.projectUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-boss-text hover:underline" onClick={(e) => e.stopPropagation()}>LDK</a>
                            {' and '}
                              <a href={alum.projectUrl2} target="_blank" rel="noopener noreferrer" className="font-semibold text-boss-text hover:underline" onClick={(e) => e.stopPropagation()}>Channel Jamming Research</a>
                            </>
                          );
                        } else {
                          projectContent = (
                            <>
                              {' to contribute to '}
                              <a href={alum.projectUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-boss-text hover:underline" onClick={(e) => e.stopPropagation()}>{alum.project}</a>
                            </>
                          );
                        }

                        return <>{fundingContent}{projectContent}</>;
                      })()}
                </p>
              </div>
                  </div>
                </div>
            );

            return (
              <>
                {/* 2025 Alumni Subsection */}
                <FadeIn delay={0.1}>
                  <div className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-boss-line"></div>
                      <div className="flex items-center gap-3">
                        <span className="notch notch-sm inline-flex items-center justify-center px-3 h-10 bg-boss-surface border border-boss-line text-boss-code font-display font-bold text-lg">2025</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-boss-text">₿OSS Alumni</h3>
            </div>
                      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-boss-line"></div>
        </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[
                        { name: 'Sangbida', image: 'sangbida.jpg', github: 'https://github.com/sangbida', fundedBy: 'Blockstream', fundedByUrl: 'https://blockstream.com/', project: 'Core Lightning', projectUrl: 'https://github.com/ElementsProject/lightning' },
                        { name: 'Daniel', image: 'daniel.jpg', github: 'https://github.com/purplekarrot', fundedBy: 'Spiral', fundedByUrl: 'https://spiral.xyz', project: 'Bitcoin Core', projectUrl: 'https://github.com/bitcoin/bitcoin' },
                        { name: 'Ben', image: 'ben.jpg', github: 'https://github.com/benalleng', fundedBy: 'Maelstrom', fundedByUrl: 'https://maelstrom.fund/bitcoin-grant-program/', project: 'PayJoin', projectUrl: 'https://github.com/payjoin/rust-payjoin/' },
                        { name: 'Zealsham', image: 'zealsham.jpg', github: 'https://github.com/zealsham/', fundedBy: '₿trust', fundedByUrl: 'https://btrust.tech', project: 'PayJoin', projectUrl: 'https://github.com/payjoin/rust-payjoin/' },
                        { name: 'MacGyver', image: 'macgyver.png', github: 'https://github.com/macgyver13', fundedBy: 'Maelstrom', fundedByUrl: 'https://maelstrom.fund/bitcoin-grant-program/', project: 'Silent Payments', projectUrl: 'https://silentpayments.xyz/' },
                        { name: 'Beulah', image: 'beulah.jpg', github: 'https://github.com/BEULAHEVANJALIN', fundedBy: 'Vora and Second', fundedByUrl: 'https://vora.io', fundedByUrl2: 'https://second.tech', project: 'FROST', projectUrl: 'https://github.com/BEULAHEVANJALIN/frost-td-prework' },
                        { name: 'Rita', image: 'rita.jpg', github: 'https://github.com/camillarhi', fundedBy: '₿trust', fundedByUrl: 'https://btrust.tech', project: 'LDK Node', projectUrl: 'https://github.com/lightningdevkit/ldk-node' },
                        { name: 'Janb84', image: 'janb.png', github: 'https://github.com/janb84', fundedBy: 'OpenSats', fundedByUrl: 'https://opensats.org', project: 'Bitcoin Core', projectUrl: 'https://github.com/bitcoin/bitcoin' },
                        { name: 'Chuks', image: 'chuks.jpg', github: 'https://github.com/chuksys', fundedBy: '₿trust', fundedByUrl: 'https://btrust.tech', project: 'LDK Node', projectUrl: 'https://github.com/lightningdevkit/ldk-node' },
                        { name: 'Elnosh', image: 'elnosh.jpg', github: 'https://github.com/elnosh', fundedBy: 'OpenSats and Chaincode', fundedByUrl: 'https://opensats.org', fundedByUrl2: 'https://chaincode.com', project: 'LDK and Channel Jamming Research', projectUrl: 'https://lightningdevkit.org/', projectUrl2: 'https://github.com/carlaKC/jam-ln/' },
                        { name: 'Martin', image: 'martin.png', github: 'https://github.com/martinsaposnic', fundedBy: 'Spiral', fundedByUrl: 'https://spiral.xyz/', project: 'LDK', projectUrl: 'https://github.com/lightningdevkit/rust-lightning' },
                        { name: 'Ram', image: 'ram.jpg', github: 'https://github.com/pseudoramdom', fundedBy: 'localhost', fundedByUrl: 'https://lclhost.org', project: 'Bitcoin Core', projectUrl: 'https://github.com/bitcoin/bitcoin' },
                      ].map((alum) => <AlumniCard key={alum.name} alum={alum} />)}
                    </div>
                  </div>
                </FadeIn>

                {/* Divider between years */}
                <div className="my-16 flex items-center justify-center">
                  <div className="flex items-center gap-4 w-full max-w-2xl">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent to-boss-line"></div>
                    <div className="w-2 h-2 rotate-45 bg-boss-line"></div>
                    <div className="flex-1 h-px bg-gradient-to-l from-transparent to-boss-line"></div>
                  </div>
                      </div>

                {/* 2024 Alumni Subsection */}
                <FadeIn delay={0.15}>
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-boss-line"></div>
                      <div className="flex items-center gap-3">
                        <span className="notch notch-sm inline-flex items-center justify-center px-3 h-10 bg-boss-surface border border-boss-line text-boss-code font-display font-bold text-lg">2024</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-boss-text">₿OSS Alumni</h3>
                    </div>
                      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-boss-line"></div>
                  </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {[
                        { name: 'Nick', image: 'nick.png', github: 'https://github.com/nyonson', blog: 'https://blog.yonson.dev', fundedBy: 'Spiral', fundedByUrl: 'https://spiral.xyz/', project: 'Rust Bitcoin', projectUrl: 'https://github.com/rust-bitcoin/' },
                        { name: 'Rob', image: 'rob.jpg', github: 'https://github.com/rustaceanrob', fundedBy: 'BDK Foundation, OpenSats, and 2140', fundedByUrl: 'https://bitcoindevkit.org/', fundedByUrl2: 'https://opensats.org', fundedByUrl3: 'https://2140.dev', project: 'BDK and kyoto', projectUrl: 'https://bitcoindevkit.org/', projectUrl2: 'https://github.com/rustaceanrob/kyoto' },
                        { name: 'David', image: 'david.jpg', github: 'https://github.com/davidgumberg', fundedBy: 'OpenSats and localhost', fundedByUrl: 'https://opensats.org', fundedByUrl2: 'https://lclhost.org/', project: 'Bitcoin Core', projectUrl: 'https://github.com/bitcoin/bitcoin' },
                        { name: 'Rkrux', image: 'rkrux.jpg', github: 'https://github.com/rkrux', fundedBy: 'Maelstrom', fundedByUrl: 'https://maelstrom.fund/bitcoin-grant-program/', project: 'Bitcoin Core', projectUrl: 'https://github.com/bitcoin/bitcoin' },
                        { name: 'Hodlinator', image: 'hodlinator.jpg', github: 'https://github.com/Hodlinator/', fundedBy: 'OpenSats', fundedByUrl: 'https://opensats.org', project: 'Bitcoin Core', projectUrl: 'https://github.com/bitcoin/bitcoin' },
                        { name: 'Tdb3', image: 'tdb3.png', github: 'https://github.com/tdb3', fundedBy: 'OpenSats', fundedByUrl: 'https://opensats.org', project: 'Bitcoin Core', projectUrl: 'https://github.com/bitcoin/bitcoin' },
                        { name: 'Spacebear', image: 'spacebear.png', github: 'https://github.com/spacebear21', fundedBy: 'Spiral', fundedByUrl: 'https://spiral.xyz/', project: 'PayJoin', projectUrl: 'https://github.com/payjoin/rust-payjoin/' },
                        { name: 'Marco', image: 'marco.jpg', github: 'https://github.com/marcofleon', fundedBy: 'Brink', fundedByUrl: 'https://brink.dev', project: 'Bitcoin Core', projectUrl: 'https://github.com/bitcoin/bitcoin' },
                      ].map((alum) => <AlumniCard key={alum.name} alum={alum} />)}
                </div>
            </div>
          </FadeIn>
              </>
            );
          })()}
        </div>
      </Container>
    </section>

    {/* Resources Section */}
    <section id="resources" className="py-24 md:py-32 lg:py-40 scroll-mt-20 relative overflow-y-visible overflow-x-clip bg-boss-text text-boss-bg">
      
      <Container>
        <div className="max-w-7xl mx-auto relative z-[1]">
          <FadeIn delay={0.05}>
            <div className="text-center mb-20">
              <h2 className="text-[length:min(72px,calc((100vw_-_40px)/5.2))] md:text-[96px] lg:text-[120px] leading-[0.95] font-bold text-boss-bg mb-4">
                LEARNING RESOURCES
              </h2>
              <p className="text-xl text-boss-bg/70">
                Free, world-class content to accelerate your Bitcoin journey
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
              {[
                {
                  title: 'Self Paced Seminars',
                  description: 'Materials are available for anyone to use with readings and discussion questions on various Bitcoin and Lightning topics.',
                  icon: '/img/lightning.png',
                  url: 'https://chaincode.gitbook.io/seminars/'
                },
                {
                  title: 'Onboarding to Bitcoin Core',
                  description: 'Covering both the technical components such as, architecture, consensus, validation, the wallet, P2P, and script, and also introduces the under-documented social aspects like PR etiquette and the decentralized development process.',
                  icon: '/img/bitcoin-core.png',
                  url: 'https://bitcoincore.academy'
                },
                {
                  title: 'Bitcoin Development Philosophy',
                  description: 'A guide for Bitcoin developers who already understand the basics of concepts and processes such as Proof-of-Work, block building, and the transaction life cycle, and who want to level up by gaining a deeper understanding of Bitcoin\'s design trade-offs and philosophy.',
                  icon: '/img/bitcoindev-philosophy.png',
                  url: 'https://bitcoindevphilosophy.com'
                },
                {
                  title: 'Rust for Bitcoiners',
                  description: 'Master the fundamentals of Rust and bitcoin. Start your journey to becoming a bitcoin rust contributor.',
                  icon: '/img/rust-for-bitcoiners.png',
                  url: 'https://btcdemy.thinkific.com'
                }
              ].map((resource, idx) => (
                <div
                  key={resource.title}
                  onClick={() => window.open(resource.url, '_blank')}
                  className="notch notch-lg notch-border group overflow-hidden border border-boss-bg/15 [--notch-line:rgb(var(--boss-bg)/0.15)] hover:border-boss-bg/40 hover:[--notch-line:rgb(var(--boss-bg)/0.4)] transition-colors flex flex-col h-full cursor-pointer"
                >
                  {/* Top Image Section */}
                  <div className="relative h-52 flex-shrink-0 bg-boss-bg overflow-hidden">
                    <Image
                      src={asset(resource.icon)}
                      alt={resource.title}
                      fill
                      className="object-cover"
                    />
                    {/* Arrow in top right */}
                    <div className="notch notch-sm absolute top-3 right-3 flex items-center justify-center w-8 h-8 bg-boss-bg/90 text-boss-text group-hover:bg-boss-accent group-hover:text-boss-on-accent transition-colors z-10">
                      <svg className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="relative p-6 flex flex-col flex-1">
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-boss-bg mb-3">
                        {resource.title}
                      </h3>
                      <p className="font-ui text-sm text-boss-bg/70 leading-relaxed line-clamp-3">
                        {resource.description}
                      </p>
                    </div>

                    {/* Learn More Link - Always at bottom */}
                    <div className="flex items-center gap-2 font-ui text-sm font-semibold text-boss-bg/70 group-hover:text-boss-bg transition-colors pt-4 mt-auto">
                      <span>Check it out</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>

    {/* About Chaincode Section */}
    <section className="pb-24 md:pb-32 lg:pb-40 relative overflow-hidden bg-boss-text text-boss-bg">
      
      <Container>
        <div className="max-w-7xl mx-auto relative z-[1]">
          <FadeIn delay={0.05}>
            <div className="text-center mb-20">
              <h2 className="text-[length:min(72px,calc((100vw_-_40px)/5.2))] md:text-[96px] lg:text-[120px] leading-[0.95] font-bold text-boss-bg mb-6">
              ABOUT CHAINCODE
            </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-boss-bg/30 to-transparent mx-auto"></div>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              {/* Chaincode Logo */}
              <div className="relative group">
                <div className="notch notch-lg notch-border w-full h-full min-h-[320px] md:min-h-[400px] bg-boss-bg border border-boss-bg p-10 md:p-12 flex items-center justify-center overflow-hidden">
                  <div className="relative w-full h-full z-10">
                  <Image
                    src={asset('/img/chaincode-logo.png')}
                    alt="Chaincode Labs"
                    fill
                      className="object-contain drop-shadow-2xl"
                  />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col">
                <div className="notch notch-lg notch-border border border-boss-bg/15 [--notch-line:rgb(var(--boss-bg)/0.15)] p-10 md:p-12 flex-1 flex flex-col justify-center">
                  {/* Decorative accent */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-px bg-gradient-to-r from-boss-bg/40 to-transparent"></div>
                    <div className="w-2 h-2 rotate-45 bg-boss-bg/40"></div>
                  </div>
                  
                <div className="space-y-6 font-ui text-base md:text-lg text-boss-bg/70 leading-relaxed">
                    <p>
                    Chaincode Labs is a Bitcoin research and development center based in New York City. We focus on the development of the bitcoin network and related technologies. A critical part of our work is creating a space for those seeking a solid foundation with which to contribute to the bitcoin ecosystem.
                  </p>
                    <p>
                    Since 2016, our residency program has helped to train and develop the next generation of Bitcoin and Lightning protocol and application engineers.
                  </p>
                  </div>
                  
                  {/* Bottom accent */}
                  <div className="flex items-center gap-3 mt-8 justify-end">
                    <div className="w-2 h-2 rotate-45 bg-boss-bg/40"></div>
                    <div className="w-12 h-px bg-gradient-to-l from-boss-bg/40 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>

    </div>
    {/* End of unified gradient wrapper */}


    {/* Footer */}
    <footer className="relative w-full bg-boss-bg border-t border-boss-line py-6 md:py-8 px-8 md:px-12 lg:px-16 xl:px-24">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-6">

        {/* Umami tracking notice */}
        <div className="text-sm text-boss-muted">
          <a 
            href="https://visits.bitcoindevs.xyz/share/ywq0vWouFt4XWH4d/bosschallenge.xyz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-boss-muted hover:text-boss-text transition-colors underline"
          >
            Public visit count
          </a>
        </div>

      </div>
    </footer>


        </main>
      </div>
    </>
  );
};

export default BossChallengeLanding;
