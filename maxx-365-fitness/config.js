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
    name: "Maxx 365 Fitness",
    shortName: "M365",
    tagline: "Fitness & Recovery Club in Southbury",
  },

  contact: {
    venueName: "Maxx 365 Fitness",
    address: "Southbury, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Maxx+365+Fitness+Southbury+CT",
    phone: "",
    phoneHref: "",
    email: "mcoe@maxxfitnessclubzz.com",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.maxx-365-fitness.example/schedule",
      title: "Book Recovery",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Recovery suite", "meta": "45 min \u00b7 cold plunge, cryo, sauna"}, {"name": "Personal training", "meta": "60 min \u00b7 1-on-1"}],
      fallbackEmail: {
        to: "mcoe@maxxfitnessclubzz.com",
        subject: "Book Recovery",
        body: "Hi Maxx 365 Fitness,\n\nI'd like to book time in the recovery suite. Here are my details:\n\n- Name:\n- Preferred amenity (cold plunge, cryo, hydro massage, sauna, red light):\n- Preferred days & times:\n\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.maxx-365-fitness.example/schedule",
      title: "Join a Class",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Recovery suite", "meta": "45 min \u00b7 cold plunge, cryo, sauna"}, {"name": "Personal training", "meta": "60 min \u00b7 1-on-1"}],
      fallbackEmail: {
        to: "mcoe@maxxfitnessclubzz.com",
        subject: "Join a Class",
        body: "Hi,\n\nI'd like to join a Group Fitness class.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.maxx-365-fitness.example/schedule",
      title: "Book Training",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Recovery suite", "meta": "45 min \u00b7 cold plunge, cryo, sauna"}, {"name": "Personal training", "meta": "60 min \u00b7 1-on-1"}],
      fallbackEmail: {
        to: "mcoe@maxxfitnessclubzz.com",
        subject: "Book Training",
        body: "Hi,\n\nI'd like to book a Personal Training session.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.maxx-365-fitness.example/schedule",
      title: "Come See the Club",
      subtitle: "Tour the floor and the recovery suite, meet whoever is on that day, and decide from there.",
      services: [{"name": "Recovery suite", "meta": "45 min \u00b7 cold plunge, cryo, sauna"}, {"name": "Personal training", "meta": "60 min \u00b7 1-on-1"}],
      fallbackEmail: {
        to: "mcoe@maxxfitnessclubzz.com",
        subject: "Come See the Club",
        body: "Hi Maxx 365 Fitness,\n\nI'm interested in coming to see the club.\n\nThank you!",
      },
    },
  },
};
