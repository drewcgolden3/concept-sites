/* =========================================================================
   HEALTHTRAX FITNESS CENTER — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "Healthtrax Fitness Center",
    shortName: "HFC",
    tagline: "Gym & Fitness in North Haven",
  },

  contact: {
    venueName: "Healthtrax Fitness Center",
    address: "North Haven, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Healthtrax+Fitness+Center+North+Haven+CT",
    phone: "",
    phoneHref: "",
    email: "hmaher@healthtrax.net",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.healthtrax-fitness-center.example/schedule",
      title: "Book a Session",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Personal training session", "meta": "60 min \u00b7 1-on-1"}, {"name": "Group fitness class", "meta": "45 min \u00b7 drop-in"}],
      fallbackEmail: {
        to: "hmaher@healthtrax.net",
        subject: "Book a Session",
        body: "Hi Healthtrax Fitness Center,\\n\\nI'd like to book a session. Here are my details:\\n\\n- Name:\\n- Goal:\\n- Preferred days & times:\\n\\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.healthtrax-fitness-center.example/schedule",
      title: "Try a Class",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Personal training session", "meta": "60 min \u00b7 1-on-1"}, {"name": "Group fitness class", "meta": "45 min \u00b7 drop-in"}],
      fallbackEmail: {
        to: "hmaher@healthtrax.net",
        subject: "Try a Class",
        body: "Hi Healthtrax Fitness Center,\\n\\nI'd like to try a group fitness class.\\n\\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.healthtrax-fitness-center.example/schedule",
      title: "Start Personal Training",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Personal training session", "meta": "60 min \u00b7 1-on-1"}, {"name": "Group fitness class", "meta": "45 min \u00b7 drop-in"}],
      fallbackEmail: {
        to: "hmaher@healthtrax.net",
        subject: "Start Personal Training",
        body: "Hi Healthtrax Fitness Center,\\n\\nI'd like to start personal training.\\n\\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.healthtrax-fitness-center.example/schedule",
      title: "Come See the Gym",
      subtitle: "Have a look around, meet a coach, and see the floor before you commit to anything.",
      services: [{"name": "Personal training session", "meta": "60 min \u00b7 1-on-1"}, {"name": "Group fitness class", "meta": "45 min \u00b7 drop-in"}],
      fallbackEmail: {
        to: "hmaher@healthtrax.net",
        subject: "Come See the Gym",
        body: "Hi Healthtrax Fitness Center,\\n\\nI'm interested in coming to see the gym.\\n\\nThank you!",
      },
    },
  },
};
