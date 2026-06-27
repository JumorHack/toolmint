// ---------------------------------------------------------------------------
// Registry of standalone tools (each has its own hand-built page under
// src/pages/tools/). Used for listing, internal linking and SEO metadata.
// ---------------------------------------------------------------------------

export type ToolMeta = {
  id: string;
  name: string;
  short: string;
  description: string;
  keywords: string[];
  faqs: { q: string; a: string }[];
};

export const tools: ToolMeta[] = [
  {
    id: "word-counter",
    name: "Word Counter",
    short: "Count words, characters, sentences and reading time.",
    description:
      "Free online word counter. Instantly count words, characters (with and without spaces), sentences, paragraphs and estimated reading time as you type. Nothing is uploaded — everything runs in your browser.",
    keywords: ["word counter", "character counter", "count words online", "words to characters"],
    faqs: [
      { q: "Is this word counter free?", a: "Yes. It is 100% free with no sign-up and no limits." },
      { q: "Is my text uploaded anywhere?", a: "No. All counting happens locally in your browser, so your text never leaves your device." },
      { q: "How is reading time calculated?", a: "Reading time uses an average reading speed of about 200 words per minute." },
    ],
  },
  {
    id: "case-converter",
    name: "Case Converter",
    short: "Convert text to UPPERCASE, lowercase, Title Case and more.",
    description:
      "Free online case converter. Change text to UPPERCASE, lowercase, Sentence case, Title Case, camelCase, snake_case and kebab-case in one click. Runs entirely in your browser.",
    keywords: ["case converter", "uppercase to lowercase", "title case converter", "text case"],
    faqs: [
      { q: "What case formats are supported?", a: "UPPERCASE, lowercase, Sentence case, Title Case, camelCase, snake_case and kebab-case." },
      { q: "Is there a character limit?", a: "No. You can convert text of any length, and it all stays in your browser." },
    ],
  },
  {
    id: "password-generator",
    name: "Password Generator",
    short: "Create strong, random, secure passwords instantly.",
    description:
      "Free secure password generator. Create strong random passwords with custom length and character sets (uppercase, lowercase, numbers, symbols). Generated locally using your browser's cryptographic randomness — never sent to a server.",
    keywords: ["password generator", "strong password", "random password", "secure password generator"],
    faqs: [
      { q: "Are these passwords safe?", a: "Yes. Passwords are generated locally using the browser's cryptographically secure random generator and are never transmitted or stored." },
      { q: "What makes a strong password?", a: "Length matters most. Use at least 16 characters mixing uppercase, lowercase, numbers and symbols, and never reuse passwords." },
    ],
  },
  {
    id: "lorem-ipsum-generator",
    name: "Lorem Ipsum Generator",
    short: "Generate placeholder text for designs and mockups.",
    description:
      "Free Lorem Ipsum generator. Create placeholder paragraphs, sentences or words for your designs, mockups and layouts. Choose how many paragraphs you need and copy with one click.",
    keywords: ["lorem ipsum generator", "placeholder text", "dummy text generator", "filler text"],
    faqs: [
      { q: "What is Lorem Ipsum?", a: "Lorem Ipsum is scrambled Latin-like placeholder text used since the 1500s to fill layouts before real copy is ready." },
      { q: "Can I choose how much text?", a: "Yes. Pick the number of paragraphs and the generator builds the text instantly." },
    ],
  },
  {
    id: "base64-encode-decode",
    name: "Base64 Encode / Decode",
    short: "Encode text to Base64 or decode Base64 back to text.",
    description:
      "Free Base64 encoder and decoder. Convert text to Base64 or decode Base64 strings back to plain text instantly in your browser. Handles full Unicode safely.",
    keywords: ["base64 encode", "base64 decode", "base64 converter", "encode decode base64"],
    faqs: [
      { q: "What is Base64?", a: "Base64 is an encoding that represents binary or text data using 64 printable ASCII characters, often used in data URLs and APIs." },
      { q: "Does it support emojis and Unicode?", a: "Yes. The tool encodes and decodes full UTF-8, so emojis and non-Latin characters work correctly." },
    ],
  },
  {
    id: "uuid-generator",
    name: "UUID Generator",
    short: "Generate random UUID v4 identifiers in bulk.",
    description:
      "Free UUID v4 generator. Create one or many random, RFC-4122 compliant universally unique identifiers instantly. Generated locally in your browser and easy to copy.",
    keywords: ["uuid generator", "guid generator", "uuid v4", "generate uuid online"],
    faqs: [
      { q: "What is a UUID v4?", a: "A UUID v4 is a 128-bit identifier produced from random numbers, used to uniquely label records without a central authority." },
      { q: "Are the UUIDs really unique?", a: "The chance of a collision is astronomically small, so for practical purposes each generated UUID is unique." },
    ],
  },
  {
    id: "bmi-calculator",
    name: "BMI Calculator",
    short: "Calculate your Body Mass Index in metric or imperial.",
    description:
      "Free BMI calculator. Work out your Body Mass Index from height and weight in metric (cm/kg) or imperial (ft-in/lb) units, and see which BMI category you fall into.",
    keywords: ["bmi calculator", "body mass index", "calculate bmi", "bmi metric imperial"],
    faqs: [
      { q: "How is BMI calculated?", a: "BMI equals weight in kilograms divided by height in meters squared (kg/m²)." },
      { q: "What is a healthy BMI?", a: "For most adults a BMI between 18.5 and 24.9 is considered healthy, but BMI is a general guide and not a diagnosis." },
    ],
  },
  {
    id: "percentage-calculator",
    name: "Percentage Calculator",
    short: "Work out percentages, increases and differences.",
    description:
      "Free percentage calculator. Find what percent one number is of another, calculate a percentage of a value, and work out percentage increase or decrease between two numbers.",
    keywords: ["percentage calculator", "percent of a number", "percentage increase", "percentage difference"],
    faqs: [
      { q: "How do I find what percent X is of Y?", a: "Divide X by Y and multiply by 100. For example, 25 out of 200 is (25 / 200) × 100 = 12.5%." },
      { q: "How do I calculate percentage increase?", a: "Subtract the old value from the new value, divide by the old value, then multiply by 100." },
    ],
  },
  {
    id: "color-converter",
    name: "Color Converter",
    short: "Convert colors between HEX, RGB and HSL.",
    description:
      "Free color converter. Convert any color between HEX, RGB and HSL formats, pick a color visually and copy the code you need for CSS or design. Runs entirely in your browser.",
    keywords: ["color converter", "hex to rgb", "rgb to hex", "hex to hsl", "color picker"],
    faqs: [
      { q: "How do I convert HEX to RGB?", a: "Split the 6-digit hex code into three pairs and convert each pair from base 16 to base 10. For example #FF8800 is rgb(255, 136, 0)." },
      { q: "What is HSL?", a: "HSL stands for Hue, Saturation and Lightness — an intuitive way to describe colors that is well supported in CSS." },
    ],
  },
  {
    id: "age-calculator",
    name: "Age Calculator",
    short: "Calculate your exact age in years, months and days.",
    description:
      "Free age calculator. Enter your date of birth to find your exact age in years, months and days, plus your total days lived and next birthday. Calculated instantly in your browser.",
    keywords: ["age calculator", "how old am i", "calculate age from date of birth", "exact age"],
    faqs: [
      { q: "How is age calculated?", a: "We compare your date of birth with today's date and break the difference down into complete years, months and remaining days." },
      { q: "Does it count leap years?", a: "Yes. The calculation uses real calendar dates, so leap years are handled correctly." },
    ],
  },
  {
    id: "date-difference",
    name: "Date Difference Calculator",
    short: "Count the days, weeks and months between two dates.",
    description:
      "Free date difference calculator. Find the number of days, weeks, months and years between any two dates. Perfect for deadlines, due dates and planning. Runs in your browser.",
    keywords: ["date difference calculator", "days between dates", "how many days until", "date duration"],
    faqs: [
      { q: "Are both dates included?", a: "The result shows the duration between the two dates. You can read the total in days, weeks, months or years." },
      { q: "Can I count to a future date?", a: "Yes. Pick any start and end date, past or future, to see the duration between them." },
    ],
  },
  {
    id: "unix-timestamp-converter",
    name: "Unix Timestamp Converter",
    short: "Convert Unix timestamps to dates and back.",
    description:
      "Free Unix timestamp converter. Convert a Unix epoch timestamp to a human-readable date and time, or convert a date back to a timestamp. Supports seconds and milliseconds.",
    keywords: ["unix timestamp converter", "epoch converter", "timestamp to date", "date to timestamp"],
    faqs: [
      { q: "What is a Unix timestamp?", a: "A Unix timestamp is the number of seconds that have elapsed since 00:00:00 UTC on 1 January 1970, known as the Unix epoch." },
      { q: "Seconds or milliseconds?", a: "Standard Unix timestamps are in seconds. JavaScript uses milliseconds. This tool supports both." },
    ],
  },
  {
    id: "random-number-generator",
    name: "Random Number Generator",
    short: "Generate random numbers in any range.",
    description:
      "Free random number generator. Generate one or many random whole numbers between any minimum and maximum you choose, with an option to allow or prevent duplicates. Uses your browser's secure randomness.",
    keywords: ["random number generator", "rng", "pick a random number", "random number between"],
    faqs: [
      { q: "Can I generate unique numbers?", a: "Yes. Turn on the no-duplicates option to draw unique numbers, which is useful for raffles and giveaways." },
      { q: "Is it truly random?", a: "Numbers are produced using the browser's cryptographically secure random generator, which is suitable for most everyday uses." },
    ],
  },
  {
    id: "json-formatter",
    name: "JSON Formatter & Validator",
    short: "Format, beautify, minify and validate JSON.",
    description:
      "Free JSON formatter and validator. Beautify messy JSON with proper indentation, minify it to a single line, and instantly see syntax errors. Everything is processed locally in your browser.",
    keywords: ["json formatter", "json beautifier", "json validator", "minify json", "format json online"],
    faqs: [
      { q: "Is my JSON uploaded?", a: "No. Your JSON is parsed and formatted entirely in your browser and never sent to a server." },
      { q: "What does the validator check?", a: "It checks that your text is syntactically valid JSON and points out where the first error occurs." },
    ],
  },
  {
    id: "roman-numeral-converter",
    name: "Roman Numeral Converter",
    short: "Convert numbers to Roman numerals and back.",
    description:
      "Free Roman numeral converter. Convert any number (1–3,999,999) to Roman numerals, or decode Roman numerals back to a number. Instant and accurate, right in your browser.",
    keywords: ["roman numeral converter", "number to roman numerals", "roman numerals to number", "roman numeral translator"],
    faqs: [
      { q: "What is the largest number supported?", a: "Standard Roman numerals go up to 3,999. Using overline notation (vinculum) we support up to 3,999,999." },
      { q: "Is there a zero in Roman numerals?", a: "No. The Roman numeral system has no symbol for zero." },
    ],
  },
  {
    id: "number-base-converter",
    name: "Number Base Converter",
    short: "Convert between binary, decimal, hex and octal.",
    description:
      "Free number base converter. Convert numbers between binary, octal, decimal and hexadecimal instantly. Enter a value in any base and see all the others update live.",
    keywords: ["number base converter", "binary to decimal", "decimal to hex", "hex to binary", "binary converter"],
    faqs: [
      { q: "Which bases are supported?", a: "Binary (base 2), octal (base 8), decimal (base 10) and hexadecimal (base 16)." },
      { q: "How do I convert decimal to binary?", a: "Enter your number in the decimal box and the binary, octal and hex equivalents update automatically." },
    ],
  },
  {
    id: "currency-converter",
    name: "Currency Converter",
    short: "Convert currencies with live exchange rates.",
    description:
      "Free currency converter with live exchange rates. Convert between major world currencies using up-to-date reference rates. Rates are fetched in your browser from a public exchange-rate API.",
    keywords: ["currency converter", "exchange rate calculator", "usd to eur", "convert currency", "live exchange rates"],
    faqs: [
      { q: "Where do the rates come from?", a: "Live reference rates are fetched in your browser from the free, public Frankfurter API, which is based on European Central Bank data." },
      { q: "Are the rates suitable for trading?", a: "Rates are reference values updated on business days and are great for everyday estimates, but banks and card networks may use slightly different rates." },
    ],
  },
];

export function getTool(id: string): ToolMeta | undefined {
  return tools.find((t) => t.id === id);
}
