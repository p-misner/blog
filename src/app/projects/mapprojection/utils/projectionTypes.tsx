import {
  geoAzimuthalEqualArea,
  geoAzimuthalEquidistant,
  geoConicEqualArea,
  geoConicEquidistant,
  geoEqualEarth,
  geoEquirectangular,
  geoGnomonic,
  geoMercator,
  geoNaturalEarth1,
  geoOrthographic,
  geoStereographic,
  geoTransverseMercator,
} from "d3-geo";
import * as d3 from "d3-geo-projection";
// import {
//   geoAlbers,
//   geoAzimuthalEqualArea,
//   geoConicConformal,
//   geoGnomonic,
//   geoMercator,
//   geoOrthographic,
// } from "d3-geo";

// https://observablehq.com/@fil/d3-projections
export const MapProjections = [
  { name: "Orthographic", value: geoOrthographic() },

  { name: "Aitoff", value: d3.geoAitoff() },
  { name: "American polyconic", value: d3.geoPolyconic() },
  {
    name: "Armadillo",
    value: d3.geoArmadillo(),
    options: { clip: { type: "Sphere" } },
  },
  { name: "August", value: d3.geoAugust() },
  { name: "azimuthal equal-area", value: geoAzimuthalEqualArea() },
  { name: "azimuthal equidistant", value: geoAzimuthalEquidistant() },
  { name: "Baker dinomic", value: d3.geoBaker() },
  {
    name: "Berghaus’ star",
    value: d3.geoBerghaus(),
    options: { clip: { type: "Sphere" } },
  },
  { name: "Bertin’s 1953", value: d3.geoBertin1953() },
  { name: "Boggs’ eumorphic", value: d3.geoBoggs() },
  {
    name: "Boggs’ eumorphic (interrupted)",
    value: d3.geoInterruptedBoggs(),
    options: { clip: { type: "Sphere" } },
  },
  { name: "Bonne", value: d3.geoBonne() },
  { name: "Bottomley", value: d3.geoBottomley() },
  { name: "Bromley", value: d3.geoBromley() },
  { name: "Butterfly (gnomonic)", value: d3.geoPolyhedralButterfly() },
  { name: "Butterfly (Collignon)", value: d3.geoPolyhedralCollignon() },
  { name: "Butterfly (Waterman)", value: d3.geoPolyhedralWaterman() },
  //   { name: "Cahill-Keyes", value: d3.geoCahillKeyes() },
  { name: "Collignon", value: d3.geoCollignon() },
  // {name: "conic conformal", value: d3.geoConicConformal}, // Not suitable for world maps.
  { name: "conic equal-area", value: geoConicEqualArea() },
  { name: "conic equidistant", value: geoConicEquidistant() },
  { name: "Craig retroazimuthal", value: d3.geoCraig() },
  { name: "Craster parabolic", value: d3.geoCraster() },
  //   { name: "Cox", value: geoCox() },
  //   { name: "cubic", value: d3.geoCubic() },
  { name: "cylindrical equal-area", value: d3.geoCylindricalEqualArea() },
  {
    name: "cylindrical stereographic",
    value: d3.geoCylindricalStereographic(),
  },
  //   { name: "dodecahedral", value: d3.geoDodecahedral() },
  { name: "Eckert I", value: d3.geoEckert1() },
  { name: "Eckert II", value: d3.geoEckert2() },
  { name: "Eckert III", value: d3.geoEckert3() },
  { name: "Eckert IV", value: d3.geoEckert4() },
  { name: "Eckert V", value: d3.geoEckert5() },
  { name: "Eckert VI", value: d3.geoEckert6() },
  { name: "Eisenlohr conformal", value: d3.geoEisenlohr() },
  { name: "Equal Earth", value: geoEqualEarth() },
  { name: "Equirectangular (plate carrée)", value: geoEquirectangular() },
  { name: "Fahey pseudocylindrical", value: d3.geoFahey() },
  { name: "flat-polar parabolic", value: d3.geoMtFlatPolarParabolic() },
  { name: "flat-polar quartic", value: d3.geoMtFlatPolarQuartic() },
  { name: "flat-polar sinusoidal", value: d3.geoMtFlatPolarSinusoidal() },
  { name: "Foucaut’s stereographic equivalent", value: d3.geoFoucaut() },
  { name: "Foucaut’s sinusoidal", value: d3.geoFoucautSinusoidal() },
  { name: "general perspective", value: d3.geoSatellite() },
  // {name: "Gilbert’s two-world", value: d3.geoGilbert}, // https://github.com/d3/d3-geo-projection/issues/165
  {
    name: "Gingery",
    value: d3.geoGingery(),
    options: { clip: { type: "Sphere" } },
  },
  { name: "Ginzburg V", value: d3.geoGinzburg5() },
  { name: "Ginzburg VI", value: d3.geoGinzburg6() },
  { name: "Ginzburg VIII", value: d3.geoGinzburg8() },
  { name: "Ginzburg IX", value: d3.geoGinzburg9() },
  { name: "Goode’s homolosine", value: d3.geoHomolosine() },
  {
    name: "Goode’s homolosine (interrupted)",
    value: d3.geoInterruptedHomolosine(),
    options: { clip: { type: "Sphere" } },
  },
  { name: "gnomonic", value: geoGnomonic() },
  { name: "Gringorten square", value: d3.geoGringorten() },
  { name: "Gringorten quincuncial", value: d3.geoGringortenQuincuncial() },
  { name: "Guyou square", value: d3.geoGuyou() },
  { name: "Hammer", value: d3.geoHammer() },
  {
    name: "Hammer retroazimuthal",
    value: d3.geoHammerRetroazimuthal(),
    options: { clip: { type: "Sphere" } },
  },
  {
    name: "HEALPix",
    value: d3.geoHealpix(),
    options: { clip: { type: "Sphere" } },
  },
  { name: "Hill eucyclic", value: d3.geoHill() },
  { name: "Hufnagel pseudocylindrical", value: d3.geoHufnagel() },
  //   { name: "icosahedral", value: geoIcosahedral() },
  //   { name: "Imago", value: d3.geoImago() },
  { name: "Kavrayskiy VII", value: d3.geoKavrayskiy7() },
  { name: "Lagrange conformal", value: d3.geoLagrange() },
  { name: "Larrivée", value: d3.geoLarrivee() },
  { name: "Laskowski tri-optimal", value: d3.geoLaskowski() },
  // {name: "Littrow retroazimuthal", value: d3.geoLittrow}, // Not suitable for world maps.
  { name: "Loximuthal", value: d3.geoLoximuthal() },
  { name: "Mercator", value: geoMercator() },
  { name: "Miller cylindrical", value: d3.geoMiller() },
  { name: "Mollweide", value: d3.geoMollweide() },
  {
    name: "Mollweide (Goode’s interrupted)",
    value: d3.geoInterruptedMollweide(),
    options: { clip: { type: "Sphere" } },
  },
  {
    name: "Mollweide (interrupted hemispheres)",
    value: d3.geoInterruptedMollweideHemispheres(),
    options: { clip: { type: "Sphere" } },
  },
  { name: "Natural Earth", value: geoNaturalEarth1() },
  { name: "Natural Earth II", value: d3.geoNaturalEarth2() },
  { name: "Nell–Hammer", value: d3.geoNellHammer() },
  { name: "Nicolosi globular", value: d3.geoNicolosi() },
  { name: "Patterson cylindrical", value: d3.geoPatterson() },
  { name: "Peirce quincuncial", value: d3.geoPeirceQuincuncial() },
  { name: "rectangular polyconic", value: d3.geoRectangularPolyconic() },
  { name: "Robinson", value: d3.geoRobinson() },
  { name: "sinusoidal", value: d3.geoSinusoidal() },
  {
    name: "sinusoidal (interrupted)",
    value: d3.geoInterruptedSinusoidal(),
    options: { clip: { type: "Sphere" } },
  },
  { name: "sinu-Mollweide", value: d3.geoSinuMollweide() },
  {
    name: "sinu-Mollweide (interrupted)",
    value: d3.geoInterruptedSinuMollweide(),
    options: { clip: { type: "Sphere" } },
  },
  { name: "stereographic", value: geoStereographic() },
  //   { name: "Lee’s tetrahedal", value: d3.geoTetrahedralLee() },
  { name: "Times", value: d3.geoTimes() },
  { name: "Tobler hyperelliptical", value: d3.geoHyperelliptical() },
  { name: "transverse Mercator", value: geoTransverseMercator() },
  { name: "Van der Grinten", value: d3.geoVanDerGrinten() },
  { name: "Van der Grinten II", value: d3.geoVanDerGrinten2() },
  { name: "Van der Grinten III", value: d3.geoVanDerGrinten3() },
  { name: "Van der Grinten IV", value: d3.geoVanDerGrinten4() },
  { name: "Wagner IV", value: d3.geoWagner4() },
  { name: "Wagner VI", value: d3.geoWagner6() },
  { name: "Wagner VII", value: d3.geoWagner7() },
  //   {
  //     name: "Werner",
  //     value: d3.geoBonne ? () => d3.geoBonne().parallel(90) : null,
  //   },
  { name: "Wiechel", value: d3.geoWiechel() },
  { name: "Winkel tripel", value: d3.geoWinkel3() },
];
