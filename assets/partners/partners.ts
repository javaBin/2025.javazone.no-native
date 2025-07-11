import {
  Accenture,
  Bekk,
  Bouvet,
  Capgemini,
  Capra,
  CGI,
  Cloudberries,
  Computas,
  DNB,
  Elastic,
  Embriq,
  Entur,
  Finn,
  Fremtind,
  Gjensidige,
  Husbanken,
  Kantega,
  Knowit,
  Kodemaker,
  Miles,
  Netcompany,
  NorskTipping,
  PolitietPIT,
  PostenBring,
  RedHat,
  Scelto,
  Scienta,
  Skatteetaten,
  SopraSteria,
  Sparebank1,
  StatensVegvesen,
  Statnett,
  Storebrand,
  Systek,
  Telenor,
  TetDigital,
  Tietoevry,
  Tolletaten,
  Tripletex,
  Uptime,
  Vaadin,
  Webstep,
  Apotek1,
  BankID,
  Bronoy,
  Crayon,
  ElOgIt,
  GE,
  JetBrains,
  JPRO,
  Mastercard,
  Sonat,
  Tomra,
  Yne,
  Ambita,
  NAV,
  KSDigitaleFellestjenester,
  GoogleCloud,
  Kartverket,
  SSB,
} from '../../Assets';
import { FunctionComponent } from 'react';
import { SvgProps } from 'react-native-svg';

interface Partner {
  name: string;
  homepageUrl: string;
  logoUrl: FunctionComponent<SvgProps>;
}

