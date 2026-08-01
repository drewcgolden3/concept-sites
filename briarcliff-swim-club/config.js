/* =========================================================================
   BRIARCLIFF SWIM CLUB — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "Briarcliff Swim Club",
    shortName: "BS",
    tagline: "Swim Club in Avon",
  },

  contact: {
    venueName: "Briarcliff Swim Club",
    address: "Avon, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Briarcliff+Swim+Club+Avon+CT",
    phone: "",
    phoneHref: "",
    email: "",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.briarcliffswimclub.example/schedule",
      title: "Book a Lesson",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Swim lesson", "meta": "30 min · small group"}, {"name": "Swim team tryout", "meta": "45 min · all ages"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Book a Lesson",
        body: "Hi Briarcliff Swim Club,\n\nI'd like to book a swim lesson. Here are my details:\n\n- Swimmer's name:\n- Age:\n- Level:\n- Preferred days & times:\n\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.briarcliffswimclub.example/schedule",
      title: "Book a Lesson",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Swim lesson", "meta": "30 min · small group"}, {"name": "Swim team tryout", "meta": "45 min · all ages"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Book a Lesson",
        body: "Hi,\n\nI'd like to book a swim lesson.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.briarcliffswimclub.example/schedule",
      title: "Join for the Summer",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Swim lesson", "meta": "30 min · small group"}, {"name": "Swim team tryout", "meta": "45 min · all ages"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Join for the Summer",
        body: "Hi,\n\nI'd like to sign up for a summer membership.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.briarcliffswimclub.example/schedule",
      title: "Come See the Club",
      subtitle: "Have a look around, meet whoever is on that day, and decide from there. No pressure either way.",
      services: [{"name": "Swim lesson", "meta": "30 min · small group"}, {"name": "Swim team tryout", "meta": "45 min · all ages"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Come See the Club",
        body: "Hi Briarcliff Swim Club,\n\nI'm interested in coming to see the club.\n\nThank you!",
      },
    },
  },
};
