import React, { useState } from 'react';

import portfolioData from '../data/portfolio.json';

const Work = () => {
    // Initialize state with base data + any saved local items
    const [portfolioList, setPortfolioList] = useState(() => {
        const saved = localStorage.getItem('portfolioItems');
        const localItems = saved ? JSON.parse(saved) : [];
        return [...portfolioData, ...localItems];
    });

    const [isFormVisible, setIsFormVisible] = useState(false);
    const [newItem, setNewItem] = useState({
        brand: '',
        tag: '',
        link: '',
        thumbnail: `${import.meta.env.BASE_URL}image/common/img_eduwill.jpg` // Default image
    });

    // Save to LocalStorage whenever the list significantly changes (only needed for NEW items ideally, but for now syncing all combined state is tricky if we don't want to duplicate base data. 
    // Better strategy: Store ONLY added items in LocalStorage to separate them from the immutable JSON file.)

    // Refined approach: We will keep 'portfolioList' as the view state. 
    // But when saving, we only save the items that are NOT in the original JSON.
    // Actually, simpler: just append new items to a 'addedPortfolioItems' key in localStorage.

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewItem(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Note: Blob URLs are session-specific and won't persist after refresh/browser close properly.
            // For true persistence with images, we'd need Base64 encoding.
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewItem(prev => ({
                    ...prev,
                    thumbnail: reader.result // Base64 string for persistence
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const itemToAdd = { ...newItem, id: Date.now() }; // Add unique ID

        // Update View State
        const updatedList = [...portfolioList, itemToAdd];
        setPortfolioList(updatedList);

        // Persist ONLY new items to LocalStorage
        const existingLocalItems = JSON.parse(localStorage.getItem('portfolioItems') || '[]');
        const newLocalItems = [...existingLocalItems, itemToAdd];
        localStorage.setItem('portfolioItems', JSON.stringify(newLocalItems));

        setIsFormVisible(false);
        setNewItem({
            brand: '',
            tag: '',
            link: '',
            thumbnail: `${import.meta.env.BASE_URL}image/common/img_eduwill.jpg`
        });

        alert('포트폴리오가 저장되었습니다! (브라우저 LocalStorage)');
    };

    const handleDelete = (id, e) => {
        e.preventDefault(); // Prevent link click
        e.stopPropagation();

        if (window.confirm('정말 삭제하시겠습니까?')) {
            // Update State
            setPortfolioList(prev => prev.filter(item => item.id !== id));

            // Update LocalStorage
            const saved = localStorage.getItem('portfolioItems');
            if (saved) {
                const localItems = JSON.parse(saved);
                const updatedLocalItems = localItems.filter(item => item.id !== id);
                localStorage.setItem('portfolioItems', JSON.stringify(updatedLocalItems));
            }

            // Note: Items from the static JSON file will reappear on refresh because we are not using a database or tracking 'deletedIds' in this simple demo.
        }
    };

    const handleDownloadBackup = () => {
        const jsonString = JSON.stringify(portfolioList, null, 4);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'portfolio.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <section id="section5">
            <div className="title" data-ani="Work">Work<span></span></div>
            <i className="title-sm">포트폴리오</i>

            <div>
                {/* Backup Button */}
                <button
                    onClick={handleDownloadBackup}
                    style={{
                        position: 'fixed',
                        bottom: '90px', // Above the Add button
                        right: '30px',
                        zIndex: 1000,
                        padding: '10px 15px',
                        fontSize: '14px',
                        cursor: 'pointer',
                        backgroundColor: '#333',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}
                    title="현재 데이터 다운로드 (백업)"
                >
                    💾 데이터 백업
                </button>

                <button
                    onClick={() => setIsFormVisible(!isFormVisible)}
                    style={{
                        position: 'fixed',
                        bottom: '30px',
                        right: '30px',
                        zIndex: 1000,
                        padding: '15px 25px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        backgroundColor: '#ef3e5b',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}
                >
                    포트폴리오 추가
                </button>
            </div>

            {isFormVisible && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    zIndex: 2000,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <div style={{
                        width: '90%',
                        maxWidth: '500px',
                        padding: '30px',
                        borderRadius: '15px',
                        backgroundColor: '#fff',
                        boxShadow: '0 5px 30px rgba(0,0,0,0.3)',
                        position: 'relative',
                        animation: 'fadeIn 0.3s ease-out'
                    }}>
                        <button
                            onClick={() => setIsFormVisible(false)}
                            style={{
                                position: 'absolute',
                                top: '15px',
                                right: '15px',
                                background: 'none',
                                border: 'none',
                                fontSize: '24px',
                                cursor: 'pointer',
                                color: '#999'
                            }}
                        >
                            &times;
                        </button>
                        <h3 style={{ marginBottom: '20px', textAlign: 'center', color: '#333' }}>새 포트폴리오 등록</h3>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <input
                                type="text"
                                name="brand"
                                placeholder="설명 (예: 에듀윌 사이트)"
                                value={newItem.brand}
                                onChange={handleInputChange}
                                required
                                style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '5px' }}
                            />
                            <input
                                type="text"
                                name="tag"
                                placeholder="태그 (예: #Eduwill)"
                                value={newItem.tag}
                                onChange={handleInputChange}
                                required
                                style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '5px' }}
                            />
                            <input
                                type="text"
                                name="link"
                                placeholder="링크 URL"
                                value={newItem.link}
                                onChange={handleInputChange}
                                style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '5px' }}
                            />
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '14px', color: '#666', textAlign: 'left' }}>썸네일 이미지:</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '5px' }}
                                />
                            </div>
                            <button type="submit" style={{
                                padding: '15px',
                                backgroundColor: '#ef3e5b',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                fontSize: '16px',
                                fontWeight: 'bold',
                                marginTop: '10px'
                            }}>
                                등록하기
                            </button>
                        </form>
                    </div>
                </div>
            )}

            <div className="wrapper">
                <div className="portfolio-list" id="portfolioList" style={{ overflow: 'hidden' }}>
                    {portfolioList.map((item, index) => (
                        <div className="col" key={index} style={{ float: 'left', width: '33.33%', boxSizing: 'border-box', padding: '10px', position: 'relative' }}>
                            <button
                                onClick={(e) => handleDelete(item.id, e)}
                                style={{
                                    position: 'absolute',
                                    top: '20px',
                                    right: '20px',
                                    width: '24px',
                                    height: '24px',
                                    zIndex: 10,
                                    backgroundColor: '#333',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '50%',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '14px',
                                    lineHeight: 1
                                }}
                                title="삭제"
                            >
                                &times;
                            </button>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <figure>
                                    <img src={item.thumbnail} alt="" />
                                    <figcaption>
                                        <div className="txt-box" dangerouslySetInnerHTML={{ __html: item.brand }}></div>
                                        <div className="heading"><h2>{item.tag}</h2></div>
                                    </figcaption>
                                </figure>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
