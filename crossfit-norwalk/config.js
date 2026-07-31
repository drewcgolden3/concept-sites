/* =========================================================================
   CROSSFIT NORWALK — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "CrossFit Norwalk",
    shortName: "CN",
    tagline: "CrossFit in Norwalk",
  },

  contact: {
    venueName: "CrossFit Norwalk",
    address: "Norwalk, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=CrossFit+Norwalk+Norwalk+CT",
    phone: "",
    phoneHref: "",
    email: "",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.crossfit-norwalk.example/schedule",
      title: "Book a Class",
      subtitle: "Pick a class that works. Confirmed in a couple of taps.",
      services: [{"name": "Group class", "meta": "60 min \u00b7 coach-led"}, {"name": "Open gym", "meta": "90 min \u00b7 self-directed"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Book a Class",
        body: "Hi CrossFit Norwalk,\\n\\nI'd like to book a class. Here are my details:\\n\\n- Name:\\n- Experience level:\\n- Preferred days & times:\\n\\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.crossfit-norwalk.example/schedule",
      title: "Open Gym",
      subtitle: "Reserve open gym time. Confirmed in a couple of taps.",
      services: [{"name": "Group class", "meta": "60 min \u00b7 coach-led"}, {"name": "Open gym", "meta": "90 min \u00b7 self-directed"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Open Gym",
        body: "Hi CrossFit Norwalk,\\n\\nI'd like to reserve open gym time.\\n\\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.crossfit-norwalk.example/schedule",
      title: "Start Foundations",
      subtitle: "Start the Foundations track whenever you're ready.",
      services: [{"name": "Group class", "meta": "60 min \u00b7 coach-led"}, {"name": "Open gym", "meta": "90 min \u00b7 self-directed"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Start Foundations",
        body: "Hi CrossFit Norwalk,\\n\\nI'd like to start the Foundations program.\\n\\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.crossfit-norwalk.example/schedule",
      title: "Come See the Gym",
      subtitle: "Have a look around, meet a coach, and watch a class before you commit to anything.",
      services: [{"name": "Group class", "meta": "60 min \u00b7 coach-led"}, {"name": "Open gym", "meta": "90 min \u00b7 self-directed"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Come See the Gym",
        body: "Hi CrossFit Norwalk,\\n\\nI'm interested in coming to see the gym.\\n\\nThank you!",
      },
    },
  },
};
