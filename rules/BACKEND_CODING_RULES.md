# Workflex Backend Coding Rules (Clean Code)

Diese Regeln sind verbindlich für Backend-Code in Workflex.
Ziel: Lesbarkeit, Wartbarkeit, geringe Komplexität.

---

## 1) Grundprinzipien

1. Schreibe Code für Menschen, nicht für den Compiler.
2. Eine Methode soll möglichst nur **eine Verantwortung** haben.
3. Bevorzuge Klarheit vor Cleverness.
4. Reduziere Komplexität konsequent (früh refactoren).
5. Halte SOLID-Prinzipien konsequent ein (SRP, OCP, LSP, ISP, DIP).

---

## 2) Namensregeln

### 2.1 Klassen

- Substantive verwenden: `UserService`, `OrderController`, `InvoiceRepository`.
- Rollen klar benennen (`*Controller`, `*Service`, `*Repository`, `*Mapper`).

### 2.2 Methoden

- Verben verwenden: `createOrder`, `findById`, `validateInput`, `mapToResponse`.
- Boolesche Methoden mit `is/has/can/should`: `isActive`, `hasPermission`.

### 2.3 Variablen

- Aussagekräftige Namen, keine kryptischen Kürzel.
- Keine Ein-Buchstaben-Namen (außer kurze Schleifen-Indizes in trivialen Loops).
- Keine irreführenden Abkürzungen (`usr`, `tmpData2` vermeiden).

---

## 3) Methodengröße & Struktur

1. Methoden kurz halten: **Richtwert 5-20 Zeilen**.
2. Wenn eine Methode „und dann noch…" enthält, aufteilen.
3. Maximal **3 Parameter**; sonst Parameterobjekt/DTO nutzen.
4. Keine „God-Methoden“ mit mehreren Verantwortlichkeiten.
5. Frühe Rückgaben (guard clauses) statt tiefer `if/else`-Verschachtelung.

Beispielmuster:

- schlecht: tiefe if-Nester
- gut: `if (invalid) return ...;` dann Hauptlogik flach weiterführen

---

## 4) Komplexität & Verschachtelung

1. Max. Verschachtelungstiefe: **2** (in Ausnahmefällen 3).
2. Zyklomatische Komplexität niedrig halten (Richtwert <= 10 pro Methode).
3. Lange `if/else-if`-Ketten durch Polymorphie/Strategien/Maps ersetzen.
4. Keine verschachtelten Streams/Lambdas, wenn Lesbarkeit leidet.

---

## 4.1) SOLID in der Praxis

1. Programmiere gegen Interfaces, nicht gegen konkrete Implementierungen.
2. Services werden über Konstruktor-Injection verdrahtet.
3. Große Interfaces vermeiden; lieber kleine, fachlich fokussierte Interfaces (ISP).
4. Erweiterungen bevorzugt über neue Implementierungen/Strategien statt bestehende Klassen aufzublähen (OCP).
5. Subtypen müssen Basistyp-Verträge einhalten (LSP), keine überraschenden Seiteneffekte.

## 5) Klassen- und Dateigröße

1. Klassen fokussiert halten (Single Responsibility).
2. Keine Klassen mit zu vielen öffentlichen Methoden (Richtwert > 12 ist Warnsignal).
3. Eine Datei = eine zentrale Abstraktion.

---

## 6) Kommentare & Dokumentation

1. Code soll sich primär selbst erklären.
2. Kommentare nur für "Warum", nicht für triviales "Was".
3. Veraltete Kommentare sofort entfernen.
4. TODO nur mit Kontext und klarer Aktion (kein Müll-TODO).

---

## 7) Fehlerbehandlung

1. Keine stillen Fehler (`catch (Exception) {}` verboten).
2. Spezifische Exceptions bevorzugen.
3. Fehler zentral über `@RestControllerAdvice` formatieren.
4. Klare, hilfreiche Fehlermeldungen ohne interne Secrets/Stacktrace-Leak.

---

## 8) Null-Safety & Defensive Coding

1. Eingaben validieren (DTO + Bean Validation).
2. Null-Risiken früh abfangen.
3. Optional sinnvoll einsetzen, aber nicht übertreiben (keine Optional-Felder in Entities).

---

## 9) Collections, Streams, Mapping

1. Lesbarkeit vor „One-Liner-Magie“.
2. Stream-Pipelines kurz halten; komplexe Schritte benennen und auslagern.
3. Mapping explizit halten (DTO <-> Entity klar trennen).

---

## 10) Tests & Wartbarkeit

1. Jede Businessregel braucht Tests.
2. Tests müssen lesbar sein (Given/When/Then).
3. Ein Bugfix ist erst fertig mit Regressionstest.
4. Testcode unterliegt denselben Lesbarkeitsregeln.

---

## 11) PR-Check (Kurz)

Vor Merge prüfen:

- [ ] Methoden klein und single-purpose?
- [ ] Verschachtelung <= 2?
- [ ] Namen klar und konsistent?
- [ ] Keine stillen Fehlerbehandlungsmuster?
- [ ] Validierung und Fehlerformat vorhanden?
- [ ] Tests für kritische Pfade vorhanden?

---

## 12) Harte Verbote

- Deep nesting ohne Notwendigkeit
- Methoden mit mehreren fachlichen Verantwortungen
- Copy-Paste-Codeblöcke statt Extraktion
- Magic Numbers/Strings ohne Konstante
- Direktzugriff auf externe Provider aus Controllern
