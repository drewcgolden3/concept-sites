/* =========================================================================
   EASTON RACQUET CLUB — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "Easton Racquet Club",
    shortName: "ERC",
    tagline: "Tennis & Racquet Sports in Easton",
  },

  contact: {
    venueName: "Easton Racquet Club",
    address: "Easton, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Easton+Racquet+Club+Easton+CT",
    phone: "",
    phoneHref: "",
    email: "info@eastonracquetclub.com",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.easton-racquet-club.example/schedule",
      title: "Book a Court",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Tennis court", "meta": "60 min \u00b7 singles or doubles"}, {"name": "Squash / racquetball court", "meta": "45 min \u00b7 singles or doubles"}],
      fallbackEmail: {
        to: "info@eastonracquetclub.com",
        subject: "Book a Court",
        body: "Hi Easton Racquet Club,\\n\\nI'd like to book a court. Here are my details:\\n\\n- Name:\\n- Adult or junior:\\n- Level:\\n- Preferred days & times:\\n\\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.easton-racquet-club.example/schedule",
      title: "Book Squash",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Tennis court", "meta": "60 min \u00b7 singles or doubles"}, {"name": "Squash / racquetball court", "meta": "45 min \u00b7 singles or doubles"}],
      fallbackEmail: {
        to: "info@eastonracquetclub.com",
        subject: "Book Squash",
        body: "Hi Easton Racquet Club,\\n\\nI'd like to book a squash or racquetball court.\\n\\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.easton-racquet-club.example/schedule",
      title: "Register for Camp",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Tennis court", "meta": "60 min \u00b7 singles or doubles"}, {"name": "Squash / racquetball court", "meta": "45 min \u00b7 singles or doubles"}],
      fallbackEmail: {
        to: "info@eastonracquetclub.com",
        subject: "Register for Camp",
        body: "Hi Easton Racquet Club,\\n\\nI'd like to register for camp.\\n\\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.easton-racquet-club.example/schedule",
      title: "Come See the Club",
      subtitle: "Have a look around, meet whoever is on that day, and decide from there. No pressure either way.",
      services: [{"name": "Tennis court", "meta": "60 min \u00b7 singles or doubles"}, {"name": "Squash / racquetball court", "meta": "45 min \u00b7 singles or doubles"}],
      fallbackEmail: {
        to: "info@eastonracquetclub.com",
        subject: "Come See the Club",
        body: "Hi Easton Racquet Club,\\n\\nI'm interested in coming to see the club.\\n\\nThank you!",
      },
    },
  },
};
