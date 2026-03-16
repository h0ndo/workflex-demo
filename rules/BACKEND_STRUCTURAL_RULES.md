# Workflex Backend Structural Rules (Spring Boot)

Diese Regeln sind der verbindliche Standard für alle Backend-Arbeiten im Projekt.

## 0) Ziel

- Saubere, testbare, wartbare API liefern.
- Funktionalität vollständig und nachvollziehbar umsetzen.
- Sicherheit und Datenintegrität als Standard, nicht als Extra.
- Bei DB-bezogenen Änderungen mit `DB_MIGRATION_RULES.md` zusammenarbeiten (Pflicht).
- Bei jeder Implementierung `BACKEND_CODING_RULES.md` einhalten (Pflicht).

---

## 1) Architektur-Commitments

### 1.0 SOLID ist Pflicht

- Alle Backend-Änderungen folgen den SOLID-Prinzipien.
- Abhängigkeiten über Interfaces definieren und per Dependency Injection bereitstellen.
- Keine harte Kopplung an konkrete Implementierungen, wenn eine Abstraktion sinnvoll ist.
- Bei Designentscheidungen immer auf Erweiterbarkeit und Testbarkeit achten (OCP, DIP).

### 1.1 Schichten strikt trennen

- `controller`:
  - Nimmt HTTP-Requests an.
  - Nutzt DTOs, keine Businesslogik.
  - Liefert passende Statuscodes.
- `service`:
  - Enthält Businessregeln und Orchestrierung.
  - Führt Validierungs- und Domainentscheidungen aus.
- `repository`:
  - Nur Datenzugriff.
  - Keine Businessentscheidungen.
- `entity`:
  - Persistenzmodell (DB).
  - Nicht direkt als API-Vertrag nach außen geben.

### 1.2 API-Verträge

- Für Request/Response immer DTOs verwenden.
- Entities nie direkt im Controller zurückgeben.
- Versionierbar denken (klare Felder, keine impliziten Seiteneffekte).
- Bei Update-/Patch-/Change-Operationen das aktualisierte Element im Response zurückgeben,
  damit der Client direkt weiterarbeiten kann.

### 1.3 Provider-Integration (z. B. OpenAI, externe APIs)

- Immer über dedizierte Adapter/Provider-Klassen kapseln (`provider`/`integration` package).
- Keine Provider-Aufrufe direkt in Controllern.
- Timeouts, Fehlerbehandlung und Logging zentralisieren.
- Secrets nur per Env Vars/Config, niemals hardcoden.

---

## 2) Datenbank-Commitments

### 2.1 DB-Zugriff

- JPA-Entities + Repositories verwenden.
- Transaktionen bewusst setzen (`@Transactional` im Service).
- N+1 vermeiden (gezielte Fetch-Strategie).

### 2.2 Schema & Migration

- Für **jede** Änderung an DB-Struktur **oder Daten** ist eine Migration Pflicht (Flyway).
- Änderungen an Entity/Repository mit DB-Auswirkung gelten ohne Migration als unvollständig.
- Primärschlüssel/Constraints explizit definieren.
- Unique- und Foreign-Key-Regeln im DB-Schema absichern.
- Bei Datenmigrationen zwingend prüfen:
  - Konvertierungsbedarf (alte -> neue Werte)
  - Null-/Duplikat-/Constraint-Risiken
  - Datenqualität nach Migration
- Kritische Datenänderungen in Phasen umsetzen (Schema erweitern -> Daten konvertieren -> Constraints scharfstellen).

### 2.3 Umgebung

- Lokal/Runtime: PostgreSQL.
- Tests: In-Memory DB (H2 Testprofil), damit Tests unabhängig und schnell laufen.

---

## 3) Input- und Sicherheits-Commitments

### 3.1 Eingabekontrolle

- Eingaben über DTO + Bean Validation (`@NotNull`, `@NotBlank`, `@Size`, etc.) validieren.
- Ungültige Eingaben mit 400 beantworten.
- IDs und Pfadparameter immer plausibilisieren.

### 3.2 Fehlerstandard

- Globales Exception Handling via `@RestControllerAdvice`.
- Konsistentes Error-Format (code, message, timestamp; optionale details nur ohne Interna).
- Keine internen Stacktraces an Clients leaken.
- Keine Klassen-, Methoden- oder Datenbank-Interna im Fehlertext nach außen geben.
- Typische Statuscodes sauber verwenden (z. B. 400, 404, 409, 500).
- 500-Fehler nur mit kurzer generischer Nachricht zurückgeben.

### 3.3 Security-Basics

- Keine Secrets im Repo.
- CORS bewusst konfigurieren, nicht global offen in Prod.
- Logging ohne PII/Secrets.

---

## 4) Coding- und Qualitäts-Commitments

### 4.1 Code-Stil

- Kleine, sprechende Methoden.
- Keine Magie-Strings (Konstanten/Enums nutzen).
- Kein Dead Code, keine unklaren TODO-Leichen.

### 4.2 Tests

- Mindestens:
  - Service-Tests für Businessregeln
  - Controller/API-Tests für Statuscodes + Validation
- Pro kritischer Funktion mindestens ein Negativfall.
- Regressionstest bei jedem behobenen Bug.

### 4.3 Definition of Done (Backend)

Eine Aufgabe gilt nur als fertig, wenn:

1. Funktionalität läuft.
2. Schichtentrennung eingehalten ist.
3. Input validiert wird.
4. Fehlerfälle sauber behandelt werden.
5. Relevante Tests vorhanden und grün sind.
6. Kurze Doku/Notiz zum API-Verhalten vorhanden ist.

---

## 5) Empfohlene Package-Struktur

```text
com.workflex.backend
  ├─ config
  ├─ controller
  ├─ dto
  │   ├─ request
  │   └─ response
  ├─ service
  ├─ repository
  ├─ entity
  ├─ exception
  └─ integration   (oder provider)
```

---

## 6) Arbeitsmodus für den Agent (verbindlich)

Vor jeder Backend-Änderung:

1. Betroffene API-Verträge identifizieren.
2. Schichtenzuordnung festlegen (Controller/Service/Repository/Integration).
3. Validierung + Fehlerfälle definieren.
4. Erst dann implementieren.
5. Danach Tests ergänzen/aktualisieren.

Bei Konflikt gilt: Lesbarkeit + Sicherheit + Testbarkeit vor schneller, fragiler Lösung.
