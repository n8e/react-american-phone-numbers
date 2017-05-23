"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var countryCodes = [{
    "country": "Afghanistan",
    "code": "93",
    "acronym": "AF / AFG"
}, {
    "country": "Albania",
    "code": "355",
    "acronym": "AL / ALB"
}, {
    "country": "Algeria",
    "code": "213",
    "acronym": "DZ / DZA"
}, {
    "country": "American Samoa",
    "code": "1-684",
    "acronym": "AS / ASM"
}, {
    "country": "Andorra",
    "code": "376",
    "acronym": "AD / AND"
}, {
    "country": "Angola",
    "code": "244",
    "acronym": "AO / AGO"
}, {
    "country": "Anguilla",
    "code": "1-264",
    "acronym": "AI / AIA"
}, {
    "country": "Antarctica",
    "code": "672",
    "acronym": "AQ / ATA"
}, {
    "country": "Antigua and Barbuda",
    "code": "1-268",
    "acronym": "AG / ATG"
}, {
    "country": "Argentina",
    "code": "54",
    "acronym": "AR / ARG"
}, {
    "country": "Armenia",
    "code": "374",
    "acronym": "AM / ARM"
}, {
    "country": "Aruba",
    "code": "297",
    "acronym": "AW / ABW"
}, {
    "country": "Australia",
    "code": "61",
    "acronym": "AU / AUS"
}, {
    "country": "Austria",
    "code": "43",
    "acronym": "AT / AUT"
}, {
    "country": "Azerbaijan",
    "code": "994",
    "acronym": "AZ / AZE"
}, {
    "country": "Bahamas",
    "code": "1-242",
    "acronym": "BS / BHS"
}, {
    "country": "Bahrain",
    "code": "973",
    "acronym": "BH / BHR"
}, {
    "country": "Bangladesh",
    "code": "880",
    "acronym": "BD / BGD"
}, {
    "country": "Barbados",
    "code": "1-246",
    "acronym": "BB / BRB"
}, {
    "country": "Belarus",
    "code": "375",
    "acronym": "BY / BLR"
}, {
    "country": "Belgium",
    "code": "32",
    "acronym": "BE / BEL"
}, {
    "country": "Belize",
    "code": "501",
    "acronym": "BZ / BLZ"
}, {
    "country": "Benin",
    "code": "229",
    "acronym": "BJ / BEN"
}, {
    "country": "Bermuda",
    "code": "1-441",
    "acronym": "BM / BMU"
}, {
    "country": "Bhutan",
    "code": "975",
    "acronym": "BT / BTN"
}, {
    "country": "Bolivia",
    "code": "591",
    "acronym": "BO / BOL"
}, {
    "country": "Bosnia and Herzegovina",
    "code": "387",
    "acronym": "BA / BIH"
}, {
    "country": "Botswana",
    "code": "267",
    "acronym": "BW / BWA"
}, {
    "country": "Brazil",
    "code": "55",
    "acronym": "BR / BRA"
}, {
    "country": "British Indian Ocean Territory",
    "code": "246",
    "acronym": "IO / IOT"
}, {
    "country": "British Virgin Islands",
    "code": "1-284",
    "acronym": "VG / VGB"
}, {
    "country": "Brunei",
    "code": "673",
    "acronym": "BN / BRN"
}, {
    "country": "Bulgaria",
    "code": "359",
    "acronym": "BG / BGR"
}, {
    "country": "Burkina Faso",
    "code": "226",
    "acronym": "BF / BFA"
}, {
    "country": "Burundi",
    "code": "257",
    "acronym": "BI / BDI"
}, {
    "country": "Cambodia",
    "code": "855",
    "acronym": "KH / KHM"
}, {
    "country": "Cameroon",
    "code": "237",
    "acronym": "CM / CMR"
}, {
    "country": "Canada",
    "code": "1",
    "acronym": "CA / CAN"
}, {
    "country": "Cape Verde",
    "code": "238",
    "acronym": "CV / CPV"
}, {
    "country": "Cayman Islands",
    "code": "1-345",
    "acronym": "KY / CYM"
}, {
    "country": "Central African Republic",
    "code": "236",
    "acronym": "CF / CAF"
}, {
    "country": "Chad",
    "code": "235",
    "acronym": "TD / TCD"
}, {
    "country": "Chile",
    "code": "56",
    "acronym": "CL / CHL"
}, {
    "country": "China",
    "code": "86",
    "acronym": "CN / CHN"
}, {
    "country": "Christmas Island",
    "code": "61",
    "acronym": "CX / CXR"
}, {
    "country": "Cocos Islands",
    "code": "61",
    "acronym": "CC / CCK"
}, {
    "country": "Colombia",
    "code": "57",
    "acronym": "CO / COL"
}, {
    "country": "Comoros",
    "code": "269",
    "acronym": "KM / COM"
}, {
    "country": "Cook Islands",
    "code": "682",
    "acronym": "CK / COK"
}, {
    "country": "Costa Rica",
    "code": "506",
    "acronym": "CR / CRI"
}, {
    "country": "Croatia",
    "code": "385",
    "acronym": "HR / HRV"
}, {
    "country": "Cuba",
    "code": "53",
    "acronym": "CU / CUB"
}, {
    "country": "Curacao",
    "code": "599",
    "acronym": "CW / CUW"
}, {
    "country": "Cyprus",
    "code": "357",
    "acronym": "CY / CYP"
}, {
    "country": "Czech Republic",
    "code": "420",
    "acronym": "CZ / CZE"
}, {
    "country": "Democratic Republic of the Congo",
    "code": "243",
    "acronym": "CD / COD"
}, {
    "country": "Denmark",
    "code": "45",
    "acronym": "DK / DNK"
}, {
    "country": "Djibouti",
    "code": "253",
    "acronym": "DJ / DJI"
}, {
    "country": "Dominica",
    "code": "1-767",
    "acronym": "DM / DMA"
}, {
    "country": "Dominican Republic",
    "code": "1-809, 1-829, 1-849",
    "acronym": "DO / DOM"
}, {
    "country": "East Timor",
    "code": "670",
    "acronym": "TL / TLS"
}, {
    "country": "Ecuador",
    "code": "593",
    "acronym": "EC / ECU"
}, {
    "country": "Egypt",
    "code": "20",
    "acronym": "EG / EGY"
}, {
    "country": "El Salvador",
    "code": "503",
    "acronym": "SV / SLV"
}, {
    "country": "Equatorial Guinea",
    "code": "240",
    "acronym": "GQ / GNQ"
}, {
    "country": "Eritrea",
    "code": "291",
    "acronym": "ER / ERI"
}, {
    "country": "Estonia",
    "code": "372",
    "acronym": "EE / EST"
}, {
    "country": "Ethiopia",
    "code": "251",
    "acronym": "ET / ETH"
}, {
    "country": "Falkland Islands",
    "code": "500",
    "acronym": "FK / FLK"
}, {
    "country": "Faroe Islands",
    "code": "298",
    "acronym": "FO / FRO"
}, {
    "country": "Fiji",
    "code": "679",
    "acronym": "FJ / FJI"
}, {
    "country": "Finland",
    "code": "358",
    "acronym": "FI / FIN"
}, {
    "country": "France",
    "code": "33",
    "acronym": "FR / FRA"
}, {
    "country": "French Polynesia",
    "code": "689",
    "acronym": "PF / PYF"
}, {
    "country": "Gabon",
    "code": "241",
    "acronym": "GA / GAB"
}, {
    "country": "Gambia",
    "code": "220",
    "acronym": "GM / GMB"
}, {
    "country": "Georgia",
    "code": "995",
    "acronym": "GE / GEO"
}, {
    "country": "Germany",
    "code": "49",
    "acronym": "DE / DEU"
}, {
    "country": "Ghana",
    "code": "233",
    "acronym": "GH / GHA"
}, {
    "country": "Gibraltar",
    "code": "350",
    "acronym": "GI / GIB"
}, {
    "country": "Greece",
    "code": "30",
    "acronym": "GR / GRC"
}, {
    "country": "Greenland",
    "code": "299",
    "acronym": "GL / GRL"
}, {
    "country": "Grenada",
    "code": "1-473",
    "acronym": "GD / GRD"
}, {
    "country": "Guam",
    "code": "1-671",
    "acronym": "GU / GUM"
}, {
    "country": "Guatemala",
    "code": "502",
    "acronym": "GT / GTM"
}, {
    "country": "Guernsey",
    "code": "44-1481",
    "acronym": "GG / GGY"
}, {
    "country": "Guinea",
    "code": "224",
    "acronym": "GN / GIN"
}, {
    "country": "Guinea-Bissau",
    "code": "245",
    "acronym": "GW / GNB"
}, {
    "country": "Guyana",
    "code": "592",
    "acronym": "GY / GUY"
}, {
    "country": "Haiti",
    "code": "509",
    "acronym": "HT / HTI"
}, {
    "country": "Honduras",
    "code": "504",
    "acronym": "HN / HND"
}, {
    "country": "Hong Kong",
    "code": "852",
    "acronym": "HK / HKG"
}, {
    "country": "Hungary",
    "code": "36",
    "acronym": "HU / HUN"
}, {
    "country": "Iceland",
    "code": "354",
    "acronym": "IS / ISL"
}, {
    "country": "India",
    "code": "91",
    "acronym": "IN / IND"
}, {
    "country": "Indonesia",
    "code": "62",
    "acronym": "ID / IDN"
}, {
    "country": "Iran",
    "code": "98",
    "acronym": "IR / IRN"
}, {
    "country": "Iraq",
    "code": "964",
    "acronym": "IQ / IRQ"
}, {
    "country": "Ireland",
    "code": "353",
    "acronym": "IE / IRL"
}, {
    "country": "Isle of Man",
    "code": "44-1624",
    "acronym": "IM / IMN"
}, {
    "country": "Israel",
    "code": "972",
    "acronym": "IL / ISR"
}, {
    "country": "Italy",
    "code": "39",
    "acronym": "IT / ITA"
}, {
    "country": "Ivory Coast",
    "code": "225",
    "acronym": "CI / CIV"
}, {
    "country": "Jamaica",
    "code": "1-876",
    "acronym": "JM / JAM"
}, {
    "country": "Japan",
    "code": "81",
    "acronym": "JP / JPN"
}, {
    "country": "Jersey",
    "code": "44-1534",
    "acronym": "JE / JEY"
}, {
    "country": "Jordan",
    "code": "962",
    "acronym": "JO / JOR"
}, {
    "country": "Kazakhstan",
    "code": "7",
    "acronym": "KZ / KAZ"
}, {
    "country": "Kenya",
    "code": "254",
    "acronym": "KE / KEN"
}, {
    "country": "Kiribati",
    "code": "686",
    "acronym": "KI / KIR"
}, {
    "country": "Kosovo",
    "code": "383",
    "acronym": "XK / XKX"
}, {
    "country": "Kuwait",
    "code": "965",
    "acronym": "KW / KWT"
}, {
    "country": "Kyrgyzstan",
    "code": "996",
    "acronym": "KG / KGZ"
}, {
    "country": "Laos",
    "code": "856",
    "acronym": "LA / LAO"
}, {
    "country": "Latvia",
    "code": "371",
    "acronym": "LV / LVA"
}, {
    "country": "Lebanon",
    "code": "961",
    "acronym": "LB / LBN"
}, {
    "country": "Lesotho",
    "code": "266",
    "acronym": "LS / LSO"
}, {
    "country": "Liberia",
    "code": "231",
    "acronym": "LR / LBR"
}, {
    "country": "Libya",
    "code": "218",
    "acronym": "LY / LBY"
}, {
    "country": "Liechtenstein",
    "code": "423",
    "acronym": "LI / LIE"
}, {
    "country": "Lithuania",
    "code": "370",
    "acronym": "LT / LTU"
}, {
    "country": "Luxembourg",
    "code": "352",
    "acronym": "LU / LUX"
}, {
    "country": "Macau",
    "code": "853",
    "acronym": "MO / MAC"
}, {
    "country": "Macedonia",
    "code": "389",
    "acronym": "MK / MKD"
}, {
    "country": "Madagascar",
    "code": "261",
    "acronym": "MG / MDG"
}, {
    "country": "Malawi",
    "code": "265",
    "acronym": "MW / MWI"
}, {
    "country": "Malaysia",
    "code": "60",
    "acronym": "MY / MYS"
}, {
    "country": "Maldives",
    "code": "960",
    "acronym": "MV / MDV"
}, {
    "country": "Mali",
    "code": "223",
    "acronym": "ML / MLI"
}, {
    "country": "Malta",
    "code": "356",
    "acronym": "MT / MLT"
}, {
    "country": "Marshall Islands",
    "code": "692",
    "acronym": "MH / MHL"
}, {
    "country": "Mauritania",
    "code": "222",
    "acronym": "MR / MRT"
}, {
    "country": "Mauritius",
    "code": "230",
    "acronym": "MU / MUS"
}, {
    "country": "Mayotte",
    "code": "262",
    "acronym": "YT / MYT"
}, {
    "country": "Mexico",
    "code": "52",
    "acronym": "MX / MEX"
}, {
    "country": "Micronesia",
    "code": "691",
    "acronym": "FM / FSM"
}, {
    "country": "Moldova",
    "code": "373",
    "acronym": "MD / MDA"
}, {
    "country": "Monaco",
    "code": "377",
    "acronym": "MC / MCO"
}, {
    "country": "Mongolia",
    "code": "976",
    "acronym": "MN / MNG"
}, {
    "country": "Montenegro",
    "code": "382",
    "acronym": "ME / MNE"
}, {
    "country": "Montserrat",
    "code": "1-664",
    "acronym": "MS / MSR"
}, {
    "country": "Morocco",
    "code": "212",
    "acronym": "MA / MAR"
}, {
    "country": "Mozambique",
    "code": "258",
    "acronym": "MZ / MOZ"
}, {
    "country": "Myanmar",
    "code": "95",
    "acronym": "MM / MMR"
}, {
    "country": "Namibia",
    "code": "264",
    "acronym": "NA / NAM"
}, {
    "country": "Nauru",
    "code": "674",
    "acronym": "NR / NRU"
}, {
    "country": "Nepal",
    "code": "977",
    "acronym": "NP / NPL"
}, {
    "country": "Netherlands",
    "code": "31",
    "acronym": "NL / NLD"
}, {
    "country": "Netherlands Antilles",
    "code": "599",
    "acronym": "AN / ANT"
}, {
    "country": "New Caledonia",
    "code": "687",
    "acronym": "NC / NCL"
}, {
    "country": "New Zealand",
    "code": "64",
    "acronym": "NZ / NZL"
}, {
    "country": "Nicaragua",
    "code": "505",
    "acronym": "NI / NIC"
}, {
    "country": "Niger",
    "code": "227",
    "acronym": "NE / NER"
}, {
    "country": "Nigeria",
    "code": "234",
    "acronym": "NG / NGA"
}, {
    "country": "Niue",
    "code": "683",
    "acronym": "NU / NIU"
}, {
    "country": "North Korea",
    "code": "850",
    "acronym": "KP / PRK"
}, {
    "country": "Northern Mariana Islands",
    "code": "1-670",
    "acronym": "MP / MNP"
}, {
    "country": "Norway",
    "code": "47",
    "acronym": "NO / NOR"
}, {
    "country": "Oman",
    "code": "968",
    "acronym": "OM / OMN"
}, {
    "country": "Pakistan",
    "code": "92",
    "acronym": "PK / PAK"
}, {
    "country": "Palau",
    "code": "680",
    "acronym": "PW / PLW"
}, {
    "country": "Palestine",
    "code": "970",
    "acronym": "PS / PSE"
}, {
    "country": "Panama",
    "code": "507",
    "acronym": "PA / PAN"
}, {
    "country": "Papua New Guinea",
    "code": "675",
    "acronym": "PG / PNG"
}, {
    "country": "Paraguay",
    "code": "595",
    "acronym": "PY / PRY"
}, {
    "country": "Peru",
    "code": "51",
    "acronym": "PE / PER"
}, {
    "country": "Philippines",
    "code": "63",
    "acronym": "PH / PHL"
}, {
    "country": "Pitcairn",
    "code": "64",
    "acronym": "PN / PCN"
}, {
    "country": "Poland",
    "code": "48",
    "acronym": "PL / POL"
}, {
    "country": "Portugal",
    "code": "351",
    "acronym": "PT / PRT"
}, {
    "country": "Puerto Rico",
    "code": "1-787, 1-939",
    "acronym": "PR / PRI"
}, {
    "country": "Qatar",
    "code": "974",
    "acronym": "QA / QAT"
}, {
    "country": "Republic of the Congo",
    "code": "242",
    "acronym": "CG / COG"
}, {
    "country": "Reunion",
    "code": "262",
    "acronym": "RE / REU"
}, {
    "country": "Romania",
    "code": "40",
    "acronym": "RO / ROU"
}, {
    "country": "Russia",
    "code": "7",
    "acronym": "RU / RUS"
}, {
    "country": "Rwanda",
    "code": "250",
    "acronym": "RW / RWA"
}, {
    "country": "Saint Barthelemy",
    "code": "590",
    "acronym": "BL / BLM"
}, {
    "country": "Saint Helena",
    "code": "290",
    "acronym": "SH / SHN"
}, {
    "country": "Saint Kitts and Nevis",
    "code": "1-869",
    "acronym": "KN / KNA"
}, {
    "country": "Saint Lucia",
    "code": "1-758",
    "acronym": "LC / LCA"
}, {
    "country": "Saint Martin",
    "code": "590",
    "acronym": "MF / MAF"
}, {
    "country": "Saint Pierre and Miquelon",
    "code": "508",
    "acronym": "PM / SPM"
}, {
    "country": "Saint Vincent and the Grenadines",
    "code": "1-784",
    "acronym": "VC / VCT"
}, {
    "country": "Samoa",
    "code": "685",
    "acronym": "WS / WSM"
}, {
    "country": "San Marino",
    "code": "378",
    "acronym": "SM / SMR"
}, {
    "country": "Sao Tome and Principe",
    "code": "239",
    "acronym": "ST / STP"
}, {
    "country": "Saudi Arabia",
    "code": "966",
    "acronym": "SA / SAU"
}, {
    "country": "Senegal",
    "code": "221",
    "acronym": "SN / SEN"
}, {
    "country": "Serbia",
    "code": "381",
    "acronym": "RS / SRB"
}, {
    "country": "Seychelles",
    "code": "248",
    "acronym": "SC / SYC"
}, {
    "country": "Sierra Leone",
    "code": "232",
    "acronym": "SL / SLE"
}, {
    "country": "Singapore",
    "code": "65",
    "acronym": "SG / SGP"
}, {
    "country": "Sint Maarten",
    "code": "1-721",
    "acronym": "SX / SXM"
}, {
    "country": "Slovakia",
    "code": "421",
    "acronym": "SK / SVK"
}, {
    "country": "Slovenia",
    "code": "386",
    "acronym": "SI / SVN"
}, {
    "country": "Solomon Islands",
    "code": "677",
    "acronym": "SB / SLB"
}, {
    "country": "Somalia",
    "code": "252",
    "acronym": "SO / SOM"
}, {
    "country": "South Africa",
    "code": "27",
    "acronym": "ZA / ZAF"
}, {
    "country": "South Korea",
    "code": "82",
    "acronym": "KR / KOR"
}, {
    "country": "South Sudan",
    "code": "211",
    "acronym": "SS / SSD"
}, {
    "country": "Spain",
    "code": "34",
    "acronym": "ES / ESP"
}, {
    "country": "Sri Lanka",
    "code": "94",
    "acronym": "LK / LKA"
}, {
    "country": "Sudan",
    "code": "249",
    "acronym": "SD / SDN"
}, {
    "country": "Suriname",
    "code": "597",
    "acronym": "SR / SUR"
}, {
    "country": "Svalbard and Jan Mayen",
    "code": "47",
    "acronym": "SJ / SJM"
}, {
    "country": "Swaziland",
    "code": "268",
    "acronym": "SZ / SWZ"
}, {
    "country": "Sweden",
    "code": "46",
    "acronym": "SE / SWE"
}, {
    "country": "Switzerland",
    "code": "41",
    "acronym": "CH / CHE"
}, {
    "country": "Syria",
    "code": "963",
    "acronym": "SY / SYR"
}, {
    "country": "Taiwan",
    "code": "886",
    "acronym": "TW / TWN"
}, {
    "country": "Tajikistan",
    "code": "992",
    "acronym": "TJ / TJK"
}, {
    "country": "Tanzania",
    "code": "255",
    "acronym": "TZ / TZA"
}, {
    "country": "Thailand",
    "code": "66",
    "acronym": "TH / THA"
}, {
    "country": "Togo",
    "code": "228",
    "acronym": "TG / TGO"
}, {
    "country": "Tokelau",
    "code": "690",
    "acronym": "TK / TKL"
}, {
    "country": "Tonga",
    "code": "676",
    "acronym": "TO / TON"
}, {
    "country": "Trinidad and Tobago",
    "code": "1-868",
    "acronym": "TT / TTO"
}, {
    "country": "Tunisia",
    "code": "216",
    "acronym": "TN / TUN"
}, {
    "country": "Turkey",
    "code": "90",
    "acronym": "TR / TUR"
}, {
    "country": "Turkmenistan",
    "code": "993",
    "acronym": "TM / TKM"
}, {
    "country": "Turks and Caicos Islands",
    "code": "1-649",
    "acronym": "TC / TCA"
}, {
    "country": "Tuvalu",
    "code": "688",
    "acronym": "TV / TUV"
}, {
    "country": "U.S. Virgin Islands",
    "code": "1-340",
    "acronym": "VI / VIR"
}, {
    "country": "Uganda",
    "code": "256",
    "acronym": "UG / UGA"
}, {
    "country": "Ukraine",
    "code": "380",
    "acronym": "UA / UKR"
}, {
    "country": "United Arab Emirates",
    "code": "971",
    "acronym": "AE / ARE"
}, {
    "country": "United Kingdom",
    "code": "44",
    "acronym": "GB / GBR"
}, {
    "country": "United States",
    "code": "1",
    "acronym": "US / USA"
}, {
    "country": "Uruguay",
    "code": "598",
    "acronym": "UY / URY"
}, {
    "country": "Uzbekistan",
    "code": "998",
    "acronym": "UZ / UZB"
}, {
    "country": "Vanuatu",
    "code": "678",
    "acronym": "VU / VUT"
}, {
    "country": "Vatican",
    "code": "379",
    "acronym": "VA / VAT"
}, {
    "country": "Venezuela",
    "code": "58",
    "acronym": "VE / VEN"
}, {
    "country": "Vietnam",
    "code": "84",
    "acronym": "VN / VNM"
}, {
    "country": "Wallis and Futuna",
    "code": "681",
    "acronym": "WF / WLF"
}, {
    "country": "Western Sahara",
    "code": "212",
    "acronym": "EH / ESH"
}, {
    "country": "Yemen",
    "code": "967",
    "acronym": "YE / YEM"
}, {
    "country": "Zambia",
    "code": "260",
    "acronym": "ZM / ZMB"
}, {
    "country": "Zimbabwe",
    "code": "263",
    "acronym": "ZW / ZWE"
}];

