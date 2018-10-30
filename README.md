# altera-landing-intern
Cooper's attempt at Altera site (very first html page from scratch)

Known problems:

Can't figure out text on top of images without using "position: absolute;". This seems to mess uo browser window size responsiveness, so for now it's at a fixed width that matches the PSD size. I think it could work out if I knew how to make the images/text anchored to the same element.

Tried changing the before/after quotes to the provided images, but can't figure out how to make them outside the frame of the quoted text:

        "looks like this
       when I try that"

     "  should look kinda
        something like this   "

Font in PSD is not recognized in html, needs to be installed locally to look correct. Helvetica (100 weight) looks the most similar, but I used the orginal (Raleway) for now.

Footer: icons (full site/phone#) adjacent to two rows of different font types is confusing. I've tried multiple methods of getting the layout correct (<table> and/or <span>) with no success. table attempt is commented out.