export const partners: Partner[] = [
  { name: 'Accenture', homepageUrl: 'https://www.accenture.com', logoUrl: Accenture },
  { name: 'Bekk', homepageUrl: 'https://www.bekk.no', logoUrl: Bekk },
  { name: 'Bouvet', homepageUrl: 'https://www.bouvet.no', logoUrl: Bouvet },
  { name: 'Capgemini', homepageUrl: 'https://www.capgemini.com', logoUrl: Capgemini },
  { name: 'Capra', homepageUrl: 'https://www.capraconsulting.no', logoUrl: Capra },
  { name: 'CGI', homepageUrl: 'https://www.cgi.com', logoUrl: CGI },
  { name: 'Cloudberries', homepageUrl: 'https://www.cloudberries.no', logoUrl: Cloudberries },
  { name: 'Computas', homepageUrl: 'https://computas.com', logoUrl: Computas },
  { name: 'DNB', homepageUrl: 'https://www.dnb.no', logoUrl: DNB },
  { name: 'Elastic', homepageUrl: 'https://www.elastic.co', logoUrl: Elastic },
  { name: 'Embriq', homepageUrl: 'https://www.embriq.no', logoUrl: Embriq },
  { name: 'Entur', homepageUrl: 'https://www.entur.no', logoUrl: Entur },
  { name: 'Finn', homepageUrl: 'https://www.finn.no', logoUrl: Finn },
  { name: 'Fremtind', homepageUrl: 'https://www.fremtind.no', logoUrl: Fremtind },
  { name: 'Gjensidige', homepageUrl: 'https://www.gjensidige.no', logoUrl: Gjensidige },
  { name: 'Husbanken', homepageUrl: 'https://www.husbanken.no', logoUrl: Husbanken },
  { name: 'Kantega', homepageUrl: 'https://www.kantega.no', logoUrl: Kantega },
  { name: 'Knowit', homepageUrl: 'https://www.knowit.no', logoUrl: Knowit },
  { name: 'Kodemaker', homepageUrl: 'https://www.kodemaker.no', logoUrl: Kodemaker },
  { name: 'Miles', homepageUrl: 'https://www.miles.no', logoUrl: Miles },
  { name: 'Netcompany', homepageUrl: 'https://www.netcompany.com', logoUrl: Netcompany },
  { name: 'Norsk Tipping', homepageUrl: 'https://www.norsk-tipping.no', logoUrl: NorskTipping },
  { name: 'Politiet PIT', homepageUrl: 'https://www.politiet.no', logoUrl: PolitietPIT },
  { name: 'Posten Bring', homepageUrl: 'https://www.bring.no', logoUrl: PostenBring },
  { name: 'Red Hat', homepageUrl: 'https://www.redhat.com', logoUrl: RedHat },
  { name: 'Scelto', homepageUrl: 'https://www.scelto.no', logoUrl: Scelto },
  { name: 'Scienta', homepageUrl: 'https://www.scienta.no', logoUrl: Scienta },
  { name: 'Skatteetaten', homepageUrl: 'https://www.skatteetaten.no', logoUrl: Skatteetaten },
  { name: 'Sopra Steria', homepageUrl: 'https://www.soprasteria.no', logoUrl: SopraSteria },
  { name: 'Sparebank-1', homepageUrl: 'https://www.sparebank1.no', logoUrl: Sparebank1 },
  { name: 'Statens Vegvesen', homepageUrl: 'https://www.vegvesen.no', logoUrl: StatensVegvesen },
  { name: 'Statnett', homepageUrl: 'https://www.statnett.no', logoUrl: Statnett },
  { name: 'Storebrand', homepageUrl: 'https://www.storebrand.no', logoUrl: Storebrand },
  { name: 'Systek', homepageUrl: 'https://www.systek.no', logoUrl: Systek },
  { name: 'Telenor', homepageUrl: 'https://www.telenor.no', logoUrl: Telenor },
  { name: 'Tet Digital', homepageUrl: 'https://ruter.no/om-ruter/jobb', logoUrl: TetDigital },
  { name: 'Tietoevry', homepageUrl: 'https://www.tietoevry.com', logoUrl: Tietoevry },
  { name: 'Tolletaten', homepageUrl: 'https://www.toll.no', logoUrl: Tolletaten },
  { name: 'Tripletex', homepageUrl: 'https://www.tripletex.no', logoUrl: Tripletex },
  { name: 'Uptime', homepageUrl: 'https://www.uptimeconsulting.no', logoUrl: Uptime },
  { name: 'Vaadin', homepageUrl: 'https://vaadin.com', logoUrl: Vaadin },
  { name: 'Webstep', homepageUrl: 'https://www.webstep.no', logoUrl: Webstep },
  { name: 'Apotek1', homepageUrl: 'https://www.apotek1.no', logoUrl: Apotek1 },
  { name: 'BankID', homepageUrl: 'https://bankid.no', logoUrl: BankID },
  { name: 'Bronnoysundregistrene', homepageUrl: 'https://www.brreg.no', logoUrl: Bronoy },
  { name: 'Crayon', homepageUrl: 'https://crayonconsulting.no', logoUrl: Crayon },
  { name: 'El og IT', homepageUrl: 'https://elogit.no', logoUrl: ElOgIt },
  { name: 'GE', homepageUrl: 'https://www.ge.com', logoUrl: GE },
  { name: 'JetBrains', homepageUrl: 'https://www.jetbrains.com', logoUrl: JetBrains },
  { name: 'JPRO', homepageUrl: 'https://www.jpro.no', logoUrl: JPRO },
  { name: 'Mastercard', homepageUrl: 'https://www.mastercard.com', logoUrl: Mastercard },
  { name: 'Sonat', homepageUrl: 'https://www.sonat.no', logoUrl: Sonat },
  { name: 'Tomra', homepageUrl: 'https://www.tomra.com', logoUrl: Tomra },
  { name: 'Yne', homepageUrl: 'https://www.yne.no', logoUrl: Yne },
  { name: 'Ambita', homepageUrl: 'https://www.ambita.com', logoUrl: Ambita },
  { name: 'NAV', homepageUrl: 'https://www.nav.no', logoUrl: NAV },
  { name: 'KS Digitale Fellestjenester', homepageUrl: 'https://ksdigital.no/', logoUrl: KSDigitaleFellestjenester },
  { name: 'Google Cloud', homepageUrl: 'https://cloud.google.com', logoUrl: GoogleCloud },
  { name: 'Kartverket', homepageUrl: 'https://www.kartverket.no', logoUrl: Kartverket },
  { name: 'SSB', homepageUrl: 'https://www.ssb.no', logoUrl: SSB },
];
