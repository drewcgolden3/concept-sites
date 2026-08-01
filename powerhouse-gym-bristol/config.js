/* =========================================================================
   §BIZ_UPPER§ — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "Powerhouse Gym Bristol",
    shortName: "PGB",
    tagline: "Strength Training & Group Fitness in Bristol",
  },

  contact: {
    venueName: "Powerhouse Gym Bristol",
    address: "Bristol, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Powerhouse+Gym+Bristol+CT",
    phone: "",
    phoneHref: "",
    email: "bristol@powerhousegym.com",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.powerhouse-gym-bristol.example/schedule",
      title: "Book a Session",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Open gym / strength floor", "meta": "60 min \u00b7 self-directed"}, {"name": "Personal training", "meta": "60 min \u00b7 1-on-1"}],
      fallbackEmail: {
        to: "bristol@powerhousegym.com",
        subject: "Book a Session",
        body: "Hi Powerhouse Gym Bristol,\n\nI'd like to book time on the floor. Here are my details:\n\n- Name:\n- Goal:\n- Preferred days & times:\n\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.powerhouse-gym-bristol.example/schedule",
      title: "Join a Class",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Open gym / strength floor", "meta": "60 min \u00b7 self-directed"}, {"name": "Personal training", "meta": "60 min \u00b7 1-on-1"}],
      fallbackEmail: {
        to: "bristol@powerhousegym.com",
        subject: "Join a Class",
        body: "Hi,\n\nI'd like to join a Group Fitness class.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.powerhouse-gym-bristol.example/schedule",
      title: "Book Training",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Open gym / strength floor", "meta": "60 min \u00b7 self-directed"}, {"name": "Personal training", "meta": "60 min \u00b7 1-on-1"}],
      fallbackEmail: {
        to: "bristol@powerhousegym.com",
        subject: "Book Training",
        body: "Hi,\n\nI'd like to book a Personal Training session.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.powerhouse-gym-bristol.example/schedule",
      title: "Come See the Gym",
      subtitle: "Have a look around, meet whoever is on that day, and decide from there. No pressure either way.",
      services: [{"name": "Open gym / strength floor", "meta": "60 min \u00b7 self-directed"}, {"name": "Personal training", "meta": "60 min \u00b7 1-on-1"}],
      fallbackEmail: {
        to: "bristol@powerhousegym.com",
        subject: "Come See the Gym",
        body: "Hi Powerhouse Gym Bristol,\n\nI'm interested in coming to see the gym.\n\nThank you!",
      },
    },
  },
};
