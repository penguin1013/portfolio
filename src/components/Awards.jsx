import React, { useEffect } from 'react';

const Awards = () => {
    return (
        <section id="section3">
            <div className="title" data-ani="Awards">Awards<span></span></div>
            <i className="title-sm">웹어워드코리아 수상내역</i>

            <div className="wrapper ">
                <div className="timeline-img"><img src="/image/common/img_awards.jpg" alt="" /></div>
                <div className="timeline clearfix">
                    <div className="timeline-left">
                        <p>2012</p>
                        <ul>
                            <li><em># LG전자 DIOS 김태희 닷컴</em> 2012 Web Award Korea(대상)</li>
                            <li><em># POSCO 아는 만큼 가까워집니다</em> 2012 Web Award Korea(최우수상)</li>
                            <li><em># P&amp;G SK-II 동안 크림</em> 2012 Web Award Korea(우수상)</li>
                        </ul>
                    </div>
                    <div className="timeline-right">
                        <p>2013</p>
                        <ul>
                            <li><em># 코카콜라</em> 2013 Web Award Korea(대상)</li>
                            <li><em># KGC 인삼공사</em> 2013 Web Award Korea(대상)</li>
                            <li><em># AIA Real Music Company</em> 2013 Web Award Korea(대상)</li>
                        </ul>
                    </div>
                    <div className="timeline-left">
                        <p>2014</p>
                        <ul>
                            <li><em># 2014 Seoul International Fireworks</em> 2014 Web Award Korea(대상)</li>
                            <li><em># Downy Aroma Jewel Digital</em> 2014 Web Award Korea(최우수상)</li>
                            <li><em># 세노비스</em> 2014 Web Award Korea(최우수상)</li>
                            <li><em># AIA REAL LIFE</em> 2014 Web Award Korea(우수상)</li>
                        </ul>
                    </div>
                    <div className="timeline-right">
                        <p>2015</p>
                        <ul>
                            <li><em># 해태제과</em> 2015 Web Award Korea(최우수상)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Awards;
