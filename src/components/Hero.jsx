import React, { useEffect, useRef } from 'react';

const Hero = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            // Critical for autoplay policy in some browsers
            videoRef.current.muted = true;
            videoRef.current.defaultMuted = true;

            videoRef.current.play().catch(error => {
                console.error("Video autoplay failed:", error);
            });
        }
    }, []);

    return (
        <section id="section1">
            <div className="video-wrap" style={{ display: 'block' }}>
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                >
                    <source src="/image/video/main_video.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="title-wrap">
                <div className="text-wrap">
                    <p>WEB <br className="mobile" />PUB<em>L</em>I<em>S</em>HER <br /><em>J</em>INNYANG</p>
                    <p>FRONT-END DEVELOPER / UI DEVELOPER</p>
                    <p>
                        <span><img src="/image/common/home_icon_01.png" alt="" /></span>
                        <span><img src="/image/common/home_icon_02.png" alt="" /></span>
                        <span className="jquery"><img src="/image/common/home_icon_03.png" alt="" /></span>
                        <span className="boots"><img src="/image/common/home_icon_04.png" alt="" /></span>
                        <span className="vuejs"><img src="/image/common/home_icon_05.png" alt="" /></span>
                    </p>
                </div>
                <a href="#section2" className="scrolldown"><span></span></a>
            </div>
        </section>
    );
};

export default Hero;
