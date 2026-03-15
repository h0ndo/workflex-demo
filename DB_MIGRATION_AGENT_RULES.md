# Workflex DB Migration Agent Rules (Flyway)

Diese Regeln gelten verbindlich für alle Datenbankänderungen.

## 0) Ziel
- Datenintegrität jederzeit sicherstellen.
- Migrationen reproduzierbar, überprüfbar und teamfähig halten.
- Datenverluste und inkonsistente Zustände vermeiden.

---

## 1) Pflichtregeln

1. Bei **jeder** Änderung an DB-Struktur **oder** persistierten Daten eine neue Flyway-Migration erstellen.
2. Änderungen an Entity/Repository/Businesslogik mit DB-Auswirkung sind ohne Migration unvollständig.
3. Bereits ausgeführte Migrationen niemals rückwirkend ändern.
4. Migrationen laufen vorwärts; Korrekturen als neue "fix"-Migration (Forward-Fix).

---

## 2) Ablage & Benennung

- Ablage: `backend/src/main/resources/db/migration/`
- Format: `V<nummer>__<beschreibung>.sql`
- Beispiele:
  - `V1__init.sql`
  - `V2__create_task_table.sql`
  - `V3__add_status_to_task.sql`
  - `V4__backfill_task_status.sql`

---

## 3) Standard-Migrationsmuster

### 3.1 Expand -> Migrate -> Contract

**Expand**
- Schema erweitern ohne harte Brechung (neue Spalte/Tabelle, zunächst tolerant).

**Migrate**
- Bestehende Daten konvertieren/backfillen.
- Mapping explizit festlegen (CASE/UPDATE/INSERT SELECT).

**Contract**
- Nach erfolgreicher Konvertierung Constraints scharfstellen.
- Alte Felder/Strukturen erst danach entfernen.

---

## 4) Pflichtchecks bei Datenänderungen (kritisch)

Vor jeder Datenmigration prüfen:
1. Gibt es Werte, die im neuen Zielschema ungültig sind?
2. Muss eine Konvertierung/Normalisierung erfolgen?
3. Gibt es Null-/Duplikatprobleme?
4. Brechen neue Unique/FK/Check-Constraints mit bestehenden Daten?
5. Ist die Migration bei Produktionsdatenmenge performant?

Nach jeder Datenmigration prüfen:
1. Zeilenanzahl plausibel?
2. Mapping vollständig (keine unerwarteten Restwerte)?
3. Keine verletzten Constraints?
4. Fachliche Stichproben korrekt?

---

## 5) Was niemals passiert

- Kein `DROP`/`ALTER` auf kritischen Spalten ohne vorherige Datensicherung oder Konvertierungsplan.
- Keine stillen Mappings ohne Dokumentation.
- Keine Secrets/Credentials in SQL-Dateien.
- Kein "wird schon passen" bei Datenänderungen.

---

## 6) DoD für DB-Änderungen

Eine DB-Aufgabe ist nur fertig, wenn:
1. Migration vorhanden und sauber benannt ist.
2. Konvertierungslogik (falls nötig) enthalten ist.
3. Risiken geprüft und dokumentiert sind.
4. App lokal mit neuer Migration startet.
5. Relevante Tests/Checks grün sind.
6. Code + Migration im selben Commit liegen.