var areaCodes = [{
    "area": "Alaska",
    "code": "907"
}, {
    "area": "Alabama",
    "code": "205, 251, 256, 334"
}, {
    "area": "Arkansas",
    "code": "479, 501, 870"
}, {
    "area": "Arizona",
    "code": "480, 520, 602, 623, 928"
}, {
    "area": "California",
    "code": "209, 213, 310, 323, 408, 415, 510, 530, 559, 562, 619, 626, 650, 661, 707, 714, 760, 805, 818, 831, 858, 909, 916, 925, 949, 951"
}, {
    "area": "Colorado",
    "code": "303, 719, 970"
}, {
    "area": "Connecticut",
    "code": "203, 860"
}, {
    "area": "District of Columbia",
    "code": "202"
}, {
    "area": "Delaware",
    "code": "302"
}, {
    "area": "Florida",
    "code": "239, 305, 321, 352, 386, 407, 561, 727, 772, 813, 850, 863, 904, 941, 954"
}, {
    "area": "Georgia",
    "code": "229, 404, 478, 706, 770, 912"
}, {
    "area": "Hawaii",
    "code": "808"
}, {
    "area": "Iowa",
    "code": "319, 515, 563, 641, 712"
}, {
    "area": "Idaho",
    "code": "208"
}, {
    "area": "Illinois",
    "code": "217, 309, 312, 618, 630, 708, 773, 815, 847"
}, {
    "area": "Indiana",
    "code": "219, 260, 317, 574, 765, 812"
}, {
    "area": "Kansas",
    "code": "316, 620, 785, 913"
}, {
    "area": "Kentucky",
    "code": "270, 502, 606, 859"
}, {
    "area": "Louisiana",
    "code": "225, 318, 337, 504, 985"
}, {
    "area": "Massachusetts",
    "code": "413, 508, 617, 781, 978"
}, {
    "area": "Maryland",
    "code": "301, 410"
}, {
    "area": "Maine",
    "code": "207"
}, {
    "area": "Michigan",
    "code": "231, 248, 269, 313, 517, 586, 616, 734, 810, 906, 989"
}, {
    "area": "Minnesota",
    "code": "218, 320, 507, 612, 651, 763, 952"
}, {
    "area": "Missouri",
    "code": "314, 417, 573, 636, 660, 816"
}, {
    "area": "Mississippi",
    "code": "228, 601, 662"
}, {
    "area": "Montana",
    "code": "406"
}, {
    "area": "North Carolina",
    "code": "252, 336, 704, 828, 910, 919"
}, {
    "area": "North Dakota",
    "code": "701"
}, {
    "area": "Nebraska",
    "code": "308, 402"
}, {
    "area": "New Hampshire",
    "code": "603"
}, {
    "area": "New Jersey",
    "code": "201, 609, 732, 856, 908, 973"
}, {
    "area": "New Mexico",
    "code": "505, 575"
}, {
    "area": "Nevada",
    "code": "702, 775"
}, {
    "area": "New York",
    "code": "212, 315, 516, 518, 585, 607, 631, 716, 718, 845, 914"
}, {
    "area": "Ohio",
    "code": "216, 330, 419, 440, 513, 614, 740, 937"
}, {
    "area": "Oklahoma",
    "code": "405, 580, 918"
}, {
    "area": "Oregon",
    "code": "503, 541"
}, {
    "area": "Pennsylvania",
    "code": "215, 412, 570, 610, 717, 724, 814"
}, {
    "area": "Rhode Island",
    "code": "401"
}, {
    "area": "South Carolina",
    "code": "803, 843, 864"
}, {
    "area": "South Dakota",
    "code": "605"
}, {
    "area": "Tennessee",
    "code": "423, 615, 731, 865, 901, 931"
}, {
    "area": "Texas",
    "code": "210, 214, 254, 281, 325, 361, 409, 432, 512, 713, 806, 817, 830, 903, 915, 936, 940, 956, 972, 979"
}, {
    "area": "Utah",
    "code": "435, 801"
}, {
    "area": "Virginia",
    "code": "276, 434, 540, 703, 757, 804"
}, {
    "area": "Vermont",
    "code": "802"
}, {
    "area": "Washington",
    "code": "206, 253, 360, 425, 509"
}, {
    "area": "Wisconsin",
    "code": "262, 414, 608, 715, 920"
}, {
    "area": "West Virginia",
    "code": "304"
}, {
    "area": "Wyoming",
    "code": "307"
}];

