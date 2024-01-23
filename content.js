async function detectDarkPatterns(url) {
    var webName = url;
    var Web = new URL(webName);
    var name = Web.hostname;
    var security = window.location.protocol === 'https:'; //need to add 

    const eCommKeywords = ['shop', 'store', 'buy', 'Cart', 'checkout', 'product', 'Buy Now'];
    const textContent_1 = document.body.innerText;
    let found_2 = eCommKeywords.some(keyword => textContent_1.includes(keyword));

    if (found_2) {

        const eCommKeywords = ['amazon'];
        const textContent_2 = document.body.innerText;
        let found_1 = eCommKeywords.some(keyword => textContent_2.includes(keyword));
        if (found_1) {
            try {
                //amazon

                // Replace 'your-product-url' with the actual product page URL
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const html = await response.text();
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');

                // Replace 'review-selector' with the actual CSS selector for reviews on the website
                const reviews = doc.querySelectorAll('div.review div.a-section.celwidget');
                const descriptionElement = doc.querySelector('#featurebullets_feature_div');
                const productTitleElement = doc.querySelector('#productTitle');
                const ratingsElement = doc.querySelector('span.arp-rating-out-of-text');

                if (ratingsElement) {
                    const ratings = ratingsElement.textContent.trim();
                    console.log('Ratings:', ratings);
                } else {
                    console.log('Ratings not found on the page.');
                }



                // Extract review text
                reviews.forEach(review => {
                    const reviewText = review.textContent.trim();
                    console.log('Review:', reviewText);

                });
                const descriptionText = descriptionElement ? descriptionElement.textContent.trim() : 'N/A';
                //log

                console.log(descriptionText);
                const productTitle = productTitleElement.textContent.trim();
                console.log('Product Title:', productTitle);


            } catch (error) {
                console.error('Error:', error.message);
            }

        }
        const keywords = ['limited offer', 'act now', "don't miss out", 'exclusive deal'];
        const textContent = document.body.innerText;
        let found = keywords.some(keyword => textContent.includes(keyword));

        if (found) {
            alert("Potential dark pattern detected on " + name);
        } else {
            alert("No obvious dark patterns detected on " + name);
        }
    } else {
        alert("Not an e-commerce website: " + name);
    }

}
var url = window.location.href;
detectDarkPatterns(url);