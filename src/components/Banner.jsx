import React, { useState } from "react";
import { bannerStyles, customStyles } from "../assets/dummyStyles";
import { features, floatingIcons } from "../assets/dummyBanner";
import { CircleCheckBig, Sparkle, X } from "lucide-react";
import bannerImg from "../assets/Bannerimage.jpg";
import video from "../assets/BannerVideo.mp4";

const Banner = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className={bannerStyles.container}>
      {/* Floating Icons Wrapper */}
      <div className={bannerStyles.floatingIconsWrapper}>
        {floatingIcons.map((icon, i) => (
          <img
            key={i}
            src={icon.src}
            alt={icon.alt || ""}
            className={`${bannerStyles.floatingIcon} ${icon.pos}`}
            style={{
              animationDelay: `${i * 0.35}s`,
              willChange: "transform, opacity",
            }}
          />
        ))}
      </div>

      <div className={bannerStyles.mainContent}>
        <div className={bannerStyles.grid}>
          <div className={bannerStyles.leftContent}>
            <span className={bannerStyles.badge}>
              <Sparkle className={bannerStyles.badgeIcon} />
              New Features Available
            </span>
            <h1 className={bannerStyles.heading}>
              <span className={bannerStyles.headingSpan1}>
                Build Amazing
              </span>
              <span className={bannerStyles.headingSpan2}>
                Digital Products
              </span>
            </h1>

            <p className={bannerStyles.description}>
              Create stunning, responsive web applications with our intuitive
              platform designed for developers of all skill levels. Start
              building your next project today.
            </p>

            {/* Features Section */}

            <div className={bannerStyles.featuresGrid}>
              {features.map((feature, i) => (
                <div key={i} className={bannerStyles.featureItem}>
                  <div className={bannerStyles.featureIconContainer}>
                    <span
                      className={`${bannerStyles.featureIcon} text-${feature.color}-500`}
                    >
                      <CircleCheckBig size={16} />
                    </span>
                  </div>
                  <span className={bannerStyles.featureText}>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
            {/* Banner Buttons */}

            <div className={bannerStyles.buttonsContainer}>
              <a href="/courses" className={bannerStyles.buttonGetStarted}>
                Get Started
              </a>
              <button
                onClick={() => setShowVideo(true)}
                className={bannerStyles.buttonViewDemo}
              >
                View Demo
              </button>
            </div>
          </div>

          <div className={bannerStyles.imageContainer}>
            <img
              src={bannerImg}
              alt="BannerImage"
              className={bannerStyles.image}
            />
          </div>
        </div>
      </div>

      {/* Video model */}

      {showVideo && (
        <div className={bannerStyles.videoModal.overlay}>
          <div className={bannerStyles.videoModal.container}>
            <video
              src={video}
              autoPlay
              controls
              className={bannerStyles.videoModal.iframe}
            />

            <button
              onClick={() => setShowVideo(false)}
              className={bannerStyles.videoModal.closeButton}
            >
              <X className={bannerStyles.videoModal.closeIcon} />
            </button>
          </div>
        </div>
      )}

      <style jsx>{customStyles}</style>

       {/* Inline Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
      
    </div>
  );
};

export default Banner;
