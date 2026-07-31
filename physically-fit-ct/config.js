/* =========================================================================
   PHYSICALLY FIT CT — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "Physically Fit CT",
    shortName: "PF",
    tagline: "Fitness & Physical Therapy in Trumbull",
  },

  contact: {
    venueName: "Physically Fit CT",
    address: "Trumbull, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Physically+Fit+CT+Trumbull+CT",
    phone: "",
    phoneHref: "",
    email: "",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.physically-fit-ct.example/schedule",
      title: "Book a Session",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Personal training", "meta": "60 min · 1-on-1"}, {"name": "Physical therapy", "meta": "45 min · 1-on-1"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Book a Session",
        body: "Hi Physically Fit CT,\n\nI'd like to book. Here are my details:\n\n- Name:\n- Goals or areas of concern:\n- Preferred days & times:\n\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.physically-fit-ct.example/schedule",
      title: "Book an Evaluation",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Physical therapy", "meta": "45 min · 1-on-1"}, {"name": "Personal training", "meta": "60 min · 1-on-1"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Book an Evaluation",
        body: "Hi,\n\nI'd like to book a physical therapy evaluation.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.physically-fit-ct.example/schedule",
      title: "Join a Class",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Small group fitness", "meta": "50 min · up to 8"}, {"name": "Personal training", "meta": "60 min · 1-on-1"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Join a Class",
        body: "Hi,\n\nI'd like to join a small group fitness class.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.physically-fit-ct.example/schedule",
      title: "Come See the Facility",
      subtitle: "Have a look around, meet whoever is on that day, and decide from there. No pressure either way.",
      services: [{"name": "Personal training", "meta": "60 min · 1-on-1"}, {"name": "Physical therapy", "meta": "45 min · 1-on-1"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Come See the Facility",
        body: "Hi Physically Fit CT,\n\nI'm interested in Come See the Facility.\n\nThank you!",
      },
    },
  },
};
