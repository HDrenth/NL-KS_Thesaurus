# Eisen aan Thesaurus-items
## Doel
Dit document beschrijft de technische en functionele eisen voor thesaurus-items.
## Doelgroep
- Ontwikkelaars en beheerders
- Functioneel beheerders
- Gebruikers
## Basisvereisten
Elk item moet bevatten:
- Unieke identifier (URI) (Gebruik van RDFS en NEN2660)
- Naam (Label) (rdfs:label, skos:prefLabel)
- Definitie (skos:definition, dc:description)
- Herkomst/Bron (dc:source)
- Auteur/Verantwoordelijke (dc:creator)
### Meertalige ondersteuning
- Labels met taal-tags (@nl, @en)
## Relationele Vereisten
- Bredere term (skos:broader, rdfs:subClassOf)
- Smallere term (skos:narrower)
- Gerelateerde term (skos:related)
- Synoniemen (skos:altLabel)
Voorbeeld: Een begrip "metselwerk" kan de volgende relaties hebben:
- Bredere term: Bouwtechniek (skos:broader)
- Gerelateerde term: Voegwerk (skos:related)
- Alternatieve benaming: Baksteenconstructie (skos:altLabel)
## Metadata en Statusbeheer
- Statussen: Actief, Deprecated, Concept
- Laatste wijzigingsdatum (dc:modified)
- Validatiehistorie (dc:provenance)
## Consistentie en Taalregels
- Hoofdlettergebruik: Standaard kleine letters
- Enkelvoud vs. meervoud: Bij voorkeur enkelvoud
- Gebruik natuurlijke taal: 'Algemeen Bouwend Nederlands'
## Definities en Differentia-principes
Definities moeten genus (breder begrip) en differentia (onderscheidende kenmerken) bevatten.
Goede definities:
- "Een raam is een bouwdeel (genus) dat daglicht en/of lucht doorlaat en meestal transparant is (differentia)."
- "Een kozijn is een frame (genus) dat een raam of deur omsluit en deze verbindt met de omringende constructie (differentia)."
## Begrippen en Concepten
- Term: Taalkundige weergave van een begrip.
- Begrip: De eenduidige en gedefinieerde betekenis van een term.
- Concept: Abstract idee, niet gebonden aan taal.
## Evaluatie en Doorontwikkeling
- Periodieke evaluatie en feedbackverwerking.
Dit document biedt een volledig overzicht van de visie, governance en technische eisen van de Thesaurus. Evaluaties en feedback worden regelmatig verwerkt om de thesaurus actueel en relevant te houden.

