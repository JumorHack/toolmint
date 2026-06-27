// ---------------------------------------------------------------------------
// Conversion engine.
//
// Every ordered pair of units inside a category becomes its own static page
// (e.g. /convert/meters-to-feet/). Add a unit here -> dozens of new SEO pages
// are generated automatically on the next build.
// ---------------------------------------------------------------------------

export type Unit = {
  /** url-safe id, also the page slug part. e.g. "meters" */
  id: string;
  /** Singular display name. e.g. "Meter" */
  name: string;
  /** Plural display name. e.g. "Meters" */
  plural: string;
  /** Symbol/abbreviation. e.g. "m" */
  symbol: string;
  /** Base units per 1 of this unit (linear categories only). */
  factor?: number;
};

export type Category = {
  id: string;
  name: string;
  /** "linear" uses factors; "temperature" uses formulas. */
  type: "linear" | "temperature";
  /** One-line description used on the category page + meta. */
  blurb: string;
  units: Unit[];
};

export const categories: Category[] = [
  {
    id: "length",
    name: "Length",
    type: "linear",
    blurb: "Convert between metric and imperial length units like meters, feet, miles and inches.",
    units: [
      { id: "millimeters", name: "Millimeter", plural: "Millimeters", symbol: "mm", factor: 0.001 },
      { id: "centimeters", name: "Centimeter", plural: "Centimeters", symbol: "cm", factor: 0.01 },
      { id: "meters", name: "Meter", plural: "Meters", symbol: "m", factor: 1 },
      { id: "kilometers", name: "Kilometer", plural: "Kilometers", symbol: "km", factor: 1000 },
      { id: "inches", name: "Inch", plural: "Inches", symbol: "in", factor: 0.0254 },
      { id: "feet", name: "Foot", plural: "Feet", symbol: "ft", factor: 0.3048 },
      { id: "yards", name: "Yard", plural: "Yards", symbol: "yd", factor: 0.9144 },
      { id: "miles", name: "Mile", plural: "Miles", symbol: "mi", factor: 1609.344 },
    ],
  },
  {
    id: "weight",
    name: "Weight",
    type: "linear",
    blurb: "Convert mass and weight units: grams, kilograms, pounds, ounces, stones and tonnes.",
    units: [
      { id: "milligrams", name: "Milligram", plural: "Milligrams", symbol: "mg", factor: 0.001 },
      { id: "grams", name: "Gram", plural: "Grams", symbol: "g", factor: 1 },
      { id: "kilograms", name: "Kilogram", plural: "Kilograms", symbol: "kg", factor: 1000 },
      { id: "tonnes", name: "Tonne", plural: "Tonnes", symbol: "t", factor: 1000000 },
      { id: "ounces", name: "Ounce", plural: "Ounces", symbol: "oz", factor: 28.349523125 },
      { id: "pounds", name: "Pound", plural: "Pounds", symbol: "lb", factor: 453.59237 },
      { id: "stones", name: "Stone", plural: "Stones", symbol: "st", factor: 6350.29318 },
    ],
  },
  {
    id: "temperature",
    name: "Temperature",
    type: "temperature",
    blurb: "Convert temperatures between Celsius, Fahrenheit and Kelvin instantly.",
    units: [
      { id: "celsius", name: "Celsius", plural: "Celsius", symbol: "°C" },
      { id: "fahrenheit", name: "Fahrenheit", plural: "Fahrenheit", symbol: "°F" },
      { id: "kelvin", name: "Kelvin", plural: "Kelvin", symbol: "K" },
    ],
  },
  {
    id: "volume",
    name: "Volume",
    type: "linear",
    blurb: "Convert volume units: liters, milliliters, US gallons, cups, pints and fluid ounces.",
    units: [
      { id: "milliliters", name: "Milliliter", plural: "Milliliters", symbol: "ml", factor: 0.001 },
      { id: "liters", name: "Liter", plural: "Liters", symbol: "L", factor: 1 },
      { id: "cubic-meters", name: "Cubic Meter", plural: "Cubic Meters", symbol: "m³", factor: 1000 },
      { id: "fluid-ounces", name: "Fluid Ounce", plural: "Fluid Ounces", symbol: "fl oz", factor: 0.0295735295625 },
      { id: "cups", name: "Cup", plural: "Cups", symbol: "cup", factor: 0.2365882365 },
      { id: "pints", name: "Pint", plural: "Pints", symbol: "pt", factor: 0.473176473 },
      { id: "quarts", name: "Quart", plural: "Quarts", symbol: "qt", factor: 0.946352946 },
      { id: "gallons", name: "Gallon", plural: "Gallons", symbol: "gal", factor: 3.785411784 },
    ],
  },
  {
    id: "data",
    name: "Digital Storage",
    type: "linear",
    blurb: "Convert digital storage units: bits, bytes, kilobytes, megabytes, gigabytes and terabytes (binary, 1 KB = 1024 bytes).",
    units: [
      { id: "bits", name: "Bit", plural: "Bits", symbol: "b", factor: 0.125 },
      { id: "bytes", name: "Byte", plural: "Bytes", symbol: "B", factor: 1 },
      { id: "kilobytes", name: "Kilobyte", plural: "Kilobytes", symbol: "KB", factor: 1024 },
      { id: "megabytes", name: "Megabyte", plural: "Megabytes", symbol: "MB", factor: 1048576 },
      { id: "gigabytes", name: "Gigabyte", plural: "Gigabytes", symbol: "GB", factor: 1073741824 },
      { id: "terabytes", name: "Terabyte", plural: "Terabytes", symbol: "TB", factor: 1099511627776 },
    ],
  },
  {
    id: "speed",
    name: "Speed",
    type: "linear",
    blurb: "Convert speed units: kilometers per hour, miles per hour, meters per second and knots.",
    units: [
      { id: "meters-per-second", name: "Meter per second", plural: "Meters per second", symbol: "m/s", factor: 1 },
      { id: "kilometers-per-hour", name: "Kilometer per hour", plural: "Kilometers per hour", symbol: "km/h", factor: 0.2777777778 },
      { id: "miles-per-hour", name: "Mile per hour", plural: "Miles per hour", symbol: "mph", factor: 0.44704 },
      { id: "knots", name: "Knot", plural: "Knots", symbol: "kn", factor: 0.5144444444 },
      { id: "feet-per-second", name: "Foot per second", plural: "Feet per second", symbol: "ft/s", factor: 0.3048 },
    ],
  },
  {
    id: "time",
    name: "Time",
    type: "linear",
    blurb: "Convert time units: seconds, minutes, hours, days and weeks.",
    units: [
      { id: "seconds", name: "Second", plural: "Seconds", symbol: "s", factor: 1 },
      { id: "minutes", name: "Minute", plural: "Minutes", symbol: "min", factor: 60 },
      { id: "hours", name: "Hour", plural: "Hours", symbol: "h", factor: 3600 },
      { id: "days", name: "Day", plural: "Days", symbol: "d", factor: 86400 },
      { id: "weeks", name: "Week", plural: "Weeks", symbol: "wk", factor: 604800 },
    ],
  },
  {
    id: "area",
    name: "Area",
    type: "linear",
    blurb: "Convert area units: square meters, square feet, acres, hectares and square miles.",
    units: [
      { id: "square-meters", name: "Square Meter", plural: "Square Meters", symbol: "m²", factor: 1 },
      { id: "square-kilometers", name: "Square Kilometer", plural: "Square Kilometers", symbol: "km²", factor: 1000000 },
      { id: "square-feet", name: "Square Foot", plural: "Square Feet", symbol: "ft²", factor: 0.09290304 },
      { id: "square-miles", name: "Square Mile", plural: "Square Miles", symbol: "mi²", factor: 2589988.110336 },
      { id: "acres", name: "Acre", plural: "Acres", symbol: "ac", factor: 4046.8564224 },
      { id: "hectares", name: "Hectare", plural: "Hectares", symbol: "ha", factor: 10000 },
    ],
  },
  {
    id: "pressure",
    name: "Pressure",
    type: "linear",
    blurb: "Convert pressure units: pascals, kilopascals, bar, psi, atmospheres and mmHg.",
    units: [
      { id: "pascals", name: "Pascal", plural: "Pascals", symbol: "Pa", factor: 1 },
      { id: "kilopascals", name: "Kilopascal", plural: "Kilopascals", symbol: "kPa", factor: 1000 },
      { id: "bar", name: "Bar", plural: "Bar", symbol: "bar", factor: 100000 },
      { id: "psi", name: "Psi", plural: "Psi", symbol: "psi", factor: 6894.757293168 },
      { id: "atmospheres", name: "Atmosphere", plural: "Atmospheres", symbol: "atm", factor: 101325 },
      { id: "mmhg", name: "Millimeter of mercury", plural: "Millimeters of mercury", symbol: "mmHg", factor: 133.322387415 },
    ],
  },
  {
    id: "energy",
    name: "Energy",
    type: "linear",
    blurb: "Convert energy units: joules, kilojoules, calories, kilocalories, watt-hours, kWh and BTU.",
    units: [
      { id: "joules", name: "Joule", plural: "Joules", symbol: "J", factor: 1 },
      { id: "kilojoules", name: "Kilojoule", plural: "Kilojoules", symbol: "kJ", factor: 1000 },
      { id: "calories", name: "Calorie", plural: "Calories", symbol: "cal", factor: 4.184 },
      { id: "kilocalories", name: "Kilocalorie", plural: "Kilocalories", symbol: "kcal", factor: 4184 },
      { id: "watt-hours", name: "Watt-hour", plural: "Watt-hours", symbol: "Wh", factor: 3600 },
      { id: "kilowatt-hours", name: "Kilowatt-hour", plural: "Kilowatt-hours", symbol: "kWh", factor: 3600000 },
      { id: "btu", name: "BTU", plural: "BTU", symbol: "BTU", factor: 1055.05585262 },
      { id: "foot-pounds", name: "Foot-pound", plural: "Foot-pounds", symbol: "ft·lb", factor: 1.3558179483314 },
    ],
  },
  {
    id: "power",
    name: "Power",
    type: "linear",
    blurb: "Convert power units: watts, kilowatts, megawatts, horsepower and metric horsepower.",
    units: [
      { id: "watts", name: "Watt", plural: "Watts", symbol: "W", factor: 1 },
      { id: "kilowatts", name: "Kilowatt", plural: "Kilowatts", symbol: "kW", factor: 1000 },
      { id: "megawatts", name: "Megawatt", plural: "Megawatts", symbol: "MW", factor: 1000000 },
      { id: "horsepower", name: "Horsepower", plural: "Horsepower", symbol: "hp", factor: 745.69987158227 },
      { id: "metric-horsepower", name: "Metric horsepower", plural: "Metric horsepower", symbol: "PS", factor: 735.49875 },
    ],
  },
  {
    id: "frequency",
    name: "Frequency",
    type: "linear",
    blurb: "Convert frequency units: hertz, kilohertz, megahertz and gigahertz.",
    units: [
      { id: "hertz", name: "Hertz", plural: "Hertz", symbol: "Hz", factor: 1 },
      { id: "kilohertz", name: "Kilohertz", plural: "Kilohertz", symbol: "kHz", factor: 1000 },
      { id: "megahertz", name: "Megahertz", plural: "Megahertz", symbol: "MHz", factor: 1000000 },
      { id: "gigahertz", name: "Gigahertz", plural: "Gigahertz", symbol: "GHz", factor: 1000000000 },
    ],
  },
  {
    id: "angle",
    name: "Angle",
    type: "linear",
    blurb: "Convert angle units: degrees, radians, gradians, arcminutes, arcseconds and turns.",
    units: [
      { id: "degrees", name: "Degree", plural: "Degrees", symbol: "°", factor: 1 },
      { id: "radians", name: "Radian", plural: "Radians", symbol: "rad", factor: 57.29577951308232 },
      { id: "gradians", name: "Gradian", plural: "Gradians", symbol: "grad", factor: 0.9 },
      { id: "arcminutes", name: "Arcminute", plural: "Arcminutes", symbol: "′", factor: 0.016666666666667 },
      { id: "arcseconds", name: "Arcsecond", plural: "Arcseconds", symbol: "″", factor: 0.00027777777777778 },
      { id: "turns", name: "Turn", plural: "Turns", symbol: "turn", factor: 360 },
    ],
  },
  {
    id: "data-rate",
    name: "Data Transfer Rate",
    type: "linear",
    blurb: "Convert data transfer rate units: bits and bytes per second, Kbps, Mbps and Gbps (decimal, 1 kbit = 1000 bits).",
    units: [
      { id: "bits-per-second", name: "Bit per second", plural: "Bits per second", symbol: "bps", factor: 1 },
      { id: "kilobits-per-second", name: "Kilobit per second", plural: "Kilobits per second", symbol: "kbps", factor: 1000 },
      { id: "megabits-per-second", name: "Megabit per second", plural: "Megabits per second", symbol: "Mbps", factor: 1000000 },
      { id: "gigabits-per-second", name: "Gigabit per second", plural: "Gigabits per second", symbol: "Gbps", factor: 1000000000 },
      { id: "kilobytes-per-second", name: "Kilobyte per second", plural: "Kilobytes per second", symbol: "kB/s", factor: 8000 },
      { id: "megabytes-per-second", name: "Megabyte per second", plural: "Megabytes per second", symbol: "MB/s", factor: 8000000 },
    ],
  },
];

