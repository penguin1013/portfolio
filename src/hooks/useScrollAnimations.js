import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useScrollAnimations = () => {
    useEffect(() => {
        // Section 2: About
        gsap.fromTo("#section2 .title span",
            { y: -100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "bounce.out",
                scrollTrigger: {
                    trigger: "#section2",
                    start: "top 60%",
                    toggleActions: "play none none reverse",
                    onToggle: self => {
                        const title = document.querySelector("#section2 .title");
                        if (title) {
                            if (self.isActive) title.classList.add("on");
                            else title.classList.remove("on");
                        }
                    }
                }
            }
        );

        // Photo animation
        gsap.fromTo("#section2 .photo img",
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                delay: 0.15,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: "#section2",
                    start: "top 60%"
                }
            }
        );

        // Profile items staggered animation
        gsap.fromTo(".profile li",
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: "#section2",
                    start: "top 60%"
                }
            }
        );

        // Section 3: Awards
        gsap.fromTo("#section3 .title span",
            { y: -100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "bounce.out",
                scrollTrigger: {
                    trigger: "#section3",
                    start: "top 60%",
                    toggleActions: "play none none reverse",
                    onToggle: self => {
                        const title = document.querySelector("#section3 .title");
                        if (title) {
                            if (self.isActive) title.classList.add("on");
                            else title.classList.remove("on");
                        }
                    }
                }
            }
        );

        // Timeline items
        gsap.fromTo(".timeline-left li",
            { opacity: 0, x: 30 },
            {
                opacity: 1,
                x: 0,
                duration: 0.5,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: "#section3",
                    start: "top 50%"
                }
            }
        );

        gsap.fromTo(".timeline-right li",
            { opacity: 0, x: -30 },
            {
                opacity: 1,
                x: 0,
                duration: 0.5,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: "#section3",
                    start: "top 50%"
                }
            }
        );

        // Section 4: Resume
        gsap.fromTo("#section4 .title",
            { y: -100, opacity: 0 }, // Assuming title structure, or use parallax h3
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "bounce.out",
                scrollTrigger: {
                    trigger: "#section4",
                    start: "top 60%"
                }
            }
        );

        gsap.fromTo(".parallax h3",
            { y: 70, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: "#section4",
                    start: "top 60%"
                }
            }
        );

        gsap.fromTo(".parallax-right",
            { x: 100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.5,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: "#section4",
                    start: "top 60%"
                }
            }
        );

        gsap.fromTo(".parallax-left",
            { x: -100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.5,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: "#section4",
                    start: "top 60%"
                }
            }
        );

        // Section 5: Work
        gsap.fromTo("#section5 .title span",
            { y: -100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "bounce.out",
                scrollTrigger: {
                    trigger: "#section5",
                    start: "top 70%",
                    toggleActions: "play none none reverse",
                    onToggle: self => {
                        const title = document.querySelector("#section5 .title");
                        if (title) {
                            if (self.isActive) title.classList.add("on");
                            else title.classList.remove("on");
                        }
                    }
                }
            }
        );


    }, []);
};

export default useScrollAnimations;
