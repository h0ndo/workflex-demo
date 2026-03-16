# Project Structure Rules (Workflex)

## Ziel
Eine einheitliche, verständliche und langfristig wartbare Projektstruktur
sicherstellen.

## Verbindliche Ordnerstruktur

```text
workflex/
  ├─ .github/workflows/ # CI/CD-Pipelines
  ├─ agents/            # Rollenbasierte Arbeitsanweisungen
  ├─ rules/             # Verbindliche, bereichsübergreifende Regeln
  ├─ doku/              # Erklärungen, Workflows, Definitionen
  ├─ prompt-history/    # Laufende Gesprächs- und Entscheidungsdokumentation
  ├─ requirements/      # Lastenheft (Ist) + Pflichtenheft (Plan)
  ├─ e2e-tests/         # Playwright E2E-Tests (TypeScript)
  ├─ backend/           # Backend-Implementierung
  └─ frontend/          # Frontend-Implementierung
```

## Semantik der Bereiche

- **agents/**
  - Definiert Rollen (z. B. Frontend Agent, DevOps Agent,
    Unit Testing Frontend Agent, Unit Testing Backend Agent,
    E2E Testing Agent).
  - Enthält Arbeitsweise, Output-Format und Definition of Done.
  - Enthält keine allgemeinen Standards als Duplikat.

- **rules/**
  - Enthält verbindliche Regeln und Standards.
  - Gilt bereichsübergreifend und ist die verbindliche Referenz.

- **doku/**
  - Enthält erklärende Inhalte, Definitionen, Workflows und How-tos.
  - Darf Regeln erläutern, aber nicht widersprüchlich überschreiben.

- **prompt-history/**
  - Chronologisches Verlaufsgedächtnis von Entscheidungen und Änderungen.
  - Wird fortlaufend gepflegt.

- **requirements/**
  - Trennt klar zwischen Ist-Zustand (Lastenheft) und Soll-Zustand
    (Pflichtenheft).
  - Wird durch Requirements Engineering laufend aktualisiert.

- **e2e-tests/**
  - Enthält Playwright-End-to-End-Tests in TypeScript.
  - Testet ausschließlich vollständig umgesetzte Features.

- **.github/workflows/**
  - Enthält Quality-, E2E- und Build/Release-Pipelines.

## Lastenheft vs. Pflichtenheft (Projektstandard)

- **Lastenheft (Ist):**
  - Dokumentiert den aktuell umgesetzten und fachlich verfügbaren Stand.
  - Antwortet auf: "Was kann das System aktuell?"

- **Pflichtenheft (Plan):**
  - Dokumentiert geplante bzw. beauftragte Features und Umsetzungsschritte.
  - Antwortet auf: "Was soll gebaut werden und wie priorisiert?"

## Pflegepflichten

1. Strukturänderungen müssen in dieser Rule dokumentiert werden.
2. Neue Agenten müssen mindestens auf relevante Rules verweisen.
3. Requirements-Ergebnisse müssen in `requirements/` eingetragen werden.
4. E2E-Tests müssen im Bereich `e2e-tests/` gepflegt werden.
5. Wesentliche Änderungen müssen in `prompt-history/` vermerkt werden.

## Definition of Done (Struktur)

Eine strukturelle Änderung ist nur fertig, wenn:

1. Datei im richtigen Bereich abgelegt ist.
2. Referenzen konsistent sind.
3. Prompt-History aktualisiert ist.
4. Keine verwaisten/veralteten Pfade zurückbleiben.
