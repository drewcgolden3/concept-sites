/* =========================================================================
   OSTEOPATHIC FITNESS — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "Osteopathic Fitness",
    shortName: "OF",
    tagline: "Movement-Focused Training in Ridgefield",
  },

  contact: {
    venueName: "Osteopathic Fitness",
    address: "Ridgefield, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Osteopathic+Fitness+Ridgefield+CT",
    phone: "",
    phoneHref: "",
    email: "osteopathicfitness@gmail.com",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.osteopathic-fitness.example/schedule",
      title: "Book a Session",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Personal training", "meta": "60 min · 1-on-1"}, {"name": "Movement assessment", "meta": "45 min · 1-on-1"}],
      fallbackEmail: {
        to: "osteopathicfitness@gmail.com",
        subject: "Book a Session",
        body: "Hi Osteopathic Fitness,\n\nI'd like to book. Here are my details:\n\n- Name:\n- Goals or areas of pain:\n- Preferred days & times:\n\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.osteopathic-fitness.example/schedule",
      title: "Book an Assessment",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Movement assessment", "meta": "45 min · 1-on-1"}, {"name": "Personal training", "meta": "60 min · 1-on-1"}],
      fallbackEmail: {
        to: "osteopathicfitness@gmail.com",
        subject: "Book an Assessment",
        body: "Hi,\n\nI'd like to book a movement assessment.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.osteopathic-fitness.example/schedule",
      title: "Join a Class",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Small group class", "meta": "50 min · up to 6"}, {"name": "Personal training", "meta": "60 min · 1-on-1"}],
      fallbackEmail: {
        to: "osteopathicfitness@gmail.com",
        subject: "Join a Class",
        body: "Hi,\n\nI'd like to join a small group class.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.osteopathic-fitness.example/schedule",
      title: "Come See the Studio",
      subtitle: "Have a look around, meet whoever is on that day, and decide from there. No pressure either way.",
      services: [{"name": "Personal training", "meta": "60 min · 1-on-1"}, {"name": "Movement assessment", "meta": "45 min · 1-on-1"}],
      fallbackEmail: {
        to: "osteopathicfitness@gmail.com",
        subject: "Come See the Studio",
        body: "Hi Osteopathic Fitness,\n\nI'm interested in Come See the Studio.\n\nThank you!",
      },
    },
  },
};
