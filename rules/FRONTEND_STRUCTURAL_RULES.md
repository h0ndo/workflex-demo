# Workflex Frontend Structural Rules (Angular)

Diese Regeln sind verbindlich für die Frontend-Architektur.

## 0) Ziel

- Klare, wartbare Feature-Struktur.
- Trennung von App-Seiten und wiederverwendbarer Fach-/Core-Logik über Libraries.
- Typensicherheit und Testbarkeit als Standard.

---

## 1) Architekturprinzipien (verbindlich)

1. App enthält primär Seiten/Flows.
2. Fachlogik liegt in `business-lib`.
3. Querschnitt/Core-Funktionalität liegt in `core-lib`.
4. Innerhalb der Libs gilt: **1. Schicht fachlich, 2. Schicht technisch**.
5. Es wird mit **Modules** gearbeitet.
6. **Keine Barrel Files** (`index.ts`) verwenden.

---

## 2) Libraries

### 2.1 business-lib

- Enthält fachliche Module (z. B. appointments, billing, customers, ...).
- Pro fachlichem Modul gilt darunter technische Gliederung:
  - `components/`
  - `services/`
  - `directives/`
  - `pipes/`
  - `models/`

### 2.2 core-lib

- Enthält fachliche Core-Funktionalitäten:
  - authentication
  - translation
  - messaging
  - weitere app-weite Kernbausteine
- Auch hier: erst fachlich, dann technisch strukturieren.

### 2.3 provider-lib

- Enthält Integrationsschicht zum Backend.
- Strukturregel (verbindlich):
  - 1. Ordnerschicht fachlich (z. B. `backend-api`, `billing-api`, ...)
  - 1. Ordnerschicht **nur** technisch: `services/` und `models/`
- Enthält insbesondere:
  - API-Services
  - API-Models/Contracts
- Zugriffsbeschränkung:
  - Erlaubt in `business-lib` und `core-lib`
  - **Verboten** in `app` (keine direkten Provider-Aufrufe aus app/pages)

### 2.4 style-lib

- Enthält globale Styling-Bausteine und zentrale Style-Ressourcen.
- Typische Inhalte:
  - Variablen/Tokens
  - Utility-Klassen
  - Overrides für Drittanbieter-Styles
- Zugriff:
  - Erlaubt in `app` und `business-lib`
  - Per Alias konsumieren.

---

## 3) Alias-Regeln

1. Alle Libs sind per TS-Path-Aliases konsumierbar.
2. Erlaubte Aliases:
   - `@business-lib/*`
   - `@core-lib/*`
   - `@provider-lib/*`
   - `@style-lib/*`
3. Relative Deep-Imports über viele Ebenen vermeiden.
4. Architekturgrenze: `app` darf nichts aus `@provider-lib/*` importieren.

---

## 4) Beispielstruktur

```text
frontend/src
  ├─ app/
  │   ├─ pages/
  │   └─ app.module.ts
  └─ libs/
      ├─ business-lib/
      │   └─ <fach-modul>/
      │       ├─ <fach-modul>.module.ts
      │       ├─ components/
      │       ├─ services/
      │       ├─ directives/
      │       ├─ pipes/
      │       └─ models/
      └─ core-lib/
          └─ <core-funktion>/
              ├─ <core-funktion>.module.ts
              ├─ services/
              ├─ directives/
              ├─ pipes/
              └─ components/
      ├─ provider-lib/
      │   └─ <provider-domain>/
      │       ├─ <provider-domain>.module.ts
      │       ├─ services/
      │       └─ models/
      └─ style-lib/
          ├─ _variables.scss
          ├─ _utilities.scss
          └─ vendor-overrides.scss
```

---

## 5) DoD (Frontend Struktur)

Eine Änderung ist nur fertig, wenn:

1. Seitenlogik in `app`, wiederverwendbare Logik in den Libs liegt.
2. In Libs die Reihenfolge fachlich -> technisch eingehalten ist.
3. Alias-Imports genutzt werden.
4. `app` keine direkten Importe aus `@provider-lib/*` enthält.
5. Module-basiertes Arbeiten eingehalten ist.
6. Keine Barrel Files eingeführt wurden.
