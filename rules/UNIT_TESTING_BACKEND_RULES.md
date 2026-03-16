# Unit Testing Rules Backend (Spring Boot)

## Ziel
Backend-Businesslogik zuverlässig, schnell und isoliert testen.

## Grundsätze

- Unit-Tests sind Standard für Fachlogik und Sicherheits-/Berechtigungsregeln.
- E2E nur für End-to-End-Use-Cases, nicht für jede Einzelregel.
- Tests müssen schnell sein und ohne externe Seiteneffekte laufen.

## Typischer Tooling-Rahmen

- JUnit 5
- Mockito (optionale Erweiterungen wie z. B. PowerMockito nur wenn zwingend)
- AssertJ/Hamcrest für lesbare Assertions

## Pflichtabdeckung

1. Service-Businessregeln
2. Validierungslogik
3. Berechtigungen/Rollenregeln (Pflicht als Unit-Test)
4. Fehlerpfade und Grenzfälle

## E2E-Abgrenzung

- Berechtigungen und statische Konfigurationsregeln nicht als primäre E2E-Tests.
- E2E fokussiert nur vollständige fachliche Use-Cases (Money Path).

## Definition of Done

- Business- und Berechtigungslogik per Unit-Tests abgesichert.
- Mindestens ein Negativfall pro kritischer Regel.
- Tests laufen lokal/CI reproduzierbar und schnell.
