# Flyway Workflow (Workflex)

## Grundregel
Bei **jeder** Änderung an DB-Struktur **oder** persistierten Daten wird eine neue Flyway-Migration erstellt und mit committed.

- Strukturänderung: neue Tabelle, Spalte, Index, Constraint, Datentyp
- Datenänderung: Backfill, Normalisierung, Mapping, Werteumstellung

---

## Ablageort & Benennung
Migrationen liegen unter:

`backend/src/main/resources/db/migration/`

Format:

`V<nummer>__<kurze_beschreibung>.sql`

Beispiele:
- `V1__init.sql`
- `V2__create_customer_table.sql`
- `V3__add_status_to_orders.sql`
- `V4__backfill_order_status.sql`

---

## Standard-Workflow
1. Änderung fachlich planen (Schema + Datenauswirkung).
2. Neue Migration mit nächster Versionsnummer anlegen.
3. SQL schreiben (idempotent denken, wenn möglich defensiv).
4. Lokal ausführen (App-Start oder Maven-Run).
5. Prüfen, ob bestehende Daten korrekt bleiben/konvertiert wurden.
6. Code + Migration + Tests im selben Commit.

---

## Rollback-Strategie
Flyway-Community nutzt in der Praxis meist **Forward-Fix** statt automatischem Down:
- Fehler nicht „zurückdrehen“, sondern neue Korrektur-Migration erstellen.
- Beispiel: `V5__fix_status_mapping.sql`

Vorteil: besser nachvollziehbar in Team/CI/Prod.

---

## Kritisch bei Datenänderungen (Pflichtcheck)
Vor jeder Datenmigration prüfen:
1. Gibt es Werte, die im neuen Zielschema ungültig sind?
2. Muss eine Konvertierung/Mapping erfolgen?
3. Gibt es Null-/Duplikat-Probleme?
4. Sind Constraints/Unique-Regeln danach noch erfüllbar?
5. Ist die Migration bei großen Datenmengen performant genug?

Wenn nötig:
- in Schritten migrieren (Schema erweitern -> Daten konvertieren -> Constraints scharfstellen)
- mit Zwischen-Defaults arbeiten
- konvertierte Daten per Query verifizieren

---

## Copy/Paste Beispiele

### Neue Tabelle
```sql
CREATE TABLE task (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
```

### Neue Spalte mit Default
```sql
ALTER TABLE task
ADD COLUMN status VARCHAR(20) NOT NULL DEFAULT 'OPEN';
```

### Index ergänzen
```sql
CREATE INDEX idx_task_status ON task(status);
```

### Daten konvertieren / backfill
```sql
UPDATE task
SET status = 'OPEN'
WHERE status IS NULL;
```

### Constraint nach Konvertierung scharfstellen
```sql
ALTER TABLE task
ALTER COLUMN status SET NOT NULL;
```

---

## Team-Commit-Policy
Ein PR mit Entity-/Repository-/Service-Änderungen und DB-Auswirkung ist unvollständig ohne passende Migration.