var phoneToString = function phoneToString(phone) {
    return "+" + phone.countryCode + " (" + phone.areaCode + ") " + phone.midNumber + "-" + phone.endNumber;
};

var stringToPhone = function stringToPhone(phoneString) {
    var ps = phoneString.split(/[^\w\s]/gi);
    for (var i = 0, n = ps.length; i < n; i += 1) {
        if (ps[i] === '') {
            ps.splice(i, 1);
        }
    }
    return ps;
};

var inputStyles = {
    border: '1px solid #000',
    borderRadius: '3px',
    width: '102px',
    height: '28px',
    display: 'inline-block'
};

var selectInputStyle = {
    background: 'none',
    border: 'none',
    width: '100px',
    height: '25px'
};

var TelephonePicker = function (_Component) {
    _inherits(TelephonePicker, _Component);

    function TelephonePicker(props) {
        _classCallCheck(this, TelephonePicker);

        var _this = _possibleConstructorReturn(this, (TelephonePicker.__proto__ || Object.getPrototypeOf(TelephonePicker)).call(this, props));

        _this.state = {
            countryCodes: countryCodes,
            areaCodes: areaCodes,
            telephone: {
                countryCode: stringToPhone(_this.props.phone)[0].trim(),
                areaCode: stringToPhone(_this.props.phone)[1].trim(),
                midNumber: stringToPhone(_this.props.phone)[2].trim(),
                endNumber: stringToPhone(_this.props.phone)[3].trim()
            }
        };

        _this.handleChange = _this.handleChange.bind(_this);
        _this.renderCountryCodes = _this.renderCountryCodes.bind(_this);
        _this.renderAreaCodes = _this.renderAreaCodes.bind(_this);
        return _this;
    }

    _createClass(TelephonePicker, [{
        key: "handleChange",
        value: function handleChange(e) {
            var _this2 = this;

            var _e$target = e.target,
                name = _e$target.name,
                value = _e$target.value;

            this.setState({ telephone: Object.assign({}, this.state.telephone, _defineProperty({}, name, value)) }, function () {
                return _this2.props.writePhone(phoneToString(_this2.state.telephone));
            });
        }
    }, {
        key: "renderCountryCodes",
        value: function renderCountryCodes() {
            return this.state.countryCodes.map(function (countryObj) {
                return _react2.default.createElement(
                    "option",
                    {
                        key: countryObj.country,
                        value: String(countryObj.code)
                    },
                    "+",
                    countryObj.code,
                    " (",
                    countryObj.acronym.split(' / ')[1],
                    ")"
                );
            });
        }
    }, {
        key: "renderAreaCodes",
        value: function renderAreaCodes() {
            return this.state.areaCodes.map(function (areaObj, j) {
                return areaObj.code.split(', ').map(function (code, i) {
                    return _react2.default.createElement(
                        "option",
                        {
                            key: String(j) + String(i),
                            value: String(code)
                        },
                        code
                    );
                });
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "container" },
                _react2.default.createElement(
                    "div",
                    { style: inputStyles },
                    _react2.default.createElement(
                        "select",
                        {
                            name: "countryCode",
                            style: selectInputStyle,
                            defaultValue: String(this.state.telephone.countryCode),
                            onChange: this.handleChange
                        },
                        this.renderCountryCodes()
                    )
                ),
                ' ( ',
                _react2.default.createElement(
                    "div",
                    { style: inputStyles },
                    _react2.default.createElement(
                        "select",
                        {
                            name: "areaCode",
                            style: selectInputStyle,
                            defaultValue: String(this.state.telephone.areaCode),
                            onChange: this.handleChange
                        },
                        this.renderAreaCodes()
                    )
                ),
                ' ) ',
                _react2.default.createElement(
                    "div",
                    { style: inputStyles },
                    _react2.default.createElement("input", {
                        type: "text",
                        name: "midNumber",
                        value: this.state.telephone.midNumber || '',
                        onChange: this.handleChange,
                        style: { width: '100px' }
                    })
                ),
                ' - ',
                _react2.default.createElement(
                    "div",
                    { style: inputStyles },
                    _react2.default.createElement("input", {
                        type: "text",
                        name: "endNumber",
                        value: this.state.telephone.endNumber || '',
                        onChange: this.handleChange,
                        style: { width: '100px' }
                    })
                )
            );
        }
    }]);

    return TelephonePicker;
}(_react.Component);

exports.default = TelephonePicker;


TelephonePicker.propTypes = {
    phone: _react.PropTypes.string.isRequired,
    writePhone: _react.PropTypes.func.isRequired
};
