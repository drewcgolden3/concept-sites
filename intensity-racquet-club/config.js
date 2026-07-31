/* =========================================================================
   INTENSITY RACQUET CLUB — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "INTENSITY Racquet Club",
    shortName: "IR",
    tagline: "Tennis, Pickleball & Squash in Norwalk",
  },

  contact: {
    venueName: "INTENSITY Racquet Club",
    address: "Norwalk, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=INTENSITY+Racquet+Club+Norwalk+CT",
    phone: "",
    phoneHref: "",
    email: "info@intensityclub.com",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.intensity-racquet-club.example/schedule",
      title: "Book a Court",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Tennis court", "meta": "60 min · singles or doubles"}, {"name": "Pickleball court", "meta": "60 min · up to 4"}],
      fallbackEmail: {
        to: "info@intensityclub.com",
        subject: "Book a Court",
        body: "Hi INTENSITY Racquet Club,\n\nI'd like to book. Here are my details:\n\n- Name:\n- Adult or junior:\n- Level:\n- Preferred days & times:\n\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.intensity-racquet-club.example/schedule",
      title: "Pickleball Play",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Tennis court", "meta": "60 min · singles or doubles"}, {"name": "Pickleball court", "meta": "60 min · up to 4"}],
      fallbackEmail: {
        to: "info@intensityclub.com",
        subject: "Pickleball Play",
        body: "Hi,\n\nI'd like to register for Pickleball Play.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.intensity-racquet-club.example/schedule",
      title: "Book Squash",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Squash court", "meta": "45 min · singles"}, {"name": "Tennis court", "meta": "60 min · singles or doubles"}],
      fallbackEmail: {
        to: "info@intensityclub.com",
        subject: "Book Squash",
        body: "Hi,\n\nI'd like to book a squash court.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.intensity-racquet-club.example/schedule",
      title: "Come See the Club",
      subtitle: "Have a look around, meet whoever is on that day, and decide from there. No pressure either way.",
      services: [{"name": "Tennis court", "meta": "60 min · singles or doubles"}, {"name": "Pickleball court", "meta": "60 min · up to 4"}],
      fallbackEmail: {
        to: "info@intensityclub.com",
        subject: "Come See the Club",
        body: "Hi INTENSITY Racquet Club,\n\nI'm interested in Come See the Club.\n\nThank you!",
      },
    },
  },
};
