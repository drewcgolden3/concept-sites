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
    name: "Lunge Fitness",
    shortName: "LF",
    tagline: "Strength & Conditioning Training in Woodbury",
  },

  contact: {
    venueName: "Lunge Fitness",
    address: "Woodbury, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Lunge+Fitness+Woodbury+CT",
    phone: "",
    phoneHref: "",
    email: "",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.lunge-fitness.example/schedule",
      title: "Book a Session",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Personal training", "meta": "60 min \u00b7 1-on-1"}, {"name": "Small-group strength", "meta": "45 min \u00b7 up to 6"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Book a Session",
        body: "Hi Lunge Fitness,\n\nI'd like to book a session. Here are my details:\n\n- Name:\n- Goal:\n- Experience level:\n- Preferred days & times:\n\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.lunge-fitness.example/schedule",
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
      embedUrl: "https://book.lunge-fitness.example/schedule",
      title: "Start the Program",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Personal training", "meta": "60 min \u00b7 1-on-1"}, {"name": "Small-group strength", "meta": "45 min \u00b7 up to 6"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Start the Program",
        body: "Hi,\n\nI'd like to start the 6-Week Kickstart program.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.lunge-fitness.example/schedule",
      title: "Come See the Gym",
      subtitle: "Have a look around, meet a coach, and decide from there. No pressure either way.",
      services: [{"name": "Personal training", "meta": "60 min \u00b7 1-on-1"}, {"name": "Small-group strength", "meta": "45 min \u00b7 up to 6"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Come See the Gym",
        body: "Hi Lunge Fitness,\n\nI'm interested in coming to see the gym.\n\nThank you!",
      },
    },
  },
};
