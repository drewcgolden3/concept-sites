/* =========================================================================
   HAMDEN HALL AQUATIC CLUB — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "Hamden Hall Aquatic Club",
    shortName: "HHAC",
    tagline: "Swim Lessons & Team in Hamden",
  },

  contact: {
    venueName: "Hamden Hall Aquatic Club",
    address: "Hamden, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Hamden+Hall+Aquatic+Club+Hamden+CT",
    phone: "",
    phoneHref: "",
    email: "",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.hamden-hall-aquatic-club.example/schedule",
      title: "Book a Lesson",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Private lesson", "meta": "30 min \u00b7 1 swimmer"}, {"name": "Group lesson", "meta": "30 min \u00b7 up to 4 swimmers"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Book a Lesson",
        body: "Hi Hamden Hall Aquatic Club,\\n\\nI'd like to book a swim lesson. Here are my details:\\n\\n- Swimmer's name:\\n- Age:\\n- Experience level:\\n- Preferred days & times:\\n\\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.hamden-hall-aquatic-club.example/schedule",
      title: "Join Swim Team",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Private lesson", "meta": "30 min \u00b7 1 swimmer"}, {"name": "Group lesson", "meta": "30 min \u00b7 up to 4 swimmers"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Join Swim Team",
        body: "Hi Hamden Hall Aquatic Club,\\n\\nI'd like to join the swim team.\\n\\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.hamden-hall-aquatic-club.example/schedule",
      title: "Register for Camp",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Private lesson", "meta": "30 min \u00b7 1 swimmer"}, {"name": "Group lesson", "meta": "30 min \u00b7 up to 4 swimmers"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Register for Camp",
        body: "Hi Hamden Hall Aquatic Club,\\n\\nI'd like to register for camp.\\n\\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.hamden-hall-aquatic-club.example/schedule",
      title: "Come See the Pool",
      subtitle: "Have a look around, meet a coach, and watch a lesson before you commit to anything.",
      services: [{"name": "Private lesson", "meta": "30 min \u00b7 1 swimmer"}, {"name": "Group lesson", "meta": "30 min \u00b7 up to 4 swimmers"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Come See the Pool",
        body: "Hi Hamden Hall Aquatic Club,\\n\\nI'm interested in coming to see the pool.\\n\\nThank you!",
      },
    },
  },
};
