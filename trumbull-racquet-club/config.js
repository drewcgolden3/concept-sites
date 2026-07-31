/* =========================================================================
   TRUMBULL RACQUET CLUB — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "Trumbull Racquet Club",
    shortName: "TRC",
    tagline: "Indoor Tennis & Racquet Sports in Trumbull",
  },

  contact: {
    venueName: "Trumbull Racquet Club",
    address: "Trumbull, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Trumbull+Racquet+Club+Trumbull+CT",
    phone: "",
    phoneHref: "",
    email: "",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.trumbull-racquet-club.example/schedule",
      title: "Book a Court",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Tennis court", "meta": "60 min · singles or doubles"}, {"name": "Racquetball court", "meta": "60 min · up to 2"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Book a Court",
        body: "Hi Trumbull Racquet Club,\n\nI'd like to book. Here are my details:\n\n- Name:\n- Adult or junior:\n- Level:\n- Preferred days & times:\n\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.trumbull-racquet-club.example/schedule",
      title: "Book a Court",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Tennis court", "meta": "60 min · singles or doubles"}, {"name": "Racquetball court", "meta": "60 min · up to 2"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Book a Court",
        body: "Hi,\n\nI'd like to book a racquetball court.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.trumbull-racquet-club.example/schedule",
      title: "Register for Clinics",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Junior clinic", "meta": "60 min · ages 6-14"}, {"name": "Tennis court", "meta": "60 min · singles or doubles"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Register for Clinics",
        body: "Hi,\n\nI'd like to register for junior clinics.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.trumbull-racquet-club.example/schedule",
      title: "Come See the Club",
      subtitle: "Have a look around, meet whoever is on that day, and decide from there. No pressure either way.",
      services: [{"name": "Tennis court", "meta": "60 min · singles or doubles"}, {"name": "Racquetball court", "meta": "60 min · up to 2"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Come See the Club",
        body: "Hi Trumbull Racquet Club,\n\nI'm interested in coming to see the club.\n\nThank you!",
      },
    },
  },
};
