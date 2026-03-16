# Definition Agent Roles

## Zweck

Diese Datei definiert den Unterschied zwischen **Agents** und **Rules** im Workflex-Projekt.

---

## 1) Grundprinzip

- **Agents** beschreiben die Rolle, Arbeitsweise und Ergebnisse für einen konkreten Aufgabentyp.
- **Rules** beschreiben allgemeine, bereichsweite Standards und Rahmenbedingungen.

Kurzform:

- **Rules = Was gilt immer**
- **Agents = Wie wird gearbeitet**

---

## 2) Ordnerstruktur

```text
workflex/
  ├─ agents/   # Rollen-Definitionen
  ├─ rules/    # Generelle Regelwerke nach Bereichen
  └─ doku/     # Übergreifende Definitionen und Konzepte
```

---

## 3) Inhalt von Agent-Dateien

Jede Agent-Datei sollte enthalten:

1. **Rolle/Zielbild**
2. **Verbindliche Referenzen auf Rules**
3. **Konkreter Ablauf (Schritte)**
4. **Erwartetes Ergebnis/Output**
5. **Definition of Done**
6. **Wann Rückfragen nötig sind**

Beispiel:

- "Du bist ein Senior Frontend Developer ..."
- "Du arbeitest nach `rules/FRONTEND_CODING_RULES.md` und `rules/FRONTEND_STRUCTURAL_RULES.md`."

---

## 4) Inhalt von Rule-Dateien

Rule-Dateien enthalten:

- Architekturvorgaben
- Coding-Standards
- Qualitätskriterien
- Sicherheits- und Validierungsregeln
- Verbindliche DoD-Aspekte auf Bereichsebene

Regeln sind **nicht rollenabhängig**, sondern gelten bereichsweit.

---

## 5) Vorteile der Trennung

1. **Konsistenz:** Regeln zentral gepflegt, kein Drift in Agent-Prompts.
2. **Wartbarkeit:** Regeländerung an einer Stelle wirkt für alle relevanten Agents.
3. **Skalierung:** Neue Agents können schnell erstellt werden, ohne Regelduplikate.
4. **Transparenz:** Team erkennt sofort, was global gilt und was rollenspezifisch ist.

---

## 6) Pflegeprozess

1. Neue globale Vorgabe -> in `rules/` ergänzen.
2. Prüfen, welche Agents betroffen sind.
3. In Agent-Dateien nur Referenzen/Arbeitsablauf anpassen.
4. Änderungen kurz in der Prompt-History dokumentieren.
