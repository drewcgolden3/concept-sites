/* =========================================================================
   MILFORD TENNIS AND SQUASH CLUB — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "Milford Tennis and Squash Club",
    shortName: "MTSC",
    tagline: "Tennis & Squash in Milford",
  },

  contact: {
    venueName: "Milford Tennis and Squash Club",
    address: "Milford, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Milford+Tennis+and+Squash+Club+Milford+CT",
    phone: "",
    phoneHref: "",
    email: "",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.milford-tennis-squash.example/schedule",
      title: "Book a Court",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Tennis court", "meta": "60 min · singles or doubles"}, {"name": "Squash court", "meta": "45 min · singles"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Book a Court",
        body: "Hi Milford Tennis and Squash Club,\n\nI'd like to book. Here are my details:\n\n- Name:\n- Adult or junior:\n- Level:\n- Preferred days & times:\n\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.milford-tennis-squash.example/schedule",
      title: "Book Squash",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Tennis court", "meta": "60 min · singles or doubles"}, {"name": "Squash court", "meta": "45 min · singles"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Book Squash",
        body: "Hi,\n\nI'd like to book a squash court.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.milford-tennis-squash.example/schedule",
      title: "Register for Camp",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Tennis court", "meta": "60 min · singles or doubles"}, {"name": "Squash court", "meta": "45 min · singles"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Register for Camp",
        body: "Hi,\n\nI'd like to register for Register for Camp.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.milford-tennis-squash.example/schedule",
      title: "Come See the Club",
      subtitle: "Have a look around, meet whoever is on that day, and decide from there. No pressure either way.",
      services: [{"name": "Tennis court", "meta": "60 min · singles or doubles"}, {"name": "Squash court", "meta": "45 min · singles"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Come See the Club",
        body: "Hi Milford Tennis and Squash Club,\n\nI'm interested in Come See the Club.\n\nThank you!",
      },
    },
  },
};
