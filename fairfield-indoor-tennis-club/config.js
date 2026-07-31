/* =========================================================================
   FAIRFIELD INDOOR TENNIS CLUB — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "Fairfield Indoor Tennis Club",
    shortName: "FITC",
    tagline: "Indoor Tennis in Fairfield",
  },

  contact: {
    venueName: "Fairfield Indoor Tennis Club",
    address: "Fairfield, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Fairfield+Indoor+Tennis+Club+Fairfield+CT",
    phone: "",
    phoneHref: "",
    email: "",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.fairfield-indoor-tennis-club.example/schedule",
      title: "Book a Court",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Tennis court", "meta": "60 min \u00b7 singles or doubles"}, {"name": "Junior clinic", "meta": "60 min \u00b7 small group"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Book a Court",
        body: "Hi Fairfield Indoor Tennis Club,\\n\\nI'd like to book a court. Here are my details:\\n\\n- Name:\\n- Adult or junior:\\n- Level:\\n- Preferred days & times:\\n\\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.fairfield-indoor-tennis-club.example/schedule",
      title: "Book a Clinic",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Tennis court", "meta": "60 min \u00b7 singles or doubles"}, {"name": "Junior clinic", "meta": "60 min \u00b7 small group"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Book a Clinic",
        body: "Hi Fairfield Indoor Tennis Club,\\n\\nI'd like to book a junior clinic.\\n\\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.fairfield-indoor-tennis-club.example/schedule",
      title: "Register for Camp",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Tennis court", "meta": "60 min \u00b7 singles or doubles"}, {"name": "Junior clinic", "meta": "60 min \u00b7 small group"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Register for Camp",
        body: "Hi Fairfield Indoor Tennis Club,\\n\\nI'd like to register for camp.\\n\\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.fairfield-indoor-tennis-club.example/schedule",
      title: "Come See the Club",
      subtitle: "Have a look around, meet whoever is on that day, and decide from there. No pressure either way.",
      services: [{"name": "Tennis court", "meta": "60 min \u00b7 singles or doubles"}, {"name": "Junior clinic", "meta": "60 min \u00b7 small group"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Come See the Club",
        body: "Hi Fairfield Indoor Tennis Club,\\n\\nI'm interested in coming to see the club.\\n\\nThank you!",
      },
    },
  },
};
