import React from 'react';
import ReactTable from "react-table";

const data = [
    {
        "firstName": "sympathy",
        "lastName" : "funeral",
        "age"      : 28,
        "visits"   : 55,
        "progress" : 59,
        "status"   : "complicated",
        "children" : [
            {
                "firstName": "investment",
                "lastName" : "foot",
                "age"      : 28,
                "visits"   : 8,
                "progress" : 48,
                "status"   : "relationship"
            }, {
                "firstName": "drawer",
                "lastName" : "limit",
                "age"      : 29,
                "visits"   : 79,
                "progress" : 95,
                "status"   : "single"
            }, {
                "firstName": "marriage",
                "lastName" : "iron",
                "age"      : 29,
                "visits"   : 67,
                "progress" : 19,
                "status"   : "single"
            }, {
                "firstName": "length",
                "lastName" : "player",
                "age"      : 12,
                "visits"   : 15,
                "progress" : 6,
                "status"   : "relationship"
            }, {
                "firstName": "wash",
                "lastName" : "quartz",
                "age"      : 10,
                "visits"   : 23,
                "progress" : 22,
                "status"   : "single"
            }, {
                "firstName": "face",
                "lastName" : "tomatoes",
                "age"      : 12,
                "visits"   : 78,
                "progress" : 54,
                "status"   : "single"
            }, {
                "firstName": "arithmetic",
                "lastName" : "drawing",
                "age"      : 22,
                "visits"   : 32,
                "progress" : 21,
                "status"   : "relationship"
            }, {
                "firstName": "nest",
                "lastName" : "reaction",
                "age"      : 27,
                "visits"   : 36,
                "progress" : 23,
                "status"   : "relationship"
            }, {
                "firstName": "angle",
                "lastName" : "lunchroom",
                "age"      : 29,
                "visits"   : 10,
                "progress" : 61,
                "status"   : "complicated"
            }, {
                "firstName": "hammer",
                "lastName" : "pets",
                "age"      : 4,
                "visits"   : 6,
                "progress" : 19,
                "status"   : "single"
            }
        ]
    }, {
        "firstName": "scent",
        "lastName" : "shape",
        "age"      : 1,
        "visits"   : 6,
        "progress" : 50,
        "status"   : "complicated",
        "children" : [
            {
                "firstName": "verse",
                "lastName" : "pear",
                "age"      : 5,
                "visits"   : 0,
                "progress" : 23,
                "status"   : "relationship"
            }, {
                "firstName": "brothers",
                "lastName" : "coffee",
                "age"      : 16,
                "visits"   : 59,
                "progress" : 85,
                "status"   : "relationship"
            }, {
                "firstName": "yak",
                "lastName" : "midnight",
                "age"      : 4,
                "visits"   : 47,
                "progress" : 53,
                "status"   : "single"
            }, {
                "firstName": "disk",
                "lastName" : "queen",
                "age"      : 23,
                "visits"   : 68,
                "progress" : 32,
                "status"   : "complicated"
            }, {
                "firstName": "distribution",
                "lastName" : "pleasure",
                "age"      : 15,
                "visits"   : 83,
                "progress" : 59,
                "status"   : "single"
            }, {
                "firstName": "frog",
                "lastName" : "bikes",
                "age"      : 9,
                "visits"   : 87,
                "progress" : 55,
                "status"   : "relationship"
            }, {
                "firstName": "visitor",
                "lastName" : "method",
                "age"      : 27,
                "visits"   : 0,
                "progress" : 31,
                "status"   : "relationship"
            }, {
                "firstName": "personality",
                "lastName" : "chair",
                "age"      : 28,
                "visits"   : 79,
                "progress" : 45,
                "status"   : "single"
            }, {
                "firstName": "oranges",
                "lastName" : "thought",
                "age"      : 12,
                "visits"   : 75,
                "progress" : 37,
                "status"   : "single"
            }, {
                "firstName": "math",
                "lastName" : "drawer",
                "age"      : 8,
                "visits"   : 87,
                "progress" : 5,
                "status"   : "complicated"
            }
        ]
    }, {
        "firstName": "jeans",
        "lastName" : "calendar",
        "age"      : 6,
        "visits"   : 55,
        "progress" : 15,
        "status"   : "relationship",
        "children" : [
            {
                "firstName": "houses",
                "lastName" : "curve",
                "age"      : 5,
                "visits"   : 88,
                "progress" : 48,
                "status"   : "relationship"
            }, {
                "firstName": "twist",
                "lastName" : "sofa",
                "age"      : 3,
                "visits"   : 67,
                "progress" : 56,
                "status"   : "complicated"
            }, {
                "firstName": "stamp",
                "lastName" : "lawyer",
                "age"      : 20,
                "visits"   : 23,
                "progress" : 27,
                "status"   : "relationship"
            }, {
                "firstName": "marble",
                "lastName" : "minister",
                "age"      : 19,
                "visits"   : 68,
                "progress" : 33,
                "status"   : "single"
            }, {
                "firstName": "nut",
                "lastName" : "believe",
                "age"      : 19,
                "visits"   : 41,
                "progress" : 87,
                "status"   : "relationship"
            }, {
                "firstName": "mailbox",
                "lastName" : "complaint",
                "age"      : 11,
                "visits"   : 39,
                "progress" : 39,
                "status"   : "single"
            }, {
                "firstName": "toys",
                "lastName" : "distribution",
                "age"      : 7,
                "visits"   : 20,
                "progress" : 88,
                "status"   : "single"
            }, {
                "firstName": "clam",
                "lastName" : "art",
                "age"      : 22,
                "visits"   : 55,
                "progress" : 71,
                "status"   : "complicated"
            }, {
                "firstName": "harbor",
                "lastName" : "effect",
                "age"      : 15,
                "visits"   : 13,
                "progress" : 0,
                "status"   : "single"
            }, {
                "firstName": "trainer",
                "lastName" : "money",
                "age"      : 1,
                "visits"   : 58,
                "progress" : 80,
                "status"   : "relationship"
            }
        ]
    }, {
        "firstName": "dolls",
        "lastName" : "taste",
        "age"      : 11,
        "visits"   : 81,
        "progress" : 63,
        "status"   : "relationship",
        "children" : [
            {
                "firstName": "brass",
                "lastName" : "impulse",
                "age"      : 2,
                "visits"   : 86,
                "progress" : 3,
                "status"   : "relationship"
            }, {
                "firstName": "anxiety",
                "lastName" : "cream",
                "age"      : 10,
                "visits"   : 2,
                "progress" : 47,
                "status"   : "relationship"
            }, {
                "firstName": "system",
                "lastName" : "park",
                "age"      : 3,
                "visits"   : 14,
                "progress" : 89,
                "status"   : "complicated"
            }, {
                "firstName": "parcel",
                "lastName" : "face",
                "age"      : 4,
                "visits"   : 32,
                "progress" : 83,
                "status"   : "relationship"
            }, {
                "firstName": "bean",
                "lastName" : "creator",
                "age"      : 29,
                "visits"   : 5,
                "progress" : 86,
                "status"   : "relationship"
            }, {
                "firstName": "finding",
                "lastName" : "nail",
                "age"      : 2,
                "visits"   : 82,
                "progress" : 57,
                "status"   : "single"
            }, {
                "firstName": "snails",
                "lastName" : "middle",
                "age"      : 4,
                "visits"   : 77,
                "progress" : 76,
                "status"   : "complicated"
            }, {
                "firstName": "kittens",
                "lastName" : "oatmeal",
                "age"      : 29,
                "visits"   : 49,
                "progress" : 90,
                "status"   : "complicated"
            }, {
                "firstName": "fall",
                "lastName" : "belief",
                "age"      : 13,
                "visits"   : 6,
                "progress" : 26,
                "status"   : "single"
            }, {
                "firstName": "goldfish",
                "lastName" : "babies",
                "age"      : 1,
                "visits"   : 85,
                "progress" : 50,
                "status"   : "complicated"
            }
        ]
    }, {
        "firstName": "cookie",
        "lastName" : "message",
        "age"      : 6,
        "visits"   : 58,
        "progress" : 14,
        "status"   : "single",
        "children" : [
            {
                "firstName": "parent",
                "lastName" : "attack",
                "age"      : 6,
                "visits"   : 46,
                "progress" : 3,
                "status"   : "complicated"
            }, {
                "firstName": "bedroom",
                "lastName" : "passenger",
                "age"      : 21,
                "visits"   : 73,
                "progress" : 64,
                "status"   : "single"
            }, {
                "firstName": "birth",
                "lastName" : "leadership",
                "age"      : 0,
                "visits"   : 3,
                "progress" : 48,
                "status"   : "single"
            }, {
                "firstName": "agreement",
                "lastName" : "laugh",
                "age"      : 27,
                "visits"   : 80,
                "progress" : 51,
                "status"   : "relationship"
            }, {
                "firstName": "dock",
                "lastName" : "lamp",
                "age"      : 15,
                "visits"   : 8,
                "progress" : 91,
                "status"   : "relationship"
            }, {
                "firstName": "steel",
                "lastName" : "communication",
                "age"      : 1,
                "visits"   : 42,
                "progress" : 37,
                "status"   : "relationship"
            }, {
                "firstName": "affair",
                "lastName" : "ray",
                "age"      : 29,
                "visits"   : 28,
                "progress" : 17,
                "status"   : "complicated"
            }, {
                "firstName": "spiders",
                "lastName" : "machine",
                "age"      : 29,
                "visits"   : 64,
                "progress" : 95,
                "status"   : "single"
            }, {
                "firstName": "fork",
                "lastName" : "things",
                "age"      : 21,
                "visits"   : 80,
                "progress" : 21,
                "status"   : "single"
            }, {
                "firstName": "republic",
                "lastName" : "hand",
                "age"      : 8,
                "visits"   : 31,
                "progress" : 70,
                "status"   : "relationship"
            }
        ]
    }, {
        "firstName": "icicle",
        "lastName" : "length",
        "age"      : 25,
        "visits"   : 59,
        "progress" : 43,
        "status"   : "complicated",
        "children" : [
            {
                "firstName": "meaning",
                "lastName" : "strategy",
                "age"      : 19,
                "visits"   : 66,
                "progress" : 25,
                "status"   : "single"
            }, {
                "firstName": "direction",
                "lastName" : "nest",
                "age"      : 2,
                "visits"   : 34,
                "progress" : 28,
                "status"   : "complicated"
            }, {
                "firstName": "grass",
                "lastName" : "lumber",
                "age"      : 23,
                "visits"   : 50,
                "progress" : 82,
                "status"   : "complicated"
            }, {
                "firstName": "rhythm",
                "lastName" : "clover",
                "age"      : 1,
                "visits"   : 38,
                "progress" : 65,
                "status"   : "single"
            }, {
                "firstName": "push",
                "lastName" : "tongue",
                "age"      : 19,
                "visits"   : 83,
                "progress" : 25,
                "status"   : "complicated"
            }, {
                "firstName": "transportation",
                "lastName" : "hat",
                "age"      : 7,
                "visits"   : 99,
                "progress" : 55,
                "status"   : "single"
            }, {
                "firstName": "kettle",
                "lastName" : "airport",
                "age"      : 9,
                "visits"   : 31,
                "progress" : 97,
                "status"   : "single"
            }, {
                "firstName": "brass",
                "lastName" : "funeral",
                "age"      : 27,
                "visits"   : 24,
                "progress" : 83,
                "status"   : "relationship"
            }, {
                "firstName": "degree",
                "lastName" : "population",
                "age"      : 2,
                "visits"   : 43,
                "progress" : 98,
                "status"   : "single"
            }, {
                "firstName": "measurement",
                "lastName" : "map",
                "age"      : 2,
                "visits"   : 48,
                "progress" : 10,
                "status"   : "complicated"
            }
        ]
    }, {
        "firstName": "record",
        "lastName" : "glove",
        "age"      : 9,
        "visits"   : 87,
        "progress" : 83,
        "status"   : "single",
        "children" : [
            {
                "firstName": "warning",
                "lastName" : "stem",
                "age"      : 6,
                "visits"   : 3,
                "progress" : 97,
                "status"   : "complicated"
            }, {
                "firstName": "finding",
                "lastName" : "plane",
                "age"      : 25,
                "visits"   : 82,
                "progress" : 17,
                "status"   : "single"
            }, {
                "firstName": "rose",
                "lastName" : "proposal",
                "age"      : 24,
                "visits"   : 61,
                "progress" : 23,
                "status"   : "single"
            }, {
                "firstName": "wood",
                "lastName" : "scarf",
                "age"      : 11,
                "visits"   : 59,
                "progress" : 59,
                "status"   : "complicated"
            }, {
                "firstName": "kitty",
                "lastName" : "drink",
                "age"      : 19,
                "visits"   : 97,
                "progress" : 74,
                "status"   : "relationship"
            }, {
                "firstName": "motion",
                "lastName" : "pin",
                "age"      : 13,
                "visits"   : 63,
                "progress" : 14,
                "status"   : "single"
            }, {
                "firstName": "audience",
                "lastName" : "bead",
                "age"      : 11,
                "visits"   : 48,
                "progress" : 22,
                "status"   : "relationship"
            }, {
                "firstName": "conversation",
                "lastName" : "wax",
                "age"      : 28,
                "visits"   : 39,
                "progress" : 71,
                "status"   : "relationship"
            }, {
                "firstName": "trail",
                "lastName" : "rain",
                "age"      : 25,
                "visits"   : 27,
                "progress" : 36,
                "status"   : "complicated"
            }, {
                "firstName": "help",
                "lastName" : "conversation",
                "age"      : 8,
                "visits"   : 57,
                "progress" : 27,
                "status"   : "relationship"
            }
        ]
    }, {
        "firstName": "recording",
        "lastName" : "cord",
        "age"      : 5,
        "visits"   : 90,
        "progress" : 15,
        "status"   : "complicated",
        "children" : [
            {
                "firstName": "administration",
                "lastName" : "riddle",
                "age"      : 29,
                "visits"   : 25,
                "progress" : 80,
                "status"   : "relationship"
            }, {
                "firstName": "watch",
                "lastName" : "wealth",
                "age"      : 8,
                "visits"   : 75,
                "progress" : 59,
                "status"   : "single"
            }, {
                "firstName": "snails",
                "lastName" : "adjustment",
                "age"      : 24,
                "visits"   : 21,
                "progress" : 51,
                "status"   : "complicated"
            }, {
                "firstName": "adjustment",
                "lastName" : "pull",
                "age"      : 24,
                "visits"   : 57,
                "progress" : 81,
                "status"   : "complicated"
            }, {
                "firstName": "hen",
                "lastName" : "poison",
                "age"      : 9,
                "visits"   : 70,
                "progress" : 6,
                "status"   : "complicated"
            }, {
                "firstName": "skin",
                "lastName" : "price",
                "age"      : 29,
                "visits"   : 11,
                "progress" : 5,
                "status"   : "single"
            }, {
                "firstName": "employee",
                "lastName" : "feeling",
                "age"      : 27,
                "visits"   : 31,
                "progress" : 98,
                "status"   : "single"
            }, {
                "firstName": "discovery",
                "lastName" : "chemistry",
                "age"      : 29,
                "visits"   : 4,
                "progress" : 49,
                "status"   : "complicated"
            }, {
                "firstName": "revenue",
                "lastName" : "technology",
                "age"      : 26,
                "visits"   : 11,
                "progress" : 46,
                "status"   : "relationship"
            }, {
                "firstName": "drink",
                "lastName" : "cause",
                "age"      : 26,
                "visits"   : 30,
                "progress" : 34,
                "status"   : "relationship"
            }
        ]
    }, {
        "firstName": "candidate",
        "lastName" : "goodbye",
        "age"      : 16,
        "visits"   : 32,
        "progress" : 64,
        "status"   : "complicated",
        "children" : [
            {
                "firstName": "flag",
                "lastName" : "notebook",
                "age"      : 24,
                "visits"   : 11,
                "progress" : 39,
                "status"   : "single"
            }, {
                "firstName": "way",
                "lastName" : "device",
                "age"      : 20,
                "visits"   : 53,
                "progress" : 99,
                "status"   : "relationship"
            }, {
                "firstName": "jeans",
                "lastName" : "push",
                "age"      : 4,
                "visits"   : 34,
                "progress" : 99,
                "status"   : "single"
            }, {
                "firstName": "brake",
                "lastName" : "sheep",
                "age"      : 9,
                "visits"   : 18,
                "progress" : 5,
                "status"   : "complicated"
            }, {
                "firstName": "soap",
                "lastName" : "truck",
                "age"      : 14,
                "visits"   : 67,
                "progress" : 59,
                "status"   : "complicated"
            }, {
                "firstName": "poem",
                "lastName" : "place",
                "age"      : 25,
                "visits"   : 90,
                "progress" : 3,
                "status"   : "relationship"
            }, {
                "firstName": "crook",
                "lastName" : "possession",
                "age"      : 16,
                "visits"   : 98,
                "progress" : 35,
                "status"   : "complicated"
            }, {
                "firstName": "bubble",
                "lastName" : "celery",
                "age"      : 14,
                "visits"   : 82,
                "progress" : 52,
                "status"   : "complicated"
            }, {
                "firstName": "scene",
                "lastName" : "philosophy",
                "age"      : 3,
                "visits"   : 5,
                "progress" : 52,
                "status"   : "single"
            }, {
                "firstName": "trees",
                "lastName" : "flowers",
                "age"      : 9,
                "visits"   : 28,
                "progress" : 0,
                "status"   : "single"
            }
        ]
    }, {
        "firstName": "sun",
        "lastName" : "bread",
        "age"      : 2,
        "visits"   : 42,
        "progress" : 95,
        "status"   : "complicated",
        "children" : [
            {
                "firstName": "bean",
                "lastName" : "article",
                "age"      : 13,
                "visits"   : 40,
                "progress" : 68,
                "status"   : "single"
            }, {
                "firstName": "interaction",
                "lastName" : "throne",
                "age"      : 20,
                "visits"   : 98,
                "progress" : 49,
                "status"   : "relationship"
            }, {
                "firstName": "protest",
                "lastName" : "worker",
                "age"      : 12,
                "visits"   : 79,
                "progress" : 12,
                "status"   : "relationship"
            }, {
                "firstName": "committee",
                "lastName" : "bikes",
                "age"      : 28,
                "visits"   : 98,
                "progress" : 26,
                "status"   : "single"
            }, {
                "firstName": "territory",
                "lastName" : "transportation",
                "age"      : 6,
                "visits"   : 45,
                "progress" : 60,
                "status"   : "single"
            }, {
                "firstName": "definition",
                "lastName" : "doll",
                "age"      : 20,
                "visits"   : 61,
                "progress" : 13,
                "status"   : "single"
            }, {
                "firstName": "sisters",
                "lastName" : "mood",
                "age"      : 18,
                "visits"   : 31,
                "progress" : 43,
                "status"   : "relationship"
            }, {
                "firstName": "spoon",
                "lastName" : "nation",
                "age"      : 7,
                "visits"   : 73,
                "progress" : 83,
                "status"   : "complicated"
            }, {
                "firstName": "teeth",
                "lastName" : "balance",
                "age"      : 0,
                "visits"   : 24,
                "progress" : 86,
                "status"   : "single"
            }, {
                "firstName": "resolution",
                "lastName" : "river",
                "age"      : 11,
                "visits"   : 28,
                "progress" : 12,
                "status"   : "complicated"
            }
        ]
    }, {
        "firstName": "bucket",
        "lastName" : "trip",
        "age"      : 9,
        "visits"   : 14,
        "progress" : 72,
        "status"   : "complicated",
        "children" : [
            {
                "firstName": "friend",
                "lastName" : "trains",
                "age"      : 8,
                "visits"   : 91,
                "progress" : 74,
                "status"   : "complicated"
            }, {
                "firstName": "swing",
                "lastName" : "breath",
                "age"      : 21,
                "visits"   : 57,
                "progress" : 56,
                "status"   : "relationship"
            }, {
                "firstName": "plate",
                "lastName" : "jump",
                "age"      : 26,
                "visits"   : 31,
                "progress" : 25,
                "status"   : "complicated"
            }, {
                "firstName": "leader",
                "lastName" : "series",
                "age"      : 24,
                "visits"   : 30,
                "progress" : 64,
                "status"   : "complicated"
            }, {
                "firstName": "policy",
                "lastName" : "member",
                "age"      : 13,
                "visits"   : 66,
                "progress" : 28,
                "status"   : "single"
            }, {
                "firstName": "celery",
                "lastName" : "stage",
                "age"      : 19,
                "visits"   : 16,
                "progress" : 82,
                "status"   : "single"
            }, {
                "firstName": "leather",
                "lastName" : "son",
                "age"      : 1,
                "visits"   : 50,
                "progress" : 30,
                "status"   : "relationship"
            }, {
                "firstName": "significance",
                "lastName" : "gun",
                "age"      : 16,
                "visits"   : 92,
                "progress" : 43,
                "status"   : "relationship"
            }, {
                "firstName": "month",
                "lastName" : "straw",
                "age"      : 2,
                "visits"   : 80,
                "progress" : 40,
                "status"   : "complicated"
            }, {
                "firstName": "playground",
                "lastName" : "sponge",
                "age"      : 15,
                "visits"   : 97,
                "progress" : 23,
                "status"   : "single"
            }
        ]
    }, {
        "firstName": "face",
        "lastName" : "article",
        "age"      : 27,
        "visits"   : 50,
        "progress" : 54,
        "status"   : "single",
        "children" : [
            {
                "firstName": "snakes",
                "lastName" : "walk",
                "age"      : 28,
                "visits"   : 35,
                "progress" : 22,
                "status"   : "relationship"
            }, {
                "firstName": "school",
                "lastName" : "category",
                "age"      : 24,
                "visits"   : 3,
                "progress" : 25,
                "status"   : "relationship"
            }, {
                "firstName": "vegetable",
                "lastName" : "fan",
                "age"      : 29,
                "visits"   : 41,
                "progress" : 40,
                "status"   : "relationship"
            }, {
                "firstName": "administration",
                "lastName" : "form",
                "age"      : 28,
                "visits"   : 52,
                "progress" : 71,
                "status"   : "relationship"
            }, {
                "firstName": "request",
                "lastName" : "theory",
                "age"      : 21,
                "visits"   : 91,
                "progress" : 45,
                "status"   : "single"
            }, {
                "firstName": "grape",
                "lastName" : "fire",
                "age"      : 5,
                "visits"   : 46,
                "progress" : 12,
                "status"   : "single"
            }, {
                "firstName": "tendency",
                "lastName" : "patch",
                "age"      : 9,
                "visits"   : 93,
                "progress" : 34,
                "status"   : "complicated"
            }, {
                "firstName": "caption",
                "lastName" : "republic",
                "age"      : 26,
                "visits"   : 49,
                "progress" : 37,
                "status"   : "relationship"
            }, {
                "firstName": "anger",
                "lastName" : "swing",
                "age"      : 20,
                "visits"   : 60,
                "progress" : 95,
                "status"   : "complicated"
            }, {
                "firstName": "experience",
                "lastName" : "aspect",
                "age"      : 5,
                "visits"   : 93,
                "progress" : 4,
                "status"   : "relationship"
            }
        ]
    }, {
        "firstName": "wire",
        "lastName" : "ambition",
        "age"      : 26,
        "visits"   : 95,
        "progress" : 88,
        "status"   : "relationship",
        "children" : [
            {
                "firstName": "sympathy",
                "lastName" : "property",
                "age"      : 9,
                "visits"   : 2,
                "progress" : 49,
                "status"   : "complicated"
            }, {
                "firstName": "fire",
                "lastName" : "locket",
                "age"      : 10,
                "visits"   : 60,
                "progress" : 15,
                "status"   : "single"
            }, {
                "firstName": "jelly",
                "lastName" : "difficulty",
                "age"      : 0,
                "visits"   : 12,
                "progress" : 95,
                "status"   : "complicated"
            }, {
                "firstName": "cows",
                "lastName" : "king",
                "age"      : 10,
                "visits"   : 68,
                "progress" : 99,
                "status"   : "single"
            }, {
                "firstName": "bath",
                "lastName" : "cast",
                "age"      : 6,
                "visits"   : 21,
                "progress" : 50,
                "status"   : "single"
            }, {
                "firstName": "union",
                "lastName" : "volume",
                "age"      : 14,
                "visits"   : 29,
                "progress" : 66,
                "status"   : "relationship"
            }, {
                "firstName": "grandmother",
                "lastName" : "kitty",
                "age"      : 12,
                "visits"   : 93,
                "progress" : 19,
                "status"   : "relationship"
            }, {
                "firstName": "trainer",
                "lastName" : "presence",
                "age"      : 10,
                "visits"   : 67,
                "progress" : 51,
                "status"   : "relationship"
            }, {
                "firstName": "animal",
                "lastName" : "judgment",
                "age"      : 2,
                "visits"   : 35,
                "progress" : 41,
                "status"   : "relationship"
            }, {
                "firstName": "cap",
                "lastName" : "thought",
                "age"      : 12,
                "visits"   : 71,
                "progress" : 28,
                "status"   : "single"
            }
        ]
    }, {
        "firstName": "guidance",
        "lastName" : "beast",
        "age"      : 20,
        "visits"   : 80,
        "progress" : 38,
        "status"   : "complicated",
        "children" : [
            {
                "firstName": "canvas",
                "lastName" : "grocery",
                "age"      : 13,
                "visits"   : 91,
                "progress" : 53,
                "status"   : "relationship"
            }, {
                "firstName": "apple",
                "lastName" : "front",
                "age"      : 3,
                "visits"   : 31,
                "progress" : 62,
                "status"   : "single"
            }, {
                "firstName": "lab",
                "lastName" : "expression",
                "age"      : 7,
                "visits"   : 8,
                "progress" : 61,
                "status"   : "complicated"
            }, {
                "firstName": "expression",
                "lastName" : "opinion",
                "age"      : 12,
                "visits"   : 72,
                "progress" : 62,
                "status"   : "single"
            }, {
                "firstName": "year",
                "lastName" : "worm",
                "age"      : 25,
                "visits"   : 97,
                "progress" : 33,
                "status"   : "relationship"
            }, {
                "firstName": "attraction",
                "lastName" : "bun",
                "age"      : 14,
                "visits"   : 16,
                "progress" : 33,
                "status"   : "single"
            }, {
                "firstName": "cheek",
                "lastName" : "fly",
                "age"      : 26,
                "visits"   : 77,
                "progress" : 62,
                "status"   : "single"
            }, {
                "firstName": "leadership",
                "lastName" : "hall",
                "age"      : 28,
                "visits"   : 93,
                "progress" : 59,
                "status"   : "complicated"
            }, {
                "firstName": "party",
                "lastName" : "governor",
                "age"      : 24,
                "visits"   : 58,
                "progress" : 40,
                "status"   : "single"
            }, {
                "firstName": "youth",
                "lastName" : "slip",
                "age"      : 3,
                "visits"   : 76,
                "progress" : 24,
                "status"   : "relationship"
            }
        ]
    }, {
        "firstName": "map",
        "lastName" : "ticket",
        "age"      : 7,
        "visits"   : 5,
        "progress" : 8,
        "status"   : "relationship",
        "children" : [
            {
                "firstName": "environment",
                "lastName" : "equipment",
                "age"      : 17,
                "visits"   : 42,
                "progress" : 0,
                "status"   : "relationship"
            }, {
                "firstName": "loss",
                "lastName" : "cream",
                "age"      : 3,
                "visits"   : 95,
                "progress" : 74,
                "status"   : "relationship"
            }, {
                "firstName": "paste",
                "lastName" : "member",
                "age"      : 13,
                "visits"   : 94,
                "progress" : 81,
                "status"   : "relationship"
            }, {
                "firstName": "birthday",
                "lastName" : "cry",
                "age"      : 5,
                "visits"   : 86,
                "progress" : 30,
                "status"   : "complicated"
            }, {
                "firstName": "glass",
                "lastName" : "bed",
                "age"      : 8,
                "visits"   : 54,
                "progress" : 75,
                "status"   : "relationship"
            }, {
                "firstName": "writing",
                "lastName" : "hammer",
                "age"      : 14,
                "visits"   : 77,
                "progress" : 25,
                "status"   : "complicated"
            }, {
                "firstName": "rainstorm",
                "lastName" : "store",
                "age"      : 18,
                "visits"   : 56,
                "progress" : 17,
                "status"   : "single"
            }, {
                "firstName": "mark",
                "lastName" : "extent",
                "age"      : 28,
                "visits"   : 37,
                "progress" : 1,
                "status"   : "relationship"
            }, {
                "firstName": "ice",
                "lastName" : "grip",
                "age"      : 27,
                "visits"   : 62,
                "progress" : 41,
                "status"   : "relationship"
            }, {
                "firstName": "departure",
                "lastName" : "pleasure",
                "age"      : 7,
                "visits"   : 88,
                "progress" : 96,
                "status"   : "single"
            }
        ]
    }, {
        "firstName": "village",
        "lastName" : "look",
        "age"      : 2,
        "visits"   : 50,
        "progress" : 26,
        "status"   : "complicated",
        "children" : [
            {
                "firstName": "hill",
                "lastName" : "mice",
                "age"      : 10,
                "visits"   : 84,
                "progress" : 59,
                "status"   : "single"
            }, {
                "firstName": "dogs",
                "lastName" : "engineering",
                "age"      : 8,
                "visits"   : 95,
                "progress" : 78,
                "status"   : "single"
            }, {
                "firstName": "steam",
                "lastName" : "candidate",
                "age"      : 13,
                "visits"   : 71,
                "progress" : 93,
                "status"   : "relationship"
            }, {
                "firstName": "picture",
                "lastName" : "curve",
                "age"      : 25,
                "visits"   : 58,
                "progress" : 77,
                "status"   : "relationship"
            }, {
                "firstName": "attempt",
                "lastName" : "uncle",
                "age"      : 10,
                "visits"   : 13,
                "progress" : 95,
                "status"   : "relationship"
            }, {
                "firstName": "form",
                "lastName" : "son",
                "age"      : 15,
                "visits"   : 43,
                "progress" : 65,
                "status"   : "relationship"
            }, {
                "firstName": "cup",
                "lastName" : "preference",
                "age"      : 20,
                "visits"   : 94,
                "progress" : 36,
                "status"   : "complicated"
            }, {
                "firstName": "song",
                "lastName" : "transport",
                "age"      : 16,
                "visits"   : 70,
                "progress" : 39,
                "status"   : "single"
            }, {
                "firstName": "explanation",
                "lastName" : "bear",
                "age"      : 29,
                "visits"   : 55,
                "progress" : 25,
                "status"   : "single"
            }, {
                "firstName": "brain",
                "lastName" : "player",
                "age"      : 4,
                "visits"   : 12,
                "progress" : 97,
                "status"   : "single"
            }
        ]
    }, {
        "firstName": "percentage",
        "lastName" : "love",
        "age"      : 12,
        "visits"   : 91,
        "progress" : 41,
        "status"   : "complicated",
        "children" : [
            {
                "firstName": "veil",
                "lastName" : "songs",
                "age"      : 26,
                "visits"   : 25,
                "progress" : 5,
                "status"   : "single"
            }, {
                "firstName": "steam",
                "lastName" : "iron",
                "age"      : 29,
                "visits"   : 42,
                "progress" : 66,
                "status"   : "relationship"
            }, {
                "firstName": "magic",
                "lastName" : "history",
                "age"      : 5,
                "visits"   : 47,
                "progress" : 61,
                "status"   : "complicated"
            }, {
                "firstName": "department",
                "lastName" : "quince",
                "age"      : 1,
                "visits"   : 61,
                "progress" : 47,
                "status"   : "relationship"
            }, {
                "firstName": "yard",
                "lastName" : "smile",
                "age"      : 0,
                "visits"   : 9,
                "progress" : 32,
                "status"   : "complicated"
            }, {
                "firstName": "town",
                "lastName" : "plot",
                "age"      : 0,
                "visits"   : 2,
                "progress" : 52,
                "status"   : "complicated"
            }, {
                "firstName": "recognition",
                "lastName" : "reward",
                "age"      : 19,
                "visits"   : 69,
                "progress" : 55,
                "status"   : "single"
            }, {
                "firstName": "request",
                "lastName" : "spot",
                "age"      : 27,
                "visits"   : 43,
                "progress" : 5,
                "status"   : "single"
            }, {
                "firstName": "kettle",
                "lastName" : "books",
                "age"      : 9,
                "visits"   : 96,
                "progress" : 53,
                "status"   : "complicated"
            }, {
                "firstName": "television",
                "lastName" : "brain",
                "age"      : 7,
                "visits"   : 85,
                "progress" : 90,
                "status"   : "complicated"
            }
        ]
    }, {
        "firstName": "hook",
        "lastName" : "village",
        "age"      : 7,
        "visits"   : 41,
        "progress" : 97,
        "status"   : "complicated",
        "children" : [
            {
                "firstName": "grocery",
                "lastName" : "jellyfish",
                "age"      : 26,
                "visits"   : 71,
                "progress" : 30,
                "status"   : "single"
            }, {
                "firstName": "tax",
                "lastName" : "category",
                "age"      : 14,
                "visits"   : 63,
                "progress" : 70,
                "status"   : "relationship"
            }, {
                "firstName": "night",
                "lastName" : "vegetable",
                "age"      : 2,
                "visits"   : 69,
                "progress" : 56,
                "status"   : "complicated"
            }, {
                "firstName": "disease",
                "lastName" : "sand",
                "age"      : 17,
                "visits"   : 0,
                "progress" : 56,
                "status"   : "relationship"
            }, {
                "firstName": "ink",
                "lastName" : "coil",
                "age"      : 19,
                "visits"   : 6,
                "progress" : 17,
                "status"   : "single"
            }, {
                "firstName": "babies",
                "lastName" : "criticism",
                "age"      : 23,
                "visits"   : 3,
                "progress" : 58,
                "status"   : "relationship"
            }, {
                "firstName": "flavor",
                "lastName" : "stomach",
                "age"      : 15,
                "visits"   : 9,
                "progress" : 55,
                "status"   : "complicated"
            }, {
                "firstName": "station",
                "lastName" : "shame",
                "age"      : 17,
                "visits"   : 37,
                "progress" : 6,
                "status"   : "single"
            }, {
                "firstName": "birth",
                "lastName" : "toes",
                "age"      : 24,
                "visits"   : 51,
                "progress" : 0,
                "status"   : "relationship"
            }, {
                "firstName": "entry",
                "lastName" : "software",
                "age"      : 7,
                "visits"   : 13,
                "progress" : 91,
                "status"   : "complicated"
            }
        ]
    }, {
        "firstName": "breath",
        "lastName" : "record",
        "age"      : 18,
        "visits"   : 76,
        "progress" : 83,
        "status"   : "complicated",
        "children" : [
            {
                "firstName": "apparel",
                "lastName" : "kick",
                "age"      : 2,
                "visits"   : 71,
                "progress" : 52,
                "status"   : "complicated"
            }, {
                "firstName": "run",
                "lastName" : "government",
                "age"      : 10,
                "visits"   : 13,
                "progress" : 66,
                "status"   : "single"
            }, {
                "firstName": "pies",
                "lastName" : "election",
                "age"      : 24,
                "visits"   : 89,
                "progress" : 26,
                "status"   : "single"
            }, {
                "firstName": "turn",
                "lastName" : "badge",
                "age"      : 5,
                "visits"   : 91,
                "progress" : 6,
                "status"   : "single"
            }, {
                "firstName": "signature",
                "lastName" : "farmer",
                "age"      : 22,
                "visits"   : 96,
                "progress" : 62,
                "status"   : "single"
            }, {
                "firstName": "cheese",
                "lastName" : "letters",
                "age"      : 27,
                "visits"   : 60,
                "progress" : 17,
                "status"   : "relationship"
            }, {
                "firstName": "maintenance",
                "lastName" : "physics",
                "age"      : 13,
                "visits"   : 19,
                "progress" : 43,
                "status"   : "single"
            }, {
                "firstName": "lock",
                "lastName" : "kite",
                "age"      : 17,
                "visits"   : 43,
                "progress" : 38,
                "status"   : "single"
            }, {
                "firstName": "competition",
                "lastName" : "news",
                "age"      : 19,
                "visits"   : 67,
                "progress" : 78,
                "status"   : "complicated"
            }, {
                "firstName": "rock",
                "lastName" : "zephyr",
                "age"      : 29,
                "visits"   : 11,
                "progress" : 19,
                "status"   : "single"
            }
        ]
    }, {
        "firstName": "limit",
        "lastName" : "weakness",
        "age"      : 0,
        "visits"   : 48,
        "progress" : 73,
        "status"   : "relationship",
        "children" : [
            {
                "firstName": "system",
                "lastName" : "route",
                "age"      : 11,
                "visits"   : 30,
                "progress" : 81,
                "status"   : "complicated"
            }, {
                "firstName": "prison",
                "lastName" : "outcome",
                "age"      : 1,
                "visits"   : 62,
                "progress" : 38,
                "status"   : "single"
            }, {
                "firstName": "discussion",
                "lastName" : "feather",
                "age"      : 17,
                "visits"   : 3,
                "progress" : 76,
                "status"   : "single"
            }, {
                "firstName": "sense",
                "lastName" : "psychology",
                "age"      : 1,
                "visits"   : 23,
                "progress" : 97,
                "status"   : "complicated"
            }, {
                "firstName": "presence",
                "lastName" : "complaint",
                "age"      : 20,
                "visits"   : 16,
                "progress" : 48,
                "status"   : "relationship"
            }, {
                "firstName": "reason",
                "lastName" : "bath",
                "age"      : 12,
                "visits"   : 1,
                "progress" : 3,
                "status"   : "complicated"
            }, {
                "firstName": "paste",
                "lastName" : "gate",
                "age"      : 2,
                "visits"   : 55,
                "progress" : 0,
                "status"   : "complicated"
            }, {
                "firstName": "inflation",
                "lastName" : "children",
                "age"      : 4,
                "visits"   : 4,
                "progress" : 81,
                "status"   : "relationship"
            }, {
                "firstName": "smell",
                "lastName" : "hydrant",
                "age"      : 14,
                "visits"   : 33,
                "progress" : 23,
                "status"   : "complicated"
            }, {
                "firstName": "volleyball",
                "lastName" : "meeting",
                "age"      : 2,
                "visits"   : 30,
                "progress" : 74,
                "status"   : "relationship"
            }
        ]
    }
];

function SimpleExample()
{
    return (
        <div>
            <ReactTable
                data={data}
                columns={[
                    {
                        Header : "Name",
                        columns: [
                            {
                                Header  : "First Name",
                                accessor: "firstName"
                            },
                            {
                                Header  : "Last Name",
                                id      : "lastName",
                                accessor: d => d.lastName
                            }
                        ]
                    },
                    {
                        Header : "Info",
                        columns: [
                            {
                                Header  : "Age",
                                accessor: "age"
                            },
                            {
                                Header  : "Status",
                                accessor: "status"
                            }
                        ]
                    },
                    {
                        Header : 'Stats',
                        columns: [
                            {
                                Header  : "Visits",
                                accessor: "visits"
                            }
                        ]
                    }
                ]}
                defaultPageSize={10}
                className="-striped -highlight"
            />
        </div>
    );
}

export default SimpleExample;
