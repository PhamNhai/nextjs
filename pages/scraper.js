import React, { useEffect, useState } from 'react';

const Scraper = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Your scraping logic goes here
        const fetchData = async () => {
            try {
                const response = await fetch('https://home.tmon.co.kr/api/home/direct/v1/recommendapi/api/v1/todayRecommend/deals?platformType=PC_WEB&useCache=CACHE_S60');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const json = await response.json();
                const texts = ['NIKE', 'ADIDAS', 'SALOMON', 'NEW BALANCE', 'UNDER ARMOR', 'CONVERSE', 'CROCS', 'WHOAU', 'MIXXO', 'SPAO'];

                const filteredData = json.data.filter((item) => {
                    for (const text of texts) {
                        if (item.title.includes(text)) {
                            return true;
                        }
                    }
                    return false;
                });

                setData(filteredData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
        {data.map((item, index) => (
                <div key={index}>
            <p>
            {item.title}
            <br />
            SALE {item.discountPrice.dealDiscountRate}%
<br />
    (chỉ từ {new Intl.NumberFormat('en-US').format(item.discountPrice.price * 20 + 50000)} ka~)
</p>
    <a href={item.launchInfo.url}>Link</a>
        </div>
))}
</div>
);
};

export default Scraper;