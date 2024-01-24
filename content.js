async function detectDarkPatterns(url) {
    var webName = url;
    var Web = new URL(webName);
    var name = Web.hostname;
    var security = window.location.protocol === 'https:'; //need to add 




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
        const fiveStarRating = doc.querySelector('tr.a-histogram-row');
        const overallProductRating = doc.querySelector('span[data-hook="rating-out-of-text"]');

        // Extract review text
        reviews.forEach(review => {
            const reviewText = review.textContent.trim();
            console.log('Review:', reviewText);

        });
        const descriptionText = descriptionElement ? descriptionElement.textContent.trim() : 'N/A';
        console.log(descriptionText);

        const productTitle = productTitleElement.textContent.trim();
        console.log('Product Title:', productTitle);

        const starRating = fiveStarRating.textContent.trim();
        console.log(starRating);

        const overallRating = overallProductRating.textContent.trim();
        console.log(overallRating);

        //flipcart





    } catch (error) {
        console.error('Error:', error.message);


    }
    const keywords = ['limited offer', 'Get 15% off', 'act now', "don't miss out", 'exclusive deal', 'One-time opportunity', 'limited-time'];
    const textContent = document.body.innerText;
    let found = keywords.some(keyword => textContent.includes(keyword));

    if (found) {
        alert("Potential dark pattern detected on " + name);
    } else {
        alert("No obvious dark patterns detected on " + name);
    }


}
var url = window.location.href;
detectDarkPatterns(url);