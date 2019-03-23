const { Google } = require("../models");
// console.log(keyTypeof(Google));
let google = new Google({
  input: "",
  vie: "Bản dịch",
  meaning: [
    {
      keyType: "Danh từ",
      meaning:
        "an electronic device for storing and processing data, typically in binary form, according to instructions given to it in a variable program.",
      example:
        '"The laws were designed to prosecute people who hack into computers and steal information.",',
      syms: [
        "personal computer",
        "PC",
        "laptop",
        "netbook",
        "ultraportable",
        "desktop",
        "terminal",
        "mainframe",
        "Internet appliance",
        "puter"
      ]
    },
    {
      keyType: "Động từ",
      meaning:
        "an electronic device for storing and processing data, typically in binary form, according to instructions given to it in a variable program.",
      example:
        '"The laws were designed to prosecute people who hack into computers and steal information.",',
      syms: [
        "personal computer",
        "PC",
        "laptop",
        "netbook",
        "ultraportable",
        "desktop",
        "terminal",
        "mainframe",
        "Internet appliance",
        "puter"
      ]
    }
  ],
  trans: [
    {
      keyType: "Danh từ",
      translate: [
        {
          name: "máy điện toán",
          meaning: ["computer", "microcomputer"]
        },
        {
          name: "máy tính",
          meaning: [
            "computer",
            "calculator",
            "counter",
            "comptometer",
            "totalizator"
          ]
        },
        {
          name: "người tính toán",
          meaning: ["computer", "counter"]
        }
      ]
    },
    {
      keyType: "Động từ",
      translate: [
        {
          name: "máy điện toán",
          meaning: ["computer", "microcomputer"]
        },
        {
          name: "máy tính",
          meaning: [
            "computer",
            "calculator",
            "counter",
            "comptometer",
            "totalizator"
          ]
        }
      ]
    }
  ],
  example: [
    "there's something wrong with my computer",
    "computer network",
    "she shut down her computer",
    "Since then, the craft appears to have rebooted its own on-board computer more than 60 times."
  ],
  smallsyms: [
    {
      keyType: "Danh từ",
      sym: ["personal computer", "PC", "laptop"]
    },
    {
      keyType: "Động từ",
      sym: ["netbook", "ultraportable"]
    }
  ],
  syms: [
    {
      keyType: "Danh từ",
      sym: [
        "personal computer",
        "PC",
        "laptop",
        "netbook",
        "ultraportable",
        "desktop",
        "terminal",
        "mainframe",
        "Internet appliance",
        "puter"
      ]
    },
    {
      keyType: "Động từ",
      sym: ["personal computer", "PC", "laptop", "netbook", "ultraportable"]
    }
  ]
});

module.exports = { google };