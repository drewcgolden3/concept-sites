/* =========================================================================
   THE LAKE CLUB — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "The Lake Club",
    shortName: "LC",
    tagline: "Swim & Tennis Club in Wilton",
  },

  contact: {
    venueName: "The Lake Club",
    address: "Wilton, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Lake+Club+Wilton+CT",
    phone: "",
    phoneHref: "",
    email: "info@thelakeclub.org",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.the-lake-club.example/schedule",
      title: "Request Membership",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Swim team", "meta": "family membership"}, {"name": "Tennis court", "meta": "60 min · singles or doubles"}],
      fallbackEmail: {
        to: "info@thelakeclub.org",
        subject: "Request Membership",
        body: "Hi The Lake Club,\n\nI'd like to request membership. Here are my details:\n\n- Name:\n- Family size:\n- Interested in (swim/tennis/both):\n- Preferred days & times:\n\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.the-lake-club.example/schedule",
      title: "Book a Court",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Swim team", "meta": "family membership"}, {"name": "Tennis court", "meta": "60 min · singles or doubles"}],
      fallbackEmail: {
        to: "info@thelakeclub.org",
        subject: "Book a Court",
        body: "Hi,\n\nI'd like to book a tennis court.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.the-lake-club.example/schedule",
      title: "Register for Camp",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Swim team", "meta": "family membership"}, {"name": "Tennis court", "meta": "60 min · singles or doubles"}],
      fallbackEmail: {
        to: "info@thelakeclub.org",
        subject: "Register for Camp",
        body: "Hi,\n\nI'd like to register for summer camp.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.the-lake-club.example/schedule",
      title: "Come See the Club",
      subtitle: "Have a look around, meet whoever is on that day, and decide from there. No pressure either way.",
      services: [{"name": "Swim team", "meta": "family membership"}, {"name": "Tennis court", "meta": "60 min · singles or doubles"}],
      fallbackEmail: {
        to: "info@thelakeclub.org",
        subject: "Come See the Club",
        body: "Hi The Lake Club,\n\nI'm interested in Come See the Club.\n\nThank you!",
      },
    },
  },
};
