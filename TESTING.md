# Testing

# Browser Compatibility
---
This website has been tested and operates as expected on Chrome, Microsoft Edge, Safari, Firefox and Opera browsers.

The website has been tested using Chrome Devloper Tools for it's responsiveness on various device viewports.

It responds as intended on the following devices:

* iPhone XR 

* iPhone 12 Pro

* Pixel 5

* Samsung Galaxy S20 Ultra

* iPad Air

* iPad Mini

* Surface Duo

I personally tested the website on my iPad 6 and iPhone 12 Pro Max.

# User Stories Testing

* First Time User
    * I want to understand the main purpose of the website.
        * On the homepage there is a brief description of who Ubuntu Holidays are and what they do / offer.

        ![About](assets/testing/about.png)

    * I want to be able to easily understand and navigate the website.
        * There is a navigation bar along the top of every page. Active pages are coloured to remind the user of which page they're on. Clicking on the logo will return the user to the homepage. There are buttons throughout the website with a clear description of their purpose.

        ![Navigation](assets/testing/navigation.png)

        ![Button1](assets/testing/button1.png)

    * I want to find an ideal city to visit in South Africa.
        * On the homepage there are two cards, each explaining the two different cities Ubuntu Holidays provides holidays to. Each card contains buttons to the map or to the respective pages for each city.

        ![Cape Town](assets/testing/capetown.png)

        ![Durban](assets/testing/durban.png)

     * I want to be able to see what other attractions or accomodations are available.
        * There are custom markers on the map set to the suggested accommodation, restaurants and attractions. All other pre-existing google maps markers are still available upon zooming in. On larger screen devices there is a legend available explaining the custom markers icons.

        ![Markers](assets/testing/markers.png)

        ![Icons](assets/testing/icons.png)

        ![Legend](assets/testing/legend.png)

* Returning User
    * I want to find links to social media accounts for easier future contact or to see what updates the company has.
        * Social media links and the ability to sign up to the newsletter are provided at the footer of every page. Links open in new tabs. 

        ![Social](assets/testing/social.png)

        ![Newsletter](assets/testing/newsletter.png)

        ![Subscribe](assets/testing/subscribe.png)

    * I want to be able to contact the company with a general enquiry or to find out how to go about purchasing a package.
        * Contact information can be found at the footer of every page. A contact form is provided on the Contact Us page.

        ![Address](assets/testing/address.png)

        ![Contact](assets/testing/contact.png)

        ![Form](assets/testing/form.png)

    * I want to be able to see package options and find out more info on the cities without having to contact someone.
        * The Cape Town and Durban pages both have two package idea options.

        ![Cape Town Packages](assets/testing/capepackages.png)

        ![Durban Packages](assets/testing/durbanpackages.png)

* Site Owner
    * I want the company to be easily found using search engines.
        * Each webpage has been run through lighthouse which produces a score for Search Engine Optimization. These checks ensure that the page is optimized for search engine results ranking.

        ![SEO](assets/testing/seo.png)

    * I want to bring attention the who we are and what we do.
        * On the homepage there is a brief description of who Ubuntu Holidays are and what they do / offer.

        ![About](assets/testing/about.png)

    * I want site visitors to the site to be able to easily locate the company as well as the contact details easily from the website.
        * Contact information can be found at the footer of every page. A contact form is provided on the Contact Us page.

        ![Address](assets/testing/address.png)

        ![Contact](assets/testing/contact.png)

        ![Form](assets/testing/form.png)

    * I want site visitors to be able to directly contact the company through the website.
        * There is a contact form on the Contact Us Page.

        ![Form](assets/testing/form.png)

---

# Code Validation

## HTML

Each page of the website was run through the W3C Markup Validation Service to ensure there were no errors.

* index.html
    ![Index](assets/testing/html-validator-index.png)

* capetown.html
    ![Cape Town](assets/testing/html-validator-capetown.png)

* durban.html
    ![Durban](assets/testing/html-validator-durban.png)

* map.html
    ![Explore](assets/testing/html-validator-map.png)

* contact.html
    ![Contact Us](assets/testing/html-validator-contact.png)

## CSS

The website's CSS was run through the W3C CSS Validation Service (Jigsaw). No issues or errors were found.

* style.css
    ![css](assets/testing/css-validator.png)
---

# Lighthouse

## Desktop Results

* index.html

    ![Index](assets/testing/lh-index-dt.png)


* capetown.html

    ![Cape Town](assets/testing/lh-capetown-dt.png)


* durban.html

    ![Durban](assets/testing/lh-durban-dt.png)

* map.html

    ![Explore](assets/testing/lh-explore-dt.png)

    * Lower scores addressed below in Debugging section.

* contact.html

    ![Contact](assets/testing/lh-contact-dt.png)

## Mobile Results

* index.html

    ![Index]()


* capetown.html

    ![Cape Town]()


* durban.html

    ![Durban]()

* map.html

    ![Explore]()

* contact.html

    ![Contact]()
---

# Color Contrast Accessibility Validation

* index.html

    ![Index](assets/testing/cca-index.png)


* capetown.html
    * Could not successfully test this page.

    ![Cape Town](assets/testing/cca-capetown.png)


* durban.html
    * Could not successfully test this page.

    ![Durban](assets/testing/cca-durban.png)

* map.html

    ![Explore](assets/testing/cca-explore.png)

* contact.html

    ![Contact](assets/testing/cca-contact.png)

---

# Debugging

## Resolved

* Hamburger menu was not functional. It would display but was nothing would happen when clicked. I was making use of Bootstrap 4 classes but had imported Bootstrap 5 CDN.

    * Changed classes to the appropriate Bootstrap 5 classes and issue was solved.

* Map element would not show actual map. Logo, controls and container was visible but map was grey.
    * Targeted all child elements of "#map" and set "overflow:" to "visible".


## Unresolved

* Lighthouse report for desktop loading of map.html dictates that performance is at 86. Main issues are related to the google map. They are as follows: 
    * "Does not use passive listeners to improve scrolling performance."
    * "Image elements do not have explicit width and height."

* Lighthouse report for desktop loading of map.html dictates that best practices is at 67. Main issues are related to the google map. They are as follows:
    * "Displays images with incorrect aspect ratio."
    * "Serves images with low resolution."