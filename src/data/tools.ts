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
];

export function getTool(id: string): ToolMeta | undefined {
  return tools.find((t) => t.id === id);
}
