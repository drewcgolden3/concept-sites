/* =========================================================================
   STAMFORD RACQUET CLUB — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Contact info sourced from the club's Yelp listing, since no website
   currently exists. Every editable value lives here. The booking buttons
   currently open an in-page preview scheduler; going live means dropping
   in the real booking URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "Stamford Racquet Club",
    shortName: "SRC",
    tagline: "Tennis & Racquet Sports in Stamford",
  },

  contact: {
    venueName: "Stamford Racquet Club",
    address: "23 Radio Pl, Stamford, CT 06906",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Stamford+Racquet+Club+Stamford+CT",
    phone: "(203) 359-0601",
    phoneHref: "tel:+12033590601",
    email: "",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.stamford-racquet-club.example/schedule",
      title: "Book a Court",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Tennis court", "meta": "60 min · singles or doubles"}, {"name": "Racquetball court", "meta": "45 min · singles"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Book a Court",
        body: "Hi Stamford Racquet Club,\n\nI'd like to book. Here are my details:\n\n- Name:\n- Adult or junior:\n- Level:\n- Preferred days & times:\n\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.stamford-racquet-club.example/schedule",
      title: "Book Racquetball",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Racquetball court", "meta": "45 min · singles"}, {"name": "Tennis court", "meta": "60 min · singles or doubles"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Book Racquetball",
        body: "Hi,\n\nI'd like to book a racquetball court.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.stamford-racquet-club.example/schedule",
      title: "Join a League",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Tennis league", "meta": "Weekly · all levels"}, {"name": "Racquetball league", "meta": "Weekly · all levels"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Join a League",
        body: "Hi,\n\nI'd like to join a league.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.stamford-racquet-club.example/schedule",
      title: "Come See the Club",
      subtitle: "Have a look around, meet whoever is on that day, and decide from there. No pressure either way.",
      services: [{"name": "Tennis court", "meta": "60 min · singles or doubles"}, {"name": "Racquetball court", "meta": "45 min · singles"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Come See the Club",
        body: "Hi Stamford Racquet Club,\n\nI'm interested in Come See the Club.\n\nThank you!",
      },
    },
  },
};