// ---------------------------------------------------------------------------
// Lookups + math
// ---------------------------------------------------------------------------

export function getCategory(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

export type Pair = { category: Category; from: Unit; to: Unit; slug: string };

/** Every ordered (from -> to) unit pair across all categories. */
export function allPairs(): Pair[] {
  const pairs: Pair[] = [];
  for (const category of categories) {
    for (const from of category.units) {
      for (const to of category.units) {
        if (from.id === to.id) continue;
        pairs.push({ category, from, to, slug: `${from.id}-to-${to.id}` });
      }
    }
  }
  return pairs;
}

export function findPair(slug: string): Pair | undefined {
  return allPairs().find((p) => p.slug === slug);
}

/** Convert a numeric value from one unit to another within a category. */
export function convert(category: Category, from: Unit, to: Unit, value: number): number {
  if (category.type === "temperature") {
    let celsius: number;
    switch (from.id) {
      case "fahrenheit": celsius = (value - 32) * (5 / 9); break;
      case "kelvin": celsius = value - 273.15; break;
      default: celsius = value; // celsius
    }
    switch (to.id) {
      case "fahrenheit": return celsius * (9 / 5) + 32;
      case "kelvin": return celsius + 273.15;
      default: return celsius; // celsius
    }
  }
  return (value * (from.factor as number)) / (to.factor as number);
}

/** Trim floating point noise into a clean, human-friendly string. */
export function formatResult(n: number): string {
  if (!isFinite(n)) return "—";
  if (n === 0) return "0";
  const abs = Math.abs(n);
  let out: string;
  if (abs !== 0 && (abs < 1e-4 || abs >= 1e15)) {
    out = n.toExponential(6);
  } else {
    // up to 6 significant-ish decimals, then strip trailing zeros
    out = n.toFixed(6);
    out = out.replace(/\.?0+$/, "");
  }
  return out;
}

/** Common reference values used to build the static quick-reference table. */
export const REFERENCE_VALUES = [1, 2, 3, 5, 10, 20, 50, 100, 500, 1000];
