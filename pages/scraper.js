import fetch from 'node-fetch';

export default async (req, res) => {
  const url = "https://home.tmon.co.kr/";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to retrieve the web page");
    }

    const html = await response.text();
    const domParser = new DOMParser();
    const dom = domParser.parseFromString(html, 'text/html');
    const datas = Array.from(dom.querySelector('body').data);

    const texts = {
      'NIKE': '나이키',
      'ADIDAS': '아디다스',
      'SALOMON': '살로몬',
      'NEW BALANCE': '뉴발란스',
      'UNDER ARMOR': '언더아머',
      'CONVERSE': '컨버스',
      'CROCS': '크록스',
      'WHOAU': '후아유',
      'MIXXO': '미쏘',
      'SPAO': '스파오'
    };

    const result = [];

    datas.forEach((data) => {
      const title = data.title;
      let found = false;
      let tmp = '';
      Object.entries(texts).forEach(([eng, text]) => {
        if (title.includes(text)) {
          tmp += eng + ' X ';
          found = true;
        }
      });

      if (found) {
        tmp = tmp.slice(0, -2);
        result.push(
          tmp + "\n\n SALE  " + data.discountPrice.dealDiscountRate + "% \n (chỉ từ " + (data.discountPrice.price * 20 + 50000).toLocaleString('en-US') + " ka~)\n"
        );
        result.push(data.launchInfo.url + "\n\n");
      }
    });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve the web page" });
  }
};
