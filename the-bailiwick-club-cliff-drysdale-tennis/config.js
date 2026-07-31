/* =========================================================================
   THE BAILIWICK CLUB (CLIFF DRYSDALE TENNIS) — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "The Bailiwick Club",
    shortName: "TB",
    tagline: "Cliff Drysdale Tennis in Greenwich",
  },

  contact: {
    venueName: "The Bailiwick Club",
    address: "Greenwich, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Bailiwick+Club+Greenwich+CT",
    phone: "",
    phoneHref: "",
    email: "greg.meyer@thebailiwickclub.com",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.the-bailiwick-club.example/schedule",
      title: "Book a Court",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Tennis court", "meta": "60 min · singles or doubles"}, {"name": "Platform court", "meta": "60 min · up to 4"}],
      fallbackEmail: {
        to: "greg.meyer@thebailiwickclub.com",
        subject: "Book a Court",
        body: "Hi The Bailiwick Club,\n\nI'd like to book. Here are my details:\n\n- Name:\n- Adult or junior:\n- Level:\n- Preferred days & times:\n\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.the-bailiwick-club.example/schedule",
      title: "Platform Play",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Tennis court", "meta": "60 min · singles or doubles"}, {"name": "Platform court", "meta": "60 min · up to 4"}],
      fallbackEmail: {
        to: "greg.meyer@thebailiwickclub.com",
        subject: "Platform Play",
        body: "Hi,\n\nI'd like to register for Platform Play.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.the-bailiwick-club.example/schedule",
      title: "Register a Junior",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Tennis court", "meta": "60 min · singles or doubles"}, {"name": "Platform court", "meta": "60 min · up to 4"}],
      fallbackEmail: {
        to: "greg.meyer@thebailiwickclub.com",
        subject: "Register a Junior",
        body: "Hi,\n\nI'd like to register my junior for the Junior Academy.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.the-bailiwick-club.example/schedule",
      title: "Come See the Club",
      subtitle: "Have a look around, meet whoever is on that day, and decide from there. No pressure either way.",
      services: [{"name": "Tennis court", "meta": "60 min · singles or doubles"}, {"name": "Platform court", "meta": "60 min · up to 4"}],
      fallbackEmail: {
        to: "greg.meyer@thebailiwickclub.com",
        subject: "Come See the Club",
        body: "Hi The Bailiwick Club,\n\nI'm interested in Come See the Club.\n\nThank you!",
      },
    },
  },
};
