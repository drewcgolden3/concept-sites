/* =========================================================================
   THE TRAINING FLOOR — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "The Training Floor",
    shortName: "TF",
    tagline: "Strength & Conditioning Gym in Stamford",
  },

  contact: {
    venueName: "The Training Floor",
    address: "Stamford, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Training+Floor+Stamford+CT",
    phone: "",
    phoneHref: "",
    email: "ray.boyd@thetrainingfloor.org",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.the-training-floor.example/schedule",
      title: "Join a Session",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Small group training", "meta": "60 min · max 8"}, {"name": "Open gym block", "meta": "Self-directed · all levels"}],
      fallbackEmail: {
        to: "ray.boyd@thetrainingfloor.org",
        subject: "Join a Session",
        body: "Hi Training Floor team,\n\nI'd like to join a session. Here are my details:\n\n- Name:\n- Experience level:\n- Preferred days & times:\n\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.the-training-floor.example/schedule",
      title: "Check Open Hours",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Small group training", "meta": "60 min · max 8"}, {"name": "Open gym block", "meta": "Self-directed · all levels"}],
      fallbackEmail: {
        to: "ray.boyd@thetrainingfloor.org",
        subject: "Check Open Hours",
        body: "Hi,\n\nI'd like to confirm open gym hours and stop in.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.the-training-floor.example/schedule",
      title: "Book a Coach",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Small group training", "meta": "60 min · max 8"}, {"name": "Personal coaching", "meta": "60 min · 1-on-1"}],
      fallbackEmail: {
        to: "ray.boyd@thetrainingfloor.org",
        subject: "Book a Coach",
        body: "Hi,\n\nI'd like to book a personal coaching session.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.the-training-floor.example/schedule",
      title: "Come See the Floor",
      subtitle: "Have a look around, meet whoever is coaching that day, and decide from there. No pressure either way.",
      services: [{"name": "Small group training", "meta": "60 min · max 8"}, {"name": "Personal coaching", "meta": "60 min · 1-on-1"}],
      fallbackEmail: {
        to: "ray.boyd@thetrainingfloor.org",
        subject: "Come See the Floor",
        body: "Hi Training Floor team,\n\nI'm interested in coming to see the floor.\n\nThank you!",
      },
    },
  },
};
