# Workflex Frontend Coding Rules (Angular + TypeScript)

Diese Regeln sind verbindlich für Coding-Stil und Lesbarkeit.

## 0) Leitlinie
Code muss von Menschen schnell verstanden und sicher geändert werden können.

---

## 1) Komponenten-Policy (verbindlich)

### 1.1 Wann wird eine Komponente erstellt?
Komponenten werden nur erstellt, wenn:
1. eine Seite dargestellt wird, oder
2. eine wirklich wiederverwendbare Basis-Komponente benötigt wird.

### 1.2 Basis-Komponenten statt komponierter Tiefbäume
- Wir nutzen nur **Basis-Komponenten** als einfache UI-Bausteine.
- Seiten werden aus Basis-Komponenten zusammengesetzt.
- Keine tief komponierten/nested Komponentenketten.
- Ziel: Komplexität niedrig halten und Verständlichkeit erhöhen.

### 1.3 Regel für wiederverwendbare Basis-Komponenten
- Wiederverwendbare Basis-Komponenten sind bewusst simpel.
- Sie injizieren **keine Services**.
- Sie enthalten keine fachliche Orchestrierung.

### 1.4 Komplexe, lokale Seiten-/Komponentenlogik
Wenn eine Page oder Komponente komplexere Logik braucht, die **nur dort** verwendet wird:
1. Logik in einen lokalen, komponentenspezifischen Service auslagern.
2. Service auf gleicher Ebene wie die Komponente ablegen (co-located).
3. Benennung analog zur Komponente halten.

Beispiel:
- `user-profile.component.ts`
- `user-profile.component.html`
- `user-profile.component.scss`
- `user-profile.component.spec.ts`
- `user-profile.service.ts`

---

## 2) Top-Layer-Methoden als Inhaltsverzeichnis

Methoden wie `ngOnInit`, `ngOnChanges`, Handler-Entry-Methoden etc. sind Top-Layer.

Regel:
1. Top-Layer-Methoden sind ein „Inhaltsverzeichnis“.
2. Top-Layer-Methoden delegieren nur an klar benannte Untermethoden.
3. Details werden in Untermethoden ausgelagert.

### Maximale Tiefe
- Layer 1: Top-Layer (`ngOnInit`, `ngOnChanges`, Event-Entry)
- Layer 2: delegierte Methoden
- Layer 3: Detailmethoden
- **Nicht tiefer als Layer 3**

---

## 3) TypeScript-Sicherheit

1. Strict Mode bleibt aktiv.
2. `any` ist verboten (nur begründete Ausnahme, dokumentiert).
3. Public APIs (Services, Inputs, Outputs) immer typisieren.
4. Null/undefined aktiv behandeln.

---

## 4) Naming

1. Komponenten: `SomethingComponent`
2. Services: `SomethingService`
3. Observables mit `$`-Suffix (`user$`, `loading$`).
4. Boolean-Variablen mit `is/has/can/should`.

---

## 5) Methoden & Komplexität

1. Methoden klein halten (Richtwert 5-20 Zeilen).
2. Eine Methode = eine primäre Verantwortung.
3. Max. Verschachtelungstiefe 2 (selten 3).
4. Guard Clauses statt tiefer if/else-Nester.
5. Keine unübersichtlichen Methodenketten in Components.

---

## 6) Templates

1. Keine Businesslogik in Templates.
2. Keine komplexen Ausdrücke in HTML.
3. Wiederholte Logik in computed/helper im Component-Code auslagern.

---

## 7) RxJS/Signals Hygiene (verbindlich)

1. Im Frontend wird grundsätzlich reaktiv mit RxJS gearbeitet.
2. Provider-Services geben immer `Observable<T>` zurück.
3. Ab Provider bis UI wird in der reaktiven Kette gearbeitet (kein imperatives Auflösen unterwegs).
4. Werte aus Observables werden in Templates ausschließlich über `async`-Pipe gelesen.
5. Datenveredelung bevorzugt mit RxJS-Operatoren (`map`, `filter`, `reduce`, `switchMap`, `combineLatest`, etc.).
6. Imperative Schleifen/Transformationen vermeiden, wenn sie reaktiv ausdrückbar sind.
7. Keine unnötigen Nested Subscriptions.
8. Streams klar benennen und operator chains lesbar halten.
9. Memory-Leaks vermeiden (saubere Cleanup-Strategie).

---

## 8) SCSS/Styling

1. Selektoren flach halten.
2. Keine `!important`-Inflation.
3. Konsistente Spacing/Breakpoints/Variablen nutzen.

---

## 9) Fehlerbehandlung & UX

1. Lade-, Fehler- und Empty-States explizit behandeln.
2. Fehlermeldungen verständlich, ohne technische Interna.

---

## 10) Tests

1. Kritische Logik testen (Komponenten + Services).
2. Bei Bugfix: Regressionstest Pflicht.
3. Testnamen beschreibend im Given/When/Then-Stil.

---

## 11) Format/Lint Pflicht

Vor Commit:
- `npm run lint`
- `npm run lint:scss`
- `npm run format:check`

Bei Verstößen: erst fixen, dann committen.
