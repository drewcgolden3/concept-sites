/* =========================================================================
   PLATINUM FITNESS — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "Platinum Fitness",
    shortName: "PF",
    tagline: "Gym & Personal Training in Danbury",
  },

  contact: {
    venueName: "Platinum Fitness",
    address: "Danbury, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Platinum+Fitness+Danbury+CT",
    phone: "",
    phoneHref: "",
    email: "Platinumfitnessct@gmail.com",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.platinum-fitness.example/schedule",
      title: "Join Now",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Membership tour", "meta": "30 min · 1-on-1"}, {"name": "Personal training", "meta": "60 min · 1-on-1"}],
      fallbackEmail: {
        to: "Platinumfitnessct@gmail.com",
        subject: "Join Now",
        body: "Hi Platinum Fitness,\n\nI'd like to join. Here are my details:\n\n- Name:\n- Goals:\n- Preferred days & times:\n\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.platinum-fitness.example/schedule",
      title: "Book a Session",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Personal training", "meta": "60 min · 1-on-1"}, {"name": "Membership tour", "meta": "30 min · 1-on-1"}],
      fallbackEmail: {
        to: "Platinumfitnessct@gmail.com",
        subject: "Book a Session",
        body: "Hi,\n\nI'd like to book a personal training session.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.platinum-fitness.example/schedule",
      title: "Join a Class",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Group class", "meta": "50 min · drop-in"}, {"name": "Personal training", "meta": "60 min · 1-on-1"}],
      fallbackEmail: {
        to: "Platinumfitnessct@gmail.com",
        subject: "Join a Class",
        body: "Hi,\n\nI'd like to join a group class.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.platinum-fitness.example/schedule",
      title: "Come See the Gym",
      subtitle: "Have a look around, meet whoever is on that day, and decide from there. No pressure either way.",
      services: [{"name": "Membership tour", "meta": "30 min · 1-on-1"}, {"name": "Personal training", "meta": "60 min · 1-on-1"}],
      fallbackEmail: {
        to: "Platinumfitnessct@gmail.com",
        subject: "Come See the Gym",
        body: "Hi Platinum Fitness,\n\nI'm interested in Come See the Gym.\n\nThank you!",
      },
    },
  },
};
