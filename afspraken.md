# Eisen aan Thesaurus-items
Aan de begrippen en termen in een thesaurus zullen bepaalde eisen gesteld worden om éénduidig gebruik mogelijk te maken.
Als uitgangspunt is het boek "Organiseer je informatie" genomen en wordt sterk aangeraden om door te nemen voordat een beheerder aan de slag gaat met het bewerken van de thesaurus.
//TODO: hoofdstukken benoemen

## Basisvereisten
Elk item moet bevatten:
- Unieke identifier (URI) (Gebruik van RDFS en NEN2660)
- Naam (Label) (rdfs:label, skos:prefLabel) //te bepalen
- Definitie (skos:definition, dc:description)
- Labels en definities met taal-tags (@nl, @en)
- Herkomst/Bron (dc:source)
- Auteur/Verantwoordelijke (dc:creator)

## Relationele Vereisten
- Bredere term (skos:broader, rdfs:subClassOf)
- Smallere term (skos:narrower)
- Gerelateerde term (skos:related)
- Synoniemen (skos:altLabel)
<p class="note" title="Voorbeeld">
Een begrip "metselwerk" (skos:preflabel) kan de volgende relaties hebben:
- Bredere term: Bouwtechniek (skos:broader)
- Gerelateerde term: Voegwerk (skos:related)
- Alternatieve benaming: Baksteenconstructie (skos:altLabel)
</p>

## Metadata en Statusbeheer
- Statussen: Actief, Deprecated, Concept
- Laatste wijzigingsdatum (dc:modified)
- Validatiehistorie (dc:provenance)
## Consistentie en Taalregels
- Hoofdlettergebruik: Standaard kleine letters
- Enkelvoud vs. meervoud: enkelvoud, tenzij...
- Gebruik natuurlijke taal: 'Algemeen Bouwend Nederlands'
## Definities en Differentia-principes
Definities moeten genus (breder begrip) en differentia (onderscheidende kenmerken) bevatten.
<p class="note" title="Voorbeeld">
Goede definities:
- "Een raam is een bouwdeel (genus) dat daglicht en/of lucht doorlaat en meestal transparant is (differentia)."
- "Een kozijn is een frame (genus) dat een raam of deur omsluit en deze verbindt met de omringende constructie (differentia)."
</p>

## Begrippen en Concepten
- Term: Taalkundige weergave van een begrip.
- Begrip: De eenduidige en gedefinieerde betekenis van een term.
- Concept: Abstract idee, niet gebonden aan taal.
## Evaluatie en Doorontwikkeling
- Periodieke evaluatie en feedbackverwerking.


