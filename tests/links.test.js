const { checkFile } = require('img-link-checker');

(async () => {
    const brokenLinks = await checkFile(
        './index.html',
        [
            'https://www.linkedin.com/in/dshpakovskyi/',
            'https://testcon.co/testfest/uk-2021/',
            'https://testcon.co/speakers/dmytro-shpakovskyi/',
            'https://www.amazon.com/gp/product/B08HM9JXRK',
            'https://www.amazon.com/stores/Dmytro-Shpakovskyi/author/B08J9VMLK8'
        ]
    );

    // Print a list of broken links and exit the process (will mark the CI/CD build as failed)
    if (brokenLinks.length > 0) {
        console.error('Broken links list:', brokenLinks);
        process.exit(1);
    }
})();
