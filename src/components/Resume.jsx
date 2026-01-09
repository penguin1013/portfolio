import React, { useEffect, useRef } from 'react';

const Resume = () => {
    const canvasRefs = useRef([]);

    useEffect(() => {
        const animateCircle = (current, endPercent, canvas) => {
            if (!canvas) return;
            const context = canvas.getContext('2d');
            const x = canvas.width / 2;
            const y = canvas.height / 2;
            const radius = 75;
            const circ = Math.PI * 2;
            const quart = Math.PI / 2;

            context.lineWidth = 10;
            context.strokeStyle = '#fff';
            context.shadowOffsetX = 0;
            context.shadowOffsetY = 0;

            const draw = (cur) => {
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.beginPath();
                context.arc(x, y, radius, -(quart), ((circ) * cur) - quart, false);
                context.stroke();
            };

            let curPerc = 0;
            const animate = () => {
                draw(curPerc / 100);
                curPerc++;
                if (curPerc < endPercent) {
                    requestAnimationFrame(animate);
                }
            };
            animate();
        };

        // Simple animation trigger on mount for now
        canvasRefs.current.forEach((canvas) => {
            animateCircle(0, 101, canvas);
        });

    }, []);

    const addToRefs = (el) => {
        if (el && !canvasRefs.current.includes(el)) {
            canvasRefs.current.push(el);
        }
    };

    return (
        <section id="section4">
            <div className="parallax">
                <h3>RESUME</h3>
                <div className="parallax-right">
                    <p>웹표준코딩 제작 및 운영</p>
                    <ul>
                        <li>2010.06 ~ 2010.08 : CJ 인터넷(상암)</li>
                        <li>2010.08 ~ 2012.02 : 디지털오션(강남)</li>
                        <li>2012.02 ~ 2019.03 : 애드쿠아 인터렉티브(학동)</li>
                        <li>2019.03 ~ 현재 : 에듀윌(구로디지털단지)</li>
                    </ul>
                </div>
                <h3>SKILL</h3>
                <div className="parallax-left">
                    <div className="canvas-box">
                        <canvas ref={addToRefs} width="200" height="200"></canvas>
                        <p className="percent"><span className="count1">100</span>%</p>
                        <p className="technology">HTML5+CSS3</p>
                    </div>

                    <div className="canvas-box">
                        <canvas ref={addToRefs} width="200" height="200"></canvas>
                        <p className="percent"><span className="count2">100</span>%</p>
                        <p className="technology">Jquery</p>
                    </div>

                    <div className="canvas-box">
                        <canvas ref={addToRefs} width="200" height="200"></canvas>
                        <p className="percent"><span className="count3">100</span>%</p>
                        <p className="technology">Javascript</p>
                    </div>


                    <div className="canvas-box">
                        <canvas ref={addToRefs} width="200" height="200"></canvas>
                        <p className="percent"><span className="count4">100</span>%</p>
                        <p className="technology">Tweenmax</p>
                    </div>


                    <div className="canvas-box">
                        <canvas ref={addToRefs} width="200" height="200"></canvas>
                        <p className="percent"><span className="count5">100</span>%</p>
                        <p className="technology">Vue.js</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
