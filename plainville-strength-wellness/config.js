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
    name: "Plainville Strength & Wellness",
    shortName: "PSW",
    tagline: "Strength & Wellness Training in Plainville",
  },

  contact: {
    venueName: "Plainville Strength & Wellness",
    address: "Plainville, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Plainville+Strength+%26+Wellness+Plainville+CT",
    phone: "",
    phoneHref: "",
    email: "",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.plainville-strength-and-wellness.example/schedule",
      title: "Book a Session",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Personal training", "meta": "60 min \u00b7 1-on-1"}, {"name": "Small-group strength", "meta": "45 min \u00b7 up to 6"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Book a Session",
        body: "Hi Plainville Strength & Wellness,\n\nI'd like to book a session. Here are my details:\n\n- Name:\n- Goal:\n- Preferred days & times:\n\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.plainville-strength-and-wellness.example/schedule",
      title: "Join a Class",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Personal training", "meta": "60 min \u00b7 1-on-1"}, {"name": "Small-group strength", "meta": "45 min \u00b7 up to 6"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Join a Class",
        body: "Hi,\n\nI'd like to join a Small-Group Strength class.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.plainville-strength-and-wellness.example/schedule",
      title: "Start Coaching",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Personal training", "meta": "60 min \u00b7 1-on-1"}, {"name": "Small-group strength", "meta": "45 min \u00b7 up to 6"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Start Coaching",
        body: "Hi,\n\nI'd like to start Wellness Coaching.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.plainville-strength-and-wellness.example/schedule",
      title: "Come See the Gym",
      subtitle: "Have a look around, meet a coach, and decide from there. No pressure either way.",
      services: [{"name": "Personal training", "meta": "60 min \u00b7 1-on-1"}, {"name": "Small-group strength", "meta": "45 min \u00b7 up to 6"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Come See the Gym",
        body: "Hi Plainville Strength & Wellness,\n\nI'm interested in coming to see the gym.\n\nThank you!",
      },
    },
  },
};
