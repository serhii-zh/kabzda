const state = {
  profilePage: {
    posts: [
      { text: "This is my first post", likesCount: 12 },
      { text: "Second post for you", likesCount: 5 },
      { text: "How about the third one?", likesCount: 52 },
      { text: "Final 4th post", likesCount: 0 },
    ],
  },
  dialogsPage: {
    dialogs: [
      {
        id: 1,
        name: "Nastia",
        avatar:
          "https://scontent.fifo4-1.fna.fbcdn.net/v/t1.6435-9/58741765_376007403010987_7717284326504660992_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=li2xbLL5eGIAX_iQ0vm&_nc_ht=scontent.fifo4-1.fna&oh=3185340cfbdfdd0dc1be35ad5dfd1474&oe=617B32AB",
      },
      {
        id: 2,
        name: "Lindsay",
        avatar:
          "https://scontent.fifo4-1.fna.fbcdn.net/v/t1.6435-9/120053425_3034979136612845_9580998484641780_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=84a396&_nc_ohc=HEJ106n3SeIAX-nx00N&_nc_ht=scontent.fifo4-1.fna&oh=90ce9e32ff204fd49df28a0ce13c1ab9&oe=617CCB7E",
      },
      {
        id: 3,
        name: "Maryana",
        avatar:
          "https://scontent.fifo4-1.fna.fbcdn.net/v/t1.6435-9/103105117_10213730196328069_880532476977204466_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=4yPCeZ4UJ5wAX9uYxXo&_nc_ht=scontent.fifo4-1.fna&oh=32234045ceecbf376db3e2097a5c9e43&oe=617AE220",
      },
      {
        id: 4,
        name: "Vova",
        avatar:
          "https://scontent.fifo4-1.fna.fbcdn.net/v/t1.6435-9/119117593_4314943991911848_1185415428489061387_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QGtpcf_VWj8AX-mLSiH&_nc_ht=scontent.fifo4-1.fna&oh=e1966205a20ea3b5086f2362384c4537&oe=617D67A0",
      },
      {
        id: 5,
        name: "Makar",
        avatar: "https://images.crafta.ua/prodthumbs/2653333_330_330",
      },
      {
        id: 6,
        name: "Millera",
        avatar:
          "https://scontent.fifo4-1.fna.fbcdn.net/v/t39.30808-6/240169012_1890059911168311_7088987052753972269_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=htzk4KWSMugAX-7cjYl&_nc_ht=scontent.fifo4-1.fna&oh=1f8308d22134ce75bfebd63937384544&oe=6162B82B",
      },
    ],
    messages: [
      { text: "Hi" },
      { text: "How are you?" },
      { text: "Are you there?" },
    ],
  },
};

export default state;
