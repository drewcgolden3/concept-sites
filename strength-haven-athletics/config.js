/* =========================================================================
   STRENGTH HAVEN ATHLETICS — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "Strength Haven Athletics",
    shortName: "SH",
    tagline: "Strength & Athletic Training in New Haven",
  },

  contact: {
    venueName: "Strength Haven Athletics",
    address: "New Haven, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Strength+Haven+Athletics+New+Haven+CT",
    phone: "",
    phoneHref: "",
    email: "",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.strength-haven-athletics.example/schedule",
      title: "Start a Trial",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Open training trial", "meta": "1 visit · all equipment"}, {"name": "Small group trial", "meta": "50 min · drop in"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Start a Trial",
        body: "Hi Strength Haven Athletics,\n\nI'd like to start a trial. Here are my details:\n\n- Name:\n- Goals:\n- Experience level:\n- Preferred days & times:\n\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.strength-haven-athletics.example/schedule",
      title: "Reserve a Spot",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Open training trial", "meta": "1 visit · all equipment"}, {"name": "Small group trial", "meta": "50 min · drop in"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Reserve a Spot",
        body: "Hi,\n\nI'd like to reserve a spot in small group coaching.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.strength-haven-athletics.example/schedule",
      title: "Book a Session",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Open training trial", "meta": "1 visit · all equipment"}, {"name": "Small group trial", "meta": "50 min · drop in"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Book a Session",
        body: "Hi,\n\nI'd like to book a personal training session.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.strength-haven-athletics.example/schedule",
      title: "Come See the Gym",
      subtitle: "Have a look around, meet whoever is on that day, and decide from there. No pressure either way.",
      services: [{"name": "Open training trial", "meta": "1 visit · all equipment"}, {"name": "Small group trial", "meta": "50 min · drop in"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Come See the Gym",
        body: "Hi Strength Haven Athletics,\n\nI'm interested in coming to see the gym.\n\nThank you!",
      },
    },
  },
};
