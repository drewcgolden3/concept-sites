/* =========================================================================
   RISE UP FITNESS — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "Rise Up Fitness",
    shortName: "RU",
    tagline: "Gym & Coaching in Norwalk",
  },

  contact: {
    venueName: "Rise Up Fitness",
    address: "Norwalk, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rise+Up+Fitness+Norwalk+CT",
    phone: "",
    phoneHref: "",
    email: "riseupfitness@gmail.com",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.rise-up-fitness.example/schedule",
      title: "See Pricing & Join",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Personal training", "meta": "60 min · 1-on-1"}, {"name": "Group coaching", "meta": "50 min · small group"}],
      fallbackEmail: {
        to: "riseupfitness@gmail.com",
        subject: "See Pricing & Join",
        body: "Hi Rise Up Fitness,\n\nI'd like to join. Here are my details:\n\n- Name:\n- Goals:\n- Preferred days & times:\n\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.rise-up-fitness.example/schedule",
      title: "Join a Class",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Group coaching", "meta": "50 min · small group"}, {"name": "Personal training", "meta": "60 min · 1-on-1"}],
      fallbackEmail: {
        to: "riseupfitness@gmail.com",
        subject: "Join a Class",
        body: "Hi,\n\nI'd like to join a group coaching class.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.rise-up-fitness.example/schedule",
      title: "Book Nutrition Coaching",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Nutrition coaching", "meta": "45 min · 1-on-1"}, {"name": "Personal training", "meta": "60 min · 1-on-1"}],
      fallbackEmail: {
        to: "riseupfitness@gmail.com",
        subject: "Book Nutrition Coaching",
        body: "Hi,\n\nI'd like to book nutrition coaching.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.rise-up-fitness.example/schedule",
      title: "Come See the Gym",
      subtitle: "Have a look around, meet whoever is on that day, and decide from there. No pressure either way.",
      services: [{"name": "Personal training", "meta": "60 min · 1-on-1"}, {"name": "Group coaching", "meta": "50 min · small group"}],
      fallbackEmail: {
        to: "riseupfitness@gmail.com",
        subject: "Come See the Gym",
        body: "Hi Rise Up Fitness,\n\nI'm interested in Come See the Gym.\n\nThank you!",
      },
    },
  },
};
