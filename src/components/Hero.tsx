import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "motion/react";

const isMobile = () => typeof window !== "undefined" && window.innerWidth < 768;

const VIDEO_DESKTOP = "https://res.cloudinary.com/deyyfnfxq/video/upload/q_auto,vc_auto,w_1280/v1780309002/download_1_imksli.mp4";
const VIDEO_MOBILE  = "https://res.cloudinary.com/deyyfnfxq/video/upload/q_auto,vc_auto,w_720/v1780317118/download_2_eica2h.mp4";
// First frame of the video served as JPEG - loads in ~100ms and acts as placeholder
const POSTER        = "https://res.cloudinary.com/deyyfnfxq/video/upload/so_0.0,q_auto,w_1280/v1780309002/download_1_imksli.jpg";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const videoRef     = useRef<HTMLVideoElement | null>(null);

  const [isLoaded,      setIsLoaded]      = useState(false);
  const [videoDuration, setVideoDuration] = useState(0);
  const [mobile,        setMobile]        = useState(false);

  useEffect(() => { setMobile(isMobile()); }, []);

  // ── Scroll tracking scoped to THIS section only ──────────────────────────
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Hero text fades out in the first 50% of the section scroll
  const heroOpacity = useTransform(scrollYProgress, [0, 0.35, 0.55], [1, 0.8, 0]);
  const heroY       = useTransform(scrollYProgress, [0, 0.55], [0, -80]);

  // Canvas zooms in as you scroll down, zooms out as you scroll back up
  const videoScale  = useTransform(scrollYProgress, [0, 1], [1, 1.25]);

  // ── Native-stream video load (no fetch/blob - first frame in ~300ms) ─────
  useEffect(() => {
    if (mobile) return; // mobile uses a plain <video> tag instead
    const src = VIDEO_DESKTOP;

    const video = document.createElement("video");
    video.preload     = "auto";
    video.src         = src;
    video.muted       = true;
    video.playsInline = true;
    // No crossOrigin needed - we only drawImage (no pixel readback)
    videoRef.current  = video;

    const onMeta = () => {
      setVideoDuration(video.duration || 5);
      setIsLoaded(true);
    };
    const onError = () => console.error("Hero video failed to load");

    video.addEventListener("loadedmetadata", onMeta);
    video.addEventListener("error", onError);
    video.load();

    return () => {
      video.removeEventListener("loadedmetadata", onMeta);
      video.removeEventListener("error", onError);
      video.src = "";
      video.load();
    };
  }, [mobile]);

  // Frame painting and interpolation loop
  useEffect(() => {
    if (mobile || !isLoaded || !videoRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const video  = videoRef.current;
    const ctx    = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let currentVideoTime = 0;
    let targetVideoTime  = 0;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr  = window.devicePixelRatio || 1;
      canvas.width  = rect.width  * dpr;
      canvas.height = rect.height * dpr;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const drawFrame = () => {
      if (!ctx || !canvas || !video) return;
      const vWidth  = video.videoWidth;
      const vHeight = video.videoHeight;
      if (!vWidth || !vHeight) return;

      const cWidth  = canvas.width;
      const cHeight = canvas.height;
      const vRatio  = vWidth / vHeight;
      const cRatio  = cWidth / cHeight;

      let dWidth = cWidth, dHeight = cHeight, offsetX = 0, offsetY = 0;

      if (cRatio > vRatio) {
        dHeight = cWidth / vRatio;
        offsetY = (cHeight - dHeight) / 2;
      } else {
        dWidth  = cHeight * vRatio;
        offsetX = (cWidth - dWidth) / 2;
      }

      ctx.clearRect(0, 0, cWidth, cHeight);
      try { ctx.drawImage(video, offsetX, offsetY, dWidth, dHeight); } catch { /* safe */ }
    };

    const tick = () => {
      if (videoDuration > 0) {
        const scrollVal  = scrollYProgress.get();
        targetVideoTime  = scrollVal * (videoDuration - 0.05);
        currentVideoTime += (targetVideoTime - currentVideoTime) * 0.15;
        if (Math.abs(targetVideoTime - currentVideoTime) < 0.001) {
          currentVideoTime = targetVideoTime;
        }
        video.currentTime = Math.max(0, Math.min(currentVideoTime, videoDuration));
      }
      drawFrame();
      animationFrameId = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isLoaded, videoDuration, scrollYProgress]);

  return (
    // h-[200vh] gives 1 full viewport of scroll-travel for the sticky canvas.
    // bg-white matches the About section so the empty lower half is invisible.
    <section
      ref={containerRef}
      className="relative h-[200dvh] w-full bg-white"
    >
      {/* Sticky canvas - stays fixed while you scroll through the 200dvh section */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">

        <motion.div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            scale: videoScale,
            transformOrigin: "center center",
            backgroundImage: `url(${POSTER})`,
          }}
        >
          {mobile ? (
            /* Mobile: plain autoplay video - no canvas overhead, loads instantly */
            <video
              src={VIDEO_MOBILE}
              autoPlay
              muted
              loop
              playsInline
              poster={POSTER}
              className="w-full h-full object-cover"
            />
          ) : (
            /* Desktop: canvas scroll-scrub */
            <canvas ref={canvasRef} className="w-full h-full object-cover" />
          )}
          {/* Mobile: soft full-screen wash so text stays readable without killing the video */}
          <div className="absolute inset-0 bg-white/60 md:hidden pointer-events-none z-10" />
          {/* Tablet+: directional gradient - left side white for text, right side transparent for video */}
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-white/95 via-white/40 to-transparent pointer-events-none z-10" />
          {/* Bottom fade - both breakpoints */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
        </motion.div>

        {/* Hero Text Overlay */}
        <div className="relative z-20 flex-grow flex items-center w-full max-w-7xl mx-auto px-6 md:px-12 pt-20 sm:pt-0 select-none">
          <div className="max-w-2xl w-full">
            <motion.div style={{ opacity: heroOpacity, y: heroY }} className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-[2rem] sm:text-5xl md:text-6xl font-sans font-extrabold tracking-tight text-slate-900 leading-[1.2]">
                  Know Your Numbers.<br />
                  <span className="font-serif italic font-semibold text-[#D4AF37]">Grow Profit.</span><br />
                  Save Big on Better Planning.
                </h1>
                <p className="text-sm sm:text-base text-slate-600 font-sans max-w-lg leading-relaxed">
                  Right from registration, accounting, and taxation, fund raising, MIS and compliance - we help Startups, MNCs, Listed Companies, SMEs and individuals stay compliant and financially confident.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4 items-center pt-2">
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-4 sm:px-5 py-2.5 sm:py-3 rounded bg-slate-950 text-white font-sans text-xs font-semibold tracking-wider hover:bg-slate-800 transition-all cursor-pointer shadow-md hover:shadow-lg"
                >
                  BOOK A CONSULTATION
                </button>
                <button
                  onClick={() => window.scrollTo({ top: window.innerHeight * 0.9, behavior: "smooth" })}
                  className="px-4 sm:px-5 py-2.5 sm:py-3 rounded bg-white hover:bg-slate-100 text-slate-900 border border-slate-200 font-sans text-xs font-semibold tracking-wider transition-all cursor-pointer shadow-sm"
                >
                  VIEW SERVICES
                </button>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
