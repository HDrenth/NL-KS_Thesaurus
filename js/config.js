let respecConfig = {
  useLogo: true,
  useLabel: true,
  // title is verplicht! Neem hier de titel van het document op ----------------------
  title: "Ketenstandaard Thesaurus",
  //-- specStatus is verplicht! (activeer 1 van de volgende) --------------------------
  //specStatus: "wv",               // Werkversie
  // specStatus: "cv",               // Consultatieversie
  // specStatus: "vv",              // Versie ter vaststelling
  //specStatus: "def",              // Vastgestelde versie
  //specStatus: "basis",            // Basis Document
  specStatus: "ld",            // Levend Document
  //-- specType is verplicht bij alle andere dan BASIS ---------------------------------
  //specType: "NO",                 // Norm
  //specType: "ST",                 // Standaard
  //specType: "IM",                 // Informatie Model
  //specType: "PR",                 // Praktijkrichtlijn
  //specType: "HR",                 // HandReiking
  specType: "WA",                   // Werkafspraak
  //specType: "BD",                 // Beheer Documentatie
  //specType: "AL",                 // Algemeen document
  //specType: "BP",                 // Best Practice
  //-- pubDomain is verplicht! (komt in de URL) -------------------------------------
  //-- zie: https://geonovum.github.io/handleiding-tooling/ReSpec/#pubdomain
  pubDomain: "KSInt",
  //-- license: voor de geldende gebruiksvoorwaarden. Default is cc-by.
  license: "cc-by-nd",              // bronvermelding, geen afgeleide werken (default)
  // license: "cc0",                 // Public Domain Dedication
  // license: "cc-by",              // Attribution, met bronvermelding
  //-- TODO shortName is verplicht! (komt in de URL: kies logische afkorting)--------------
  shortName: "NL-KS_Thesaurus",
  
  //edDraftURI = De URI van de draft version. Deze wordt automatisch afgeleid van de github URI; maar kan hier overschreven worden. 
	//edDraftURI: ["https://geonovum.github.io", "/", "shortName"],

  //-- publishDate is verplicht -------------------------------------------------------
  //-- NB: in de werkversie uitzetten, want dan pakt Respec de pushdate ---------------
  //publishDate: "2023-03-28",
  //eventueel is het mogelijk een versienummer mee te geven, maar bij Geonovum werken we gewoonlijk alleen met datum als onderdeel van de permanente URI.
  //publishVersion: "0.0.2",
  //previousVersion: "0.0.1",
  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beiden aan/uit! 
  //previousPublishDate: "2014-05-01",
  //previousMaturity: "CV",
  //-- TODO: de namen van de Editor(s) / Redacteur(en)---------------------------------------
  //-- vul in: per Editor: name:, company:, companyURL: -------------------------------
  editors:
    [
      {
        name: "Herman Drenth",
        company: "Ketenstandaard",
        companyURL: "https://www.ketenstandaard.nl",
      }
    ],
  //-- de namen van de auteur(s) ------------------------------------------------------
  //-- vul in: per auteur: name:, company:, companyURL: -------------------------------
  authors:
    [
      {
        name: "Herman Drenth",
        company: "Ketenstandaard",
        companyURL: "https://www.ketenstandaard.nl",
      }
    ],
  // TODO: Vul de github URL in.
  //neem hier de URL van de github repository op waar het respec document in staat
  github: "https://github.com/HDrenth/NL-KS_Thesaurus",
  // Create PDF and link to file in header (optional):
  // TODO: Change the filename as preferred.
  // alternateFormats: [
  //     {
  //         label: "pdf",
  //         uri: "template.pdf",
  //     },
  // ],
  // Lokale lijst voor bibliografie
  // - Kijk eerst naar de beschikbare www.specref.org .
  // - Kijk daarna in de organisatieconfig.
  // - Voeg dan pas hieronder toe.
  localBiblio: 
  {
    // MIM12: {
    //   id: "MIM12",
    //   title: "MIM - Metamodel Informatie Modellering (Versie 1.2)",
    //   href: "https://docs.geostandaarden.nl/mim/def-st-mim-20240613/",
    //   status: "Definitief",
    //   publisher: "Geonovum",
    //   date: "2024-06-13"
    // }
  }
};
