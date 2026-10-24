# CHOPSTIX – Fang den Booster. Mit dem Turm.

Ein Fan-Spiel für das iPhone (PWA): Du steuerst einen riesigen Booster nach der Stufentrennung zurück zur Startrampe – Rückstoss-Zündung, Freiflug, Wiedereintritt, Landezündung – und fängst ihn mit den beiden Fangarmen des Startturms.

**Spielen:** https://drheisenbergx.github.io/chopstix/

> Fan-Projekt, nicht mit SpaceX verbunden. «Super Heavy», «Starship» und «Mechazilla» werden nur beschreibend verwendet. Keine offiziellen Logos, Fotos oder Klänge – alle Grafiken, Modelle, Texturen und Töne werden im Spiel prozedural erzeugt.

## Installieren (iPhone)
1. Link in **Safari** öffnen.
2. Teilen-Knopf → **Zum Home-Bildschirm**.
3. Vom Home-Bildschirm starten: Vollbild, Hochformat, funktioniert danach auch **offline**.

## Steuerung
- **Linker Daumen:** Lage steuern (Gridfins im Wiedereintritt, Schubvektor beim Landeanflug). Optional: Neigungssteuerung in den Einstellungen.
- **Rechter Daumen:** Schubregler.
- **Arme schliessen:** runder Knopf unten, sobald die Fangbolzen knapp über den Schienen sind (auf «Leicht» automatisch).
- Kamera-Knopf oben rechts: Verfolger, Turm, Drohne, Strand, Auto.

## Inhalt
- 10 Missionen mit Sternen, Bestwerten und Medaillen (Tag, Dämmerung, Nacht, Nebel, Böen, Triebwerksausfälle)
- Bewertungen: Perfekt / Gut / Hart / Fehlgeschlagen
- Lackierungen, Fahrzeugvarianten, Kameras und 16 Erfolge zum Freischalten
- Zeitlupen-Wiederholung mit Broadcast-Einblendungen
- Hilfen: Leicht / Normal / Profi
- Spielstand lokal (versioniert, mit Migrationen – wird bei Updates nie gelöscht)

## Technik
Three.js (lokal gebündelt), eigene Shader für Abgasstrahl mit Machscheiben, Bloom, Hitzeflimmern, Wiedereintrittsglühen, Höhennebel und Meer. Klang komplett mit der Web-Audio-API synthetisiert. Service Worker für Offline-Betrieb mit Update-Hinweis.
